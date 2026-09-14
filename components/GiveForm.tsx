"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Currency = "USD" | "GBP" | "KES";

const TIERS: Record<Currency, { symbol: string; values: number[] }> = {
  USD: { symbol: "$", values: [15, 30, 50] },
  GBP: { symbol: "£", values: [12, 25, 40] },
  KES: { symbol: "KSh", values: [2000, 4000, 6500] },
};

const COUNTRY_BY_CURRENCY: Record<Currency, string> = { USD: "US", GBP: "GB", KES: "KE" };

const RAILS_ENABLED = {
  test: process.env.NEXT_PUBLIC_TEST_PROVIDER_ENABLED !== "false",
  stripe: process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true",
  paypal: process.env.NEXT_PUBLIC_PAYPAL_ENABLED === "true",
  mpesa: process.env.NEXT_PUBLIC_MPESA_ENABLED === "true",
};

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

function estimateCoverFee(amount: number, currency: Currency): number {
  const fixed = currency === "KES" ? 0 : currency === "GBP" ? 0.25 : 0.3;
  return Math.round((amount * 0.039 + fixed) * 100) / 100;
}

function railForCurrency(currency: Currency): string | null {
  if (currency === "KES" && RAILS_ENABLED.mpesa) return "mpesa";
  if (currency !== "KES" && RAILS_ENABLED.paypal) return "paypal";
  if (currency !== "KES" && RAILS_ENABLED.stripe) return "stripe";
  if (RAILS_ENABLED.test) return "test";
  return null;
}

export default function GiveForm() {
  const router = useRouter();
  const [monthly, setMonthly] = useState(true);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [tier, setTier] = useState<1 | 2 | 3>(2);
  const [custom, setCustom] = useState<string>("");
  const [coverFees, setCoverFees] = useState(false);
  const [consent, setConsent] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amount = useMemo(() => {
    const c = parseFloat(custom);
    if (!isNaN(c) && c > 0) return c;
    return TIERS[currency].values[tier - 1];
  }, [custom, currency, tier]);

  const coverFeeAmount = useMemo(() => estimateCoverFee(amount, currency), [amount, currency]);
  const rail = railForCurrency(currency);
  const symbol = TIERS[currency].symbol;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email || !firstName || !lastName) {
      setError("Please fill in your email, first and last name.");
      return;
    }
    if (currency === "KES" && rail === "mpesa" && !phone) {
      setError("Please add a phone number for M-Pesa.");
      return;
    }
    if (!rail) {
      setError("No payment method is available for this currency yet.");
      return;
    }

    const amountMinor = Math.round((amount + (coverFees ? coverFeeAmount : 0)) * 100);
    const body = {
      provider: rail,
      amount_minor: amountMinor,
      currency,
      cover_fees: coverFees,
      donor: {
        email,
        first_name: firstName,
        last_name: lastName,
        country_code: COUNTRY_BY_CURRENCY[currency],
        phone: phone || undefined,
      },
      consent,
    };

    setSubmitting(true);
    try {
      const endpoint = monthly ? "/api/v1/subscriptions" : "/api/v1/donations/one-off";
      const res = await fetch(`${BACKEND_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || data.title || "Something went wrong. Please try again.");
      }
      if (data.checkout_url || data.approval_url) {
        window.location.href = data.checkout_url ?? data.approval_url;
        return;
      }
      const params = new URLSearchParams({
        amount: String(amount),
        currency,
        monthly: String(monthly),
      });
      router.push(`/give/thank-you?${params.toString()}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <aside className="card">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>How often</legend>
          <div className="seg" role="group" aria-label="Giving frequency">
            <button type="button" aria-pressed={monthly} onClick={() => setMonthly(true)}>
              Every month
            </button>
            <button type="button" aria-pressed={!monthly} onClick={() => setMonthly(false)}>
              Just once
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Currency</legend>
          <div className="seg" role="group" aria-label="Currency" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            {(Object.keys(TIERS) as Currency[]).map((c) => (
              <button key={c} type="button" aria-pressed={currency === c} onClick={() => setCurrency(c)}>
                {c}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Amount</legend>
          <div className="amounts" role="group" aria-label="Amount">
            {TIERS[currency].values.map((v, i) => (
              <button
                key={v}
                type="button"
                className="amt-btn"
                aria-pressed={custom === "" && tier === i + 1}
                onClick={() => {
                  setTier((i + 1) as 1 | 2 | 3);
                  setCustom("");
                }}
              >
                <span className="n">
                  {symbol}
                  {v}
                </span>
              </button>
            ))}
          </div>
          <label className="other">
            <span>{symbol}</span>
            <input
              type="number"
              min={1}
              step={1}
              inputMode="decimal"
              placeholder="Another amount"
              aria-label="Another amount"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
            />
          </label>
        </fieldset>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        {currency === "KES" && rail === "mpesa" && (
          <div className="field">
            <label htmlFor="phone">M-Pesa phone number</label>
            <input id="phone" placeholder="07XXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        )}

        <div className="impact" aria-live="polite">
          <strong>Every {monthly ? "month" : "gift"}, this covers</strong>
          <span>
            Food, clothing, school fees and medical cover for the children at Bridge of Hope, pooled so no child
            goes without.
          </span>
        </div>

        <label className="covercost">
          <input type="checkbox" checked={coverFees} onChange={(e) => setCoverFees(e.target.checked)} />
          <span>
            Add {symbol}
            {coverFeeAmount.toFixed(2)} to cover the card and transfer fees, so the full amount reaches us.
          </span>
        </label>

        <label className="consent">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>Send me occasional email updates about Bridge of Hope&apos;s work. (Optional — giving works either way.)</span>
        </label>

        {error && (
          <p className="formerror" role="alert" aria-live="assertive">
            {error}
          </p>
        )}

        <button className="btn" type="submit" disabled={submitting}>
          {submitting
            ? "Please wait…"
            : `Give ${symbol}${(amount + (coverFees ? coverFeeAmount : 0)).toFixed(2)} ${monthly ? "every month" : "once"}`}
        </button>
        <p className="reassure">Cancel any time. We will never sell your details.</p>

        {!RAILS_ENABLED.stripe && !RAILS_ENABLED.paypal && !RAILS_ENABLED.mpesa && (
          <div className="embed-note" style={{ marginTop: 22, padding: 16, border: "1.5px dashed var(--ochre)", borderRadius: 3, fontSize: "0.88rem", background: "#FCF7EC" }}>
            <b>Test environment</b>
            No live payment provider is configured yet (PayPal/Stripe/M-Pesa credentials are still needed — see
            CONTENT-TODO.md). This form runs on an in-house test rail so the full flow — donation, receipt email,
            and one-click cancellation — can be verified end to end before going live.
          </div>
        )}
      </form>
    </aside>
  );
}

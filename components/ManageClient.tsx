"use client";

import { useEffect, useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

type Sub = {
  id: string;
  amount_minor: number;
  currency: string;
  status: string;
  next_charge_at: string | null;
  provider: string;
};

export default function ManageClient({ token }: { token: string }) {
  const [subs, setSubs] = useState<Sub[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/v1/subscriptions/manage/${token}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("This link has expired or is invalid.");
        return res.json();
      })
      .then(setSubs)
      .catch((e) => setError(e.message));
  }, [token]);

  async function cancel() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`${BACKEND_URL}/api/v1/subscriptions/manage/${token}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Could not cancel — please try again or email us.");
      setCancelled(true);
      setSubs([]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  if (error) {
    return <p className="formerror">{error}</p>;
  }

  if (cancelled) {
    return <p className="prose">Your monthly gift has been cancelled. No further charges will be made. Thank you for everything you have already given.</p>;
  }

  if (subs === null) {
    return <p className="prose">Loading…</p>;
  }

  if (subs.length === 0) {
    return <p className="prose">No active monthly gift was found for this link.</p>;
  }

  return (
    <div>
      {subs.map((s) => (
        <div key={s.id} className="trust" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
          <dl>
            <dt>Amount</dt>
            <dd>
              {s.currency} {(s.amount_minor / 100).toFixed(2)} / month
            </dd>
            <dt>Status</dt>
            <dd>{s.status}</dd>
            {s.next_charge_at && (
              <>
                <dt>Next charge</dt>
                <dd>{new Date(s.next_charge_at).toLocaleDateString()}</dd>
              </>
            )}
          </dl>
        </div>
      ))}
      <button className="btn" type="button" onClick={cancel} disabled={busy} style={{ marginTop: 20 }}>
        {busy ? "Cancelling…" : "Cancel my monthly gift"}
      </button>
      <p className="reassure">One click. No retention flow, no phone call required.</p>
    </div>
  );
}

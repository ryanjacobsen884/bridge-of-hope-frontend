import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Thank you" };

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ amount?: string; currency?: string; monthly?: string }>;
}) {
  const params = await searchParams;
  const monthly = params.monthly === "true";
  const amount = params.amount;
  const currency = params.currency;

  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <Link className="mark" href="/">
            The Bridge of Hope Foundation
          </Link>
        </div>
      </header>
      <main className="page">
        <div className="wrap doc">
          <h1>Thank you.</h1>
          {amount && currency ? (
            <p className="lede" style={{ marginTop: 22 }}>
              Your {monthly ? "monthly" : "one-off"} gift of {currency} {amount} has been recorded. A receipt is
              on its way to your inbox
              {monthly ? ", including the link you can use any time to change or cancel your gift." : "."}
            </p>
          ) : (
            <p className="lede" style={{ marginTop: 22 }}>
              Your gift has been recorded. A receipt is on its way to your inbox.
            </p>
          )}
          <p className="prose" style={{ marginTop: 28 }}>
            <Link href="/">Back to the site</Link>
          </p>
        </div>
      </main>
    </>
  );
}

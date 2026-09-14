import Link from "next/link";
import type { Metadata } from "next";
import ManageClient from "@/components/ManageClient";

export const metadata: Metadata = { title: "Manage your gift", robots: { index: false, follow: false } };

export default async function ManagePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
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
          <h1>Manage your monthly gift</h1>
          <p className="lede" style={{ marginTop: 22, marginBottom: 32 }}>
            No login needed — this link is your credential. Keep it private.
          </p>
          <ManageClient token={token} />
        </div>
      </main>
    </>
  );
}

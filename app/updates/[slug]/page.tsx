import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost } from "@/lib/api";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return { title: "Update" };
  }
}

export default async function UpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

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
          <p className="date" style={{ color: "var(--slate)" }}>
            {post.published_at ? new Date(post.published_at).toLocaleDateString("en-GB", { month: "long", year: "numeric" }) : "Draft"}
          </p>
          <h1>{post.title}</h1>
          <div className="prose" style={{ marginTop: 24, whiteSpace: "pre-wrap" }}>
            {post.body_md}
          </div>
          <p style={{ marginTop: 32 }}>
            <Link href="/updates">Back to updates</Link>
          </p>
        </div>
      </main>
    </>
  );
}

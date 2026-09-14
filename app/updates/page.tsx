import Link from "next/link";
import type { Metadata } from "next";
import { listPosts } from "@/lib/api";

export const metadata: Metadata = { title: "Updates" };

export default async function UpdatesPage() {
  const posts = await listPosts().catch(() => []);
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
        <div className="wrap">
          <h1>Updates</h1>
          <div className="updates" style={{ marginTop: 40 }}>
            {posts.map((post) => (
              <article className="update" key={post.slug}>
                <div className="shot">Photograph — see CONTENT-TODO.md.</div>
                <p className="date">
                  {post.published_at ? new Date(post.published_at).toLocaleDateString("en-GB", { month: "long", year: "numeric" }) : ""}
                </p>
                <h3>
                  <Link href={`/updates/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
          {posts.length === 0 && <p className="prose fill">[No updates published yet.]</p>}
        </div>
      </main>
    </>
  );
}

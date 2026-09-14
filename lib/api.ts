// Server Components / server-side calls hit the backend directly; the
// browser goes through the /api BFF route handlers so the backend origin
// never needs to be exposed as a public env var beyond what's necessary.
const BACKEND_URL = process.env.BACKEND_URL ?? process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover_image_url: string | null;
  published_at: string | null;
};

export type PostDetail = Post & { body_md: string };

async function backendFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BACKEND_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  if (!res.ok) {
    const problem = await res.json().catch(() => ({}));
    throw new Error(problem.title || `Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export function listPosts(): Promise<Post[]> {
  return backendFetch<Post[]>("/api/v1/posts", { cache: "no-store" });
}

export function getPost(slug: string): Promise<PostDetail> {
  return backendFetch<PostDetail>(`/api/v1/posts/${slug}`, { cache: "no-store" });
}

export { BACKEND_URL };

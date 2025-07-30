// File: app/blog/[slug]/page.tsx

interface PageProps {
  params: {
    slug: string;
  };
}

// This page must be async to use the params
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;

  return (
    <main>
      <h1>My Post</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}
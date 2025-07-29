import { posts } from '../posts';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// This function tells Next.js which blog posts exist
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Helper function to create social sharing links
const createShareLink = (platform: 'twitter' | 'facebook' | 'linkedin', url: string, text: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    switch (platform) {
        case 'twitter':
            return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
        case 'facebook':
            return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        case 'linkedin':
            return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`;
    }
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postIndex = posts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = posts[postIndex];
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  // IMPORTANT: Replace with your actual domain for sharing links to work
  const baseUrl = "[https://wakanamedicinewoman.com](https://wakanamedicinewoman.com)"; 
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          {/* Post Header */}
          <header className="mb-12 text-center">
            <Link href="/blog" className="text-green-600 hover:text-green-800 transition-colors mb-4 inline-block">
              &larr; Back to Words with Wakana
            </Link>
            <p className="text-base font-semibold text-green-700 tracking-wide uppercase">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">{post.title}</h1>
            <p className="mt-4 text-base text-gray-500">
              By Wakana WhiteOWL / {post.date}
            </p>
          </header>

          {/* Optional Featured Image */}
          {post.featuredImage && (
            <div className="w-full h-96 relative rounded-lg shadow-xl mb-12 overflow-hidden">
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
          )}

          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Post Footer with Sharing and Navigation */}
          <footer className="mt-16 border-t pt-8">
            {/* Social Share */}
            <div className="flex items-center justify-center space-x-4">
                <p className="font-semibold text-gray-700">Share this article:</p>
                <a href={createShareLink('twitter', postUrl, post.title)} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">Twitter</a>
                <a href={createShareLink('facebook', postUrl, post.title)} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700">Facebook</a>
                <a href={createShareLink('linkedin', postUrl, post.title)} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">LinkedIn</a>
            </div>

            {/* Prev/Next Navigation */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    {prevPost && (
                        <Link href={`/blog/${prevPost.slug}`} className="block p-6 border rounded-lg hover:bg-stone-50 transition-colors">
                            <p className="text-sm text-gray-500">&larr; Previous Article</p>
                            <p className="mt-2 font-bold text-gray-800">{prevPost.title}</p>
                        </Link>
                    )}
                </div>
                <div className="text-right">
                    {nextPost && (
                        <Link href={`/blog/${nextPost.slug}`} className="block p-6 border rounded-lg hover:bg-stone-50 transition-colors">
                            <p className="text-sm text-gray-500">Next Article &rarr;</p>
                            <p className="mt-2 font-bold text-gray-800">{nextPost.title}</p>
                        </Link>
                    )}
                </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}

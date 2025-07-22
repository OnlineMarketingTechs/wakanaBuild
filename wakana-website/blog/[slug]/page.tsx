import { getPostData, getSortedPostsData } from '../../../lib/posts'; // CORRECTED to relative path
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getSortedPostsData();
  if (!Array.isArray(posts)) return [];
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <p className="text-lg font-semibold text-green-600">{postData.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">{postData.title}</h1>
            <p className="text-gray-500 mt-4 text-lg">{new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </header>
          
          <div 
            className="prose prose-lg max-w-none bg-stone-50 p-8 md:p-12 rounded-lg shadow-lg"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          <div className="text-center mt-12">
            <Link href="/blog" className="font-semibold text-green-600 hover:text-green-800 transition-colors">
              &larr; Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

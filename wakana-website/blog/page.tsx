import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts'; // CORRECTED to relative path

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>
);

export default function BlogPage() {
    const allPostsData = getSortedPostsData();
    const insights = [
        "Ayahuasca is love and love heals.",
        "Spiritual healing is not about fixing something that is broken. We are not broken.",
        "Our pain is the doorway to our joy.",
    ];

    return (
        <div className="bg-stone-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">Words with Wakana</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Wisdom and insights from the path of healing and transformation.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-12">
                        {allPostsData.length > 0 ? (
                            allPostsData.map(({ id, date, title, category, excerpt }) => (
                                <div key={id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <p className="text-sm font-semibold text-green-600 mb-2">{category} • {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">{excerpt}</p>
                                    <Link href={`/blog/${id}`} className="font-semibold text-green-600 hover:text-green-800 transition-colors">
                                      Read Full Article <ChevronRight className="inline-block" />
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-gray-800">No Posts Found</h3>
                                <p className="text-gray-600 mt-2">Could not find the `posts` directory or it is empty. Please check your folder structure.</p>
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-lg shadow-md sticky top-24">
                            <h4 className="text-xl font-bold text-gray-800 mb-6">Quick Insights</h4>
                            <ul className="space-y-4">
                                {insights.map((insight, index) => (
                                    <li key={index} className="flex">
                                        <span className="text-green-500 mr-3 mt-1">&#10003;</span>
                                        <p className="text-gray-700">{insight}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

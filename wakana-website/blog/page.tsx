// File Path: app/blog/page.tsx
import Link from 'next/link';

export default function BlogPage() {
    const insights = [
        "Ayahuasca is love and love heals.",
        "Spiritual healing is not about fixing something that is broken. We are not broken.",
        "Our pain is the doorway to our joy.",
        "Our purpose is not something we find. It is something we choose.",
        "Build boundaries not walls!"
    ];

    return (
        <div className="bg-stone-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">Words with Wakana</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Wisdom and insights from the path of healing and transformation.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We are currently cultivating this sacred space. Please check back soon for new articles and wisdom from Wakana.
                            </p>
                            <Link href="/" className="font-semibold text-green-600 hover:text-green-800 transition-colors">
                              &larr; Return to Homepage
                            </Link>
                        </div>
                    </div>

                    {/* Insights Sidebar */}
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
// File Path: wakana-website/blog/page.tsx
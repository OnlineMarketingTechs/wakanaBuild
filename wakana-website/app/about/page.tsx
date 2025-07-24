import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-stone-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">The Heart of the Story</h2>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="prose prose-lg text-gray-700 max-w-none">
                            <p>Wakana WhiteOWL is a multidisciplinary shaman and ayahuasquera, descended from a long line of indigenous medicine people and Appalachian folk healers. Her work is a sacred blend of ancient wisdom and modern understanding, dedicated to facilitating profound healing and personal transformation.</p>
                            <p>With decades of study in herbology and spirituality, Wakana has trained extensively in various traditions, including the Shipibo lineage of the Amazon, and draws deeply from her own Cherokee and Lakota Sioux heritage. This rich background informs her unique approach to ceremony and healing.</p>
                        </div>
                        <div className="w-full h-80 relative rounded-lg shadow-xl overflow-hidden">
                          <Image 
                            src="/image/wakanaandshamanka.webp" 
                            alt="Wakana and Shamanka" 
                            layout="fill" 
                            objectFit="cover" 
                          />
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">A Space for All</h3>
                        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                            As a BIPOC lesbian, Wakana is deeply committed to fostering an environment of radical inclusion, compassion, and safety. She believes that healing is a birthright for all people, regardless of background or identity. Her work is particularly focused on resolving acute, chronic, and intergenerational trauma, helping individuals reconnect with the fragmented parts of themselves to find wholeness.
                        </p>
                    </div>

                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">My Philosophy</h3>
                        <blockquote className="text-2xl italic text-gray-600 border-l-4 border-green-500 pl-6 max-w-2xl mx-auto">
                            &quot;Spiritual healing is not about fixing something that is broken. We are not broken. Healing is releasing or transforming and reintegrating things that are blocking the expression of our true essence.&quot;
                        </blockquote>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="w-full h-64 relative rounded-lg shadow-md overflow-hidden"><Image src="/image/wakana-ayahuasca-ceramony.jpg" alt="Wakana" layout="fill" objectFit="cover"/></div>
                        <div className="w-full h-64 relative rounded-lg shadow-md overflow-hidden"><Image src="/image/wakana-ceremony-2.jpg" alt="Retreat" layout="fill" objectFit="cover"/></div>
                        <div className="w-full h-64 relative rounded-lg shadow-md overflow-hidden"><Image src="/image/wakana_shaman_today.webp" alt="Sunset" layout="fill" objectFit="cover"/></div>
                        <div className="w-full h-64 relative rounded-lg shadow-md overflow-hidden col-span-2 md:col-span-1"><Image src="/image/restaurant-at-night.webp" alt="Sunset" layout="fill" objectFit="cover"/></div>
                        <div className="w-full h-64 relative rounded-lg shadow-md overflow-hidden"><Image src="/image/wakanaandshamanka2.webp" alt="Wakana and Shamanka" layout="fill" objectFit="cover"/></div>
                        <div className="w-full h-64 relative rounded-lg shadow-md overflow-hidden"><Image src="/image/wakana-working-with-shamanka.webp" alt="Wakana with pipe" layout="fill" objectFit="cover"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

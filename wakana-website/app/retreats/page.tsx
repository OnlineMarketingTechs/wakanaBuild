import Image from 'next/image';

export default function RetreatsPage() {
    return (
        <div className="bg-white">
            <div className="relative h-[50vh]">
                <Image 
                  src="https://storage.googleapis.com/gemini-prod-us-west1-409903-assets/d6/2c7e73-e6e4-4a1a-87f0-57da77e99781"
                  alt="Sunset over the ocean"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 bg-green-900/70"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Us for a Transformational Retreat</h2>
                    <p className="text-xl md:text-2xl font-light max-w-3xl">A journey of healing and personal growth in harmony with nature.</p>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="w-full h-96 relative rounded-lg shadow-xl mb-12 overflow-hidden">
                        <Image 
                          src="https://storage.googleapis.com/gemini-prod-us-west1-409903-assets/5e/548fad-0f97-4219-a1b3-d814200ca553" 
                          alt="Yoga retreat by the sea" 
                          layout="fill"
                          objectFit="cover"
                        />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">The Reunion Experience</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Our retreats, hosted at the Reunion Costa Rica Plant Medicine Center, are carefully curated to provide a safe, supportive, and deeply healing environment. Surrounded by the vibrant nature of Costa Rica, you will be guided by Wakana and other experienced shamans through sacred plant medicine ceremonies.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12">
                        This is more than a retreat; it&apos;s an opportunity to reconnect with your truest self, release what no longer serves you, and step into a more authentic and empowered way of living.
                    </p>
                    <a href="https://www.reunionexperience.org/" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Book Your Retreat at Reunion Costa Rica
                    </a>
                </div>
            </div>
        </div>
    );
}


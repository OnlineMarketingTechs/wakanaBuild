// file: app/retreats/page.tsx
export default function RetreatsPage() {
    return (
        <div className="bg-white">
            <div className="relative h-[50vh] bg-cover bg-center bg-[url('/image/restaurant-at-night.webp')]">
                <div className="absolute inset-0 bg-green-900/70"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What is a Transformational Retreat</h2>
                    <p className="text-xl md:text-2xl font-light max-w-3xl">Learn more about the science and history of these healing and personal growth retreats.</p>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="w-full h-96 relative rounded-lg shadow-xl mb-12 overflow-hidden">
                        <img src="https://storage.googleapis.com/gemini-prod-us-west1-409903-assets/5e/548fad-0f97-4219-a1b3-d814200ca553" alt="Yoga retreat by the sea" className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">What you should know before attending a retreat</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Ayahuasca retreats, and Costa Rica Plant Medicine Centers, are not for everyone and should be vetted carefully to ensure a safe, supportive, and deeply healing journey. Surrounded by the vibrant nature of Costa Rica, you will be guided by Wakana and other experienced shamans through sacred plant medicine ceremonies.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12">
                        This is more than a retreat; it's an opportunity to reconnect with your truest self, release what no longer serves you, and step into a more authentic and empowered way of living.
                    </p>
                    <a href="https://www.reunionexperience.org/" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Download the book
                    </a>
                </div>
            </div>
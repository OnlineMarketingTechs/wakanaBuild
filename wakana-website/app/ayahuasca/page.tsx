// file: app/ayahuasca/page.tsx
'use client';
import React, { useState } from 'react';

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>
);

export default function AyahuascaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqData = [
        {
            q: "What is a purge in an ayahuasca ceremony?",
            a: "A purge is simply a release of unhelpful energetic or physical debris/toxins in our body/spirit. This can include impurities from food, byproducts of illness, accumulated emotions or pain, unhelpful programming, and trauma."
        },
        {
            q: "What are the different types of purging?",
            a: "Purging can be physical (vomit, bowel movements, shaking, sweating), emotional (crying), or mental (a 'running' mind). All are normal and part of the cleansing process."
        },
        {
            q: "Will I poop my pants?",
            a: "This is a common fear, but it is extremely rare. At Reunion, we have private bathrooms and experienced, caring facilitators to assist you with anything you need, ensuring your dignity and comfort."
        },
        {
            q: "Is purging necessary?",
            a: "Purging is an important 'eject button' for things holding us back. Most people experience some form of purge, but it's not helpful to force it. The medicine knows what you need. Each ceremony is different."
        },
        {
            q: "What if I'm embarrassed to purge around others?",
            a: "You aren't alone in this feeling. The ceremony room is dark and feels very private. Most people will also be purging, and our facilitators are there to help discreetly. Guests quickly become comfortable once they experience the profound relief that follows."
        }
    ];

    return (
        <div className="bg-white">
             <div className="relative h-[60vh] bg-cover bg-bottom ayamain bg-[url('/image/wakana-ayahuasca-ceramony.jpg')]">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Understanding Ayahuasca</h2>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">The Sacred Medicine</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">Ayahuasca is a sacred plant medicine brew with ancient roots in the Amazon basin. It is a powerful tool for deep healing, self-discovery, and spiritual growth. The experience can bring profound insights, emotional release, and a deep connection to oneself and the universe.</p>
                            <p className="text-gray-700 leading-relaxed">We approach this medicine with the utmost respect and reverence, honoring the indigenous traditions from which it comes.</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Safety & Ethics</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">Your safety is our highest priority. We work in solidarity with experienced Indigenous shamans and ceremony leaders. Our space is non-commodified, ensuring the integrity of the medicine work.</p>
                            <p className="text-gray-700 leading-relaxed">We are committed to reciprocity with the indigenous communities who are the original stewards of this sacred knowledge.</p>
                        </div>
                    </div>

                    <div className="bg-stone-50 p-8 md:p-12 rounded-lg shadow-lg mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">The Ceremony Experience: FAQ</h3>
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4">
                                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left flex justify-between items-center py-2">
                                        <span className="text-lg font-semibold text-gray-800">{item.q}</span>
                                        <ChevronRight className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''}`} />
                                    </button>
                                    {openFaq === index && (
                                        <div className="mt-4 text-gray-700 leading-relaxed">
                                            <p>{item.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="w-full h-96 bg-cover bg-center rounded-lg shadow-xl" style={{backgroundImage: "url('/image/wakana-ayahuasca-ceramony.jpg')"}}></div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Integration: The Journey After</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">The ceremony is only the beginning. True transformation happens when you integrate the lessons and insights from your Ayahuasca journey into your daily life. We provide guidance and support to help you carry the healing forward.</p>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Is It Right For You?</h3>
                            <p className="text-gray-700 leading-relaxed">Working with Ayahuasca is a deep and personal decision. It requires courage, respect, and a sincere desire for healing and growth. We encourage you to reflect on your intentions and readiness. If you feel the call, we are here to answer your questions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

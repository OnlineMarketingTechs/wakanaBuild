// file: app/page.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import LeadMagnetModal from './components/LeadMagnetModal'; // Corrected relative path

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>
);

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [selectedEbook, setSelectedEbook] = useState(null);

    const ebooks = [
        { title: "The Curious Seeker's Guide to Ayahuasca", description: "10 Essential Questions to Ask Before Your First Ceremony." },
        { title: "From Trigger to Transformation", description: "A 5-Step Shamanic Guide to Healing Old Wounds." },
        { title: "The Sacred Purge", description: "Embrace the Healing Power of Letting Go." },
    ];

    const handleCTAClick = (ebook: any) => {
        setSelectedEbook(ebook);
        setShowModal(true);
    };

    return (
        <>
            <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-[url('/image/wakana_ayahuasca_shaman.webp')]">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">Wakana WhiteOWL</h1>
                    <p className="text-xl md:text-2xl font-light max-w-3xl">Ancient Wisdom for Modern Healing. Rediscover Your True Self Through the Healing Power of Nature.</p>
                </div>
            </div>

            <div className="bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Descended from a long line of indigenous medicine people and Appalachian folk healers, Wakana WhiteOWL is a multidisciplinary shaman and ayahuasquera. As the co-founder of Reunion Costa Rica, she is dedicated to creating a compassionate, inclusive, and safe space for profound personal transformation and trauma resolution.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Wakana</h3>
                            <p className="text-gray-600 mb-6">Discover the heart of the story, her lineage, and her unique healing philosophy.</p>
                            <Link href="/about" className="text-green-600 font-semibold hover:text-green-800 transition-colors">Learn More <ChevronRight className="inline-block" /></Link>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Ayahuasca</h3>
                            <p className="text-gray-600 mb-6">Educate yourself on the sacred medicine, the ceremony, and its potential for growth.</p>
                            <Link href="/ayahuasca" className="text-green-600 font-semibold hover:text-green-800 transition-colors">Explore <ChevronRight className="inline-block" /></Link>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Retreats & Offerings</h3>
                            <p className="text-gray-600 mb-6">Ready for a transformational journey? Find out more about retreats at Reunion.</p>
                            <Link href="/retreats" className="text-green-600 font-semibold hover:text-green-800 transition-colors">Find a Retreat <ChevronRight className="inline-block" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Words from the Heart</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-stone-50 p-6 rounded-lg"><p className="text-gray-600 italic">"My time with Wakana was life-changing. I felt seen, held, and guided with such profound love and wisdom. I left with a clarity I hadn't felt in years."</p><p className="text-right font-semibold text-gray-700 mt-4">- A.L.</p></div>
                        <div className="bg-stone-50 p-6 rounded-lg"><p className="text-gray-600 italic">"Wakana's presence is a gift. She holds space with incredible strength and compassion. The work is deep, but I never felt safer."</p><p className="text-right font-semibold text-gray-700 mt-4">- J.R.</p></div>
                    </div>
                    <div className="text-center mt-12"><img src="https://img.shields.io/badge/As%20Seen%20In-Tricycle%20Day-blue" alt="Tricycle Day Logo" className="mx-auto h-10" /></div>
                </div>
            </div>

            <div className="bg-green-700 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Begin Your Journey of Understanding</h2>
                        <p className="mb-8 text-green-100">Download one of our free guides to learn more about the path of healing with plant medicine.</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                            {ebooks.map((ebook) => (
                                <div key={ebook.title} className="bg-white/10 p-6 rounded-lg border border-white/20 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">{ebook.title}</h4>
                                        <p className="text-green-200 text-sm">{ebook.description}</p>
                                    </div>
                                    <button onClick={() => handleCTAClick(ebook)} className="mt-6 bg-white text-green-700 font-bold py-2 px-4 rounded-md hover:bg-green-100 transition-colors duration-300 w-full">Download Guide</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <LeadMagnetModal setShowModal={setShowModal} ebook={selectedEbook} />}
        </>
    );
}
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import LeadMagnetModal from './components/LeadMagnetModal';
import Image from 'next/image';

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>
);

// Define a type for our ebook object
interface Ebook {
  title: string;
  description: string;
}

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    // Use the Ebook type for our state, allowing it to be null initially
    const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);

    const ebooks: Ebook[] = [
        { title: "The Curious Seeker's Guide to Ayahuasca", description: "10 Essential Questions to Ask Before Your First Ceremony." },
        { title: "From Trigger to Transformation", description: "A 5-Step Shamanic Guide to Healing Old Wounds." },
        { title: "The Sacred Purge", description: "Embrace the Healing Power of Letting Go." },
    ];

    const handleCTAClick = (ebook: Ebook) => {
        setSelectedEbook(ebook);
        setShowModal(true);
    };

    return (
        <>
            <div className="relative h-[70vh] md:h-[90vh] overflow-hidden">
                <Image 
                  src="/image/wakana_ayahuasca_shaman.webp"
                  alt="Wakana in ceremonial dress"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex flex-col justify-start pt-64 md:pt-90 items-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-4 text-outline animate-fade-in-up">Wakana WhiteOWL</h1>
                    <p className="text-xl md:text-2xl font-light max-w-3xl animate-fade-in-up animation-delay-300">Ancient Wisdom for Modern Healing. Rediscover Your True Self Through the Healing Power of Nature.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full leading-[0]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px]">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-stone-50"></path>
                    </svg>
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
                            <p className="text-gray-600 mb-6">Ready for a transformational journey? Learn More about the pros and cons of plant medicine retreats.</p>
                            <Link href="/retreats" className="text-green-600 font-semibold hover:text-green-800 transition-colors">Get Informed <ChevronRight className="inline-block" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Words from the Heart</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-stone-50 p-6 rounded-lg"><p className="text-gray-600 italic">&quot;My time with Wakana was life-changing. I felt seen, held, and guided with such profound love and wisdom. I left with a clarity I hadn&apos;t felt in years.&quot;</p><p className="text-right font-semibold text-gray-700 mt-4">- A.L.</p></div>
                        <div className="bg-stone-50 p-6 rounded-lg"><p className="text-gray-600 italic">&quot;Wakana&apos;s presence is a gift. She holds space with incredible strength and compassion. The work is deep, but I never felt safer.&quot;</p><p className="text-right font-semibold text-gray-700 mt-4">- J.R.</p></div>
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




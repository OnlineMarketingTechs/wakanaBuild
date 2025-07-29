'use client';
import React from 'react';
import Image from 'next/image';

const CheckmarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);


export default function HealingSessionPage() {
    return (
        <div className="bg-stone-50">
            {/* Hero Section */}
            <section className="relative text-white text-center h-[80vh] flex items-center justify-center overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full z-0">
                    <Image
                        src="/image/wakanaandshamanka2.webp" // A calming, nature-based image
                        alt="Serene nature background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-80"
                    />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-outline animate-fade-in-up">
                        Are You Ready to Transform Your Triggers into Your Greatest Teachers?
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-90 mb-8 animate-fade-in-up animation-delay-300">
                        Join the Waitlist for a Live Healing Session with Wakana
                    </p>
                    <p className="max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
                        Step into a sacred online space to learn shamanic tools for transmuting old pain into present-day power. Be the first to know when registration opens for this transformative live video event.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
                    
                    {/* Left Column: Letter & Details */}
                    <div className="lg:col-span-3">
                        {/* A Message from Wakana */}
                        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
                             <h2 className="text-3xl font-bold text-gray-800 mb-4">A Message from Wakana</h2>
                             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                <p>Hello, beautiful soul,</p>
                                <p>Do you ever feel stuck in a loop? A recurring pattern of reaction, a familiar ache in your heart, a trigger that pulls you out of your center and back into an old story?</p>
                                <p>You are not alone. And more importantly, you are not broken.</p>
                                <p>These triggers are not your enemies. They are faithful messengers from the deepest parts of yourself, calling you home. They are sacred doorways, and on the other side of them lies the freedom, peace, and wholeness you have been seeking. The journey through that doorway is one of the most courageous and rewarding you can ever take.</p>
                                <p>But you do not have to walk it alone.</p>
                                <p>I have created "Healing Sessions with Wakana" as a live, interactive video gathering to share the most effective tools I have learned in decades of shamanic practice. This is a space where we can come together to illuminate the path from trigger to transformation. A place where what feels unmanageable can be mentioned, held with compassion, and finally healed.</p>
                                <p>If you feel the call to go deeper and reclaim the love that you ARE, I would be honored to have you join us.</p>
                                <p>With love,<br/>Wakana</p>
                            </div>
                        </section>

                        {/* What you will learn */}
                        <section className="mb-12">
                             <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Healing Session with Wakana?</h2>
                             <p className="text-lg text-gray-700 leading-relaxed mb-6">This is more than just a webinar—it is a live, interactive ceremonial space held online. In this 90-minute video session, Wakana will guide you through a deep exploration of your inner world.</p>
                             <h3 className="text-2xl font-semibold text-gray-800 mb-4">In this powerful session, you will:</h3>
                             <ul className="space-y-4">
                                <li className="flex items-start"><CheckmarkIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" /><span><strong>Discover the Root of Your Triggers:</strong> Learn a 3-step shamanic process to compassionately identify the old wounds behind your emotional reactions.</span></li>
                                <li className="flex items-start"><CheckmarkIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" /><span><strong>Receive a Guided Healing Practice:</strong> Be led through a gentle practice to connect with a part of yourself that needs your love, beginning the process of reintegration.</span></li>
                                <li className="flex items-start"><CheckmarkIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" /><span><strong>Learn to Reclaim Your Energy:</strong> Receive the powerful mantra for calling your energy back to you and releasing what is not yours to carry.</span></li>
                                <li className="flex items-start"><CheckmarkIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" /><span><strong>Participate in a Live Q&A:</strong> Have the opportunity to ask Wakana your questions in a safe and supportive group environment.</span></li>
                                <li className="flex items-start"><CheckmarkIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" /><span><strong>Connect with a Soul Family:</strong> Feel the power of healing in a community of like-minded seekers on a path of conscious transformation.</span></li>
                             </ul>
                        </section>
                    </div>

                    {/* Right Column: Waitlist Form & Who it's for */}
                    <div className="lg:col-span-2">
                        <div className="sticky top-24">
                             {/* Waitlist Form */}
                            <div className="bg-green-700 text-white p-8 rounded-lg shadow-xl mb-8">
                                <h3 className="text-2xl font-bold mb-2">Spots Will Be Limited</h3>
                                <p className="text-green-100 mb-6">To ensure an intimate and powerful container, registration for this live event will be limited. Join the waitlist to be the first to know when it opens.</p>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Your Name</label>
                                        <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 border bg-white/90 text-gray-800 border-gray-300 rounded-md focus:ring-2 focus:ring-white" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Your Email</label>
                                        <input type="email" id="email" placeholder="Your Email Address" className="w-full px-4 py-3 border bg-white/90 text-gray-800 border-gray-300 rounded-md focus:ring-2 focus:ring-white" />
                                    </div>
                                    <button type="submit" className="w-full bg-white text-green-700 font-bold py-3 px-4 rounded-md hover:bg-green-100 transition-colors duration-300 transform hover:scale-105">
                                        NOTIFY ME!
                                    </button>
                                </form>
                                <p className="text-xs text-green-200 mt-4">We respect your privacy. You are only signing up for notifications about this event.</p>
                            </div>

                             {/* Who It's For */}
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">This Live Healing Session is For You If…</h3>
                                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                                    <li>You feel stuck in repetitive emotional patterns.</li>
                                    <li>You are on a spiritual path and ready for direct, embodied healing.</li>
                                    <li>You have experience with plant medicine and seek powerful integration tools.</li>
                                    <li>You feel a deep soul calling for "something more."</li>
                                    <li>You are ready to stop being at war with your emotions and see them as allies.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center mt-24">
                     <p className="text-xl italic text-gray-600">The journey home to yourself is the most important one you will ever take. <br/> Let&apos;s take the next step together.</p>
                </div>
            </div>
        </div>
    );
}

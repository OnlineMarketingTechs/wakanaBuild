'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>
);

export default function AyahuascaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqData = [
        {
            q: "What is the 'Dieta' or preparation?",
            a: "The dieta is a traditional period of preparation that cleanses the body, mind, and spirit, making you more receptive to the medicine. It typically begins 1-2 weeks before the ceremony and involves abstaining from certain foods (like pork, red meat, fermented foods, excessive salt/sugar) and activities (like alcohol and recreational drugs)."
        },
        {
            q: "What is the purge?",
            a: "A purge is a sacred release of physical toxins, negative energies, and emotional baggage. It can manifest as vomiting, diarrhea, crying, shaking, or sweating. It is a vital and cleansing part of the healing process, not something to be feared."
        },
        {
            q: "Will I lose control?",
            a: "The journey is one of surrender, not of losing control. You are always guided by the spirit of the medicine and held in a safe container by the facilitators. The experience is about releasing the illusion of control to find a deeper truth."
        },
        {
            q: "Is it safe?",
            a: "When held in a proper container with experienced facilitators who conduct thorough health screenings, the experience is safe. It's crucial to be honest about your medical history, especially heart conditions or use of medications like antidepressants (SSRIs), which can be dangerous with Ayahuasca."
        },
        {
            q: "What is integration?",
            a: "The ceremony is just the beginning. Integration is the essential process of weaving the insights from your journey into your daily life. It involves journaling, time in nature, and making conscious choices that align with your newfound clarity. It's how the healing becomes real and lasting."
        }
    ];

    return (
        <div className="bg-stone-50">
             <div className="relative h-[80vh] bg-cover bg-top bg-[url('/image/wakana-ayahuasca-ceramony.jpg')]">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Ayahuasca: Education & Demystification</h2>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    
                    {/* What is Ayahuasca Section */}
                    <section className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">What is Ayahuasca?</h3>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p>To speak of Ayahuasca is to speak of a sacred and ancient mystery. It is not something that can be fully captured by words, but we can approach an understanding with reverence and an open heart.</p>
                            <br />
                            <p>At its most basic, Ayahuasca is a sacred tea from the Amazon rainforest, created by brewing two plants together: the <em>Banisteriopsis caapi</em> vine and the leaves of the <em>Psychotria viridis</em> shrub. Individually, these plants have limited psychoactive effect. Yet, when brewed together in a process passed down through generations of indigenous wisdom keepers, they create a potent and visionary medicine.</p>
                            <br />
                            <p>But to call Ayahuasca merely a substance would be like calling the ocean merely water. Ayahuasca is a spirit. She is a profound intelligence, a master teacher, and a loving, cosmic consciousness that has been referred to for centuries as &ldquo;La Madrecita,&rdquo; the Little Mother. She is a guide who, when approached with respect and sincere intention, can offer us a direct experience of the divine tapestry that connects all of life.</p>
                        </div>
                    </section>

                    {/* The Spirit of the Medicine Section */}
                    <section className="mb-16">
                         <div className="w-full h-96 relative rounded-lg shadow-xl mb-12 overflow-hidden">
                            <Image
                                src="/image/wakana-ceremony-2.jpg"
                                alt="Wakana and Shamanka in ceremony"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">The Spirit of the Medicine</h3>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p>Working with Ayahuasca is not a recreational experience; it is a deep spiritual undertaking. The spirit of the medicine is often described as feminine—wise, compassionate, and direct. She is a healer who goes to the very root of our suffering. She doesn&apos;t just treat the symptoms; she illuminates the source.</p>
                            <br />
                            <p>An Ayahuasca ceremony is an invitation to journey into the landscape of your own consciousness, guided by this ancient intelligence. In this sacred space, you may be shown the origins of your deepest fears, the unconscious patterns that limit your life, and the unhealed wounds that you have carried for years, or even lifetimes. You may also be shown the boundless beauty of your own soul, your infinite capacity for love, and your undeniable connection to all of creation.</p>
                            <br />
                            <p>The journey is not always easy. The medicine shows you what you need to see, not necessarily what you want to see. It is a mirror that reflects your inner world with perfect, sometimes startling, clarity. Yet, the spirit of Ayahuasca is always loving. Even in the most challenging moments, her purpose is to cleanse, to heal, and to guide you back to the wholeness that is your birthright.</p>
                        </div>
                    </section>
                    
                    {/* What is a Ceremony Like Section */}
                    <section className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">What is an Ayahuasca Ceremony Like?</h3>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p>An Ayahuasca ceremony is a sacred container, carefully held to provide a safe and supportive space for your journey. Ceremonies are traditionally held at night, in darkness or near-darkness, which helps participants turn their attention inward.</p>
                            <br />
                            <p>The shaman or facilitator will guide the ceremony with <em>icaros</em>—sacred songs that are a form of energy work. These songs help to call in healing spirits, manage the energy of the space, and guide the participants through their journeys. The experience is deeply personal and unique to each individual. It can include:</p>
                           <br />
                            <ul className="list-disc pl-5 space-y-2">
                               
                                <li><strong>Profound Visions:</strong> Geometric patterns, journeys through otherworldly realms, or vivid scenes from your past.</li>
                                <br />
                                <li><strong>Emotional Release:</strong> Deep-seated emotions like grief, anger, or fear may surface to be felt and released.</li>
                                <br />
                                <li><strong>Physical Purging:</strong> Vomiting, diarrhea, or shaking are seen as a sacred release of toxins and negative energies.</li>
                                <br />
                                <li><strong>Deep Insights:</strong> A clear understanding of relationship dynamics, life patterns, or your soul&apos;s purpose.</li>
                                <br />
                                <li><strong>Experiences of Unity:</strong> A profound sense of oneness with nature, the universe, and all of humanity.</li>
                            </ul>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h3>
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

                    {/* Is It For You Section */}
                    <section>
                         <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Is Ayahuasca For You?</h3>
                         <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-center">
                            <p>The call to work with Ayahuasca is a deeply personal one. It is not a &quot;quick fix&quot; but a powerful catalyst for those who are sincerely committed to their healing and spiritual growth. It is for those who are ready to take a courageous look within, to take responsibility for their own healing, and to step into a more authentic and love-filled way of life.</p>
                            <br />
                            <p>If you feel a calling in your heart, a curiosity that goes beyond the intellectual, we invite you to sit with it. Listen to the quiet whispers of your own soul. The path of plant medicine is a sacred one, and it unfolds with perfect timing for those who are meant to walk it.</p>
                         </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

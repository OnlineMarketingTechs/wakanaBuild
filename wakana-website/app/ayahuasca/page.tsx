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
            a: "The dieta is a traditional period of preparation that cleanses the body, mind, and spirit, making you more receptive to the medicine. It typically begins 1-2 weeks before the ceremony and involves abstaining from certain foods (like pork, red meat, fermented foods, excessive salt/sugar) and activities (like alcohol and sexual activity). This is a spiritual practice that demonstrates your commitment and quiets the body."
        },
        {
            q: "What is the purge?",
            a: "A purge is a sacred release of physical toxins, negative energies, and emotional baggage. It can manifest as vomiting, diarrhea, crying, shaking, or sweating. It is a vital and cleansing part of the healing process that is welcomed as a way of 'getting well,' not something to be feared."
        },
        {
            q: "How do I set an intention?",
            a: "Your intention is your prayer to the medicine. It should come from the heart. Instead of a long list, try to find the core question or desire. It could be a question like, 'What is at the root of my anxiety?' or a statement of surrender like, 'I am ready to release what no longer serves me.' The sincerity of your heart is more important than the specific words."
        },
        {
            q: "What if I don't have any visions?",
            a: "Healing with Ayahuasca is not just about visions. Many people experience profound healing on a purely emotional, physical, or energetic level. The medicine gives you exactly what you need, which may be a deep feeling of peace, an emotional release, or simply a dreamless, restorative rest. Trust that the healing is happening, regardless of the form it takes."
        },
        {
            q: "What are the 'icaros' or songs?",
            a: "Icaros are the sacred songs sung by the shaman or facilitator during the ceremony. They are not just music; they are a primary healing tool. Each icaro carries a specific energy or intention—to cleanse, to protect, to call in spirits, or to guide the journey. They are the energetic rudder of the ceremonial ship."
        },
        {
            q: "What if I have a 'bad trip'?",
            a: "In a properly held ceremonial container, there are no 'bad trips,' only challenging ones. Difficult moments are often the medicine showing you a deep-seated fear or trauma that is ready to be healed. This is where the support of experienced facilitators is crucial. They can help you navigate these moments, reminding you to breathe and surrender, turning a challenging experience into your most profound breakthrough."
        },
        {
            q: "Will I lose control?",
            a: "The journey is one of surrender, not of losing control. You are always guided by the spirit of the medicine and held in a safe container by the facilitators. The experience is about releasing the illusion of control to find a deeper truth and trust."
        },
        {
            q: "Is it safe?",
            a: "When held in a proper container with experienced facilitators who conduct thorough health screenings, the experience is safe. It's crucial to be honest about your medical history, especially heart conditions or use of medications like antidepressants (SSRIs), which can be dangerous with Ayahuasca. Spiritual and emotional safety, held by a trained facilitator, is just as important as physical safety."
        },
        {
            q: "Can I do this if I'm not 'spiritual'?",
            a: "Absolutely. You do not need to subscribe to any belief system to benefit from Ayahuasca. The medicine meets you where you are. All that is required is a sincere intention to heal and an open, curious mind. The experience itself is often what reveals a deeper connection to life that one might call spiritual."
        },
        {
            q: "What is integration?",
            a: "The ceremony is just the beginning. Integration is the essential process of weaving the insights from your journey into your daily life. It involves journaling, time in nature, and making conscious choices that align with your newfound clarity. It's how the healing becomes real and lasting, and can unfold for months or even years."
        }
    ];


    return (
        <div className="bg-stone-50 text-gray-800">
             <div className="relative h-[80vh] bg-cover bg-center bg-fixed bg-[url('/image/wakana-ayahuasca-ceramony.jpg')]">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Ayahuasca: The Vine of the Soul</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">An educational journey into the heart of the sacred Amazonian medicine, its spirit, and the path to healing.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    
                    {/* What is Ayahuasca Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What is Ayahuasca?</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p>To speak of Ayahuasca is to speak of a sacred and ancient mystery. It is not something that can be fully captured by words, but we can approach an understanding with reverence, respect, and an open heart. Ayahuasca is a path of profound shamanic healing, a journey into the heart of consciousness itself.</p>
                            <br />
                            <p>At its most basic, Ayahuasca is a sacred tea from the Amazon rainforest, created by brewing two remarkable plants together: the <em>Banisteriopsis caapi</em> vine and the leaves of the <em>Psychotria viridis</em> shrub (or a similar companion plant). For millennia, the indigenous peoples of the Amazon basin have known the secret of this alchemy. Individually, these plants have limited psychoactive effect. Yet, when brewed together in a process passed down through generations of wisdom keepers, they create a potent and visionary medicine capable of inducing deep psychological and spiritual healing.</p>
                            <br />
                            <p>But to call Ayahuasca merely a substance would be like calling the ocean merely water. Ayahuasca is a spirit. She is a profound intelligence, a master teacher, and a loving, cosmic consciousness that has been referred to for centuries as &ldquo;La Madrecita,&rdquo; the Little Mother. She is a guide who, when approached with a sincere intention for healing, can offer us a direct experience of the divine tapestry that connects all of life, helping us to understand our place within it.</p>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The Spirit of the Medicine: A Journey of Remembering</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p>Working with Ayahuasca is not a recreational experience; it is a deep spiritual undertaking. The spirit of the medicine is often described as feminine—wise, compassionate, direct, and holding the unconditional love of a universal mother. She is a healer who goes to the very root of our suffering. She doesn&apos;t just treat the symptoms of our anxiety, depression, or trauma; she lovingly illuminates their source, allowing for true and lasting healing.</p>
                            <br />
                            <p>An Ayahuasca ceremony is an invitation to journey into the landscape of your own consciousness, guided by this ancient intelligence. In this sacred space, you may be shown the origins of your deepest fears, the unconscious patterns that limit your life, and the unhealed wounds that you have carried for years, or even lifetimes. You may also be shown the boundless beauty of your own soul, your infinite capacity for love, and your undeniable connection to all of creation.</p>
                            <br />
                            <p>The journey is not always easy. The medicine shows you what you *need* to see, not necessarily what you *want* to see. It is a mirror that reflects your inner world with perfect, sometimes startling, clarity. Yet, the spirit of Ayahuasca is always loving. Even in the most challenging moments, her purpose is to cleanse, to heal, and to guide you back to the wholeness that is your birthright.</p>
                        </div>
                    </section>

                    {/* The Sacred Science Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The Sacred Science: How Ayahuasca Works</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                             <p>While the true magic of Ayahuasca lies in the spiritual realm, there is a fascinating science to its effects. The <em>Psychotria viridis</em> leaves contain N,N-Dimethyltryptamine (DMT), a powerful visionary compound that is also found naturally in our own bodies. When taken orally, DMT is normally broken down by an enzyme in our gut called monoamine oxidase (MAO).</p>
                             <br />
                             <p>This is where the wisdom of the <em>Banisteriopsis caapi</em> vine comes in. The vine contains potent monoamine oxidase inhibitors (MAOIs). When brewed together, the MAOIs in the vine temporarily inhibit the enzyme in our stomach, allowing the DMT from the leaves to be absorbed into the bloodstream and cross the blood-brain barrier. This synergy allows for a prolonged, multi-hour visionary journey, as opposed to the fleeting experience of synthesized DMT. This ancient combination is a testament to the profound botanical and spiritual knowledge of the Amazonian peoples.</p>
                        </div>
                    </section>
                    
                    {/* What is a Ceremony Like Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What is an Ayahuasca Ceremony Like?</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p>An Ayahuasca ceremony is a sacred container, carefully held to provide a safe and supportive space for your journey. Ceremonies are traditionally held at night, in darkness or near-darkness, which helps participants turn their attention inward and become more receptive to the subtle energies and visions of the medicine.</p>
                            <br />
                            <p>You will be provided with a comfortable mat, blankets, pillows, and a bucket for purging. The ceremony is opened with prayers and intentions, creating a protective and sacred space. The shaman or facilitator, who has a deep and established relationship with the medicine, will serve the tea to each participant.</p>
                            <br />
                            <p>After drinking the medicine, participants return to their mats. The effects typically begin within 30 to 60 minutes. The shaman will guide the ceremony with <em>icaros</em>—sacred songs that are a form of energy work. These are not mere songs; they are conduits of healing energy, used to call in protective spirits, manage the energy of the space, navigate the visionary realms, and guide participants through their journeys.</p>
                            <br />
                            <p>The experience is deeply personal and unique to each individual. It can include:</p>
                           <br />
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Profound Visions:</strong> Geometric patterns, journeys through otherworldly realms, encounters with spirit guides or ancestors, or vivid scenes from your past.</li>
                                <li><strong>Emotional Release:</strong> Deep-seated emotions like grief, anger, or fear may surface to be felt and released. It is common and healing to cry, laugh, or express sound.</li>
                                <li><strong>Physical Purging:</strong> Vomiting, diarrhea, shaking, or sweating are common and are seen as a sacred release of physical toxins, negative energies, and emotional baggage. This purge is a vital part of the cleansing process and is welcomed as "getting well."</li>
                                <li><strong>Deep Insights:</strong> A clear understanding of relationship dynamics, life patterns, or your soul&apos;s purpose. You may receive direct guidance on complex life issues.</li>
                                <li><strong>Experiences of Unity:</strong> A profound sense of oneness with nature, the universe, and all of humanity, dissolving the illusion of separation.</li>
                            </ul>
                            <br />
                            <p>Throughout the ceremony, experienced facilitators are present to offer support, guidance, and a compassionate presence. They are there to help you navigate your journey, to offer a comforting hand, or to assist with anything you may need. The ceremony closes in the early hours of the morning, often with a shared meal, and a collective sense of peace, clarity, and renewal.</p>
                        </div>
                    </section>

                     {/* The Sacred Container Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The Sacred Container: Safety, Preparation, and Intention</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                             <p>The power of Ayahuasca demands the utmost respect and a commitment to safety. A safe ceremony is paramount. This includes physical safety (screening for medical contraindications and medication interactions) and, just as importantly, spiritual and emotional safety. A true shaman or facilitator has undergone years of rigorous training, has a deep relationship with the plant spirits, and knows how to hold a strong, protected energetic container.</p>
                             <br />
                             <p>Your own preparation is also a vital part of the journey. This often includes a special diet, or <em>dieta</em>, for a week or more before the ceremony. This involves abstaining from certain foods like red meat, pork, fermented foods, and excessive salt and sugar, as well as refraining from alcohol and sexual activity. The <em>dieta</em> is not just a physical cleansing; it is a spiritual practice that demonstrates your commitment, quiets the body, and makes you more receptive to the medicine&apos;s teachings.</p>
                             <br />
                             <p>Equally important is your mental and spiritual preparation. This is the time to clarify your intention. Why are you coming to the medicine? What are you seeking to heal or understand? A clear intention acts as a rudder, guiding your journey. It is a prayer that you send out to the spirit of Ayahuasca, and she will respond to the sincerity of your heart.</p>
                        </div>
                    </section>

                    {/* The Journey After the Journey Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The Journey After the Journey: The Vital Role of Integration</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                             <p>The ceremony is not the end of the journey; it is the beginning. The insights, revelations, and energetic shifts that occur in ceremony can be profound, but they must be woven into the fabric of your daily life to create lasting change. This is the sacred work of integration.</p>
                             <br />
                             <p>Integration is the process of taking what you have learned and embodying it. It&apos;s about making new choices, building healthier habits, and relating to yourself and the world from your new, expanded perspective. This can involve journaling, spending time in nature, meditation, talking with a therapist or integration coach, and being gentle and patient with yourself as you navigate the world with a more open and sensitive heart. Without dedicated integration, the most profound insights can fade like a dream. With it, the healing of a single ceremony can continue to unfold for months and even years.</p>
                        </div>
                    </section>


                    {/* Is It For You Section */}
                    <section className="mb-16">
                         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Is Ayahuasca For You?</h2>
                         <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                             <p>The call to work with Ayahuasca is a deeply personal one. It is not a &quot;quick fix&quot; or a psychedelic adventure, but a powerful catalyst for those who are sincerely committed to their healing and spiritual growth. It is for those who are ready to take a courageous look within, to take responsibility for their own healing, and to step into a more authentic and love-filled way of life.</p>
                              <br />
                             <p>Ayahuasca can be particularly helpful for individuals seeking healing from:</p>
                             <br />
                             <ul className="list-disc pl-5 space-y-2">
                                 <li>Deep-seated trauma and PTSD</li>
                                 <li>Depression, anxiety, and addiction</li>
                                 <li>A sense of disconnection or lack of purpose</li>
                                 <li>Creative blocks and spiritual stagnation</li>
                             </ul>
                             <br />
                             <p>If you feel a calling in your heart, a curiosity that goes beyond the intellectual, we invite you to sit with it. Listen to the quiet whispers of your own soul. The path of plant medicine is a sacred one, and it unfolds with perfect timing for those who are meant to walk it.</p>
                         </div>
                    </section>

                    {/* FAQ Section */}
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4">
                                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left flex justify-between items-center py-2 focus:outline-none">
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

                </div>
            </div>
        </div>
    );
}

// file: app/components/LeadMagnetModal.tsx
import React from 'react';

const X = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>);

interface LeadMagnetModalProps {
    setShowModal: (show: boolean) => void;
    ebook: { title: string } | null;
}

export default function LeadMagnetModal({ setShowModal, ebook }: LeadMagnetModalProps) {
    if (!ebook) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center relative">
           <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
              <X />
           </button>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Interest!</h3>
          <p className="text-gray-600 mb-2">You're one step closer to receiving:</p>
          <p className="text-lg font-semibold text-green-700 mb-6 italic">{ebook.title}</p>
          <p className="text-gray-600 mb-6">Enter your email below to get your free guide.</p>
          <form>
            <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">Download Now</button>
          </form>
        </div>
      </div>
    );
}


import Image from 'next/image';

export default function RetreatsPage() {
    return (
        <div className="bg-white">
            <div className="relative h-[50vh]">
               
                <div className="absolute inset-0 bg-green-900/70"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">COMING SOON</h2>
                    <p className="text-xl md:text-2xl font-light max-w-3xl">A journey of healing and personal growth in harmony with nature.</p>
                </div>
            </div>
          
        </div>
    );
}


// file: app/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Wakana WhiteOWL</h3>
            <p className="text-gray-400 mb-6">Guiding souls back to wholeness.</p>
            <div className="flex justify-center space-x-6 mb-8">
                {/* Add social links here when available */}
            </div>
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Wakana WhiteOWL. All Rights Reserved.</p>
            <p className="text-gray-500 text-sm mt-2">This website is for informational purposes and does not constitute medical advice.</p>
          </div>
        </div>
      </footer>
    );
}

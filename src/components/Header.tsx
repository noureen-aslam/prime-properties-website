import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 flex-shrink-0">
  <img
  src="/prime-properties-website/images/logo.jpg"
    alt="Prime Properties Logo"
    className="h-32 w-auto"
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.parentElement!.innerHTML =
        '<span class="text-amber-500 text-xl font-bold">Prime Properties</span>';
    }}
  />

  <div className="leading-tight">
    <span className="text-white text-xl font-bold block">Prime Properties</span>
    <span className="text-amber-500 text-sm font-semibold block">Bangalore</span>
  </div>
</div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('outrate-jd')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              Outrate & JD
            </button>
            <button
              onClick={() => scrollToSection('residential')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              Residential
            </button>
            <button
              onClick={() => scrollToSection('commercial')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              Commercial
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              About Us
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+918105592706"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/20"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('outrate-jd')}
              className="block w-full text-left text-gray-300 hover:text-amber-500 transition-colors font-medium py-2"
            >
              Outrate & JD
            </button>
            <button
              onClick={() => scrollToSection('residential')}
              className="block w-full text-left text-gray-300 hover:text-amber-500 transition-colors font-medium py-2"
            >
              Residential
            </button>
            <button
              onClick={() => scrollToSection('commercial')}
              className="block w-full text-left text-gray-300 hover:text-amber-500 transition-colors font-medium py-2"
            >
              Commercial
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-amber-500 transition-colors font-medium py-2"
            >
              About Us
            </button>
            <a
              href="tel:+918105592706"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold mt-4"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

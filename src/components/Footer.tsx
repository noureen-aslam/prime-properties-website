import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="about" className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Prime Properties <span className="text-amber-500">Bangalore</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Founded under the vision of MD Aiman Aslam, PrimeProperties Bangalore focuses on large extended properties and joint development with Tier‑1 builders.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('outrate-jd')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Outrate & JD
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('residential')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Residential
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('commercial')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Commercial
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918105592706"
                  className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors group"
                >
                  <div className="bg-amber-500/10 p-2 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-amber-500" />
                  </div>
                  +91 81055 92706
                </a>
              </li>
              <li>
                <a
                  href="mailto:primepropertiesbanglore@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors group"
                >
                  <div className="bg-amber-500/10 p-2 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-amber-500" />
                  </div>
                  primepropertiesbanglore@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-amber-500" />
                </div>
                <span>Consultations in and around Bangalore</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <a
              href="https://www.instagram.com/primeproperties_banglore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-amber-400 hover:to-yellow-500 transition-all"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Prime Properties Bangalore. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Founded by <span className="text-amber-500 font-semibold">MD Aiman</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

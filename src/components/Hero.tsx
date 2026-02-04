import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Building2 } from 'lucide-react';

const heroImages = [
  '/prime-properties-website/images/image1.jpg',
  '/prime-properties-website/images/image2.jpg',
  '/prime-properties-website/images/image3.jpg',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('builders');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
            onError={(e) => {
              e.currentTarget.style.backgroundImage = `linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
      ))}

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500 text-amber-500 rounded-full text-sm font-semibold mb-4">
                Founded by MD Aiman Aslam
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight flex items-center gap-4">
  
  <div>
    Prime Properties
    <span className="block text-amber-500">Bangalore</span>
  </div>
</h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Specialists in Large Extended Properties for{' '}
              <span className="text-amber-500 font-semibold">Outrate</span> and{' '}
              <span className="text-amber-500 font-semibold">Joint Development (JD)</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToBooking}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-400 hover:to-yellow-500 transition-all shadow-2xl shadow-amber-500/30"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
              <button
                onClick={scrollToProjects}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                <Building2 className="w-5 h-5" />
                View Tier-1 Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-amber-500 w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

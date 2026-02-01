import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BuilderMarquee from './components/BuilderMarquee';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Services />
      <BuilderMarquee />
      <BookingForm />
      <Reviews />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;

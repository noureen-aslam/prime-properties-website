import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'Landowner, Whitefield',
    rating: 5,
    text: 'MD Aiman and his team helped us secure an excellent JD deal with a Tier-1 builder. Their expertise in land valuation and negotiation is unmatched. Highly recommended for large property transactions.',
  },
  {
    name: 'Priya Sharma',
    role: 'Property Investor',
    rating: 5,
    text: 'Professional, transparent, and results-driven. Prime Properties helped me find the perfect luxury villa in Sarjapur. Their market knowledge and builder connections are exceptional.',
  },
  {
    name: 'Vikram Reddy',
    role: 'Commercial Developer',
    rating: 5,
    text: 'Outstanding service for our commercial property acquisition. The team understood our requirements perfectly and delivered beyond expectations. Their Outrate consultancy saved us significant time and money.',
  },
  {
    name: 'Anita Menon',
    role: 'NRI Investor',
    rating: 5,
    text: 'As an NRI, I needed someone trustworthy to handle my property investment in Bangalore. Prime Properties made the entire process seamless. MD Aiman personally ensured everything was handled professionally.',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-amber-500">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by investors, landowners, and developers across Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700 hover:border-amber-500/50 transition-all hover:shadow-2xl hover:shadow-amber-500/10 relative"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full p-3 shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="border-t border-zinc-700 pt-4">
                <p className="text-white font-semibold text-lg">{review.name}</p>
                <p className="text-amber-500 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

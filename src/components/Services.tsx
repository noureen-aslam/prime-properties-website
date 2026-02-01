import { Landmark, Handshake, Home, Building } from 'lucide-react';

const services = [
  {
    id: 'outrate-jd',
    icon: Landmark,
    title: 'Outrate Sale',
    description: 'Expert consultancy for large land parcels and outright transactions. Maximize your returns with our comprehensive market analysis and negotiation expertise.',
    color: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'jd',
    icon: Handshake,
    title: 'Joint Development (JD)',
    description: 'Bridging land owners with Tier-1 Builders for maximum profit. Strategic partnerships that unlock the true potential of your property.',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'residential',
    icon: Home,
    title: 'Residential',
    description: 'Luxury villas and apartments across Bangalore. Curated selection of premium residential properties in the most sought-after locations.',
    color: 'from-amber-600 to-orange-600',
  },
  {
    id: 'commercial',
    icon: Building,
    title: 'Commercial',
    description: 'High-yield office and retail spaces. Strategic commercial investments with exceptional ROI potential in Bangalore\'s prime business districts.',
    color: 'from-yellow-600 to-amber-700',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your investment goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative bg-zinc-800 rounded-2xl p-8 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

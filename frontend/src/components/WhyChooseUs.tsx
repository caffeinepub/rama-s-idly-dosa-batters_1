import { Leaf, Clock, ShieldCheck, Truck, Flame, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: 'Only the finest rice, lentils, and spices — sourced fresh from trusted local suppliers.',
  },
  {
    icon: Clock,
    title: 'Traditional Fermentation',
    description: 'Naturally fermented for 8–12 hours for that authentic tangy flavour and perfect texture.',
  },
  {
    icon: ShieldCheck,
    title: 'No Preservatives',
    description: 'Absolutely no artificial preservatives, colours, or additives. Pure and wholesome.',
  },
  {
    icon: Flame,
    title: 'Always Fresh',
    description: 'Prepared fresh every day in small batches to ensure maximum freshness and quality.',
  },
  {
    icon: Truck,
    title: 'Home Delivery',
    description: 'Convenient doorstep delivery across Vijayawada. Order via WhatsApp for same-day delivery.',
  },
  {
    icon: Heart,
    title: 'Hygiene First',
    description: 'Prepared in a FSSAI-compliant kitchen with strict hygiene and food safety standards.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#5A1E1E' }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Why Choose Us?
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #D4820A, #E89A20)', borderRadius: '2px' }}
          />
          <p className="text-white/80 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body">
            We're not just selling batter — we're delivering a piece of authentic South Indian heritage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="frosted-card p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-4"
                style={{ backgroundColor: '#D4820A', borderRadius: '8px' }}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-white/75 text-sm leading-relaxed font-body">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

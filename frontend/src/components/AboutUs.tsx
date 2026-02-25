import { Leaf, Droplets, Shield, Award } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Fresh',
    description: 'Made fresh daily with the finest ingredients sourced locally.',
  },
  {
    icon: Droplets,
    title: 'Natural',
    description: 'No artificial additives, preservatives, or chemicals — ever.',
  },
  {
    icon: Shield,
    title: 'Hygienic',
    description: 'Prepared in a spotlessly clean kitchen with strict hygiene standards.',
  },
  {
    icon: Award,
    title: 'Authentic',
    description: 'Traditional stone-ground recipes for that genuine home-made taste.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">About Us</h2>
          <span className="section-heading-underline mx-auto" />
          <p className="mt-6 text-ink-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-body">
            Bringing the authentic taste of South India to your kitchen since years.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-spice mb-4">
              Our Story
            </h3>
            <div className="w-12 h-1 mb-6" style={{ background: 'linear-gradient(90deg, #D4820A, #E89A20)', borderRadius: '2px' }} />
            <p className="text-ink-light leading-relaxed mb-4 font-body">
              Rama's Idly and Dosa Batters was born from a passion for authentic South Indian cuisine. 
              Our founder, inspired by generations of traditional cooking, set out to bring the genuine 
              taste of home-made batters to every household.
            </p>
            <p className="text-ink-light leading-relaxed mb-4 font-body">
              Every batch is prepared with carefully selected rice and lentils, stone-ground to the 
              perfect consistency, and naturally fermented to develop that characteristic tangy flavour 
              that makes South Indian breakfasts so special.
            </p>
            <p className="text-ink-light leading-relaxed font-body">
              We believe that good food starts with good ingredients and honest preparation. That's why 
              we never compromise on quality — no shortcuts, no preservatives, just pure authentic taste.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden shadow-xl" style={{ borderRadius: '8px' }}>
              <img
                src="/assets/generated/about-batter-preparation.dim_600x400.png"
                alt="Traditional batter preparation"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Accent card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white shadow-lg p-4 border-l-4"
              style={{ borderLeftColor: '#D4820A', borderRadius: '6px' }}
            >
              <p className="font-display text-2xl font-bold text-spice">500+</p>
              <p className="text-sm text-ink-light font-body">Happy Families</p>
            </div>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-6 text-center border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: 'oklch(0.35 0.14 20 / 0.12)', borderRadius: '8px' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'oklch(0.35 0.14 20 / 0.08)' }}
              >
                <Icon className="w-6 h-6 text-spice" />
              </div>
              <h4 className="font-display text-lg font-bold text-spice mb-2">{title}</h4>
              <p className="text-sm text-ink-light leading-relaxed font-body">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

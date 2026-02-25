import { Leaf, Droplets, Shield, Award, CheckCircle, Ban, FlaskConical } from 'lucide-react';

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

const qualityPillars = [
  { icon: Droplets, label: 'Pure RO Water' },
  { icon: Ban, label: 'No Preservatives' },
  { icon: Leaf, label: 'Naturally Fermenting' },
  { icon: FlaskConical, label: 'No Salt / No Soda' },
];

export default function AboutUs() {
  return (
    <section id="about" aria-label="About Us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">About Us</h2>
          <span className="section-heading-underline mx-auto" aria-hidden="true" />
          <p className="mt-6 text-ink-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-body">
            Bringing the authentic taste of South India to your kitchen since 2025.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-spice">
                Our Story
              </h3>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold font-body text-white"
                style={{ backgroundColor: '#2E7D32', borderRadius: '20px' }}
                aria-label="FSSAI Approved certification"
              >
                <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                FSSAI Approved
              </span>
            </div>
            <div className="w-12 h-1 mb-6" style={{ background: 'linear-gradient(90deg, #D4820A, #E89A20)', borderRadius: '2px' }} aria-hidden="true" />
            <p className="text-ink-light leading-relaxed mb-4 font-body">
              Rama's Home Foods Idly and Dosa Batters was founded on <strong>01-08-2025</strong> with a passion for authentic South Indian cuisine. Since day one, we have been running successfully — committed to hygiene, quality raw materials, and a completely authentic style that brings the real taste of home to your table.
            </p>
            <p className="text-ink-light leading-relaxed mb-4 font-body">
              Every batch is prepared with carefully selected rice and lentils, stone-ground to the perfect consistency, and <strong>naturally fermented</strong> to develop that characteristic tangy flavour that makes South Indian breakfasts so special.
            </p>
            <p className="text-ink-light leading-relaxed mb-6 font-body">
              We use <strong>Pure RO Water</strong> and maintain strict hygiene throughout our process. No salt, no soda, no preservatives — just pure, authentic taste the way it was always meant to be.
            </p>

            {/* Quality Pillars */}
            <div className="grid grid-cols-2 gap-2" role="list" aria-label="Quality commitments">
              {qualityPillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="flex items-center gap-2 px-3 py-2.5"
                  style={{ backgroundColor: 'oklch(0.35 0.14 20 / 0.06)', borderRadius: '6px' }}
                >
                  <Icon className="w-4 h-4 text-saffron shrink-0" aria-hidden="true" />
                  <span className="text-xs font-semibold font-body text-spice">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden shadow-xl" style={{ borderRadius: '8px' }}>
              <img
                src="/assets/generated/about-batter-preparation.dim_600x400.png"
                alt="Traditional South Indian batter preparation process at Rama's Home Foods"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Accent card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white shadow-lg p-4 border-l-4"
              style={{ borderLeftColor: '#D4820A', borderRadius: '6px' }}
              aria-label="500 plus happy families served"
            >
              <p className="font-display text-2xl font-bold text-spice">500+</p>
              <p className="text-sm text-ink-light font-body">Happy Families</p>
            </div>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" role="list" aria-label="Our core values">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              role="listitem"
              className="bg-white p-6 text-center border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: 'oklch(0.35 0.14 20 / 0.12)', borderRadius: '8px' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'oklch(0.35 0.14 20 / 0.08)' }}
                aria-hidden="true"
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

import {
  Ban,
  CheckCircle,
  Clock,
  Droplets,
  Flame,
  FlaskConical,
  Heart,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Pure RO Water",
    description:
      "We use 100% pure RO-filtered water in every batch for the cleanest, safest batter possible.",
  },
  {
    icon: Clock,
    title: "Naturally Fermenting",
    description:
      "Naturally fermented for 8–12 hours for that authentic tangy flavour and perfect texture — no shortcuts.",
  },
  {
    icon: Ban,
    title: "No Preservatives",
    description:
      "Absolutely no artificial preservatives, colours, or additives. Pure and wholesome every time.",
  },
  {
    icon: FlaskConical,
    title: "No Salt / No Soda",
    description:
      "Zero added salt or soda — just pure, naturally prepared batter the traditional way.",
  },
  {
    icon: Leaf,
    title: "Quality Raw Materials",
    description:
      "Only the finest rice, lentils, and spices — sourced fresh from trusted local suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "FSSAI Approved",
    description:
      "Fully FSSAI certified and compliant. Prepared in a hygienic kitchen with strict food safety standards.",
  },
  {
    icon: Flame,
    title: "Always Fresh",
    description:
      "Prepared fresh every day in small batches to ensure maximum freshness and quality.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description:
      "Convenient doorstep delivery across Vijayawada. Order via WhatsApp for same-day delivery.",
  },
  {
    icon: Heart,
    title: "Hygiene First",
    description:
      "Maintaining hygiene and authentic style vibes — because good food starts with a clean kitchen.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#5A1E1E" }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Why Choose Us?
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-4"
            style={{
              background: "linear-gradient(90deg, #D4820A, #E89A20)",
              borderRadius: "2px",
            }}
          />
          {/* FSSAI Badge */}
          <div className="flex justify-center mb-4">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold font-body text-white"
              style={{ backgroundColor: "#2E7D32", borderRadius: "20px" }}
            >
              <CheckCircle className="w-4 h-4" />
              Completely FSSAI Approved
            </span>
          </div>
          <p className="text-white/80 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body">
            We're not just selling batter — we're delivering a piece of
            authentic South Indian heritage with hygiene, quality, and love.
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
                style={{ backgroundColor: "#D4820A", borderRadius: "8px" }}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {title}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed font-body">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

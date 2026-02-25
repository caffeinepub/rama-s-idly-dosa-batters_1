import { Home, Info, ShoppingBag, Star, Tag, MessageSquare, Phone, X, ChevronRight, Map } from 'lucide-react';

interface SitemapSection {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const sections: SitemapSection[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Welcome to Rama\'s Home Foods — fresh, authentic South Indian batters',
    icon: Home,
    color: '#D4820A',
  },
  {
    id: 'products',
    label: 'Products',
    description: 'Idly Batter, Dosa Batter, Vada Batter, Ragi Idly & Ragi Dosa Batters',
    icon: ShoppingBag,
    color: '#C0392B',
  },
  {
    id: 'offers',
    label: 'Offers',
    description: 'Special deals, Sunday offers, and Zomato discounts',
    icon: Tag,
    color: '#E89A20',
  },
  {
    id: 'about',
    label: 'About Us',
    description: 'Our story, FSSAI certification, and quality commitments',
    icon: Info,
    color: '#D4820A',
  },
  {
    id: 'why-choose-us',
    label: 'Why Choose Us',
    description: 'Pure RO Water, No Preservatives, Natural Fermentation, No Salt/Soda',
    icon: Star,
    color: '#C0392B',
  },
  {
    id: 'reviews',
    label: 'Reviews',
    description: 'Testimonials from 500+ happy families across Vijayawada',
    icon: MessageSquare,
    color: '#E89A20',
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Address, phone numbers, email, and Google Maps location',
    icon: Phone,
    color: '#D4820A',
  },
];

interface SitemapProps {
  onNavigate?: () => void;
}

export default function Sitemap({ onNavigate }: SitemapProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onNavigate?.();
  };

  return (
    <div className="p-2">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'oklch(0.35 0.14 20 / 0.15)' }}>
        <div
          className="w-10 h-10 flex items-center justify-center shrink-0"
          style={{ backgroundColor: '#D4820A', borderRadius: '8px' }}
        >
          <Map className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-spice">Site Navigation</h2>
          <p className="text-sm text-ink-light font-body">Jump to any section instantly</p>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-start gap-4 p-4 text-left border hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 w-full"
              style={{
                borderColor: 'oklch(0.35 0.14 20 / 0.12)',
                borderRadius: '8px',
                backgroundColor: 'oklch(0.98 0.01 60)',
              }}
              aria-label={`Navigate to ${section.label} section`}
            >
              {/* Step number + icon */}
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ backgroundColor: section.color + '18', borderRadius: '8px' }}
                >
                  <Icon className="w-5 h-5" style={{ color: section.color }} aria-hidden="true" />
                </div>
                <span
                  className="text-xs font-bold font-body"
                  style={{ color: section.color + 'aa' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display font-bold text-spice text-base group-hover:text-saffron transition-colors">
                    {section.label}
                  </span>
                  <ChevronRight
                    className="w-4 h-4 shrink-0 text-ink-light group-hover:text-saffron group-hover:translate-x-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-xs text-ink-light font-body leading-relaxed mt-0.5 line-clamp-2">
                  {section.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="text-center text-xs text-ink-light font-body mt-5 pt-4 border-t" style={{ borderColor: 'oklch(0.35 0.14 20 / 0.10)' }}>
        Click any section to scroll directly to it
      </p>
    </div>
  );
}

import { MessageCircle, ExternalLink, Heart, MapPin, Phone, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Offers', href: '#offers' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'ramas-batters');

  return (
    <footer style={{ backgroundColor: '#1A0A0A' }} className="text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/company-logo-round.dim_400x400.png"
                alt="Rama's Idly And Dosa Batters"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-lg font-bold text-white">Rama's</p>
                <p className="text-xs text-white/60 font-body">Idly & Dosa Batters</p>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5 font-body">
              Authentic home-made batters crafted with love and tradition. Bringing the taste of South India to your table.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/918143497999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 font-body"
                style={{ backgroundColor: '#25D366', borderRadius: '6px' }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://zomato.onelink.me/xqzv/v2xa8r5r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 font-body"
                style={{ backgroundColor: '#E23744', borderRadius: '6px' }}
              >
                <ExternalLink className="w-4 h-4" />
                Zomato
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-saffron">
              Quick Links
            </h4>
            <div className="w-8 h-0.5 rounded-full mb-4 bg-saffron" />
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/65 hover:text-white text-sm transition-all duration-200 font-body hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-saffron">
              Our Products
            </h4>
            <div className="w-8 h-0.5 rounded-full mb-4 bg-saffron" />
            <ul className="space-y-2">
              {['Idly Batter — ₹45', 'Dosa Batter — ₹45', 'Vada Batter — ₹100', 'Ragi Dosa Batter — ₹60', 'Ragi Idly Batter — ₹60'].map(item => (
                <li key={item}>
                  <span className="text-white/65 text-sm font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-saffron">
              Contact Us
            </h4>
            <div className="w-8 h-0.5 rounded-full mb-4 bg-saffron" />
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-saffron" />
                <span className="text-white/65 text-sm font-body leading-relaxed">
                  21-9-222 Madhura Nagar, Vijayawada, AP 520011
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-saffron" />
                <a href="tel:+918143497999" className="text-white/65 hover:text-white text-sm font-body transition-colors">
                  +91 81434 97999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-saffron" />
                <span className="text-white/65 text-sm font-body leading-relaxed">
                  Mon–Sat: 6AM–8PM<br />Sun: 6AM–12PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t" style={{ borderColor: 'rgba(212,130,10,0.25)' }} />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-body text-center sm:text-left">
            © {new Date().getFullYear()} Rama's Idly And Dosa Batters. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-body flex items-center gap-1">
            Built with <Heart className="w-3 h-3 fill-current mx-1 text-saffron" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors ml-1"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

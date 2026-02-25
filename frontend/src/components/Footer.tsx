import { useState } from 'react';
import { MessageCircle, Heart, MapPin, Phone, PhoneCall, Clock, Mail, Map, X } from 'lucide-react';
import { SiZomato } from 'react-icons/si';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import Sitemap from './Sitemap';

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
  const [sitemapOpen, setSitemapOpen] = useState(false);

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
                alt="Rama's Home Foods - Traditional South Indian Fermented Batters"
                className="w-12 h-12 object-cover"
                style={{ borderRadius: '50%' }}
              />
              <div>
                <p className="font-display font-bold text-lg leading-tight text-saffron">Rama's Home Foods</p>
                <p className="text-xs text-white/60 font-body leading-tight">Idly and Dosa Batters</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-body mb-5">
              Authentic South Indian batters made fresh daily with traditional recipes. Est. 01-08-2025 — running successfully with hygiene &amp; quality.
            </p>
            {/* Order Links */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/918143497999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 font-semibold text-sm font-body text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: '#25D366', borderRadius: '6px' }}
                aria-label="Order Rama's Home Foods batters via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Order via WhatsApp
              </a>
              <a
                href="https://zomato.onelink.me/xqzv/v2xa8r5r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 font-semibold text-sm font-body text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: '#E23744', borderRadius: '6px' }}
                aria-label="Order Rama's Home Foods batters on Zomato"
              >
                <SiZomato className="w-4 h-4" aria-hidden="true" />
                Order on Zomato
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-saffron mb-5 text-base uppercase tracking-wide">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5 list-none m-0 p-0">
                {navLinks.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/70 hover:text-saffron transition-colors text-sm font-body"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setSitemapOpen(true)}
                    className="inline-flex items-center gap-1.5 text-white/70 hover:text-saffron transition-colors text-sm font-body"
                    aria-label="Open site navigation map"
                  >
                    <Map className="w-3.5 h-3.5" aria-hidden="true" />
                    Sitemap
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-saffron mb-5 text-base uppercase tracking-wide">Our Products</h4>
            <nav aria-label="Products navigation">
              <ul className="space-y-2.5 list-none m-0 p-0">
                {['Idly Batter', 'Dosa Batter', 'Vada Batter', 'Ragi Idly Batter', 'Ragi Dosa Batter'].map(p => (
                  <li key={p}>
                    <button
                      onClick={() => scrollTo('#products')}
                      className="text-white/70 hover:text-saffron transition-colors text-sm font-body"
                      aria-label={`View ${p} product`}
                    >
                      {p}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-saffron mb-5 text-base uppercase tracking-wide">Contact Us</h4>
            <address className="not-italic">
              <ul className="space-y-4 list-none m-0 p-0">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-saffron mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-white/70 text-sm font-body leading-relaxed">
                    21-9-222 Madhura Nagar Railway Station, Main Rd, Saibaba Colony, cross, Vijayawada, Andhra Pradesh 520011
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-saffron mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-saffron/80 text-xs font-body font-semibold mb-0.5 uppercase tracking-wide">Marketing Address</p>
                    <span className="text-white/70 text-sm font-body leading-relaxed">
                      Rama's Home Foods<br />
                      21-9-222 Madhura Nagar Railway Station, Main Rd, Saibaba Colony, cross, Vijayawada, Andhra Pradesh, 520011
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-saffron shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:ramashomefoods2025@gmail.com"
                    className="text-white/70 hover:text-saffron transition-colors text-sm font-body break-all"
                    aria-label="Email Rama's Home Foods at ramashomefoods2025@gmail.com"
                  >
                    ramashomefoods2025@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-saffron shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+919296708629"
                    className="text-white/70 hover:text-saffron transition-colors text-sm font-body"
                    aria-label="Call Rama's Home Foods at +91-9296708629"
                  >
                    +91-9296708629
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-saffron shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+918143497999"
                    className="text-white/70 hover:text-saffron transition-colors text-sm font-body"
                    aria-label="Call Rama's Home Foods customer care at +91-8143497999"
                  >
                    +91-8143497999 (Care)
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-saffron mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-white/70 text-sm font-body leading-relaxed">
                    Mon – Sun: 6:00 AM – 10:00 PM
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-6"
        style={{ borderColor: 'rgba(212,130,10,0.2)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-body text-center sm:text-left">
            © {new Date().getFullYear()} Rama's Home Foods Idly and Dosa Batters. All rights reserved.
          </p>
          <p className="text-white/50 text-xs font-body flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-saffron fill-saffron" aria-hidden="true" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:text-saffron-dark transition-colors"
              aria-label="Built with caffeine.ai"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>

      {/* Sitemap Modal */}
      <Dialog open={sitemapOpen} onOpenChange={setSitemapOpen}>
        <DialogContent
          className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          style={{ backgroundColor: 'oklch(0.99 0.005 60)', borderRadius: '12px' }}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Site Navigation Map</DialogTitle>
          </DialogHeader>
          <Sitemap onNavigate={() => setSitemapOpen(false)} />
        </DialogContent>
      </Dialog>
    </footer>
  );
}

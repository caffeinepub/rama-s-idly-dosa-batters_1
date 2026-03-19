import { Menu, ShoppingBasket, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Offers", href: "#offers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream shadow-md border-b-2 border-saffron"
          : "bg-cream/95 border-b border-cream-dark"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Brand */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
            aria-label="Rama's Home Foods - Go to homepage"
          >
            <img
              src="/assets/file_000000005cf472088e0c446671034781-1.png"
              alt="Rama's Home Foods - Idly and Dosa Batters Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded transition-all duration-200 relative group font-body ${
                    activeSection === link.href.replace("#", "")
                      ? "text-spice font-semibold"
                      : "text-ink hover:text-saffron"
                  }`}
                  aria-current={
                    activeSection === link.href.replace("#", "")
                      ? "page"
                      : undefined
                  }
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-200 ${
                      activeSection === link.href.replace("#", "")
                        ? "w-4/5 bg-saffron"
                        : "w-0 group-hover:w-4/5 bg-saffron"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918143497999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-spice hover:-translate-y-0.5 font-body bg-spice rounded"
              aria-label="Order Rama's Home Foods batters on WhatsApp"
            >
              <ShoppingBasket className="w-4 h-4" aria-hidden="true" />
              Order Now
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded text-ink hover:bg-cream-dark transition-colors"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-cream border-t border-cream-dark shadow-lg"
        >
          <ul className="px-4 py-3 space-y-1 list-none m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-colors font-body ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-spice/10 text-spice font-semibold"
                      : "text-ink hover:bg-cream-dark hover:text-saffron"
                  }`}
                  aria-current={
                    activeSection === link.href.replace("#", "")
                      ? "page"
                      : undefined
                  }
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/918143497999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-3 rounded text-sm font-semibold text-white bg-spice font-body"
                aria-label="Order Rama's Home Foods batters on WhatsApp"
              >
                <ShoppingBasket className="w-4 h-4" aria-hidden="true" />
                Order on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

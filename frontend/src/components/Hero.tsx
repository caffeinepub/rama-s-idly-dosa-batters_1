import { ChevronDown, MessageCircle, Star } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1440x800.png')" }}
      />

      {/* Deep spice gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(42,10,5,0.92) 0%, rgba(90,30,20,0.80) 40%, rgba(90,30,20,0.45) 70%, rgba(20,8,4,0.25) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-6 animate-fade-in-up">
            <img
              src="/assets/file_000000005cf472088e0c446671034781-1.png"
              alt="Rama's Idly And Dosa Batters"
              className="w-40 h-40 md:w-52 md:h-52 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl font-semibold mb-2 animate-fade-in-up tracking-widest uppercase font-body"
            style={{ color: '#E89A20', animationDelay: '0.2s' }}
          >
            Fresh • Hygienic • Authentic
          </p>

          <p
            className="text-white/80 text-base md:text-lg mb-8 max-w-lg leading-relaxed animate-fade-in-up font-body"
            style={{ animationDelay: '0.3s' }}
          >
            Handcrafted batters made with love, using traditional stone-ground recipes passed down through generations. Taste the difference of authentic home-made quality.
          </p>

          {/* Star Rating */}
          <div
            className="flex items-center gap-2 mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.35s' }}
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#E89A20' }} />
              ))}
            </div>
            <span className="text-white/80 text-sm font-body">Trusted by 500+ happy families</span>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="https://wa.me/918143497999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white text-base transition-all duration-200 hover:shadow-saffron hover:-translate-y-1 font-body"
              style={{ backgroundColor: '#D4820A', borderRadius: '6px' }}
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white text-base border-2 border-white/40 hover:bg-white/10 transition-all duration-200 hover:-translate-y-1 font-body"
              style={{ borderRadius: '6px' }}
            >
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}

import { Tag, ExternalLink, MessageCircle, Gift } from 'lucide-react';

const offers = [
  {
    title: 'First Order Discount',
    description: 'Get 10% off on your very first order. Use code WELCOME10 at checkout.',
    tag: 'New Customers',
    tagColor: '#7B2D2D',
  },
  {
    title: 'Bulk Order Savings',
    description: 'Order 5 kg or more and save ₹20 per kg. Perfect for families and events.',
    tag: 'Bulk Orders',
    tagColor: '#D4820A',
  },
  {
    title: 'Weekly Subscription',
    description: 'Subscribe for weekly delivery and get 1 free pack every month. Never run out!',
    tag: 'Subscribe & Save',
    tagColor: '#7B2D2D',
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">Special Offers</h2>
          <span className="section-heading-underline mx-auto" />
          <p className="mt-6 text-ink-light max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body">
            Exclusive deals and promotions for our valued customers.
          </p>
        </div>

        {/* Sunday Special Banner */}
        <div
          className="p-8 md:p-10 mb-10 text-white relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #3D1212 0%, #7B2D2D 45%, #D4820A 100%)',
            borderRadius: '8px',
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 bg-white" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2 bg-white" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/20 flex items-center justify-center shrink-0" style={{ borderRadius: '10px' }}>
                <Gift className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-2">
                  <Tag className="w-3 h-3" />
                  <span className="text-xs font-bold tracking-wide uppercase font-body">Sunday Special</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  Buy 2 kg, Get ½ kg FREE!
                </h3>
                <p className="text-white/85 text-base font-body">
                  Buy 2 kg of any batter and get ½ kg batter absolutely FREE! Every Sunday only.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://zomato.onelink.me/xqzv/v2xa8r5r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-spice bg-white hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 font-body text-sm"
                style={{ borderRadius: '6px' }}
              >
                <ExternalLink className="w-4 h-4" />
                Order on Zomato
              </a>
              <a
                href="https://wa.me/918143497999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-white/20 border border-white/40 hover:bg-white/30 transition-all duration-200 hover:-translate-y-0.5 font-body text-sm"
                style={{ borderRadius: '6px' }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map(offer => (
            <div
              key={offer.title}
              className="bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-t-4"
              style={{ borderTopColor: offer.tagColor, borderRadius: '8px' }}
            >
              <span
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold text-white mb-4 font-body"
                style={{ backgroundColor: offer.tagColor, borderRadius: '4px' }}
              >
                <Tag className="w-3 h-3" />
                {offer.tag}
              </span>
              <h3 className="font-display text-xl font-bold text-spice mb-3">{offer.title}</h3>
              <p className="text-ink-light text-sm leading-relaxed font-body">{offer.description}</p>
              <a
                href="https://wa.me/918143497999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold transition-colors font-body text-saffron hover:text-saffron-dark"
              >
                <MessageCircle className="w-4 h-4" />
                Claim Offer
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white text-ink text-sm font-semibold px-4 py-2 shadow-lg border border-cream-dark font-body whitespace-nowrap mb-1" style={{ borderRadius: '8px' }}>
          Chat with us on WhatsApp!
          <div className="absolute bottom-0 left-6 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/918143497999"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse rings */}
        <span
          className="absolute inset-0 rounded-full pulse-ring"
          style={{ backgroundColor: '#25D366' }}
        />
        <span
          className="absolute inset-0 rounded-full pulse-ring"
          style={{ backgroundColor: '#25D366', animationDelay: '0.5s' }}
        />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}

import { useState } from 'react';
import { ShoppingBasket, X, Plus, Minus, MessageCircle, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { BasketItem } from '../App';

interface BasketSummaryProps {
  basket: BasketItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClearBasket: () => void;
}

export default function BasketSummary({ basket, onUpdateQuantity, onClearBasket }: BasketSummaryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const total = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = basket.reduce((sum, item) => sum + item.quantity, 0);

  const buildWhatsAppMessage = () => {
    const lines = basket.map(item => `• ${item.name} x${item.quantity} kg = ₹${item.price * item.quantity}`);
    const message = `Hello! I'd like to place an order from Rama's Idly And Dosa Batters:\n\n${lines.join('\n')}\n\nTotal: ₹${total}\n\nPlease confirm availability and delivery details.`;
    return `https://wa.me/918143497999?text=${encodeURIComponent(message)}`;
  };

  if (basket.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]">
      {/* Panel */}
      {isOpen && (
        <div className="bg-white shadow-2xl border border-cream-dark mb-3 overflow-hidden" style={{ borderRadius: '10px' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-spice">
            <div className="flex items-center gap-2">
              <ShoppingBasket className="w-5 h-5 text-white" />
              <span className="font-display font-bold text-white text-base">Your Basket</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onClearBasket}
                className="p-1.5 bg-white/20 hover:bg-white/30 transition-colors"
                style={{ borderRadius: '6px' }}
                title="Clear basket"
              >
                <Trash2 className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 bg-white/20 hover:bg-white/30 transition-colors"
                style={{ borderRadius: '6px' }}
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Items */}
          <div className="max-h-60 overflow-y-auto px-5 py-3 space-y-3">
            {basket.map(item => (
              <div key={item.id} className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink truncate font-body">{item.name}</p>
                  <p className="text-xs text-ink-light font-body">₹{item.price} / kg</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center border border-cream-dark overflow-hidden" style={{ borderRadius: '6px' }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 hover:bg-cream transition-colors"
                    >
                      <Minus className="w-3 h-3 text-ink" />
                    </button>
                    <span className="px-2 py-1 text-sm font-semibold text-ink min-w-[2rem] text-center font-body">
                      {item.quantity}kg
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 hover:bg-cream transition-colors"
                    >
                      <Plus className="w-3 h-3 text-ink" />
                    </button>
                  </div>
                  <span className="text-sm font-bold w-14 text-right font-body text-saffron">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="px-5 py-3 border-t border-cream-dark">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-ink font-body">Total</span>
              <span className="font-display text-xl font-bold text-saffron">
                ₹{total}
              </span>
            </div>
            <a
              href={buildWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClearBasket}
              className="flex items-center justify-center gap-2 w-full py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 font-body text-sm bg-spice"
              style={{ borderRadius: '8px' }}
            >
              <MessageCircle className="w-4 h-4" />
              Order via WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full px-5 py-3 text-white font-semibold shadow-lg hover:shadow-spice transition-all duration-200 hover:-translate-y-0.5 font-body bg-spice"
        style={{ borderRadius: '10px' }}
      >
        <ShoppingBasket className="w-5 h-5" />
        <span className="flex-1 text-left text-sm">
          {itemCount} kg · ₹{total}
        </span>
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
      </button>
    </div>
  );
}

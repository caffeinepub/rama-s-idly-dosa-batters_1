import { useState } from 'react';
import { Plus, Minus, ShoppingBasket } from 'lucide-react';
import { BasketItem } from '../App';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 'idly-batter',
    name: 'Idly Batter',
    description: 'Perfectly fermented batter for soft, fluffy idlies. Made with premium urad dal and idly rice.',
    price: 45,
    unit: '/ 500g',
    image: '/assets/generated/product-idly-dosa-packets.dim_800x600.png',
    badge: 'Bestseller',
  },
  {
    id: 'dosa-batter',
    name: 'Dosa Batter',
    description: 'Crispy golden dosas every time. Our signature blend for the perfect crunch and flavour.',
    price: 45,
    unit: '/ 500g',
    image: '/assets/generated/product-rustic-kitchen.dim_800x600.png',
  },
  {
    id: 'vada-batter',
    name: 'Vada Batter',
    description: 'Thick, fluffy batter for crispy medu vadas. Ready to fry for the perfect snack.',
    price: 100,
    unit: '/ 500g',
    image: '/assets/generated/product-vada-ragi.dim_800x600.png',
    badge: 'Premium',
  },
  {
    id: 'ragi-dosa-batter',
    name: 'Ragi Dosa Batter',
    description: 'Nutritious finger millet dosa batter. Healthy, delicious, and packed with iron.',
    price: 60,
    unit: '/ 500g',
    image: '/assets/generated/ragi-dosa-batter.dim_400x300.png',
    badge: 'Healthy',
  },
  {
    id: 'ragi-idly-batter',
    name: 'Ragi Idly Batter',
    description: 'Soft ragi idlies for a nutritious breakfast. Perfect blend of taste and health.',
    price: 60,
    unit: '/ 500g',
    image: '/assets/generated/ragi-idly-batter.dim_400x300.png',
    badge: 'Healthy',
  },
];

interface ProductsProps {
  onAddToBasket: (item: Omit<BasketItem, 'quantity'>) => void;
}

function ProductCard({ product, onAddToBasket }: { product: Product; onAddToBasket: ProductsProps['onAddToBasket'] }) {
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      onAddToBasket({ id: product.id, name: product.name, price: product.price });
    }
    setQty(1);
  };

  return (
    <div className="bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col" style={{ borderRadius: '8px' }}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.badge && (
          <span
            className="absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white font-body"
            style={{ backgroundColor: '#D4820A', borderRadius: '4px' }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-lg font-bold text-spice leading-tight">{product.name}</h3>
          <div className="ml-2 shrink-0">
            <span
              className="inline-flex items-center px-3 py-1 text-sm font-bold text-white font-body"
              style={{ backgroundColor: '#D4820A', borderRadius: '4px' }}
            >
              ₹{product.price}
              <span className="text-xs font-normal ml-1 opacity-90">{product.unit}</span>
            </span>
          </div>
        </div>

        <p className="text-sm text-ink-light leading-relaxed mb-4 flex-1 font-body">{product.description}</p>

        {/* Quantity + Add */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="flex items-center border border-cream-dark overflow-hidden" style={{ borderRadius: '6px' }}>
            <button
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="px-3 py-2 text-ink hover:bg-cream transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-3 py-2 text-sm font-semibold text-ink min-w-[2rem] text-center font-body">
              {qty}
            </span>
            <button
              onClick={() => setQty(q => q + 1)}
              className="px-3 py-2 text-ink hover:bg-cream transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button
            onClick={handleAdd}
            className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-spice hover:-translate-y-0.5 font-body bg-spice"
            style={{ borderRadius: '6px' }}
          >
            <ShoppingBasket className="w-4 h-4" />
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products({ onAddToBasket }: ProductsProps) {
  return (
    <section id="products" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">Our Products</h2>
          <span className="section-heading-underline mx-auto" />
          <p className="mt-6 text-ink-light max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body">
            Freshly prepared batters delivered to your doorstep. Choose from our range of authentic South Indian batters.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToBasket={onAddToBasket} />
          ))}
        </div>
      </div>
    </section>
  );
}

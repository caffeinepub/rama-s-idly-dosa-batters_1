import { Minus, Plus, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import type { BasketItem } from "../App";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: "idly-batter",
    name: "Idly Batter",
    description:
      "Perfectly fermented batter for soft, fluffy idlies. Made with premium urad dal and idly rice.",
    price: 50,
    unit: "/ 1 kg",
    image: "/assets/generated/product-idly-batter-pot2.dim_800x600.png",
    imageAlt:
      "Idly Batter - 1kg container of traditional fermented idly batter made with urad dal and idly rice",
    badge: "Bestseller",
  },
  {
    id: "dosa-batter",
    name: "Dosa Batter",
    description:
      "Crispy golden dosas every time. Our signature blend for the perfect crunch and flavour.",
    price: 50,
    unit: "/ 1 kg",
    image: "/assets/generated/product-rustic-kitchen.dim_800x600.png",
    imageAlt:
      "Dosa Batter - 1kg of traditional fermented dosa batter for crispy golden dosas",
  },
  {
    id: "vada-batter",
    name: "Vada Batter",
    description:
      "Thick, fluffy batter for crispy medu vadas. Ready to fry for the perfect snack.",
    price: 130,
    unit: "/ 1 kg",
    image: "/assets/generated/product-vada-ragi.dim_800x600.png",
    imageAlt:
      "Vada Batter - 1kg premium fermented batter for crispy medu vadas",
    badge: "Premium",
  },
  {
    id: "ragi-idly-batter",
    name: "Ragi Idly Batter",
    description:
      "Soft ragi idlies for a nutritious breakfast. Perfect blend of taste and health.",
    price: 60,
    unit: "/ 1 kg",
    image: "/assets/generated/ragi-idly-batter.dim_400x300.png",
    imageAlt:
      "Ragi Idly Batter - 1kg healthy finger millet fermented batter for nutritious ragi idlies",
    badge: "Healthy",
  },
  {
    id: "ragi-dosa-batter",
    name: "Ragi Dosa Batter",
    description:
      "Nutritious finger millet dosa batter. Healthy, delicious, and packed with iron.",
    price: 60,
    unit: "/ 1 kg",
    image: "/assets/generated/ragi-dosa-batter.dim_400x300.png",
    imageAlt:
      "Ragi Dosa Batter - 1kg healthy finger millet fermented batter for nutritious ragi dosas packed with iron",
    badge: "Healthy",
  },
];

interface ProductsProps {
  onAddToBasket: (item: Omit<BasketItem, "quantity">) => void;
}

function ProductCard({
  product,
  onAddToBasket,
}: { product: Product; onAddToBasket: ProductsProps["onAddToBasket"] }) {
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    onAddToBasket({
      id: product.id,
      name: product.name,
      price: product.price * qty,
    });
    setQty(1);
  };

  return (
    <article
      className="bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
      style={{ borderRadius: "8px" }}
      aria-label={`${product.name} - \u20b9${product.price} per kg`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.badge && (
          <span
            className="absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white font-body"
            style={{ backgroundColor: "#D4820A", borderRadius: "4px" }}
            aria-label={`${product.badge} product`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-lg font-bold text-spice leading-tight">
            {product.name}
          </h3>
          <div className="ml-2 shrink-0">
            <span
              className="inline-flex items-center px-3 py-1 text-sm font-bold text-white font-body"
              style={{ backgroundColor: "#D4820A", borderRadius: "4px" }}
              aria-label={`Price: \u20b9${product.price} per kg`}
            >
              \u20b9{product.price}
              <span className="text-xs font-normal ml-1 opacity-90">
                {product.unit}
              </span>
            </span>
          </div>
        </div>

        <p className="text-sm text-ink-light leading-relaxed mb-4 flex-1 font-body">
          {product.description}
        </p>

        {/* Quantity + Add */}
        <div className="flex items-center gap-3 mt-auto">
          <fieldset
            className="flex items-center border border-cream-dark overflow-hidden"
            style={{ borderRadius: "6px" }}
            aria-label={`Quantity selector for ${product.name}`}
          >
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-3 py-2 text-ink hover:bg-cream transition-colors"
              aria-label={`Decrease quantity of ${product.name}`}
            >
              <Minus className="w-3 h-3" aria-hidden="true" />
            </button>
            <span
              className="px-3 py-2 text-sm font-semibold text-ink min-w-[2rem] text-center font-body"
              aria-live="polite"
            >
              {qty} kg
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="px-3 py-2 text-ink hover:bg-cream transition-colors"
              aria-label={`Increase quantity of ${product.name}`}
            >
              <Plus className="w-3 h-3" aria-hidden="true" />
            </button>
          </fieldset>
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-spice hover:-translate-y-0.5 font-body bg-spice"
            style={{ borderRadius: "6px" }}
            aria-label={`Add ${qty} kg of ${product.name} to basket`}
          >
            <ShoppingBasket className="w-4 h-4" aria-hidden="true" />
            Add to Basket
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Products({ onAddToBasket }: ProductsProps) {
  return (
    <section id="products" aria-label="Our Products" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">Our Products</h2>
          <span
            className="section-heading-underline mx-auto"
            aria-hidden="true"
          />
          <p className="mt-6 text-ink-light max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body">
            Freshly prepared batters delivered to your doorstep. Choose from our
            range of authentic South Indian batters.
          </p>
          <p className="mt-2 text-sm font-semibold text-spice font-body">
            * Delivery charge applicable
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToBasket={onAddToBasket}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

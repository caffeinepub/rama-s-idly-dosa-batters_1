import { useState } from "react";
import AboutUs from "./components/AboutUs";
import BasketSummary from "./components/BasketSummary";
import Contact from "./components/Contact";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import WhyChooseUs from "./components/WhyChooseUs";

export interface BasketItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

function App() {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (item: Omit<BasketItem, "quantity">) => {
    setBasket((prev) => {
      const existing = prev.find((b) => b.id === item.id);
      if (existing) {
        return prev.map((b) =>
          b.id === item.id ? { ...b, quantity: b.quantity + 1 } : b,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setBasket((prev) => prev.filter((b) => b.id !== id));
    } else {
      setBasket((prev) =>
        prev.map((b) => (b.id === id ? { ...b, quantity } : b)),
      );
    }
  };

  const clearBasket = () => setBasket([]);

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutUs />
        <Products onAddToBasket={addToBasket} />
        <WhyChooseUs />
        <Offers />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <BasketSummary
        basket={basket}
        onUpdateQuantity={updateQuantity}
        onClearBasket={clearBasket}
      />
    </div>
  );
}

export default App;

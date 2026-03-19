import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Vijayawada",
    rating: 5,
    review:
      "The idly batter is absolutely perfect! My family loves the soft, fluffy idlies. The taste is exactly like home-made. Highly recommend!",
    initials: "PS",
  },
  {
    name: "Ravi Kumar",
    location: "Vijayawada",
    rating: 5,
    review:
      "Best dosa batter in Vijayawada! The dosas come out crispy and golden every single time. Fresh delivery right to my door.",
    initials: "RK",
  },
  {
    name: "Lakshmi Devi",
    location: "Vijayawada",
    rating: 5,
    review:
      "I switched to Rama's batters 6 months ago and never looked back. The ragi idly batter is a game-changer for healthy breakfasts!",
    initials: "LD",
  },
  {
    name: "Suresh Babu",
    location: "Vijayawada",
    rating: 5,
    review:
      "Excellent quality and very hygienic. The vada batter makes perfect crispy vadas. Great service and always on time delivery.",
    initials: "SB",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? "fill-current" : "opacity-30"}`}
          style={{ color: "#D4820A" }}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">What Our Customers Say</h2>
          <span className="section-heading-underline mx-auto" />
          <p className="mt-6 text-ink-light max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body">
            Don't just take our word for it — hear from our happy customers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-t-4 flex flex-col"
              style={{ borderTopColor: "#D4820A", borderRadius: "8px" }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 mb-3 opacity-15 text-spice" />

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p className="text-ink-light text-sm leading-relaxed mt-3 mb-4 flex-1 font-body italic">
                "{review.review}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-cream-dark">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 bg-spice">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm font-display text-spice">
                    {review.name}
                  </p>
                  <p className="text-xs text-ink-light font-body">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="text-center text-xs text-ink-light mt-6 sm:hidden font-body">
          ← Scroll to see more reviews →
        </p>
      </div>
    </section>
  );
}

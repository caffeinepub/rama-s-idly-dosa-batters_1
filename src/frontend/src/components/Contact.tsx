import {
  Ban,
  CheckCircle,
  Clock,
  Droplets,
  ExternalLink,
  FlaskConical,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
} from "lucide-react";

const qualityHighlights = [
  { icon: Droplets, label: "Pure RO Water" },
  { icon: Ban, label: "No Preservatives" },
  { icon: Leaf, label: "Naturally Fermenting" },
  { icon: FlaskConical, label: "No Salt / No Soda" },
];

const GOOGLE_MAPS_LINK = "https://share.google/Dud2jLQRNf8UdFARO";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact Us" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">Contact Us</h2>
          <span
            className="section-heading-underline mx-auto"
            aria-hidden="true"
          />
          <p className="mt-4 text-ink-light max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body">
            We'd love to hear from you. Reach out for orders, queries, or
            feedback.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            {/* Business Name & FSSAI */}
            <div
              className="bg-white p-5 shadow-card"
              style={{ borderRadius: "8px" }}
            >
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h3 className="font-display font-bold text-spice text-lg leading-tight">
                    Rama's Home Foods
                  </h3>
                  <p className="font-display font-semibold text-spice/80 text-sm">
                    Idly and Dosa Batters
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold font-body text-white shrink-0"
                  style={{ backgroundColor: "#2E7D32", borderRadius: "20px" }}
                  aria-label="FSSAI Approved food safety certification"
                >
                  <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  FSSAI Approved
                </span>
              </div>
              <p className="mt-2 text-xs text-ink-light font-body">
                Est. 01-08-2025 · Running successfully with hygiene &amp;
                quality
              </p>
            </div>

            {/* Address */}
            <div
              className="bg-white p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ borderRadius: "8px" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-3"
                style={{
                  backgroundColor: "oklch(0.35 0.14 20 / 0.08)",
                  borderRadius: "6px",
                }}
                aria-hidden="true"
              >
                <MapPin className="w-5 h-5 text-spice" />
              </div>
              <h4 className="font-display font-bold text-spice mb-1 text-sm">
                Address
              </h4>
              <address className="text-ink-light text-sm font-body leading-relaxed not-italic">
                21-9-222 Madhura Nagar Railway Station,
                <br />
                Main Rd, Saibaba Colony, cross,
                <br />
                Vijayawada, Andhra Pradesh 520011
              </address>
            </div>

            {/* Marketing Address */}
            <div
              className="bg-white p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ borderRadius: "8px" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-3"
                style={{
                  backgroundColor: "oklch(0.35 0.14 20 / 0.08)",
                  borderRadius: "6px",
                }}
                aria-hidden="true"
              >
                <MapPin className="w-5 h-5 text-saffron" />
              </div>
              <h4 className="font-display font-bold text-spice mb-1 text-sm">
                Marketing Address
              </h4>
              <address className="text-ink-light text-sm font-body leading-relaxed not-italic">
                Rama's Home Foods
                <br />
                21-9-222 Madhura Nagar Railway Station,
                <br />
                Main Rd, Saibaba Colony, cross,
                <br />
                Vijayawada, Andhra Pradesh, 520011
              </address>
            </div>

            {/* Email */}
            <div
              className="bg-white p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ borderRadius: "8px" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-3"
                style={{
                  backgroundColor: "oklch(0.35 0.14 20 / 0.08)",
                  borderRadius: "6px",
                }}
                aria-hidden="true"
              >
                <Mail className="w-5 h-5 text-spice" />
              </div>
              <h4 className="font-display font-bold text-spice mb-1 text-sm">
                Email
              </h4>
              <a
                href="mailto:ramashomefoods2025@gmail.com"
                className="text-ink-light text-sm font-body hover:text-saffron transition-colors break-all"
                aria-label="Send email to Rama's Home Foods at ramashomefoods2025@gmail.com"
              >
                ramashomefoods2025@gmail.com
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="bg-white p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
                style={{ borderRadius: "8px" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-3"
                  style={{
                    backgroundColor: "oklch(0.35 0.14 20 / 0.08)",
                    borderRadius: "6px",
                  }}
                  aria-hidden="true"
                >
                  <Phone className="w-5 h-5 text-spice" />
                </div>
                <h4 className="font-display font-bold text-spice mb-1 text-sm">
                  Phone
                </h4>
                <a
                  href="tel:+919296708629"
                  className="text-ink-light text-sm font-body hover:text-saffron transition-colors"
                  aria-label="Call Rama's Home Foods at +91-9296708629"
                >
                  +91-9296708629
                </a>
              </div>

              <div
                className="bg-white p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
                style={{ borderRadius: "8px" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-3"
                  style={{
                    backgroundColor: "oklch(0.35 0.14 20 / 0.08)",
                    borderRadius: "6px",
                  }}
                  aria-hidden="true"
                >
                  <PhoneCall className="w-5 h-5 text-spice" />
                </div>
                <h4 className="font-display font-bold text-spice mb-1 text-sm">
                  Customer Care
                </h4>
                <a
                  href="tel:+918143497999"
                  className="text-ink-light text-sm font-body hover:text-saffron transition-colors"
                  aria-label="Call Rama's Home Foods customer care at +91-8143497999"
                >
                  +91-8143497999
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div
              className="bg-white p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ borderRadius: "8px" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-3"
                style={{
                  backgroundColor: "oklch(0.35 0.14 20 / 0.08)",
                  borderRadius: "6px",
                }}
                aria-hidden="true"
              >
                <Clock className="w-5 h-5 text-spice" />
              </div>
              <h4 className="font-display font-bold text-spice mb-1 text-sm">
                Business Hours
              </h4>
              <p className="text-ink-light text-sm font-body leading-relaxed">
                Monday – Sunday
                <br />
                6:00 AM – 10:00 PM
              </p>
            </div>

            {/* Quality Highlights */}
            <div
              className="bg-white p-5 shadow-card"
              style={{ borderRadius: "8px" }}
            >
              <h4 className="font-display font-bold text-spice mb-3 text-sm">
                Our Quality Promise
              </h4>
              <ul
                className="grid grid-cols-2 gap-2 list-none m-0 p-0"
                aria-label="Quality highlights"
              >
                {qualityHighlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 px-3 py-2"
                    style={{
                      backgroundColor: "oklch(0.35 0.14 20 / 0.06)",
                      borderRadius: "6px",
                    }}
                  >
                    <Icon
                      className="w-4 h-4 text-saffron shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold font-body text-spice">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918143497999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 font-semibold text-white transition-all duration-200 hover:shadow-spice hover:-translate-y-0.5 font-body bg-spice"
              style={{ borderRadius: "8px" }}
              aria-label="Order Rama's Home Foods batters via WhatsApp at +91-8143497999"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Order via WhatsApp — +91-8143497999
            </a>
          </div>

          {/* Google Maps */}
          <div className="flex flex-col gap-4">
            <div
              className="overflow-hidden shadow-card border-2 flex-1"
              style={{
                borderColor: "oklch(0.35 0.14 20 / 0.2)",
                borderRadius: "8px",
                minHeight: "460px",
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=21-9-222+Madhura+Nagar+Railway+Station,+Main+Rd,+Saibaba+Colony,+Vijayawada,+Andhra+Pradesh+520011&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "460px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rama's Home Foods Idly and Dosa Batters Location - Vijayawada, Andhra Pradesh"
                aria-label="Google Maps showing Rama's Home Foods location in Vijayawada, Andhra Pradesh"
              />
            </div>

            {/* View on Google Maps CTA */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 font-semibold transition-all duration-200 hover:-translate-y-0.5 font-body border-2"
              style={{
                borderRadius: "8px",
                color: "oklch(0.35 0.14 20)",
                borderColor: "oklch(0.35 0.14 20 / 0.35)",
                backgroundColor: "oklch(0.35 0.14 20 / 0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "oklch(0.35 0.14 20 / 0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "oklch(0.35 0.14 20 / 0.06)";
              }}
              aria-label="View Rama's Home Foods location on Google Maps"
            >
              <MapPin className="w-5 h-5 text-spice" aria-hidden="true" />
              <span className="text-spice">View on Google Maps</span>
              <ExternalLink
                className="w-4 h-4 text-spice/60"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

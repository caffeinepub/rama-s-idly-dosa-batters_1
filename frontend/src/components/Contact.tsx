import { MapPin, Phone, Clock, MessageCircle, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    lines: [
      '21-9-222 Madhura Nagar Railway Station,',
      'Main Rd, Saibaba Colony, cross,',
      'Vijayawada, Andhra Pradesh 520011',
    ],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 81434 97999', '+91 81434 97999'],
    link: 'tel:+918143497999',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Sat: 6:00 AM – 8:00 PM', 'Sunday: 6:00 AM – 12:00 PM'],
  },
  {
    icon: Mail,
    title: 'WhatsApp Orders',
    lines: ['Order via WhatsApp for', 'quick & easy delivery'],
    link: 'https://wa.me/918143497999',
    isWhatsApp: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">Get In Touch</h2>
          <span className="section-heading-underline mx-auto" />
          <p className="mt-6 text-ink-light max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body">
            We'd love to hear from you. Reach out for orders, queries, or feedback.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {contactInfo.map(({ icon: Icon, title, lines, link, isWhatsApp }) => (
                <div
                  key={title}
                  className="bg-white p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
                  style={{ borderRadius: '8px' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-3"
                    style={{ backgroundColor: 'oklch(0.35 0.14 20 / 0.08)', borderRadius: '6px' }}
                  >
                    <Icon className="w-5 h-5 text-spice" />
                  </div>
                  <h4 className="font-display font-bold text-spice mb-2 text-sm">{title}</h4>
                  {lines.map((line, i) => (
                    <p key={i} className="text-ink-light text-sm font-body leading-relaxed">
                      {line}
                    </p>
                  ))}
                  {link && (
                    <a
                      href={link}
                      target={isWhatsApp ? '_blank' : undefined}
                      rel={isWhatsApp ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 mt-2 text-xs font-semibold font-body transition-colors text-saffron hover:text-saffron-dark"
                    >
                      <MessageCircle className="w-3 h-3" />
                      {isWhatsApp ? 'Chat Now' : 'Call Now'}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918143497999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 font-semibold text-white transition-all duration-200 hover:shadow-spice hover:-translate-y-0.5 font-body bg-spice"
              style={{ borderRadius: '8px' }}
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp — +91 81434 97999
            </a>
          </div>

          {/* Google Maps */}
          <div
            className="overflow-hidden shadow-card border-2"
            style={{ borderColor: 'oklch(0.35 0.14 20 / 0.2)', borderRadius: '8px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzIyLjMiTiA4MMKwMzgnNTIuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rama's Idly And Dosa Batters Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

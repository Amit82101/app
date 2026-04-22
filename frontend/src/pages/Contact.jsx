import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { CLINIC, buildWhatsAppUrl } from "../lib/doctor";

export default function Contact() {
  return (
    <div data-testid="contact-page">
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 text-center">
          <div className="text-sm uppercase tracking-[0.12em] font-semibold text-[#2563EB]">
            Contact
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#0F2C59] max-w-3xl mx-auto leading-tight">
            Visit, call, or message — we're here.
          </h1>
          <p className="mt-4 text-[#475569] max-w-2xl mx-auto">
            Our team responds to every query, gently and quickly.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-5">
          <ContactCard
            icon={MapPin}
            title="Clinic Address"
            testid="contact-address"
            content={
              <>
                {CLINIC.addressLine1}<br />
                {CLINIC.addressLine2}<br />
                {CLINIC.city}, {CLINIC.state} {CLINIC.pincode}
              </>
            }
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            testid="contact-phone"
            content={
              <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-[#2563EB]">
                {CLINIC.phone}
              </a>
            }
          />
          <ContactCard
            icon={Mail}
            title="Email"
            testid="contact-email"
            content={
              <a href={`mailto:${CLINIC.email}`} className="hover:text-[#2563EB]">
                {CLINIC.email}
              </a>
            }
          />
          <ContactCard
            icon={Clock}
            title="Working Hours"
            testid="contact-hours"
            content={
              <ul className="space-y-1 text-sm">
                {CLINIC.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span className="text-[#475569]">{h.day}</span>
                    <span className="font-medium text-[#0F2C59]">{h.time}</span>
                  </li>
                ))}
              </ul>
            }
          />

          <a
            href={buildWhatsAppUrl("Hi Dr. Chand, I have a general question.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-btn"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1FBD5A]"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm h-full min-h-[450px]">
            <iframe
              title="Clinic location on Google Maps"
              data-testid="google-maps-embed"
              src={CLINIC.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 450 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ icon: Icon, title, content, testid }) {
  return (
    <div
      data-testid={testid}
      className="rounded-2xl border border-slate-100 bg-white p-6 flex gap-4 items-start shadow-sm"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F4F1] text-[#2563EB]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1">
        <div className="text-sm uppercase tracking-[0.1em] font-semibold text-[#2563EB]">
          {title}
        </div>
        <div className="mt-1 text-[#0F2C59]">{content}</div>
      </div>
    </div>
  );
}

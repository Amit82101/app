import { Link } from "react-router-dom";
import { HeartPulse, MapPin, Phone, Mail, Clock } from "lucide-react";
import { CLINIC, DOCTOR, NAV_LINKS } from "../lib/doctor";

export default function Footer() {
  return (
    <footer className="bg-[#0F2C59] text-white" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              <HeartPulse className="h-5 w-5" />
            </span>
            <div>
              <div className="font-semibold">{DOCTOR.name}</div>
              <div className="text-xs text-white/70">{DOCTOR.title}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Compassionate, evidence-based heart care in the heart of Mumbai.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Visit Us
          </div>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[#9FD5F5]" />
              <span>
                {CLINIC.addressLine1},<br />
                {CLINIC.addressLine2}, {CLINIC.city} {CLINIC.pincode}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#9FD5F5]" />
              <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-white">
                {CLINIC.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#9FD5F5]" />
              <a href={`mailto:${CLINIC.email}`} className="hover:text-white">
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Working Hours
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {CLINIC.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-[#9FD5F5]" />
                <div>
                  <div className="font-medium text-white">{h.day}</div>
                  <div className="text-white/70">{h.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Quick Links
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/80 hover:text-white transition-colors"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</div>
          <div>Disclaimer: Content is for information only and is not a substitute for professional medical advice.</div>
        </div>
      </div>
    </footer>
  );
}

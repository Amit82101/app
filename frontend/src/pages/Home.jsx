import { Link } from "react-router-dom";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  ShieldCheck,
  Droplets,
  ClipboardList,
  CheckCircle2,
  Star,
  ArrowRight,
  Award,
  Users,
  Calendar,
  Phone,
} from "lucide-react";

import { DOCTOR, SERVICES, TESTIMONIALS, CLINIC, buildWhatsAppUrl } from "../lib/doctor";

const iconMap = {
  HeartPulse,
  Activity,
  Stethoscope,
  ShieldHeart: ShieldCheck,
  Droplets,
  ClipboardHeart: ClipboardList,
};

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F4F9FF] to-[#FAFCFF]" />
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#E6F4F1] blur-3xl opacity-70 -z-10"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-28 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              15 Years of Cardiac Excellence
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0F2C59] leading-[1.05]">
              Your Health,<br />
              <span className="text-[#2563EB]">Our Priority.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#475569] leading-relaxed max-w-xl">
              Meet {DOCTOR.name}, a trusted {DOCTOR.title.toLowerCase()} in {CLINIC.city} who combines{" "}
              {DOCTOR.experience} years of expertise with genuinely caring,
              one-on-one attention for every patient.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/appointment"
                data-testid="hero-book-btn"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-[#1D4ED8] transition-all"
              >
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                data-testid="hero-services-btn"
                className="inline-flex items-center rounded-full bg-[#E6F4F1] px-7 py-3.5 text-sm font-semibold text-[#0F2C59] hover:bg-[#D1EAE5] transition-colors"
              >
                Our Services
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { icon: Users, label: "5K+ Patients" },
                { icon: Award, label: "15 Yrs Exp." },
                { icon: Calendar, label: "Same-day Appt." },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-[#2563EB]" />
                  <span className="text-sm font-medium text-[#0F2C59]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#E6F4F1] to-[#DBEAFE] -z-10 blur-xl" />
              <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/60 border-4 border-white">
                <img
                  src={DOCTOR.photo}
                  alt={`${DOCTOR.name}, ${DOCTOR.title}`}
                  className="w-full h-[460px] object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-10 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F4F1]">
                  <HeartPulse className="h-5 w-5 text-[#2563EB]" />
                </span>
                <div>
                  <div className="text-xs text-[#475569]">Board Certified</div>
                  <div className="text-sm font-semibold text-[#0F2C59]">
                    MBBS, MD, DM Cardiology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.12em] font-semibold text-[#2563EB]">
              About the Doctor
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0F2C59]">
              Honest advice. Gentle hands. Long-term care.
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#475569] leading-relaxed">
              {DOCTOR.shortBio}
            </p>
            <Link
              to="/about"
              data-testid="home-about-link"
              className="mt-6 inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all"
            >
              Read Dr. Sharma's story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
            <img
              src={DOCTOR.clinicPhoto}
              alt="Modern clinic interior"
              className="w-full h-[340px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.12em] font-semibold text-[#2563EB]">
                What we treat
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0F2C59]">
                Comprehensive heart care, under one roof
              </h2>
            </div>
            <Link
              to="/services"
              data-testid="home-services-link"
              className="inline-flex items-center gap-2 text-[#0F2C59] font-semibold hover:text-[#2563EB]"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => {
              const Icon = iconMap[s.icon] || HeartPulse;
              return (
                <article
                  key={s.title}
                  data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-0.5 transition-all"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F4F1] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[#0F2C59]">{s.title}</h3>
                  <p className="mt-2 text-[#475569] leading-relaxed">{s.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm uppercase tracking-[0.12em] font-semibold text-[#2563EB]">
            Patient Stories
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0F2C59]">
            Trusted by thousands across Mumbai
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={t.name}
              data-testid={`testimonial-${idx}`}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[#475569] leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F4F1] text-[#0F2C59] font-semibold">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="font-semibold text-[#0F2C59]">{t.name}</div>
                  <div className="text-xs text-[#475569]">{t.location}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* EMERGENCY CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div
          data-testid="emergency-cta"
          className="relative overflow-hidden rounded-3xl bg-[#0F2C59] text-white p-10 md:p-14"
        >
          <div
            className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#2563EB]/40 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#9FD5F5]">
                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                24/7 Emergency Helpline
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
                Chest pain or breathing trouble? Don't wait.
              </h2>
              <p className="mt-3 text-white/80 max-w-lg">
                Early action saves lives. Call our emergency line and our team will guide you to the nearest partner hospital immediately.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                data-testid="emergency-call-btn"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0F2C59] px-7 py-3.5 text-sm font-semibold hover:bg-[#E6F4F1] transition-colors"
              >
                <Phone className="h-4 w-4" /> Call {CLINIC.phone}
              </a>
              <a
                href={buildWhatsAppUrl("Hi, this is an urgent query for Dr. Sharma.")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="emergency-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#1FBD5A] transition-colors"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

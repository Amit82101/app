import { Link } from "react-router-dom";
import { CheckCircle2, GraduationCap, Award, HeartHandshake, ArrowRight } from "lucide-react";
import { DOCTOR, ACHIEVEMENTS } from "../lib/doctor";

const qualifications = [
  { year: "2008", title: "MBBS — Grant Medical College, Mumbai" },
  { year: "2012", title: "MD (Cardiology) — AIIMS New Delhi" },
  { year: "2014", title: "DM (Interventional Cardiology) — AIIMS New Delhi" },
  { year: "2016", title: "Fellowship — Cleveland Clinic, Ohio (USA)" },
];

export default function About() {
  return (
    <div data-testid="about-page">
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.12em] font-semibold text-[#2563EB]">
              About {DOCTOR.name}
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#0F2C59] leading-tight">
              A quiet calling for healing hearts.
            </h1>
            <p className="mt-5 text-[#475569] text-base md:text-lg leading-relaxed">
              {DOCTOR.shortBio}
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={DOCTOR.photo}
              alt={DOCTOR.name}
              className="w-full h-[460px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold uppercase tracking-[0.12em]">
              <GraduationCap className="h-4 w-4" /> Qualifications
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0F2C59]">
              Training that spans continents
            </h2>
            <ol className="mt-8 relative border-l-2 border-[#E6F4F1] pl-6 space-y-6">
              {qualifications.map((q) => (
                <li key={q.title} className="relative">
                  <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-white text-xs font-semibold">
                    •
                  </span>
                  <div className="text-xs font-semibold text-[#2563EB]">{q.year}</div>
                  <div className="text-[#0F2C59] font-medium">{q.title}</div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold uppercase tracking-[0.12em]">
              <Award className="h-4 w-4" /> Achievements
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0F2C59]">
              {DOCTOR.experience}+ years. Thousands of grateful patients.
            </h2>
            <ul className="mt-8 space-y-4" data-testid="achievements-list">
              {ACHIEVEMENTS.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#2563EB]" />
                  <span className="text-[#0F2C59]">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#0F2C59] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 grid gap-10 lg:grid-cols-3 items-start">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 text-[#9FD5F5] text-sm font-semibold uppercase tracking-[0.12em]">
              <HeartHandshake className="h-4 w-4" /> Patient Philosophy
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              Our mission
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg md:text-xl leading-relaxed text-white/85">
              “{DOCTOR.philosophy}”
            </p>
            <p className="mt-6 text-sm text-white/60">— {DOCTOR.name}, {DOCTOR.credentials}</p>
            <div className="mt-10">
              <Link
                to="/appointment"
                data-testid="about-book-btn"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#0F2C59] px-7 py-3.5 text-sm font-semibold hover:bg-[#E6F4F1] transition-colors"
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

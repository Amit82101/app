import { Link } from "react-router-dom";
import {
  CheckCircle2,
  GraduationCap,
  Award,
  HeartHandshake,
  ArrowRight,
  Building2,
  Landmark,
  Trophy,
} from "lucide-react";
import { DOCTOR, ACHIEVEMENTS, QUALIFICATIONS, ROLES } from "../lib/doctor";

const roleIconMap = { Building2, Landmark };

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
              A renowned physiotherapist leading care across Jharkhand.
            </h1>
            <p className="mt-5 text-[#475569] text-base md:text-lg leading-relaxed">
              {DOCTOR.shortBio}
            </p>
            <p className="mt-4 text-[#475569] text-base md:text-lg leading-relaxed">
              {DOCTOR.longBio}
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={DOCTOR.photo}
              alt={DOCTOR.name}
              className="w-full h-[460px] object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Leadership Roles */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold uppercase tracking-[0.12em]">
          <Building2 className="h-4 w-4" /> Professional Leadership
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0F2C59] max-w-3xl">
          Bridging clinical practice and public welfare
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ROLES.map((r) => {
            const Icon = roleIconMap[r.icon] || Building2;
            return (
              <div
                key={r.title}
                data-testid={`role-${r.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-all flex gap-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F4F1] text-[#2563EB]">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#2563EB]">
                    {r.title}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-[#0F2C59]">{r.org}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Qualifications & Awards */}
      <section className="bg-[#FAFCFF] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold uppercase tracking-[0.12em]">
              <GraduationCap className="h-4 w-4" /> Qualifications
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0F2C59]">
              Credentialed. Certified. Continually learning.
            </h2>
            <ul className="mt-8 space-y-4" data-testid="qualifications-list">
              {QUALIFICATIONS.map((q) => (
                <li
                  key={q.code}
                  className="rounded-2xl border border-slate-100 bg-white p-5 flex gap-4"
                >
                  <span className="shrink-0 inline-flex h-10 min-w-[72px] items-center justify-center rounded-lg bg-[#0F2C59] text-white text-xs font-semibold px-2">
                    {q.code}
                  </span>
                  <div>
                    <div className="font-semibold text-[#0F2C59]">{q.title}</div>
                    <div className="text-sm text-[#475569] mt-0.5">{q.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold uppercase tracking-[0.12em]">
              <Trophy className="h-4 w-4" /> Awards & Recognition
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0F2C59]">
              Recognised for clinical excellence.
            </h2>
            <p className="mt-4 text-[#475569]">
              Dr. Chand's dedication and commitment to healthcare have been
              recognised with several prestigious awards.
            </p>
            <ul className="mt-8 space-y-3" data-testid="awards-list">
              {ACHIEVEMENTS.map((a) => (
                <li
                  key={a.title}
                  className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5 flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Award className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="font-semibold text-[#0F2C59]">{a.title}</div>
                    {a.year && (
                      <div className="text-sm text-[#475569]">{a.year}</div>
                    )}
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-[#2563EB]" />
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
                Book a session <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

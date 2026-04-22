import { Link } from "react-router-dom";
import {
  Bone,
  Hand,
  Syringe,
  Dumbbell,
  Activity,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SERVICES } from "../lib/doctor";

const iconMap = {
  Bone,
  Hand,
  Syringe,
  Dumbbell,
  Activity,
  ShieldCheck,
};

export default function Services() {
  return (
    <div data-testid="services-page">
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 text-center">
          <div className="text-sm uppercase tracking-[0.12em] font-semibold text-[#2563EB]">
            Services
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#0F2C59] max-w-3xl mx-auto leading-tight">
            Physiotherapy that moves you forward
          </h1>
          <p className="mt-5 text-[#475569] max-w-2xl mx-auto text-base md:text-lg">
            From manual therapy and dry needling to sports rehab and post-surgical
            recovery, every treatment is delivered with evidence, empathy and
            clarity.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon] || Bone;
            return (
              <article
                key={s.title}
                data-testid={`services-page-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-0.5 transition-all"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F4F1] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-semibold text-[#0F2C59]">{s.title}</h2>
                <p className="mt-2 text-[#475569] leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-[#0F2C59]">
                    <CheckCircle2 className="h-4 w-4 text-[#2563EB] mt-0.5" />
                    Personalised treatment plan
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#0F2C59]">
                    <CheckCircle2 className="h-4 w-4 text-[#2563EB] mt-0.5" />
                    Transparent pricing
                  </li>
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-[#E6F4F1] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F2C59]">
              Not sure which therapy you need?
            </h2>
            <p className="mt-2 text-[#0F2C59]/80">
              Book a 20-minute assessment and we'll recommend the right path.
            </p>
          </div>
          <Link
            to="/appointment"
            data-testid="services-book-btn"
            className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-[#1D4ED8] transition-all"
          >
            Book Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

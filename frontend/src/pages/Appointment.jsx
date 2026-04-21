import { useState } from "react";
import { MessageCircle, Calendar, Clock, CheckCircle2, User, Mail, Phone, FileText } from "lucide-react";
import { toast } from "sonner";
import { CLINIC, buildWhatsAppUrl } from "../lib/doctor";

const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
];

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () =>
    `Hello Dr. Sharma,\n\nI'd like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nPreferred Date: ${form.date}\nPreferred Time: ${form.time}\n\nMessage: ${form.message || "—"}`;

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[0-9+\-\s()]{8,}$/.test(form.phone)) return "Please enter a valid phone number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email address.";
    if (!form.date) return "Please choose a preferred date.";
    if (!form.time) return "Please select a preferred time slot.";
    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { toast.error(err); return; }
    setSubmitted(true);
    toast.success("Appointment request received! We'll confirm shortly.");
  };

  const onWhatsApp = () => {
    const err = validate();
    if (err) { toast.error(err); return; }
    window.open(buildWhatsAppUrl(buildMessage()), "_blank", "noopener,noreferrer");
  };

  return (
    <div data-testid="appointment-page">
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 text-center">
          <div className="text-sm uppercase tracking-[0.12em] font-semibold text-[#2563EB]">
            Book an Appointment
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#0F2C59] max-w-3xl mx-auto leading-tight">
            A few details, and you're all set.
          </h1>
          <p className="mt-4 text-[#475569] max-w-2xl mx-auto">
            Choose a convenient time or send us a message on WhatsApp — we'll confirm within the hour during working days.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {submitted ? (
            <div
              data-testid="appointment-confirmation"
              className="rounded-3xl border border-green-100 bg-green-50 p-10 text-center"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-[#0F2C59]">
                Thank you, {form.name.split(" ")[0]}!
              </h2>
              <p className="mt-3 text-[#475569]">
                We've received your request for <b>{form.date}</b> at <b>{form.time}</b>. Our
                team will call you at <b>{form.phone}</b> to confirm shortly.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={buildWhatsAppUrl(buildMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="confirmation-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1FBD5A]"
                >
                  <MessageCircle className="h-4 w-4" /> Send details on WhatsApp
                </a>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", date: "", time: "", message: "" }); }}
                  data-testid="book-another-btn"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#0F2C59] hover:bg-slate-50"
                >
                  Book another appointment
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              data-testid="appointment-form"
              className="rounded-3xl border border-slate-100 bg-white p-8 md:p-10 shadow-sm"
              noValidate
            >
              <h2 className="text-xl font-semibold text-[#0F2C59]">Appointment details</h2>
              <p className="text-sm text-[#475569] mt-1">All fields are required.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field icon={User} label="Full Name" testid="form-name">
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="e.g., Priya Mehta"
                    data-testid="input-name"
                    className="fld"
                  />
                </Field>
                <Field icon={Phone} label="Phone Number" testid="form-phone">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+91 98765 43210"
                    data-testid="input-phone"
                    className="fld"
                  />
                </Field>
                <Field icon={Mail} label="Email Address" testid="form-email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    data-testid="input-email"
                    className="fld"
                  />
                </Field>
                <Field icon={Calendar} label="Preferred Date" testid="form-date">
                  <input
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                    min={new Date().toISOString().split("T")[0]}
                    data-testid="input-date"
                    className="fld"
                  />
                </Field>
                <Field icon={Clock} label="Preferred Time" testid="form-time" className="sm:col-span-2">
                  <select
                    value={form.time}
                    onChange={update("time")}
                    data-testid="input-time"
                    className="fld"
                  >
                    <option value="">Select a time slot</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field icon={FileText} label="Message (optional)" testid="form-message" className="sm:col-span-2">
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={4}
                    placeholder="Briefly describe your symptoms or reason for visit"
                    data-testid="input-message"
                    className="fld resize-none"
                  />
                </Field>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  data-testid="submit-appointment-btn"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-[#1D4ED8] transition-all"
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={onWhatsApp}
                  data-testid="submit-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1FBD5A] transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> Book instantly via WhatsApp
                </button>
              </div>
            </form>
          )}

          <style>{`
            .fld {
              width: 100%;
              border: 1px solid #e2e8f0;
              border-radius: 0.75rem;
              padding: 0.75rem 1rem;
              font-size: 0.95rem;
              color: #0f2c59;
              background-color: #fff;
              transition: border-color .2s, box-shadow .2s;
              outline: none;
            }
            .fld:focus {
              border-color: #2563EB;
              box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
            }
          `}</style>
        </div>

        {/* Side info */}
        <aside className="lg:col-span-2 space-y-5">
          <div className="rounded-3xl bg-[#0F2C59] text-white p-8">
            <div className="text-sm uppercase tracking-[0.12em] text-[#9FD5F5] font-semibold">
              Clinic Info
            </div>
            <div className="mt-3 text-lg font-semibold">{CLINIC.name}</div>
            <p className="mt-1 text-white/80 text-sm leading-relaxed">
              {CLINIC.addressLine1},<br />{CLINIC.addressLine2}, {CLINIC.city} {CLINIC.pincode}
            </p>
            <div className="mt-6 space-y-3 text-sm">
              {CLINIC.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="text-white/70">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-8">
            <div className="text-sm uppercase tracking-[0.12em] text-[#2563EB] font-semibold">
              Need help?
            </div>
            <p className="mt-2 text-[#475569] text-sm">
              Prefer talking directly? Call our reception during working hours and we'll find a slot for you.
            </p>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              data-testid="sidebar-call-btn"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0F2C59] hover:bg-[#E6F4F1]"
            >
              <Phone className="h-4 w-4 text-[#2563EB]" /> {CLINIC.phone}
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Field({ icon: Icon, label, children, testid, className = "" }) {
  return (
    <label className={`block ${className}`} data-testid={testid}>
      <span className="flex items-center gap-2 text-xs font-semibold text-[#0F2C59] mb-2">
        <Icon className="h-3.5 w-3.5 text-[#2563EB]" /> {label}
      </span>
      {children}
    </label>
  );
}

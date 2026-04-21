// Doctor profile & clinic configuration (single source of truth)
export const DOCTOR = {
  name: "Dr. Rajesh Sharma",
  title: "Cardiologist",
  credentials: "MBBS, MD (Cardiology), DM (Interventional Cardiology)",
  tagline: "Your Health, Our Priority",
  experience: 15,
  shortBio:
    "Board-certified cardiologist with over 15 years of experience delivering compassionate, evidence-based heart care to patients across Mumbai. Committed to accurate diagnosis, minimally invasive treatment, and lifelong wellness.",
  philosophy:
    "Every heartbeat matters. I believe in listening before prescribing, explaining before treating, and supporting patients through every step of their recovery with honesty and warmth.",
  photo:
    "https://images.pexels.com/photos/19438563/pexels-photo-19438563.jpeg",
  clinicPhoto:
    "https://images.pexels.com/photos/12081340/pexels-photo-12081340.jpeg",
};

export const CLINIC = {
  name: "Sharma Heart Care Clinic",
  addressLine1: "402, Sunshine Medical Plaza",
  addressLine2: "Linking Road, Bandra West",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400050",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "919876543210", // digits only for wa.me
  email: "care@sharmahealthcare.in",
  emergencyPhone: "+91 98765 43210",
  hours: [
    { day: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Emergency only" },
  ],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15087.47!2d72.8278!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c0f89c9c9d%3A0x0!2sBandra%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000",
};

export const ACHIEVEMENTS = [
  "Over 5,000 successful cardiac consultations",
  "Performed 1,200+ angioplasty procedures",
  "Fellow of the Cardiological Society of India",
  "Published in 20+ peer-reviewed journals",
  "Trained at AIIMS New Delhi & Cleveland Clinic",
];

export const SERVICES = [
  {
    icon: "HeartPulse",
    title: "Cardiac Consultation",
    description:
      "Comprehensive evaluation of heart health, risk assessment, and personalised treatment plans for every stage of life.",
  },
  {
    icon: "Activity",
    title: "ECG & Echocardiography",
    description:
      "Same-day, high-resolution ECG and Echo studies to accurately diagnose arrhythmias and structural heart conditions.",
  },
  {
    icon: "Stethoscope",
    title: "Angioplasty & Stenting",
    description:
      "Minimally invasive coronary interventions performed at accredited hospital partners with rapid recovery.",
  },
  {
    icon: "ShieldHeart",
    title: "Hypertension Management",
    description:
      "Long-term blood pressure control through medication tuning, lifestyle coaching and remote monitoring.",
  },
  {
    icon: "Droplets",
    title: "Cholesterol & Lipid Care",
    description:
      "Targeted lipid profile management to reduce heart attack and stroke risk using the latest guidelines.",
  },
  {
    icon: "ClipboardHeart",
    title: "Preventive Heart Screening",
    description:
      "Executive heart health packages designed for early detection — ideal for adults above 30 or with family history.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Mehta",
    location: "Bandra, Mumbai",
    text:
      "Dr. Sharma explained every detail patiently. My father's angioplasty went smoothly and recovery was faster than we expected. Forever grateful.",
  },
  {
    name: "Rohan Iyer",
    location: "Andheri, Mumbai",
    text:
      "Finally a cardiologist who listens. The clinic is spotless, appointments run on time and the ECG report was ready the same day.",
  },
  {
    name: "Anita Desai",
    location: "Santacruz, Mumbai",
    text:
      "My blood pressure has been stable for two years under Dr. Sharma's care. Honest advice, no unnecessary tests — exactly what I needed.",
  },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Appointment", to: "/appointment" },
  { label: "Contact", to: "/contact" },
];

export const buildWhatsAppUrl = (message) => {
  const text = encodeURIComponent(message || `Hello Dr. Sharma, I'd like to book an appointment.`);
  return `https://wa.me/${CLINIC.whatsapp}?text=${text}`;
};

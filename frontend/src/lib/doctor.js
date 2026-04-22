// Doctor profile & clinic configuration (single source of truth)
export const DOCTOR = {
  name: "Dr. Bhaskar Chand",
  shortName: "Dr. Chand",
  title: "Physiotherapist (Ortho) · Director",
  subtitle: "BPT, MPT (Ortho), COMT, CDNP, CSCS",
  credentials: "BPT, MPT (Orthopaedics) · COMT · CDNP · CSCS",
  tagline: "Your Health, Our Priority",
  overline: "Award-Winning Physiotherapist",
  shortBio:
    "Dr. Bhaskar Chand is a renowned orthopaedic physiotherapist and healthcare leader from Jharkhand. As the Director of Healing Hands Physiotherapy Centre, Jamtara, he is dedicated to bringing advanced, evidence-based physiotherapy and hands-on rehabilitation to the region.",
  longBio:
    "In addition to leading Healing Hands, Dr. Chand serves as the Central Head (Jharkhand) of the Physio Art Welfare Foundation, actively working to raise physiotherapy standards across the state and support fellow physiotherapists. His work blends manual therapy, dry needling and sports-science-backed conditioning to help patients move better, recover faster and live stronger — without over-reliance on medication.",
  philosophy:
    "Movement is medicine. I believe in listening carefully, diagnosing precisely, and guiding every patient back to a pain-free, active life with patience, skill and honesty.",
  photo:
    "https://customer-assets.emergentagent.com/job_clinic-connect-196/artifacts/vft1a54x_Dr.%20Bhaskar.jpeg",
  clinicPhoto:
    "https://images.pexels.com/photos/12081340/pexels-photo-12081340.jpeg",
};

export const CLINIC = {
  name: "Healing Hands Physiotherapy Clinic",
  addressLine1: "Newtown, Madanapalli",
  addressLine2: "Jamtara",
  city: "Jamtara",
  state: "Jharkhand",
  pincode: "",
  phone: "+91 78705 05926",
  phoneRaw: "+917870505926",
  whatsapp: "917870505926", // digits only for wa.me
  email: "bhaskarchand7870@gmail.com",
  emergencyPhone: "+91 78705 05926",
  hours: [
    { day: "Mon – Sat", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "9:00 AM – 1:00 PM" },
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=Jamtara%2C%20Jharkhand&output=embed",
};

// Professional roles & foundations
export const ROLES = [
  {
    title: "Director",
    org: "Healing Hands Physiotherapy Centre, Jamtara",
    icon: "Building2",
  },
  {
    title: "Central Head — Jharkhand",
    org: "Physio Art Welfare Foundation",
    icon: "Landmark",
  },
];

export const ACHIEVEMENTS = [
  { title: "Young Physio Achiever Award", year: "2026" },
  { title: "Excellence Doctor Award", year: "" },
  { title: "Chikitsa Ratna Award", year: "2024" },
];

export const QUALIFICATIONS = [
  {
    code: "BPT",
    title: "Bachelor of Physiotherapy",
    desc: "Foundational clinical training in physiotherapy and rehabilitation sciences.",
  },
  {
    code: "MPT (Ortho)",
    title: "Master of Physiotherapy — Orthopaedics",
    desc: "Specialisation in bone, joint, muscle and post-fracture conditions.",
  },
  {
    code: "COMT",
    title: "Certified Orthopaedic Manual Therapist",
    desc: "Advanced hands-on techniques for spine, shoulder and joint disorders.",
  },
  {
    code: "CDNP",
    title: "Certified Dry Needling Practitioner",
    desc: "Precision trigger-point release for chronic pain and muscle tightness.",
  },
  {
    code: "CSCS",
    title: "Certified Strength & Conditioning Specialist",
    desc: "Evidence-based strength programs for recovery, performance and injury prevention.",
  },
];

export const SERVICES = [
  {
    icon: "Bone",
    title: "Orthopaedic Physiotherapy",
    description:
      "Targeted treatment for back pain, neck pain, arthritis and post-fracture rehabilitation — tailored to your recovery goals.",
  },
  {
    icon: "Hand",
    title: "Manual Therapy",
    description:
      "Skilled hands-on techniques (COMT) for spinal, joint and soft-tissue pain relief without reliance on medication.",
  },
  {
    icon: "Syringe",
    title: "Dry Needling",
    description:
      "Precision dry needling (CDNP) to release myofascial trigger points and restore muscle function quickly.",
  },
  {
    icon: "Dumbbell",
    title: "Sports Rehabilitation",
    description:
      "Return-to-sport programs for athletes — strength, mobility and injury-prevention rooted in sports science.",
  },
  {
    icon: "Activity",
    title: "Strength & Conditioning",
    description:
      "CSCS-backed training to rebuild strength, stability and endurance after injury, surgery or long inactivity.",
  },
  {
    icon: "ShieldCheck",
    title: "Post-Surgical Recovery",
    description:
      "Structured rehab for post-operative patients — joint replacements, ACL, rotator cuff and spinal surgeries.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rohit Kumar",
    location: "Jamtara",
    text:
      "My lower back pain vanished after six sessions. Dr. Chand explained every exercise and the dry-needling was practically painless. Highly recommended.",
  },
  {
    name: "Suman Devi",
    location: "Madanapalli",
    text:
      "After my knee replacement I could barely walk. Healing Hands' structured rehab got me walking unaided in weeks. Grateful to the whole team.",
  },
  {
    name: "Amit Singh",
    location: "Jharkhand",
    text:
      "As a local athlete, I needed someone who understood sports injuries. Dr. Chand's conditioning program got me back on the field stronger than before.",
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
  const text = encodeURIComponent(
    message || `Hello Dr. Chand, I'd like to book a physiotherapy appointment.`
  );
  return `https://wa.me/${CLINIC.whatsapp}?text=${text}`;
};

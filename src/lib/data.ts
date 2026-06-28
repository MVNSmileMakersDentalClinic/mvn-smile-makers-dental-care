import { siteConfig, type ClinicLocation } from "./metadata";

export const services = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description:
      "Comprehensive exams, cleanings, fillings, and preventive care to keep your smile healthy year-round.",
    icon: "Stethoscope",
    features: [
      "Routine check-ups & cleanings",
      "Cavity detection & fillings",
      "Gum disease treatment",
      "Oral cancer screenings",
    ],
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with professional whitening, veneers, and bonding tailored to your goals.",
    icon: "Sparkles",
    features: [
      "Professional teeth whitening",
      "Porcelain veneers",
      "Dental bonding",
      "Smile makeovers",
    ],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description:
      "Straighten teeth with modern braces and clear aligners for patients of all ages.",
    icon: "AlignCenter",
    features: [
      "Traditional metal braces",
      "Clear ceramic braces",
      "Invisalign clear aligners",
      "Retainers & follow-up care",
    ],
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacement solutions that restore function and confidence.",
    icon: "CircleDot",
    features: [
      "Single tooth implants",
      "Implant-supported bridges",
      "Full arch restoration",
      "Bone grafting when needed",
    ],
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description:
      "Gentle, kid-friendly dental care in a welcoming environment designed for young patients.",
    icon: "Baby",
    features: [
      "First visit consultations",
      "Fluoride treatments",
      "Sealants for cavity prevention",
      "Habit counseling",
    ],
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    description:
      "Same-day appointments for dental emergencies including pain, trauma, and broken teeth.",
    icon: "Siren",
    features: [
      "Same-day emergency slots",
      "Toothache relief",
      "Broken tooth repair",
      "Knocked-out tooth care",
    ],
  },
];

export const doctors = [
  {
    id: "dr-navin-kumar",
    name: "Dr. Navin Kumar",
    title: "Lead Dentist",
    specialty: "Implantology & Endodontics",
    bio: "Dr. Navin Kumar brings advanced expertise in dental implants and root canal treatments. A graduate of Govt. Dental College & Hospital, Patna, he has pursued specialized certifications in implantology and endodontics from New Delhi.",
    credentials: [
      "MDS (IDST), UP",
      "BDS, Govt. Dental College & Hospital, Patna",
      "Certified Implantologist (New Delhi)",
      "Certified Endodontist (New Delhi)",
    ],
    image: "/doctors/dr-navin-kumar.jpg",
  },
  {
    id: "dr-veena",
    name: "Dr. Veena",
    title: "Aesthetic Dentist",
    specialty: "Cosmetic & Aesthetic Dentistry",
    bio: "Dr. Veena specializes in aesthetic and cosmetic dentistry, helping patients achieve beautiful, confident smiles. She graduated with honours from Govt. Dental College & Hospital, Patna, and is a certified aesthetic dentist from New Delhi.",
    credentials: [
      "BDS (Hons), Govt. Dental College & Hospital, Patna",
      "Certified Aesthetic Dentist (New Delhi)",
    ],
    image: "/doctors/dr-veena.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Patient at Rajendra Nagar",
    rating: 5,
    text: "MVN Smile Makers Dental Care transformed my smile. Dr. Veena did an amazing job with my aesthetic treatment. The entire team was professional, caring, and made me feel comfortable every step of the way.",
  },
  {
    id: 2,
    name: "Rahul Mishra",
    role: "Patient since 2020",
    rating: 5,
    text: "I've always been anxious about dental visits, but Dr. Navin Kumar and his team changed that completely. They explain everything clearly and never rush you. Best dental experience I've ever had in Patna.",
  },
  {
    id: 3,
    name: "Anjali & Vikash Singh",
    role: "Family patients",
    rating: 5,
    text: "We bring our whole family to the New Bypass clinic. The staff always remembers our names and the doctors are wonderful with our children. Truly a community gem in Bihar.",
  },
  {
    id: 4,
    name: "Sanjay Prasad",
    role: "Implant patient, Hilsa",
    rating: 5,
    text: "Dr. Navin Kumar placed my dental implant at the Hilsa branch. It looks and feels completely natural. Having quality implant care close to home in Nalanda district is a blessing.",
  },
  {
    id: 5,
    name: "Meera Kumari",
    role: "Root canal patient",
    rating: 5,
    text: "Dr. Navin Kumar's expertise in endodontics saved my tooth. The procedure was painless and the follow-up care has been outstanding. Highly recommend MVN Smile Makers.",
  },
  {
    id: 6,
    name: "Amit Raj",
    role: "Patient since 2018",
    rating: 5,
    text: "Clean clinics, modern equipment, and a team that genuinely cares. I've referred many friends here across all three locations and they all love it. MVN Smile Makers sets the standard for dental care in Bihar.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/doctors", label: "Doctors" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export const appointmentServices = services.map((s) => ({
  value: s.id,
  label: s.title,
}));

export const appointmentLocations = siteConfig.locations.map((location) => ({
  value: location.id,
  label: location.label,
}));

export type { ClinicLocation };

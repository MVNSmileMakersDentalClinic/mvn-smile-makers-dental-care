import type { Metadata } from "next";

export type ClinicLocation = {
  id: string;
  label: string;
  city: string;
  district?: string;
  state: string;
  lines: string[];
  pincode: string;
  mapUrl: string;
};

export const siteConfig = {
  name: "MVN Smile Makers Dental Care",
  brandShort: {
    line1: "MVN Smile Makers",
    line2: "Dental Care",
  },
  tagline: "Your Trusted Partner in Dental Health",
  description:
    "MVN Smile Makers Dental Care offers comprehensive dental care including implants, endodontics, aesthetics, and general dentistry at three locations in Patna and Hilsa, Bihar. Book your appointment today.",
  url: "https://mvnsmilemakers.vercel.app",
  phones: ["9835938221", "7004417755"],
  email: "hello@mvnsmilemakers.com",
  locations: [
    {
      id: "patna-rajendra-nagar",
      label: "Patna — Rajendra Nagar",
      city: "Patna",
      state: "Bihar",
      lines: [
        "MVN Smile Makers Dental Care",
        "Ram Krishna Plaza, West of Rajendra Nagar Flyover",
      ],
      pincode: "800020",
      mapUrl: "https://maps.app.goo.gl/FjTUSWsQVXnmgKv4A",
    },
    {
      id: "patna-new-bypass",
      label: "Patna — New Bypass",
      city: "Patna",
      state: "Bihar",
      lines: ["Bank of India", "West Ramakrishna Nagar, New Bypass"],
      pincode: "800027",
      mapUrl: "https://maps.app.goo.gl/EYqxX6wzHvFKHEk9A",
    },
    {
      id: "hilsa",
      label: "Hilsa",
      city: "Hilsa",
      district: "Nalanda",
      state: "Bihar",
      lines: ["Sinha Market, Opposite Allahabad Bank"],
      pincode: "801302",
      mapUrl: "https://maps.app.goo.gl/EYqxX6wdhfFKHEk9A",
    },
  ] satisfies ClinicLocation[],
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
};

export function formatPhoneDisplay(phone: string) {
  if (phone.length === 10) {
    return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  }
  return phone;
}

export function getTelLink(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("91") ? `tel:+${digits}` : `tel:+91${digits}`;
}

export function formatLocation(location: ClinicLocation) {
  const locality = location.district
    ? `${location.city}, ${location.district}`
    : location.city;

  return [...location.lines, `${locality}, ${location.state} ${location.pincode}`].join(
    ", "
  );
}

/** @deprecated Use formatLocation with a specific clinic location */
export function formatAddress() {
  return formatLocation(siteConfig.locations[0]);
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "dental clinic Patna",
    "dentist Bihar",
    "dental clinic Hilsa",
    "Rajendra Nagar dentist",
    "dental implants Patna",
    "endodontist Bihar",
    "aesthetic dentist Patna",
    "Nalanda dentist",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

import { siteConfig } from "@/lib/metadata";

export function buildWhatsAppUrl(message: string, phone = siteConfig.phones[0]) {
  const digits = phone.replace(/\D/g, "");
  const fullNumber = digits.startsWith("91") ? digits : `91${digits}`;

  return `https://wa.me/${fullNumber}?text=${encodeURIComponent(message)}`;
}

export function buildAppointmentWhatsAppMessage(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  location?: string;
  service?: string;
  doctor?: string;
  date?: string;
  time?: string;
  notes?: string;
}) {
  const lines = [
    "Hello, I would like to book an appointment at MVN Smile Makers Dental Care.",
    "",
    `Name: ${data.firstName} ${data.lastName}`.trim(),
    `Phone: ${data.phone}`,
  ];

  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.location) lines.push(`Clinic: ${data.location}`);
  if (data.service) lines.push(`Service: ${data.service}`);
  if (data.doctor) lines.push(`Doctor: ${data.doctor}`);
  if (data.date) lines.push(`Preferred Date: ${data.date}`);
  if (data.time) lines.push(`Preferred Time: ${data.time}`);
  if (data.notes) lines.push(`Notes: ${data.notes}`);

  return lines.join("\n");
}

export function openWhatsApp(message: string) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

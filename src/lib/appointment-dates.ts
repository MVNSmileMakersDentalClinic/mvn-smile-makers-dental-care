import { startOfDay } from "date-fns";
import { locationAllowedWeekdays } from "@/lib/data";

export function parseAppointmentDate(value: string): Date | undefined {
  if (!value) return undefined;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return undefined;
  return new Date(year, month - 1, day);
}

export function formatAppointmentDateValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatAppointmentDateLabel(value: string): string {
  const date = parseAppointmentDate(value);
  if (!date) return "";
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function isAppointmentDateAllowed(date: Date, locationId: string): boolean {
  const weekdays = locationAllowedWeekdays[locationId];
  if (!weekdays) return true;
  return weekdays.includes(date.getDay());
}

export function getAppointmentDateDisabledMatchers(locationId: string) {
  const today = startOfDay(new Date());
  const weekdays = locationAllowedWeekdays[locationId];

  if (!weekdays) {
    return [{ before: today }];
  }

  return [
    { before: today },
    (date: Date) => !weekdays.includes(date.getDay()),
  ];
}

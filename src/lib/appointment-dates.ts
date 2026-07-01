import { startOfDay } from "date-fns";
import {
  getLocationTimeSlots,
  locationAllowedWeekdays,
} from "@/lib/data";

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

export function isAppointmentDateAllowed(
  date: Date,
  locationId: string
): boolean {
  const weekdays = locationAllowedWeekdays[locationId];
  if (!weekdays) return false;
  return weekdays.includes(date.getDay());
}

export function isAppointmentTimeAllowed(
  locationId: string,
  dateValue: string,
  time: string
): boolean {
  return getLocationTimeSlots(locationId, dateValue).includes(time);
}

export function getAppointmentDateDisabledMatchers(locationId: string) {
  const today = startOfDay(new Date());
  const weekdays = locationAllowedWeekdays[locationId] ?? [];

  return [
    { before: today },
    (date: Date) => !weekdays.includes(date.getDay()),
  ];
}

export function getAppointmentDateHint(locationId: string): string | undefined {
  if (locationId === "hilsa") {
    return "Only Wednesdays and Sundays can be selected.";
  }

  if (
    locationId === "patna-rajendra-nagar" ||
    locationId === "patna-new-bypass"
  ) {
    return "Open Monday–Saturday only. Sundays are unavailable.";
  }

  return undefined;
}

export function getAppointmentTimeHint(
  locationId: string,
  dateValue: string
): string | undefined {
  if (!locationId || !dateValue) return undefined;

  const date = parseAppointmentDate(dateValue);
  if (!date) return undefined;

  const weekday = date.getDay();

  if (locationId === "hilsa") {
    return "Hilsa hours: 11:00 AM – 5:00 PM";
  }

  if (weekday === 6) {
    return "Saturday hours: 9:00 AM – 2:00 PM";
  }

  if (weekday >= 1 && weekday <= 5) {
    return "Weekday hours: 8:00 AM – 6:00 PM";
  }

  return undefined;
}

export function getAppointmentDateError(locationId: string): string {
  if (locationId === "hilsa") {
    return "Hilsa appointments are only available on Wednesdays and Sundays.";
  }

  return "This clinic is open Monday–Saturday only. Please pick an available day.";
}

"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import {
  appointmentServices,
  appointmentLocations,
  doctors,
  getLocationTimeSlots,
} from "@/lib/data";
import {
  buildAppointmentWhatsAppMessage,
  openWhatsApp,
} from "@/lib/whatsapp";
import { BookingConditions } from "@/components/appointment/BookingConditions";
import { AppointmentDatePicker } from "@/components/forms/AppointmentDatePicker";
import {
  getAppointmentDateError,
  getAppointmentTimeHint,
  isAppointmentDateAllowed,
  isAppointmentTimeAllowed,
  parseAppointmentDate,
} from "@/lib/appointment-dates";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  service: "",
  doctor: "any",
  date: "",
  time: "",
  notes: "",
};

export function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const availableTimeSlots = getLocationTimeSlots(form.location, form.date);
  const timeHint = getAppointmentTimeHint(form.location, form.date);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => {
      const updated = { ...current, [field]: value };

      if (field === "location") {
        updated.time = "";
        const parsedDate = parseAppointmentDate(updated.date);
        if (
          parsedDate &&
          !isAppointmentDateAllowed(parsedDate, value)
        ) {
          updated.date = "";
        }
      }

      if (field === "date") {
        const slots = getLocationTimeSlots(updated.location, value);
        if (updated.time && !slots.includes(updated.time)) {
          updated.time = "";
        }
      }

      return updated;
    });
  }

  function getLocationLabel(id: string) {
    return appointmentLocations.find((item) => item.value === id)?.label ?? id;
  }

  function getServiceLabel(id: string) {
    return appointmentServices.find((item) => item.value === id)?.label ?? id;
  }

  function getDoctorLabel(id: string) {
    if (id === "any") return "Any available doctor";
    return doctors.find((item) => item.id === id)?.name ?? id;
  }

  function handleWhatsAppClick() {
    setError("");

    if (
      !form.firstName ||
      !form.lastName ||
      !form.phone ||
      !form.location ||
      !form.service ||
      !form.date ||
      !form.time
    ) {
      setError("Please fill in all required fields before booking on WhatsApp.");
      return;
    }

    const selectedDate = parseAppointmentDate(form.date);
    if (
      !selectedDate ||
      !isAppointmentDateAllowed(selectedDate, form.location)
    ) {
      setError(getAppointmentDateError(form.location));
      return;
    }

    if (!isAppointmentTimeAllowed(form.location, form.date, form.time)) {
      setError("Please select a time slot available on your chosen date.");
      return;
    }

    openWhatsApp(
      buildAppointmentWhatsAppMessage({
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
        location: getLocationLabel(form.location),
        service: getServiceLabel(form.service),
        doctor: getDoctorLabel(form.doctor),
        date: form.date,
        time: form.time,
        notes: form.notes,
      })
    );
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle>Schedule Your Visit</CardTitle>
            <CardDescription>
              Select your clinic, check availability, then send your booking
              request on WhatsApp.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleWhatsAppClick();
          }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="location">Clinic Location *</Label>
            <Select
              value={form.location}
              onValueChange={(value) => updateField("location", value)}
            >
              <SelectTrigger id="location">
                <SelectValue placeholder="Select a clinic first" />
              </SelectTrigger>
              <SelectContent>
                {appointmentLocations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {form.location && <BookingConditions locationId={form.location} />}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="Rahul"
                value={form.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Kumar"
                value={form.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="service">Service *</Label>
              <Select
                value={form.service}
                onValueChange={(value) => updateField("service", value)}
              >
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {appointmentServices.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="doctor">Preferred Doctor</Label>
              <Select
                value={form.doctor}
                onValueChange={(value) => updateField("doctor", value)}
              >
                <SelectTrigger id="doctor">
                  <SelectValue placeholder="Any available" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Available Doctor</SelectItem>
                  {doctors.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date *</Label>
              <AppointmentDatePicker
                value={form.date}
                onChange={(value) => updateField("date", value)}
                locationId={form.location}
                disabled={!form.location}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">
                Preferred Time *
                {timeHint && (
                  <span className="ml-1 text-xs font-normal text-muted-foreground">
                    ({timeHint})
                  </span>
                )}
              </Label>
              <Select
                value={form.time}
                onValueChange={(value) => updateField("time", value)}
                disabled={!form.location || !form.date}
              >
                <SelectTrigger id="time">
                  <SelectValue
                    placeholder={
                      !form.location
                        ? "Select clinic first"
                        : !form.date
                          ? "Select date first"
                          : availableTimeSlots.length > 0
                            ? "Select a time"
                            : "No slots on this date"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {availableTimeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Tell us about any concerns or special requests..."
              rows={4}
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
            />
          </div>

          {error && (
            <p className="rounded-md border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          )}

          <WhatsAppButton fullWidth onClick={handleWhatsAppClick} />

          <p className="text-center text-xs text-muted-foreground">
            After clicking, send the pre-filled message in WhatsApp to complete
            your booking request.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

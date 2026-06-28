"use client";

import { useState } from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import {
  appointmentServices,
  appointmentLocations,
  doctors,
  timeSlots,
} from "@/lib/data";
import { siteConfig, formatPhoneDisplay, getTelLink } from "@/lib/metadata";
import {
  buildAppointmentWhatsAppMessage,
  openWhatsApp,
} from "@/lib/whatsapp";
import { submitToWeb3Forms } from "@/lib/web3forms-client";
import { Button } from "@/components/ui/button";
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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
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

  function getWhatsAppPayload() {
    return {
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      location: form.location ? getLocationLabel(form.location) : undefined,
      service: form.service ? getServiceLabel(form.service) : undefined,
      doctor: getDoctorLabel(form.doctor),
      date: form.date,
      time: form.time,
      notes: form.notes,
    };
  }

  function handleWhatsAppClick() {
    setError("");

    if (!form.firstName || !form.lastName || !form.phone) {
      setError("Please enter your name and phone number before booking on WhatsApp.");
      return;
    }

    openWhatsApp(buildAppointmentWhatsAppMessage(getWhatsAppPayload()));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!form.location || !form.service || !form.time) {
      setError("Please select clinic location, service, and preferred time.");
      setLoading(false);
      return;
    }

    try {
      await submitToWeb3Forms({
        subject: "New Appointment Request - MVN Smile Makers",
        from_name: "MVN Smile Makers Website",
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phone: form.phone,
        location: getLocationLabel(form.location),
        service: getServiceLabel(form.service),
        doctor: getDoctorLabel(form.doctor),
        preferred_date: form.date,
        preferred_time: form.time,
        notes: form.notes || "None",
      });

      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again or book on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <Card className="mx-auto max-w-lg text-center">
        <CardContent className="py-12">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Appointment Request Received!</h3>
          <p className="mt-2 text-muted-foreground">
            Thank you for choosing {siteConfig.name}. Our team will contact
            you within 24 hours to confirm your appointment.
          </p>
          <Button
            className="mt-6"
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
          >
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
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
              Submit the form to email our clinic, or book instantly on WhatsApp.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
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
              <Label htmlFor="location">Clinic Location *</Label>
              <Select
                value={form.location}
                onValueChange={(value) => updateField("location", value)}
                required
              >
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select a clinic" />
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
            <div className="space-y-2">
              <Label htmlFor="service">Service *</Label>
              <Select
                value={form.service}
                onValueChange={(value) => updateField("service", value)}
                required
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

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date *</Label>
              <Input
                id="date"
                name="date"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time *</Label>
              <Select
                value={form.time}
                onValueChange={(value) => updateField("time", value)}
                required
              >
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
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

          <div className="grid gap-3 sm:grid-cols-2">
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "Submitting..." : "Request Appointment"}
            </Button>
            <WhatsAppButton
              fullWidth
              onClick={handleWhatsAppClick}
              label="Book on WhatsApp"
            />
          </div>

          <p className="text-center text-xs text-muted-foreground">
            For dental emergencies, please call us at{" "}
            {siteConfig.phones.map((phone, index) => (
              <span key={phone}>
                {index > 0 && " or "}
                <a
                  href={getTelLink(phone)}
                  className="font-medium text-primary hover:underline"
                >
                  {formatPhoneDisplay(phone)}
                </a>
              </span>
            ))}
            .
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

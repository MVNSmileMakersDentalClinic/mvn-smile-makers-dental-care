"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactWhatsApp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSend() {
    setError("");

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in your name, phone, and message.");
      return;
    }

    const text = [
      "Hello, I would like to contact MVN Smile Makers Dental Care.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      "",
      `Message: ${message.trim()}`,
    ].join("\n");

    openWhatsApp(text);
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366]/10">
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
          </div>
          <div>
            <CardTitle>Contact Us on WhatsApp</CardTitle>
            <CardDescription>
              Fill in your details and send us a message instantly — no forms, no
              waiting.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-wa-name">Your Name *</Label>
              <Input
                id="contact-wa-name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-wa-phone">Phone *</Label>
              <Input
                id="contact-wa-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-wa-message">Your Message *</Label>
            <Textarea
              id="contact-wa-message"
              placeholder="How can we help you?"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {error && (
            <p className="rounded-md border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          )}

          <WhatsAppButton
            fullWidth
            label="Send on WhatsApp"
            onClick={handleSend}
          />

          <p className="text-center text-xs text-muted-foreground">
            You will be redirected to WhatsApp to send your message.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

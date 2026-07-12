"use client";

import { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Bed } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { rooms } from "@/lib/data/rooms";
import { formatContactFormMessage, openWhatsAppMessage } from "@/lib/utils/whatsapp";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
}

const initialForm: FormData = {
  name: "", email: "", phone: "", subject: "general",
  message: "", checkIn: "", checkOut: "", roomType: "any",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Please enter a valid email";
    
    if (form.phone.trim()) {
      const cleanPhone = form.phone.replace(/[\s\-()]/g, "");
      const indianPhoneRegex = /^(?:\+?91|0)?[6-9]\d{9}$/;
      if (!indianPhoneRegex.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid 10-digit Indian phone number";
      }
    }

    if (!form.message.trim()) newErrors.message = "Please tell us how we can help";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    openWhatsAppMessage(formatContactFormMessage(form));
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle2 size={40} className="success-icon" aria-hidden="true" />
        <h3 className="success-title">Thank you, {form.name.split(" ")[0]}!</h3>
        <p className="success-desc">
          Your message has been sent via WhatsApp. Our team will respond within 24 hours.
          For urgent enquiries, please call us directly at{" "}
          {siteConfig.phones.map((phone, i) => (
            <span key={phone.tel}>
              {i > 0 ? " or " : ""}
              <a href={`tel:${phone.tel}`} className="success-phone">{phone.display}</a>
            </span>
          ))}.
        </p>
        <button
          className="btn btn-secondary"
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form" noValidate>
      <div className="form-row">
        <div className={`form-field ${errors.name ? "field-error" : ""}`}>
          <label htmlFor="contact-name" className="form-label">
            <User size={13} aria-hidden="true" /> Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="form-input input-light"
            autoComplete="name"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p id="name-error" className="field-error-msg" role="alert">{errors.name}</p>}
        </div>

        <div className={`form-field ${errors.email ? "field-error" : ""}`}>
          <label htmlFor="contact-email" className="form-label">
            <Mail size={13} aria-hidden="true" /> Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="form-input input-light"
            autoComplete="email"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p id="email-error" className="field-error-msg" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="form-row">
        <div className={`form-field ${errors.phone ? "field-error" : ""}`}>
          <label htmlFor="contact-phone" className="form-label">
            <Phone size={13} aria-hidden="true" /> Phone (Optional)
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="form-input input-light"
            autoComplete="tel"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p id="phone-error" className="field-error-msg" role="alert">{errors.phone}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="contact-subject" className="form-label">
            <MessageSquare size={13} aria-hidden="true" /> Subject
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="form-input input-light form-select"
          >
            <option value="general">General Enquiry</option>
            <option value="reservation">Room Reservation</option>
            <option value="events">Events & Celebrations</option>
            <option value="group">Group Booking</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
      </div>

      {form.subject === "reservation" && (
        <>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-checkin" className="form-label">Check-In Date</label>
              <input
                id="contact-checkin"
                name="checkIn"
                type="date"
                value={form.checkIn}
                onChange={handleChange}
                className="form-input input-light"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-checkout" className="form-label">Check-Out Date</label>
              <input
                id="contact-checkout"
                name="checkOut"
                type="date"
                value={form.checkOut}
                onChange={handleChange}
                className="form-input input-light"
                min={form.checkIn || new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-roomtype" className="form-label">
              <Bed size={13} aria-hidden="true" /> Room to Book
            </label>
            <select
              id="contact-roomtype"
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              className="form-input input-light form-select"
            >
              <option value="any">Any Room (No Preference)</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name} — ₹{room.pricePerNight}/night
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className={`form-field ${errors.message ? "field-error" : ""}`}>
        <label htmlFor="contact-message" className="form-label">Your Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your stay, how we can help, or any questions you have..."
          rows={5}
          className="form-input input-light form-textarea"
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p id="message-error" className="field-error-msg" role="alert">{errors.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
        {loading ? (
          <span className="form-spinner" aria-hidden="true" />
        ) : (
          <>
            Send Message
            <Send size={15} aria-hidden="true" />
          </>
        )}
      </button>

      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr; }
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(13, 27, 42, 0.55);
          cursor: pointer;
        }

        .form-input {
          padding: 0.875rem 1.125rem;
          border: 1px solid rgba(13, 27, 42, 0.1);
          border-radius: 2px;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--color-navy);
          background: var(--color-white);
          transition: border-color var(--transition-base), box-shadow var(--transition-base);
          width: 100%;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(47, 111, 109, 0.1);
        }

        .form-input::placeholder { color: rgba(13, 27, 42, 0.35); }

        .form-select {
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }

        .form-textarea { resize: vertical; min-height: 140px; }

        .field-error .form-input { border-color: rgba(180, 40, 40, 0.5); }

        .field-error-msg {
          font-size: 0.78rem;
          color: #b42828;
          margin: 0;
        }

        .form-submit {
          align-self: flex-start;
          min-width: 180px;
        }

        .form-spinner {
          display: block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(13, 27, 42, 0.3);
          border-top-color: var(--color-navy);
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success */
        .form-success {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 2.5rem;
          background: rgba(47, 111, 109, 0.05);
          border: 1px solid rgba(47, 111, 109, 0.2);
          border-radius: 4px;
        }

        .success-icon { color: var(--color-palm); }
        .success-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-navy);
          margin: 0;
        }

        .success-desc {
          font-size: 0.95rem;
          line-height: 1.75;
          color: rgba(13, 27, 42, 0.65);
          margin: 0;
        }

        .success-phone { color: var(--color-accent); font-weight: 500; }
      `}</style>
    </form>
  );
}

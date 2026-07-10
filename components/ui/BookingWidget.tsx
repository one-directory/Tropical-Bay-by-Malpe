"use client";

import { useState } from "react";
import { Calendar, Users, BedDouble, ArrowRight, X } from "lucide-react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [room, setRoom] = useState("any");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: redirect to booking system with query params
    const params = new URLSearchParams({ checkIn, checkOut, guests: String(guests), room });
    window.location.href = `/contact?${params.toString()}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-widget"
      aria-label="Room booking form"
      noValidate
    >
      <div className="booking-fields">
        {/* Check-In */}
        <div className="booking-field">
          <label htmlFor="booking-checkin" className="booking-label">
            <Calendar size={13} aria-hidden="true" />
            Check-In
          </label>
          <input
            id="booking-checkin"
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="booking-input"
            required
            aria-required="true"
          />
        </div>

        {/* Check-Out */}
        <div className="booking-field">
          <label htmlFor="booking-checkout" className="booking-label">
            <Calendar size={13} aria-hidden="true" />
            Check-Out
          </label>
          <input
            id="booking-checkout"
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="booking-input"
            required
            aria-required="true"
          />
        </div>

        {/* Room Type */}
        <div className="booking-field">
          <label htmlFor="booking-room" className="booking-label">
            <BedDouble size={13} aria-hidden="true" />
            Suite
          </label>
          <select
            id="booking-room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="booking-input booking-select"
          >
            <option value="any">Any Suite</option>
            <option value="small-ac">Small AC Room</option>
            <option value="large-ac">Large AC Room</option>
            <option value="first-floor">First Floor</option>
            <option value="2bh">2BH</option>
            <option value="gulum">Gulum Riverside Cottage</option>
            <option value="dorm">Riverside Dormitory</option>
          </select>
        </div>

        {/* Guests */}
        <div className="booking-field">
          <label htmlFor="booking-guests" className="booking-label">
            <Users size={13} aria-hidden="true" />
            Guests
          </label>
          <div className="guests-stepper">
            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="stepper-btn"
              aria-label="Decrease guests"
              disabled={guests <= 1}
            >
              <X size={10} aria-hidden="true" />
            </button>
            <span className="guests-count" aria-live="polite" aria-atomic="true">
              {guests}
            </span>
            <button
              type="button"
              onClick={() => setGuests((g) => Math.min(15, g + 1))}
              className="stepper-btn"
              aria-label="Increase guests"
              disabled={guests >= 15}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary booking-submit">
        Check Availability
        <ArrowRight size={15} aria-hidden="true" />
      </button>

      <style>{`
        .booking-widget {
          display: flex;
          align-items: flex-end;
          gap: 0;
          background: rgba(251, 248, 242, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(169, 129, 75, 0.2);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-elevated);
        }

        .booking-fields {
          display: flex;
          flex: 1;
          flex-wrap: wrap;
        }

        .booking-field {
          flex: 1;
          min-width: 140px;
          padding: 1.125rem 1.25rem 1rem;
          border-right: 1px solid rgba(13, 27, 42, 0.07);
        }

        .booking-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-secondary);
          margin-bottom: 0.5rem;
          cursor: pointer;
        }

        .booking-input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-primary);
          padding: 0;
          cursor: pointer;
        }

        .booking-input::-webkit-calendar-picker-indicator {
          opacity: 0.4;
          cursor: pointer;
        }

        .booking-select {
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }

        .guests-stepper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .stepper-btn {
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(13, 27, 42, 0.15);
          border-radius: 50%;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-navy);
          transition: all var(--transition-base);
          cursor: pointer;
          background: transparent;
        }

        .stepper-btn:hover:not(:disabled) {
          border-color: var(--color-secondary);
          color: var(--color-secondary);
        }

        .stepper-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .guests-count {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-primary);
          min-width: 1.5rem;
          text-align: center;
        }

        .booking-submit {
          margin: 0.75rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .booking-widget {
            flex-direction: column;
          }

          .booking-fields {
            width: 100%;
          }

          .booking-field {
            border-right: none;
            border-bottom: 1px solid rgba(13, 27, 42, 0.07);
            min-width: 0;
          }

          .booking-submit {
            margin: 0.75rem;
            width: calc(100% - 1.5rem);
          }
        }

        @media (max-width: 600px) {
          .booking-field {
            flex: 1 1 50%;
          }
        }
      `}</style>
    </form>
  );
}

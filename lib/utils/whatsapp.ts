import { getWhatsAppHref } from "@/lib/data/site";
import { rooms } from "@/lib/data/rooms";

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Enquiry",
  reservation: "Room Reservation",
  events: "Events & Celebrations",
  group: "Group Booking",
  feedback: "Feedback",
};

export function openWhatsAppMessage(message: string) {
  const href = getWhatsAppHref(message);
  window.open(href, "_blank", "noopener,noreferrer");
}

export function formatContactFormMessage(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  checkIn?: string;
  checkOut?: string;
  roomType?: string;
}) {
  const lines = [
    "*New Contact Form — Tropical Bay by Malpe*",
    "",
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
  ];

  if (data.phone.trim()) lines.push(`*Phone:* ${data.phone}`);
  lines.push(`*Subject:* ${SUBJECT_LABELS[data.subject] ?? data.subject}`);
  if (data.subject === "reservation") {
    if (data.checkIn) lines.push(`*Check-In:* ${data.checkIn}`);
    if (data.checkOut) lines.push(`*Check-Out:* ${data.checkOut}`);
    if (data.roomType) {
      const room = rooms.find((r) => r.id === data.roomType);
      const roomName = room ? room.name : (data.roomType === "any" ? "Any Room (No Preference)" : data.roomType);
      lines.push(`*Room Type:* ${roomName}`);
    }
  }
  lines.push("", `*Message:*`, data.message);

  return lines.join("\n");
}

export function formatCallbackMessage(data: {
  name: string;
  phone: string;
  preferredTime?: string;
  message?: string;
}) {
  const lines = [
    "*Callback Request — Tropical Bay by Malpe*",
    "",
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
  ];

  if (data.preferredTime?.trim()) {
    lines.push(`*Preferred Time:* ${data.preferredTime}`);
  }
  if (data.message?.trim()) {
    lines.push("", `*Notes:*`, data.message);
  }

  return lines.join("\n");
}

export function formatNewsletterMessage(email: string) {
  return [
    "*Newsletter Subscription — Tropical Bay by Malpe*",
    "",
    `*Email:* ${email}`,
    "",
    "Please add this email to the newsletter list.",
  ].join("\n");
}

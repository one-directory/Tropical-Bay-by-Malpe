"use client";

import { getWhatsAppHref } from "@/lib/data/site";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppFloat() {
  const href = getWhatsAppHref();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={26} />
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 1.75rem;
          right: 1.75rem;
          z-index: 90;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: #25d366;
          color: #fff;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
          transition: transform 280ms ease, box-shadow 280ms ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.55);
        }

        @media (max-width: 480px) {
          .whatsapp-float {
            bottom: 1.25rem;
            right: 1.25rem;
            width: 3.15rem;
            height: 3.15rem;
          }
        }
      `}</style>
    </a>
  );
}

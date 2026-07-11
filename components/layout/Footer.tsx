

import { Phone, Mail, MapPin } from "lucide-react";

import { navItems, siteConfig } from "@/lib/data/site";

import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";



const socialLinks = [

  { label: "Instagram", icon: InstagramIcon, href: siteConfig.socialLinks.instagram },

  { label: "Facebook", icon: FacebookIcon, href: siteConfig.socialLinks.facebook },

];



export default function Footer() {

  const year = new Date().getFullYear();

  const navigateLinks = navItems.flatMap((item) => {

    if (!item.children) {

      return [{ label: item.label, href: item.href! }];

    }

    if (item.label === "Experience") {

      return item.children.map((child) => ({ label: child.label, href: child.href }));

    }

    return [];

  });

  const roomsSection = navItems.find((item) => item.label === "Rooms & Suites");



  return (

    <footer className="footer" role="contentinfo">

      <div className="footer-wave" aria-hidden="true">

        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">

          <path

            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,25 1440,30 L1440,0 L0,0 Z"

            fill="var(--color-navy)"

          />

        </svg>

      </div>



      <div className="footer-main">

        <div className="container-resort">

          <div className="footer-grid">

            <div className="footer-brand">

              <a href="/" className="footer-logo" aria-label="Tropical Bay by Malpe">

                <img
                  src="/images/logo/logo.png"
                  alt="Tropical Bay by Malpe"
                  className="footer-logo-img"
                />

              </a>

              <p className="footer-tagline">
                Experience the charm of Udupi's coastal paradise.
                A boutique resort nestled amidst the peaceful backwaters of Pithrody, just a short drive from Malpe Beach.
              </p>

              <div className="footer-socials">

                {socialLinks.map(({ label, icon: Icon, href }) => (

                  <a

                    key={label}

                    href={href}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="footer-social-link"

                    aria-label={label}

                  >

                    <Icon size={16} />

                  </a>

                ))}

              </div>

            </div>



            <div className="footer-col">

              <h3 className="footer-col-title">Navigate</h3>

              <ul className="footer-links" role="list">

                {navigateLinks.map((link) => (

                  <li key={link.href}>

                    <a href={link.href} className="footer-link">

                      {link.label}

                    </a>

                  </li>

                ))}

              </ul>

            </div>



            {roomsSection && (

              <div className="footer-col">

                <h3 className="footer-col-title">{roomsSection.label}</h3>

                <ul className="footer-links" role="list">

                  {roomsSection.children!.map((child) => (

                    <li key={child.href}>

                      <a href={child.href} className="footer-link">

                        {child.label}

                      </a>

                    </li>

                  ))}

                </ul>

              </div>

            )}



            <div className="footer-col footer-contact-col">

              <h3 className="footer-col-title">Get In Touch</h3>

              <ul className="footer-contact-list" role="list">

                <li>

                  <MapPin size={14} className="footer-contact-icon" aria-hidden="true" />

                  <address className="footer-address">

                    {siteConfig.address.line1}<br />

                    {siteConfig.address.line2}<br />

                    {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.pin}

                  </address>

                </li>

                <li>

                  <Phone size={14} className="footer-contact-icon" aria-hidden="true" />

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>

                    {siteConfig.phones.map((phone) => (

                      <a key={phone.tel} href={`tel:${phone.tel}`} className="footer-link">

                        {phone.display}

                      </a>

                    ))}

                  </div>

                </li>

                <li>

                  <Mail size={14} className="footer-contact-icon" aria-hidden="true" />

                  <a href={`mailto:${siteConfig.email}`} className="footer-link">

                    {siteConfig.email}

                  </a>

                </li>

              </ul>



              <div className="footer-map" style={{ marginTop: "1.5rem" }}>

                <h4

                  className="footer-hours-title"

                  style={{

                    color: "var(--color-secondary)",

                    fontSize: "0.65rem",

                    fontWeight: 600,

                    letterSpacing: "0.15em",

                    textTransform: "uppercase",

                    marginBottom: "0.75rem",

                  }}

                >

                  Location Map

                </h4>

                <div
                  style={{
                    borderRadius: "2px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    height: "180px",
                  }}
                >
                  <iframe
                    src={siteConfig.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Resort Location Map"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>



      <div className="footer-bottom">

        <div className="container-resort footer-bottom-inner">

          <p className="footer-copyright">

            © {year} Tropical Bay by Malpe. All rights reserved.

          </p>

        </div>

      </div>

    </footer>

  );

}



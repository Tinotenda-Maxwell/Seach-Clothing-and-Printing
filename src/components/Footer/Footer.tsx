import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <style>{`
        :root {
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #F8F8F8;
          --white: #FFFFFF;
          --transition: all 0.25s ease;
          --container-max-width: 1280px;
          --container-padding: 48px;
        }

        .footer-wrapper {
          width: 100%;
          background: linear-gradient(180deg, var(--white) 0%, var(--neutral-light) 100%);
          margin-top: 60px;
          padding-top: 48px;
          border-top: 4px solid transparent;
          border-image: linear-gradient(90deg, var(--primary-pink), var(--primary-gold)) 1;
        }

        .footer {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
          padding-bottom: 40px;
        }

        /* COLUMN HEADINGS */
        .footer h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* LINKS */
        .footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer li {
          margin-bottom: 12px;
          color: var(--neutral-dark);
          font-size: 15px;
          cursor: pointer;
          transition: var(--transition);
          padding-left: 0;
        }

        .footer li:hover {
          color: var(--primary-pink);
          transform: translateX(4px);
        }

        /* CONTACT DETAILS */
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 15px;
          color: var(--neutral-dark);
          line-height: 1.5;
        }

        .contact-item svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--primary-pink);
        }

        .contact-item a {
          color: var(--neutral-dark);
          text-decoration: none;
          transition: var(--transition);
        }

        .contact-item a:hover {
          color: var(--primary-pink);
        }

        /* SOCIAL ICONS */
        .social-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          border: 2px solid var(--neutral-light);
          color: var(--neutral-dark);
          text-decoration: none;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          border-color: transparent;
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
        }

        /* COPYRIGHT BAR */
        .copyright {
          margin-top: 0;
          padding: 20px var(--container-padding);
          text-align: center;
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.05), rgba(247, 181, 0, 0.05));
          color: var(--neutral-medium);
          font-size: 14px;
          border-top: 1px solid rgba(233, 30, 99, 0.1);
          line-height: 1.6;
        }

        .copyright a {
          color: var(--primary-pink);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
        }

        .copyright a:hover {
          color: var(--primary-gold);
        }

        /* TABLET RESPONSIVE */
        @media (max-width: 1024px) {
          .footer-wrapper {
            --container-padding: 32px;
          }

          .footer {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        /* MOBILE RESPONSIVE - CLEAN SINGLE COLUMN */
        @media (max-width: 768px) {
          .footer-wrapper {
            --container-padding: 24px;
            margin-top: 48px;
            padding-top: 40px;
          }

          .footer {
            margin-left: 15px;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .footer h3 {
            font-size: 17px;
            margin-bottom: 16px;
            padding-bottom: 10px;
            border-bottom: 2px solid rgba(233, 30, 99, 0.1);
          }

          .footer li {
            font-size: 14px;
            margin-bottom: 11px;
          }

          .contact-item {
            font-size: 14px;
            margin-bottom: 14px;
          }

          .social-row {
            gap: 14px;
          }

          .social-icon {
            width: 46px;
            height: 46px;
          }

          .copyright {
            font-size: 13px;
            padding: 20px 24px;
            line-height: 1.7;
          }
        }

        @media (max-width: 480px) {
          .footer-wrapper {
            --container-padding: 20px;
            padding-top: 36px;
          }

          .footer {
            grid-template-columns: 1fr;
            gap: 36px;
          }


          .footer h3 {
            font-size: 16px;
            margin-bottom: 14px;
            padding-bottom: 8px;
          }

          .footer li {
            margin-left: 20px;
            font-size: 13px;
            margin-bottom: 10px;
          }

          .contact-item {
            font-size: 13px;
            margin-bottom: 12px;
            gap: 10px;
          }

          .social-row {
            gap: 12px;
          }

          .social-icon {
            width: 44px;
            height: 44px;
          }

          .copyright {
            font-size: 12px;
            padding: 18px 20px;
          }
        }

        @media (max-width: 375px) {
          .footer-wrapper {
            --container-padding: 16px;
          }

          .footer {
            gap: 32px;
          }

          .footer h3 {
            font-size: 15px;
            margin-bottom: 12px;
          }

          .footer li,
          .contact-item {
            font-size: 12px;
          }

          .social-icon {
            width: 42px;
            height: 42px;
          }

          .social-row {
            gap: 10px;
          }
        }

        @media (max-width: 320px) {
          .footer-wrapper {
            --container-padding: 14px;
            padding-top: 28px;
          }

          .footer {
            gap: 28px;
            padding-bottom: 28px;
          }

          .footer h3 {
            font-size: 14px;
            margin-bottom: 10px;
            padding-bottom: 6px;
          }

          .footer li,
          .contact-item {
            font-size: 11px;
            margin-bottom: 9px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
          }

          .copyright {
            font-size: 11px;
            padding: 16px 14px;
          }
        }

        /* ACCESSIBILITY */
        .footer li:focus,
        .social-icon:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="footer-wrapper">
        <div className="footer">
          {/* COMPANY SECTION */}
          <div>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>Printing Technology</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* SERVICES SECTION */}
          <div>
            <h3>Services</h3>
            <ul>
              <li>Document Printing</li>
              <li>Marketing Prints</li>
              <li>Clothing & Apparel</li>
              <li>Personalized Gifts</li>
              <li>Large Format Printing</li>
              <li>Bulk Orders</li>
            </ul>
          </div>

          {/* SUPPORT SECTION */}
          <div>
            <h3>Support</h3>
            <ul>
              <li>FAQs</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Refunds</li>
              <li>Artwork Guidelines</li>
              <li>Size Charts</li>
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div>
            <h3>Contact Us</h3>

            <div className="contact-item">
              <Phone size={18} />
              <a href="tel:+27987654321">+27 98765 43210</a>
            </div>

            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:support@seachprinting.com">
                support@seachprinting.com
              </a>
            </div>

            <div className="contact-item">
              <MapPin size={18} />
              <span>
                7 Grysbkleen Noord,
                <br />
                Rustenburg, South Africa
              </span>
            </div>

            <div className="social-row">
              <a
                href="https://facebook.com"
                className="social-icon"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="social-icon"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="copyright">
          © {new Date().getFullYear()} Seach Clothing & Printing. All rights
          reserved.
          <br />
          Powered by{" "}
          <a
            href="https://software.pedzaworks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedzaworks Software Solutions
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const apparel = [
  {
    title: "Custom T-Shirts",
    description: "Perfect for branding, teams, and events",
    img: "/apparel/tshirt.jpg",
    big: true,
    tag: "Most Popular",
  },
  {
    title: "Custom Hoodies",
    description: "Warm, stylish, and fully customizable",
    img: "/apparel/hoodie.jpg",
    tag: "Trending",
  },
  {
    title: "Sports Jerseys",
    description: "Match kits, team wear & performance fabrics",
    img: "/apparel/jersey.jpg",
    tag: null,
  },
  {
    title: "Sublimated T-Shirts",
    description: "Durable, vibrant full-print sublimation",
    img: "/apparel/sublimated.jpg",
    big: true,
    tag: "Premium",
  },
  {
    title: "Church Uniforms",
    description: "Custom church wear & fabric sublimation",
    img: "/apparel/church.jpg",
    tag: null,
  },
  {
    title: "Uniforms & Workwear",
    description: "Corporate uniforms, school wear, staff outfits",
    img: "/apparel/uniform.jpg",
    tag: null,
  },
];

const ApparelSpotlight = () => {
  return (
    <>
      <style>{`
        :root {
          --container-max-width: 1280px;
          --container-padding: 48px;
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #F8F8F8;
          --white: #FFFFFF;
          --transition: all 0.3s ease;
        }

        .apparel-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 0;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
        }

        .apparel-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* SECTION HEADER - CENTERED */
        .apparel-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .apparel-title {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        /* GRID - 4 COLUMNS */
        .apparel-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* APPAREL CARD - FIXED STRUCTURE */
        .apparel-card {
          background: var(--white);
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          display: grid;
          grid-template-rows: auto 1fr;
          position: relative;
          border: 1px solid transparent;
          height: 100%;
        }

        .apparel-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(233, 30, 99, 0.15);
          border-color: rgba(233, 30, 99, 0.2);
        }

        .apparel-card.big {
          grid-column: span 2;
        }

        /* IMAGE CONTAINER */
        .apparel-img-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: var(--neutral-light);
        }

        .apparel-card.big .apparel-img-container {
          height: 300px;
        }

        .apparel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: var(--transition);
        }

        .apparel-card:hover .apparel-img {
          transform: scale(1.08);
        }

        /* TAG */
        .apparel-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        /* CONTENT - FIXED GAPS */
        .apparel-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .apparel-title-card {
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-dark);
          line-height: 1.3;
          margin: 0;
        }

        .apparel-card.big .apparel-title-card {
          font-size: 18px;
        }

        .apparel-description {
          font-size: 13px;
          color: var(--neutral-medium);
          line-height: 1.5;
          margin: 0;
        }

        .apparel-btn {
          width: 100%;
          padding: 10px 16px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: auto;
        }

        .apparel-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
        }

        .apparel-btn svg {
          width: 16px;
          height: 16px;
        }

        /* EXTRA LARGE DESKTOP */
        @media (min-width: 1600px) {
          .apparel-title {
            font-size: 36px;
          }

          .apparel-grid {
            gap: 28px;
          }

          .apparel-img-container {
            height: 280px;
          }

          .apparel-card.big .apparel-img-container {
            height: 320px;
          }

          .apparel-content {
            padding: 20px;
            gap: 12px;
          }

          .apparel-title-card {
            font-size: 17px;
          }

          .apparel-card.big .apparel-title-card {
            font-size: 20px;
          }

          .apparel-description {
            font-size: 14px;
          }

          .apparel-btn {
            padding: 11px 18px;
            font-size: 14px;
          }
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) and (max-width: 1599px) {
          .apparel-title {
            font-size: 34px;
          }

          .apparel-img-container {
            height: 270px;
          }

          .apparel-card.big .apparel-img-container {
            height: 310px;
          }
        }

        /* STANDARD DESKTOP */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .apparel-grid {
            gap: 22px;
          }

          .apparel-img-container {
            height: 250px;
          }

          .apparel-card.big .apparel-img-container {
            height: 290px;
          }
        }

        /* SMALL DESKTOP / LARGE TABLET */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .apparel-container {
            --container-padding: 40px;
          }

          .apparel-header {
            margin-bottom: 40px;
          }

          .apparel-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .apparel-card.big {
            grid-column: span 1;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 240px;
          }
        }

        /* TABLET */
        @media (max-width: 1024px) and (min-width: 769px) {
          .apparel-container {
            --container-padding: 32px;
          }

          .apparel-section {
            padding: 48px 0;
          }

          .apparel-header {
            margin-bottom: 36px;
          }

          .apparel-title {
            font-size: 28px;
          }

          .apparel-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .apparel-card.big {
            grid-column: span 1;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 220px;
          }

          .apparel-content {
            padding: 16px;
          }

          .apparel-title-card,
          .apparel-card.big .apparel-title-card {
            font-size: 15px;
          }

          .apparel-description {
            font-size: 12px;
          }
        }

        /* MOBILE - 2 COLUMNS */
        @media (max-width: 768px) {
          .apparel-container {
            --container-padding: 16px;
          }

          .apparel-section {
            padding: 40px 0;
          }

          .apparel-header {
            margin-bottom: 32px;
          }

          .apparel-title {
            font-size: 24px;
          }

          .apparel-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .apparel-card.big {
            grid-column: span 1;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 180px;
          }

          .apparel-content {
            padding: 14px;
            gap: 8px;
          }

          .apparel-title-card,
          .apparel-card.big .apparel-title-card {
            font-size: 14px;
          }

          .apparel-description {
            font-size: 12px;
          }

          .apparel-btn {
            padding: 9px 14px;
            font-size: 12px;
            gap: 5px;
          }

          .apparel-btn svg {
            width: 14px;
            height: 14px;
          }

          .apparel-tag {
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .apparel-section {
            padding: 36px 0;
          }

          .apparel-header {
            margin-bottom: 28px;
          }

          .apparel-title {
            font-size: 22px;
          }

          .apparel-grid {
            gap: 14px;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 170px;
          }

          .apparel-content {
            padding: 12px;
          }

          .apparel-title-card,
          .apparel-card.big .apparel-title-card {
            font-size: 13px;
          }

          .apparel-description {
            font-size: 11px;
          }
        }

        /* EXTRA SMALL MOBILE */
        @media (max-width: 375px) {
          .apparel-container {
            --container-padding: 12px;
          }

          .apparel-section {
            padding: 32px 0;
          }

          .apparel-title {
            font-size: 20px;
          }

          .apparel-grid {
            gap: 12px;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 160px;
          }

          .apparel-content {
            padding: 10px;
            gap: 6px;
          }

          .apparel-btn {
            padding: 8px 12px;
            font-size: 11px;
          }
        }

        /* TINY MOBILE */
        @media (max-width: 320px) {
          .apparel-title {
            font-size: 18px;
          }

          .apparel-grid {
            gap: 10px;
          }

          .apparel-img-container,
          .apparel-card.big .apparel-img-container {
            height: 140px;
          }

          .apparel-title-card,
          .apparel-card.big .apparel-title-card {
            font-size: 12px;
          }

          .apparel-description {
            font-size: 10px;
          }
        }

        /* ACCESSIBILITY */
        .apparel-btn:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="apparel-section">
        <div className="apparel-container">
          {/* SECTION HEADER - CENTERED */}
          <div className="apparel-header">
            <h2 className="apparel-title">Clothing & Apparel Spotlight</h2>
          </div>

          {/* APPAREL GRID */}
          <div className="apparel-grid">
            {apparel.map((item, idx) => (
              <div
                key={idx}
                className={`apparel-card ${item.big ? "big" : ""}`}
              >
                {/* IMAGE CONTAINER */}
                <div className="apparel-img-container">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="apparel-img"
                    loading={idx < 4 ? "eager" : "lazy"}
                  />

                  {/* TAG */}
                  {item.tag && <div className="apparel-tag">{item.tag}</div>}
                </div>

                {/* CONTENT */}
                <div className="apparel-content">
                  <h3 className="apparel-title-card">{item.title}</h3>
                  <p className="apparel-description">{item.description}</p>
                  <button className="apparel-btn">
                    <span>Customize Now</span>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApparelSpotlight;

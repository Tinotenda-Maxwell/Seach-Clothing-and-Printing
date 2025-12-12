import React from "react";
import { ShoppingCart, Gift } from "lucide-react";

const gifts = [
  {
    title: "Custom Mugs",
    description: "Perfect for gifts, events, and branding",
    img: "/gifts/mug.jpg",
    tag: "Best Seller",
  },
  {
    title: "Personalized Bottles",
    description: "Durable stainless steel and plastic bottles",
    img: "/gifts/bottle.jpg",
    tag: "Popular",
  },
  {
    title: "Keyholders",
    description: "Engraved and printed keyholders",
    img: "/gifts/keyholder.jpg",
    tag: null,
  },
  {
    title: "Custom Pillows",
    description: "Soft, vibrant, and fully customizable",
    img: "/gifts/pillow.jpg",
    tag: null,
  },
  {
    title: "Canvas Prints",
    description: "High-quality stretched canvas wall art",
    img: "/gifts/canvas.jpg",
    tag: "Trending",
  },
  {
    title: "Coasters & Mousepads",
    description: "Personalized desk essentials",
    img: "/gifts/mousepad.jpg",
    tag: null,
  },
  {
    title: "Stationery",
    description: "High-quality stretched canvas wall art",
    img: "/gifts/canvas.jpg",
    tag: "Trending",
  },
  {
    title: "Canvas Prints",
    description: "High-quality stretched canvas wall art",
    img: "/gifts/canvas.jpg",
    tag: "Trending",
  },
];

const GiftsSpotlight = () => {
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

        .gifts-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 0;
          background: var(--white);
        }

        .gifts-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* SECTION HEADER */
        .gifts-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .gifts-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .gifts-subtitle {
          font-size: 16px;
          color: var(--neutral-medium);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* GRID - 4 COLUMNS */
        .gifts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* GIFT CARD */
        .gifts-card {
          background: var(--white);
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          position: relative;
          border: 1px solid transparent;
          display: grid;
          grid-template-rows: auto 1fr;
          height: 100%;
        }

        .gifts-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(233, 30, 99, 0.15);
          border-color: rgba(233, 30, 99, 0.2);
        }

        /* IMAGE CONTAINER */
        .gifts-img-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: var(--neutral-light);
        }

        .gifts-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: var(--transition);
        }

        .gifts-card:hover .gifts-img {
          transform: scale(1.08);
        }

        /* GIFT TAG */
        .gifts-tag {
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
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        /* WISHLIST BUTTON */
        .wishlist-btn {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          opacity: 0;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .gifts-card:hover .wishlist-btn {
          opacity: 1;
        }

        .wishlist-btn:hover {
          background: var(--white);
          transform: scale(1.15);
        }

        .wishlist-btn svg {
          width: 18px;
          height: 18px;
          color: var(--primary-pink);
        }

        /* GIFT CONTENT */
        .gifts-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .gifts-title-card {
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-dark);
          line-height: 1.3;
          margin: 0;
        }

        .gifts-description {
          font-size: 13px;
          color: var(--neutral-medium);
          line-height: 1.5;
          margin: 0;
        }

        /* GIFT FOOTER */
        .gifts-footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }

        .gifts-btn {
          width: 100%;
          padding: 10px 16px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .gifts-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
        }

        .gifts-btn svg {
          width: 16px;
          height: 16px;
        }

        /* EXTRA LARGE DESKTOP */
        @media (min-width: 1600px) {
          .gifts-grid {
            gap: 28px;
          }

          .gifts-img-container {
            height: 280px;
          }

          .gifts-content {
            padding: 20px;
            gap: 12px;
          }

          .gifts-title-card {
            font-size: 17px;
          }

          .gifts-description {
            font-size: 14px;
          }

          .gifts-btn {
            padding: 11px 18px;
            font-size: 14px;
          }
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) and (max-width: 1599px) {
          .gifts-title {
            font-size: 34px;
          }

          .gifts-img-container {
            height: 270px;
          }
        }

        /* STANDARD DESKTOP */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .gifts-grid {
            gap: 22px;
          }

          .gifts-img-container {
            height: 250px;
          }
        }

        /* SMALL DESKTOP / LARGE TABLET */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .gifts-container {
            --container-padding: 40px;
          }

          .gifts-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .gifts-img-container {
            height: 240px;
          }
        }

        /* TABLET */
        @media (max-width: 1024px) and (min-width: 769px) {
          .gifts-container {
            --container-padding: 32px;
          }

          .gifts-section {
            padding: 48px 0;
          }

          .gifts-header {
            margin-bottom: 40px;
          }

          .gifts-title {
            font-size: 28px;
          }

          .gifts-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .gifts-img-container {
            height: 220px;
          }

          .gifts-content {
            padding: 16px;
          }

          .gifts-title-card {
            font-size: 15px;
          }

          .gifts-description {
            font-size: 12px;
          }
        }

        /* MOBILE - 2 COLUMNS */
        @media (max-width: 768px) {
          .gifts-container {
            --container-padding: 16px;
          }

          .gifts-section {
            padding: 40px 0;
          }

          .gifts-header {
            margin-bottom: 32px;
          }

          .gifts-title {
            font-size: 24px;
          }

          .gifts-subtitle {
            font-size: 14px;
          }

          .gifts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .gifts-img-container {
            height: 180px;
          }

          .gifts-content {
            padding: 14px;
            gap: 8px;
          }

          .gifts-title-card {
            font-size: 14px;
          }

          .gifts-description {
            font-size: 12px;
          }

          .gifts-footer {
            gap: 8px;
          }

          .gifts-btn {
            padding: 9px 14px;
            font-size: 12px;
            gap: 5px;
          }

          .gifts-btn svg {
            width: 14px;
            height: 14px;
          }

          .wishlist-btn {
            opacity: 1;
            width: 34px;
            height: 34px;
            top: 10px;
            left: 10px;
          }

          .wishlist-btn svg {
            width: 16px;
            height: 16px;
          }

          .gifts-tag {
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .gifts-section {
            padding: 36px 0;
          }

          .gifts-header {
            margin-bottom: 28px;
          }

          .gifts-title {
            font-size: 22px;
          }

          .gifts-grid {
            gap: 14px;
          }

          .gifts-img-container {
            height: 170px;
          }

          .gifts-content {
            padding: 12px;
          }

          .gifts-title-card {
            font-size: 13px;
          }

          .gifts-description {
            font-size: 11px;
          }
        }

        /* EXTRA SMALL MOBILE */
        @media (max-width: 375px) {
          .gifts-container {
            --container-padding: 12px;
          }

          .gifts-section {
            padding: 32px 0;
          }

          .gifts-title {
            font-size: 20px;
          }

          .gifts-subtitle {
            font-size: 13px;
          }

          .gifts-grid {
            gap: 12px;
          }

          .gifts-img-container {
            height: 160px;
          }

          .gifts-content {
            padding: 10px;
            gap: 6px;
          }

          .gifts-btn {
            padding: 8px 12px;
            font-size: 11px;
          }
        }

        /* TINY MOBILE */
        @media (max-width: 320px) {
          .gifts-title {
            font-size: 18px;
          }

          .gifts-grid {
            gap: 10px;
          }

          .gifts-img-container {
            height: 140px;
          }

          .gifts-title-card {
            font-size: 12px;
          }

          .gifts-description {
            font-size: 10px;
          }
        }

        /* ACCESSIBILITY */
        .gifts-btn:focus,
        .wishlist-btn:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="gifts-section">
        <div className="gifts-container">
          {/* SECTION HEADER */}
          <div className="gifts-header">
            <h2 className="gifts-title">Personalized Gifts & Merchandise</h2>
            <p className="gifts-subtitle">
              Create memorable gifts for every occasion
            </p>
          </div>

          {/* GIFTS GRID */}
          <div className="gifts-grid">
            {gifts.map((item, idx) => (
              <div key={idx} className="gifts-card">
                {/* IMAGE CONTAINER */}
                <div className="gifts-img-container">
                  <img
                    src={item.img}
                    className="gifts-img"
                    alt={item.title}
                    loading={idx < 4 ? "eager" : "lazy"}
                  />

                  {/* WISHLIST BUTTON */}
                  <button className="wishlist-btn" aria-label="Add to wishlist">
                    <Gift />
                  </button>

                  {/* GIFT TAG */}
                  {item.tag && <div className="gifts-tag">{item.tag}</div>}
                </div>

                {/* GIFT CONTENT */}
                <div className="gifts-content">
                  <h3 className="gifts-title-card">{item.title}</h3>
                  <p className="gifts-description">{item.description}</p>

                  {/* GIFT FOOTER */}
                  <div className="gifts-footer">
                    <button className="gifts-btn">
                      <ShoppingCart />
                      <span>Customize</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftsSpotlight;

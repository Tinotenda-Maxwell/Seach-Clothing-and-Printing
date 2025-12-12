import { ShoppingCart, Maximize2 } from "lucide-react";

const items = [
  {
    title: "PVC Banners",
    description: "Durable outdoor promotional banners",
    img: "/largeformat/pvc-banner.jpg",
    tag: "Popular",
  },
  {
    title: "Posters",
    description: "High-quality poster printing",
    img: "/largeformat/posters.jpg",
    tag: null,
  },
  {
    title: "Roll-Up Banners",
    description: "Portable display solutions",
    img: "/largeformat/rollup.jpg",
    tag: null,
  },
  {
    title: "Vehicle Branding",
    description: "Professional vehicle wraps & decals",
    img: "/largeformat/vehicle-branding.jpg",
    tag: "Trending",
  },
  {
    title: "Stickers (Vinyl / Car)",
    description: "Custom vinyl stickers & car decals",
    img: "/largeformat/stickers.jpg",
    tag: null,
  },
  {
    title: "Signboards",
    description: "Custom signage for businesses",
    img: "/largeformat/signboard.jpg",
    tag: "Best Seller",
  },
  {
    title: "Wallpapers",
    description: "Custom signage for businesses",
    img: "/largeformat/signboard.jpg",
    tag: "Best Seller",
  },
  {
    title: "Window Graphics",
    description: "Custom signage for businesses",
    img: "/largeformat/signboard.jpg",
    tag: "Best Seller",
  },
];

const LargeFormatSpotlight = () => {
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

        .lf-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 0;
          background: var(--white);
        }

        .lf-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* SECTION HEADER */
        .lf-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .lf-title {
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

        .lf-subtitle {
          font-size: 16px;
          color: var(--neutral-medium);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* GRID - 4 COLUMNS */
        .lf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* LF CARD */
        .lf-card {
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

        .lf-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(233, 30, 99, 0.15);
          border-color: rgba(233, 30, 99, 0.2);
        }

        /* IMAGE CONTAINER */
        .lf-img-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: var(--neutral-light);
        }

        .lf-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: var(--transition);
        }

        .lf-card:hover .lf-img {
          transform: scale(1.08);
        }

        /* LF TAG */
        .lf-tag {
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

        .lf-card:hover .wishlist-btn {
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

        /* LF CONTENT */
        .lf-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lf-title-card {
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-dark);
          line-height: 1.3;
          margin: 0;
        }

        .lf-description {
          font-size: 13px;
          color: var(--neutral-medium);
          line-height: 1.5;
          margin: 0;
        }

        /* LF FOOTER */
        .lf-footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }

        .lf-btn {
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

        .lf-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
        }

        .lf-btn svg {
          width: 16px;
          height: 16px;
        }

        /* EXTRA LARGE DESKTOP */
        @media (min-width: 1600px) {
          .lf-grid {
            gap: 28px;
          }

          .lf-img-container {
            height: 280px;
          }

          .lf-content {
            padding: 20px;
            gap: 12px;
          }

          .lf-title-card {
            font-size: 17px;
          }

          .lf-description {
            font-size: 14px;
          }

          .lf-btn {
            padding: 11px 18px;
            font-size: 14px;
          }
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) and (max-width: 1599px) {
          .lf-title {
            font-size: 34px;
          }

          .lf-img-container {
            height: 270px;
          }
        }

        /* STANDARD DESKTOP */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .lf-grid {
            gap: 22px;
          }

          .lf-img-container {
            height: 250px;
          }
        }

        /* SMALL DESKTOP / LARGE TABLET */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .lf-container {
            --container-padding: 40px;
          }

          .lf-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .lf-img-container {
            height: 240px;
          }
        }

        /* TABLET */
        @media (max-width: 1024px) and (min-width: 769px) {
          .lf-container {
            --container-padding: 32px;
          }

          .lf-section {
            padding: 48px 0;
          }

          .lf-header {
            margin-bottom: 40px;
          }

          .lf-title {
            font-size: 28px;
          }

          .lf-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .lf-img-container {
            height: 220px;
          }

          .lf-content {
            padding: 16px;
          }

          .lf-title-card {
            font-size: 15px;
          }

          .lf-description {
            font-size: 12px;
          }
        }

        /* MOBILE - 2 COLUMNS */
        @media (max-width: 768px) {
          .lf-container {
            --container-padding: 16px;
          }

          .lf-section {
            padding: 40px 0;
          }

          .lf-header {
            margin-bottom: 32px;
          }

          .lf-title {
            font-size: 24px;
          }

          .lf-subtitle {
            font-size: 14px;
          }

          .lf-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .lf-img-container {
            height: 180px;
          }

          .lf-content {
            padding: 14px;
            gap: 8px;
          }

          .lf-title-card {
            font-size: 14px;
          }

          .lf-description {
            font-size: 12px;
          }

          .lf-footer {
            gap: 8px;
          }

          .lf-btn {
            padding: 9px 14px;
            font-size: 12px;
            gap: 5px;
          }

          .lf-btn svg {
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

          .lf-tag {
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .lf-section {
            padding: 36px 0;
          }

          .lf-header {
            margin-bottom: 28px;
          }

          .lf-title {
            font-size: 22px;
          }

          .lf-grid {
            gap: 14px;
          }

          .lf-img-container {
            height: 170px;
          }

          .lf-content {
            padding: 12px;
          }

          .lf-title-card {
            font-size: 13px;
          }

          .lf-description {
            font-size: 11px;
          }
        }

        /* EXTRA SMALL MOBILE */
        @media (max-width: 375px) {
          .lf-container {
            --container-padding: 12px;
          }

          .lf-section {
            padding: 32px 0;
          }

          .lf-title {
            font-size: 20px;
          }

          .lf-subtitle {
            font-size: 13px;
          }

          .lf-grid {
            gap: 12px;
          }

          .lf-img-container {
            height: 160px;
          }

          .lf-content {
            padding: 10px;
            gap: 6px;
          }

          .lf-btn {
            padding: 8px 12px;
            font-size: 11px;
          }
        }

        /* TINY MOBILE */
        @media (max-width: 320px) {
          .lf-title {
            font-size: 18px;
          }

          .lf-grid {
            gap: 10px;
          }

          .lf-img-container {
            height: 140px;
          }

          .lf-title-card {
            font-size: 12px;
          }

          .lf-description {
            font-size: 10px;
          }
        }

        /* ACCESSIBILITY */
        .lf-btn:focus,
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

      <section className="lf-section">
        <div className="lf-container">
          {/* SECTION HEADER */}
          <div className="lf-header">
            <h2 className="lf-title">Large Format & Outdoor Printing</h2>
            <p className="lf-subtitle">
              Professional large-scale printing for impactful displays
            </p>
          </div>

          {/* LF GRID */}
          <div className="lf-grid">
            {items.map((item, idx) => (
              <div key={idx} className="lf-card">
                {/* IMAGE CONTAINER */}
                <div className="lf-img-container">
                  <img
                    src={item.img}
                    className="lf-img"
                    alt={item.title}
                    loading={idx < 4 ? "eager" : "lazy"}
                  />

                  {/* WISHLIST BUTTON */}
                  <button className="wishlist-btn" aria-label="Add to wishlist">
                    <Maximize2 />
                  </button>

                  {/* LF TAG */}
                  {item.tag && <div className="lf-tag">{item.tag}</div>}
                </div>

                {/* LF CONTENT */}
                <div className="lf-content">
                  <h3 className="lf-title-card">{item.title}</h3>
                  <p className="lf-description">{item.description}</p>

                  {/* LF FOOTER */}
                  <div className="lf-footer">
                    <button className="lf-btn">
                      <ShoppingCart />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LargeFormatSpotlight;

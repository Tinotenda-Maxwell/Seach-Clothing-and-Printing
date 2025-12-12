import { ShoppingCart, Heart } from "lucide-react";

const products = [
  {
    title: "Documents Printing",
    description: "Assignments, Textbooks & Project work",
    price: "From $6",
    img: "/assets/document.jpg",
    tag: "Best Seller",
  },

  {
    title: "Custom T-Shirts",
    description: "Perfect for events, branding & gifts",
    price: "From $6",
    img: "/assets/t-shirt.jpg",
    tag: "Best Seller",
  },

  {
    title: "PVC Banners",
    description: "Durable outdoor promotional banners",
    price: "From $12",
    img: "/assets/pvc.avif",
    tag: "Popular",
  },
  {
    title: "Church Uniforms",
    description: "Custom church wear & fabric sublimation",
    price: "From $10",
    img: "/apparel/church.jpg",
    tag: null,
  },
  {
    title: "Photo Mugs",
    description: "Personalized mugs for any occasion",
    price: "From $5",
    img: "/assets/gifts.jpg",
    tag: null,
  },
  {
    title: "Certificates",
    description: "High-quality official document printing",
    price: "From $3",
    img: "/assets/certificate.jpg",
    tag: null,
  },
  {
    title: "Business Cards",
    description: "Premium quality business cards",
    price: "From $4",
    img: "/assets/business.jpg",
    tag: "Popular",
  },
  {
    title: "Custom Hoodies",
    description: "Warm & stylish branded hoodies",
    price: "From $15",
    img: "/assets/hoodies.jpg",
    tag: "New",
  },
];

const PopularProducts = () => {
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

        .products-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 0;
          background: var(--white);
        }

        .products-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* SECTION HEADER */
        .products-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .products-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .products-subtitle {
          font-size: 16px;
          color: var(--neutral-medium);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* GRID - 4 COLUMNS ON DESKTOP */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* PRODUCT CARD */
        .product-card {
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

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(233, 30, 99, 0.15);
          border-color: rgba(233, 30, 99, 0.2);
        }

        /* IMAGE CONTAINER */
        .product-img-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: var(--neutral-light);
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: var(--transition);
        }

        .product-card:hover .product-img {
          transform: scale(1.08);
        }

        /* PRODUCT TAG */
        .product-tag {
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

        .product-card:hover .wishlist-btn {
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

        /* PRODUCT CONTENT */
        .product-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .product-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-dark);
          line-height: 1.3;
          margin: 0;
        }

        .product-description {
          font-size: 13px;
          color: var(--neutral-medium);
          line-height: 1.5;
          margin: 0;
        }

        /* PRODUCT FOOTER - SIDE BY SIDE */
        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
        }

        .product-price {
          font-size: 18px;
          color: var(--primary-pink);
          font-weight: 700;
          white-space: nowrap;
        }

        .product-btn {
          flex: 1;
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

        .product-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
        }

        .product-btn svg {
          width: 16px;
          height: 16px;
        }

        /* EXTRA LARGE DESKTOP */
        @media (min-width: 1600px) {
          .products-grid {
            gap: 28px;
          }

          .product-img-container {
            height: 280px;
          }

          .product-content {
            padding: 20px;
            gap: 12px;
          }

          .product-title {
            font-size: 17px;
          }

          .product-description {
            font-size: 14px;
          }

          .product-price {
            font-size: 20px;
          }

          .product-btn {
            padding: 11px 18px;
            font-size: 14px;
          }
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) and (max-width: 1599px) {
          .products-title {
            font-size: 34px;
          }

          .product-img-container {
            height: 270px;
          }

          .product-price {
            font-size: 19px;
          }
        }

        /* STANDARD DESKTOP */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .products-grid {
            gap: 22px;
          }

          .product-img-container {
            height: 250px;
          }

          .product-price {
            font-size: 17px;
          }
        }

        /* SMALL DESKTOP / LARGE TABLET */
        @media (max-width: 1279px) and (min-width: 1025px) {
          .products-container {
            --container-padding: 40px;
          }

          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .product-img-container {
            height: 240px;
          }

          .product-price {
            font-size: 16px;
          }
        }

        /* TABLET */
        @media (max-width: 1024px) and (min-width: 769px) {
          .products-container {
            --container-padding: 32px;
          }

          .products-section {
            padding: 48px 0;
          }

          .products-header {
            margin-bottom: 40px;
          }

          .products-title {
            font-size: 28px;
          }

          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .product-img-container {
            height: 220px;
          }

          .product-content {
            padding: 16px;
          }

          .product-title {
            font-size: 15px;
          }

          .product-description {
            font-size: 12px;
          }

          .product-price {
            font-size: 16px;
          }

          .product-btn {
            font-size: 12px;
          }
        }

        /* MOBILE - 2 COLUMNS */
        @media (max-width: 768px) {
          .products-container {
            --container-padding: 16px;
          }

          .products-section {
            padding: 40px 0;
          }

          .products-header {
            margin-bottom: 32px;
          }

          .products-title {
            font-size: 24px;
          }

          .products-subtitle {
            font-size: 14px;
          }

          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .product-img-container {
            height: 180px;
          }

          .product-content {
            padding: 14px;
            gap: 8px;
          }

          .product-title {
            font-size: 14px;
          }

          .product-description {
            font-size: 12px;
          }

          .product-footer {
            gap: 8px;
          }

          .product-price {
            font-size: 15px;
          }

          .product-btn {
            padding: 9px 12px;
            font-size: 11px;
            gap: 4px;
          }

          .product-btn svg {
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

          .product-tag {
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .products-section {
            padding: 36px 0;
          }

          .products-header {
            margin-bottom: 28px;
          }

          .products-title {
            font-size: 22px;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .product-img-container {
            height: 170px;
          }

          .product-content {
            padding: 12px;
          }

          .product-title {
            font-size: 13px;
          }

          .product-description {
            font-size: 11px;
          }

          .product-price {
            font-size: 14px;
          }

          .product-btn {
            padding: 8px 10px;
            font-size: 10px;
          }
        }

        /* EXTRA SMALL MOBILE */
        @media (max-width: 375px) {
          .products-container {
            --container-padding: 12px;
          }

          .products-section {
            padding: 32px 0;
          }

          .products-title {
            font-size: 20px;
          }

          .products-subtitle {
            font-size: 13px;
          }

          .products-grid {
            gap: 12px;
          }

          .product-img-container {
            height: 160px;
          }

          .product-content {
            padding: 10px;
            gap: 6px;
          }

          .product-footer {
            gap: 6px;
          }

          .product-price {
            font-size: 13px;
          }

          .product-btn {
            padding: 7px 8px;
            font-size: 9px;
          }
        }

        /* TINY MOBILE */
        @media (max-width: 320px) {
          .products-title {
            font-size: 18px;
          }

          .products-grid {
            gap: 10px;
          }

          .product-img-container {
            height: 140px;
          }

          .product-title {
            font-size: 12px;
          }

          .product-description {
            font-size: 10px;
          }

          .product-price {
            font-size: 12px;
          }

          .product-btn {
            padding: 6px 8px;
            font-size: 9px;
          }
        }

        /* ACCESSIBILITY */
        .product-btn:focus,
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

      <div className="products-section">
        <div className="products-container">
          {/* SECTION HEADER */}
          <div className="products-header">
            <h2 className="products-title">Popular Products</h2>
            <p className="products-subtitle">
              Discover our most loved printing and customization services
            </p>
          </div>

          {/* PRODUCTS GRID */}
          <div className="products-grid">
            {products.map((p, idx) => (
              <div key={idx} className="product-card">
                {/* IMAGE CONTAINER */}
                <div className="product-img-container">
                  <img
                    src={p.img}
                    className="product-img"
                    alt={p.title}
                    loading={idx < 4 ? "eager" : "lazy"}
                  />

                  {/* WISHLIST BUTTON */}
                  <button className="wishlist-btn" aria-label="Add to wishlist">
                    <Heart />
                  </button>

                  {/* PRODUCT TAG */}
                  {p.tag && <div className="product-tag">{p.tag}</div>}
                </div>

                {/* PRODUCT CONTENT */}
                <div className="product-content">
                  <h3 className="product-title">{p.title}</h3>
                  <p className="product-description">{p.description}</p>

                  {/* PRODUCT FOOTER - SIDE BY SIDE */}
                  <div className="product-footer">
                    <span className="product-price">{p.price}</span>
                    <button className="product-btn">
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

export default PopularProducts;

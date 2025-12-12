const categories = [
  {
    title: "Document Printing",
    img: "/assets/document.jpg",
  },
  {
    title: "Marketing Prints",
    img: "/assets/marketing.webp",
  },
  {
    title: "Clothing & Apparel",
    img: "/assets/apparel.jpg",
  },
  {
    title: "Personalized Gifts",
    img: "/assets/gifts.jpg",
  },
  {
    title: "Large Format & Outdoor",
    img: "/assets/outdoor.jpg",
  },
];

const CategoryCards = () => {
  return (
    <>
      <style>{`
        :root {
          --container-max-width: 1280px;
          --container-padding: 32px;
        }

        .category-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 40px 0;
        }

        .category-container {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        .category-title {
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #2c3e50;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }

        .category-card {
          cursor: pointer;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-6px);
        }

        .category-image {
          width: 100%;
          height: 220px;
          border-radius: 24px;
          object-fit: cover;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          transition: 0.3s ease;
        }

        .category-card:hover .category-image {
          opacity: 0.85;
        }

        .category-name {
          margin-top: 12px;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .category-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .category-image {
            height: 190px;
          }
        }

        @media (max-width: 768px) {
          .category-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .category-image {
            height: 170px;
          }
        }

        @media (max-width: 480px) {
          .category-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .category-image {
            height: 150px;
            border-radius: 18px;
          }
        }
      `}</style>

      <div className="category-section">
        <div className="category-container">
          <h2 className="category-title">Categories</h2>

          <div className="category-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="category-card">
                <img src={cat.img} alt={cat.title} className="category-image" />
                <p className="category-name">{cat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCards;

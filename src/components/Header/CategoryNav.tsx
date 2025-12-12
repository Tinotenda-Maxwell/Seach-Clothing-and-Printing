import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "All Products",
    items: [],
  },
  {
    title: "Document Printing",
    items: ["Certificates", "Academic Documents", "Forms & Reports"],
  },
  {
    title: "Marketing Prints",
    items: ["Posters", "Flyers", "Business Cards", "Brochures"],
  },
  {
    title: "Clothing & Apparel",
    items: [
      "T-Shirts",
      "Hoodies",
      "Caps",
      "Jerseys",
      "School Uniforms",
      "Sportswear",
      "Sublimated T-Shirts",
      "Church Uniforms",
    ],
  },
  {
    title: "Personalized Gifts",
    items: [
      "Mugs",
      "Bottles",
      "Keyholders",
      "Mousepads",
      "Coasters",
      "Pillows",
      "Canvas Prints",
    ],
  },
  {
    title: "Large Format & Outdoor",
    items: [
      "PVC Banners",
      "Roll-Up Banners",
      "Posters",
      "Stickers",
      "Vehicle Branding",
      "Signboards",
      "Wallpaper",
      "Window Graphics",
      "Flags",
      "Gazebo",
      "X-Banner",
      "Correx Board",
    ],
  },
];

interface CategoryNavProps {
  isMobileMenuOpen?: boolean;
  onCategorySelect?: (category: string, item?: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  isMobileMenuOpen = false,
  onCategorySelect,
}) => {
  const [activeDesktop, setActiveDesktop] = useState<number | null>(null);
  const [activeMobile, setActiveMobile] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileCategoryClick = (index: number) => {
    setActiveMobile(activeMobile === index ? null : index);
  };

  const handleItemClick = (categoryTitle: string, item?: string) => {
    if (onCategorySelect) {
      onCategorySelect(categoryTitle, item);
    }
    console.log(`Selected: ${categoryTitle}${item ? ` > ${item}` : ""}`);
  };

  // Render for mobile menu (sidebar)
  if (isMobile && isMobileMenuOpen) {
    return (
      <div className="mobile-categories">
        <style>{`
          .mobile-categories {
            width: 100%;
            margin-top: 8px;
          }

          .mobile-category-item {
            width: 100%;
            margin-bottom: 4px;
          }

          .mobile-category-header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 16px;
            background: var(--neutral-light);
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: var(--transition);
            font-size: 15px;
            font-weight: 500;
            color: var(--neutral-dark);
            text-align: left;
          }

          .mobile-category-header:hover {
            background: var(--primary-pink);
            color: var(--white);
          }

          .mobile-category-header.active {
            background: var(--primary-pink);
            color: var(--white);
          }

          .mobile-category-title {
            flex: 1;
          }

          .mobile-chevron {
            width: 20px;
            height: 20px;
            transition: var(--transition);
            flex-shrink: 0;
          }

          .mobile-category-header.active .mobile-chevron {
            transform: rotate(90deg);
          }

          .mobile-subcategories {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding-left: 12px;
          }

          .mobile-subcategories.active {
            max-height: 800px;
            margin-top: 8px;
          }

          .mobile-subcategory-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            margin-bottom: 4px;
            background: rgba(233, 30, 99, 0.05);
            border-radius: 10px;
            cursor: pointer;
            transition: var(--transition);
            font-size: 14px;
            color: var(--neutral-dark);
          }

          .mobile-subcategory-item:hover {
            background: linear-gradient(135deg, rgba(233, 30, 99, 0.15), rgba(247, 181, 0, 0.15));
            color: var(--primary-pink);
            transform: translateX(4px);
          }

          .mobile-subcategory-item svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            opacity: 0.6;
          }
        `}</style>

        {categories.map((cat, index) => (
          <div key={index} className="mobile-category-item">
            <button
              className={`mobile-category-header ${
                activeMobile === index ? "active" : ""
              }`}
              onClick={() => {
                if (cat.items.length > 0) {
                  handleMobileCategoryClick(index);
                } else {
                  handleItemClick(cat.title);
                }
              }}
            >
              <span className="mobile-category-title">{cat.title}</span>
              {cat.items.length > 0 && (
                <ChevronRight className="mobile-chevron" />
              )}
            </button>

            {cat.items.length > 0 && (
              <div
                className={`mobile-subcategories ${
                  activeMobile === index ? "active" : ""
                }`}
              >
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="mobile-subcategory-item"
                    onClick={() => handleItemClick(cat.title, item)}
                  >
                    <ChevronRight />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Render for desktop (horizontal nav bar)
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
          --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
          --shadow-md: 0 4px 16px rgba(0,0,0,0.12);
          --transition: all 0.25s ease;
          --container-max-width: 1280px;
          --container-padding: 48px;
        }

        /* MAIN BAR WRAPPER */
        .category-bar-wrapper {
          width: 100%;
          background: var(--white);
          border-bottom: 1px solid #e6e6e6;
          z-index: 9;
          position: relative;
        }

        /* MAIN BAR */
        .category-bar {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 12px var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }

        /* CATEGORY ITEM */
        .category-item {
          position: relative;
          padding: 8px 12px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          color: var(--neutral-dark);
          transition: var(--transition);
          white-space: nowrap;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .category-item:hover {
          color: var(--primary-pink);
          background: var(--neutral-light);
        }

        .category-item.no-dropdown {
          padding: 8px 16px;
        }

        /* CHEVRON ICON */
        .chevron-icon {
          width: 16px;
          height: 16px;
          transition: var(--transition);
        }

        .category-item:hover .chevron-icon {
          transform: rotate(180deg);
        }

        /* DESKTOP DROPDOWN */
       .dropdown {
          position: absolute;
          top: calc(100% + 4px); /* Reduced gap from 8px to 4px */
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: var(--white);
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          padding: 16px;
          min-width: 240px;
          max-width: 320px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.3s; /* Added delay before hiding */
          border: 1px solid #e6e6e6;
          z-index: 100;
        }

        .category-item:hover .dropdown {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0s; 
        }

        /* Keep dropdown open when hovering over it */
        .dropdown:hover {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        
        .category-item::after {
          content: '';
          position: absolute;
          bottom: -8px; 
          left: 0;
          right: 0;
          height: 8px;
          background: transparent;
        }

        /* MULTI-COLUMN FOR LARGE DROPDOWNS */
        .dropdown.large {
          min-width: 380px;
          max-width: 480px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        /* DROPDOWN ITEM */
        .dropdown-item {
          padding: 10px 14px;
          font-size: 14px;
          cursor: pointer;
          transition: var(--transition);
          color: var(--neutral-dark);
          border-radius: 8px;
          font-weight: 400;
        }

        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.08), rgba(247, 181, 0, 0.08));
          color: var(--primary-pink);
          transform: translateX(4px);
        }

        /* TABLET RESPONSIVE */
        @media (max-width: 1024px) {
          .category-bar {
            --container-padding: 32px;
            gap: 24px;
          }

          .category-item {
            font-size: 14px;
            padding: 8px 10px;
          }

          .dropdown {
            min-width: 220px;
            max-width: 280px;
          }

          .dropdown.large {
            min-width: 320px;
            max-width: 400px;
          }
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .category-bar-wrapper {
            display: none;
          }
        }

        /* ACCESSIBILITY */
        .category-item:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 2px;
        }

        .dropdown-item:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: -2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}</style>

      {/* CATEGORY BAR - Desktop Only */}
      <nav
        className="category-bar-wrapper"
        role="navigation"
        aria-label="Product categories"
      >
        <div className="category-bar">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`category-item ${
                cat.items.length === 0 ? "no-dropdown" : ""
              }`}
              onMouseEnter={() => setActiveDesktop(index)}
              onMouseLeave={() => setActiveDesktop(null)}
              onClick={() =>
                cat.items.length === 0 && handleItemClick(cat.title)
              }
              role="button"
              tabIndex={0}
              aria-expanded={
                cat.items.length > 0 ? activeDesktop === index : undefined
              }
              aria-haspopup={cat.items.length > 0}
            >
              <span>{cat.title}</span>
              {cat.items.length > 0 && <ChevronDown className="chevron-icon" />}

              {/* DESKTOP DROPDOWN */}
              {cat.items.length > 0 && (
                <div
                  className={`dropdown ${cat.items.length > 8 ? "large" : ""}`}
                  role="menu"
                >
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleItemClick(cat.title, item);
                      }}
                      role="menuitem"
                      tabIndex={0}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default CategoryNav;

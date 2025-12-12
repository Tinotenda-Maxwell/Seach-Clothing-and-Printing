import { useState, useEffect, useRef } from "react";
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
  const scrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IMPROVED: Instant close on scroll with debounce prevention
  useEffect(() => {
    const handleScroll = () => {
      // Immediately mark as scrolling
      scrollingRef.current = true;

      // Instantly close dropdown without transition
      if (activeDesktop !== null) {
        setActiveDesktop(null);
      }

      // Clear previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Reset scrolling flag after brief delay
      scrollTimeoutRef.current = setTimeout(() => {
        scrollingRef.current = false;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeDesktop]);

  const handleMobileCategoryClick = (index: number) => {
    setActiveMobile(activeMobile === index ? null : index);
  };

  const handleItemClick = (categoryTitle: string, item?: string) => {
    if (onCategorySelect) {
      onCategorySelect(categoryTitle, item);
    }
    console.log(`Selected: ${categoryTitle}${item ? ` > ${item}` : ""}`);
  };

  const handleMouseEnter = (index: number) => {
    // Don't open dropdown if we're currently scrolling
    if (!scrollingRef.current) {
      setActiveDesktop(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveDesktop(null);
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
          position: sticky;
          top: 0;
          z-index: 1000;
          isolation: isolate;
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
          flex-wrap: wrap;
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
          z-index: 1001;
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

        /* HOVER BRIDGE - prevents dropdown from closing */
        .category-item::before {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          right: 0;
          height: 12px;
          background: transparent;
          z-index: 10000;
        }

        /* DESKTOP DROPDOWN - NO TRANSITIONS TO PREVENT FLICKER */
        .dropdown {
          position: fixed;
          background: var(--white);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          padding: 16px;
          min-width: 240px;
          max-width: 320px;
          display: none;
          border: 1px solid #e6e6e6;
          z-index: 10001;
        }

        .dropdown.show {
          display: block;
        }

        /* MULTI-COLUMN FOR LARGE DROPDOWNS */
        .dropdown.large {
          min-width: 380px;
          max-width: 480px;
          display: none;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .dropdown.large.show {
          display: grid;
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
            --container-padding: 24px;
            gap: 16px;
            justify-content: flex-start;
            overflow-x: auto;
            overflow-y: hidden;
            flex-wrap: nowrap;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .category-bar::-webkit-scrollbar {
            display: none;
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
            grid-template-columns: 1fr;
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
            <CategoryItem
              key={index}
              category={cat}
              index={index}
              isActive={activeDesktop === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              handleItemClick={handleItemClick}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

// Separate component for category items to handle positioning
interface CategoryItemProps {
  category: { title: string; items: string[] };
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  handleItemClick: (title: string, item?: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isActive,
  onMouseEnter,
  onMouseLeave,
  handleItemClick,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (isActive && itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      setDropdownStyle({
        top: `${rect.bottom + 8}px`,
        left: `${rect.left + rect.width / 2}px`,
        transform: "translateX(-50%)",
      });
    }
  }, [isActive]);

  return (
    <div
      ref={itemRef}
      className={`category-item ${
        category.items.length === 0 ? "no-dropdown" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() =>
        category.items.length === 0 && handleItemClick(category.title)
      }
      role="button"
      tabIndex={0}
      aria-expanded={category.items.length > 0 ? isActive : undefined}
      aria-haspopup={category.items.length > 0}
    >
      <span>{category.title}</span>
      {category.items.length > 0 && <ChevronDown className="chevron-icon" />}

      {/* DESKTOP DROPDOWN */}
      {category.items.length > 0 && (
        <div
          className={`dropdown ${category.items.length > 8 ? "large" : ""} ${
            isActive ? "show" : ""
          }`}
          style={dropdownStyle}
          role="menu"
        >
          {category.items.map((item, i) => (
            <div
              key={i}
              className="dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(category.title, item);
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
  );
};

export default CategoryNav;

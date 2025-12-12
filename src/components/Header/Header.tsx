import React, { useState, useEffect } from "react";
import CategoryNav from "./CategoryNav";
import AnnouncementBar from "./AnnouncementBar";
import { Search, Lock, Heart, User, Menu, X, ShoppingCart } from "lucide-react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideCategories, setHideCategories] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide categories after scrolling down 100px
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setHideCategories(true);
      } else {
        setHideCategories(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <style>{`
        :root {
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --accent-blue: #4A90E2;
          --neutral-dark: #2C3E50;
          --neutral-medium: #7F8C8D;
          --neutral-light: #ECF0F1;
          --white: #FFFFFF;
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
          --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
          --container-max-width: 1280px;
          --container-padding: 48px;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          min-width: 320px;
        }

        /* STICKY CONTAINER FOR ANNOUNCEMENT + HEADER */
        .header-sticky-container {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--white);
        }

        /* HEADER WRAPPER - Full width background */
        .header-wrapper {
          width: 100%;
          background: var(--white);
          border-bottom: 3px solid transparent;
          border-image: linear-gradient(90deg, var(--primary-pink), var(--primary-gold)) 1;
          box-shadow: var(--shadow-md);
          position: relative;
        }

        /* HEADER CONTAINER - Constrained content */
        .header {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 16px var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* CATEGORY NAV WRAPPER - SMOOTH HIDE/SHOW */
        .category-nav-wrapper {
          max-height: 100px;
          transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
          opacity: 1;
          overflow: hidden;
        }

        .category-nav-wrapper.hidden {
          max-height: 0;
          opacity: 0;
        }

        /* LOGO */
        .logo-container {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo {
          height: 100px;
          width: auto;
          cursor: pointer;
          transition: var(--transition);
        }

        .logo:hover {
          transform: scale(1.05);
        }

        /* SEARCH BAR - Centered and properly sized */
        .search-wrapper {
          flex: 1;
          max-width: 560px;
          display: flex;
          justify-content: center;
          min-width: 0;
        }

        .search-bar {
          width: 100%;
          background: var(--neutral-light);
          padding: 12px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 2px solid transparent;
          transition: var(--transition);
          min-width: 0;
        }

        .search-bar:focus-within {
          background: var(--white);
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 4px rgba(233, 30, 140, 0.15);
        }

        .search-input {
          flex: 1;
          border: none;
          background: none;
          outline: none;
          font-size: 15px;
          color: var(--neutral-dark);
          min-width: 0;
        }

        .search-input::placeholder {
          color: var(--neutral-medium);
        }

        .search-btn {
          border: none;
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .search-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(233, 30, 140, 0.3);
        }

        /* RIGHT SECTION */
        .right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .icon-btn {
          border: none;
          background: var(--neutral-light);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          color: var(--neutral-dark);
          position: relative;
          flex-shrink: 0;
        }

        .icon-btn:hover {
          background: var(--white);
          border: 2px solid var(--primary-pink);
          color: var(--primary-pink);
          transform: translateY(-2px);
        }

        .icon-btn.cart-btn {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          color: var(--white);
        }

        .icon-btn.cart-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px rgba(233, 30, 140, 0.3);
        }

        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #ff4757;
          color: white;
          font-size: 11px;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 10px;
          min-width: 18px;
          text-align: center;
        }

        /* PROFILE */
        .profile-box {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          padding: 6px 16px 6px 6px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: var(--transition);
          color: white;
          border: none;
          flex-shrink: 0;
        }

        .profile-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(233, 30, 140, 0.25);
        }

        .profile-name {
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-pink);
          flex-shrink: 0;
        }

        /* MOBILE MENU BUTTON */
        .mobile-menu-btn {
          display: none;
          border: none;
          background: var(--neutral-light);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--neutral-dark);
          transition: var(--transition);
          flex-shrink: 0;
        }

        .mobile-menu-btn:hover {
          background: var(--primary-pink);
          color: var(--white);
        }

        /* MOBILE OVERLAY */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          pointer-events: none;
          transition: var(--transition);
          z-index: 998;
        }

        .mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          left: 0;
          top: 0;
          width: 300px;
          max-width: 85vw;
          height: 100vh;
          background: white;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
          padding: 24px;
          transform: translateX(-100%);
          transition: var(--transition);
          z-index: 999;
          overflow-y: auto;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--neutral-light);
        }

        .mobile-menu-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--neutral-dark);
        }

        .close-menu-btn {
          border: none;
          background: var(--neutral-light);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--neutral-dark);
          transition: var(--transition);
        }

        .close-menu-btn:hover {
          background: var(--primary-pink);
          color: var(--white);
        }

        .mobile-menu-profile {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          padding: 16px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: white;
        }

        .mobile-menu-profile .avatar {
          width: 48px;
          height: 48px;
        }

        .mobile-profile-info h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .mobile-profile-info p {
          font-size: 13px;
          opacity: 0.9;
        }

        .mobile-menu-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--neutral-light);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: var(--transition);
          font-size: 15px;
          font-weight: 500;
          color: var(--neutral-dark);
          width: 100%;
          text-align: left;
        }

        .mobile-menu-item:hover {
          background: var(--primary-pink);
          color: var(--white);
          transform: translateX(4px);
        }

        .mobile-menu-item svg {
          flex-shrink: 0;
        }

        /* MENU SECTION DIVIDER */
        .menu-section-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0;
          padding: 0 4px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(233, 30, 99, 0.2) 20%,
            rgba(247, 181, 0, 0.2) 80%,
            transparent
          );
        }

        .divider-text {
          font-size: 12px;
          font-weight: 600;
          color: var(--neutral-medium);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          white-space: nowrap;
          padding: 0 8px;
        }

        /* MOBILE MENU CATEGORIES SECTION */
        .mobile-menu-categories {
          margin-top: 0;
        }

        .mobile-menu-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-bottom: 8px;
        }

        /* LARGE DESKTOP */
        @media (min-width: 1280px) {
          .header {
            gap: 40px;
          }
        }

        /* TABLET RESPONSIVE */
        @media (max-width: 1024px) {
          .header {
            --container-padding: 32px;
            gap: 24px;
          }

          .search-wrapper {
            max-width: 400px;
          }

          .logo {
            height: 70px;
          }
        }

        /* MOBILE RESPONSIVE - 768px */
        @media (max-width: 768px) {
          .header {
            --container-padding: 16px;
            padding: 20px 16px;
            gap: 12px;
          }

          .search-wrapper {
            flex: 1;
            max-width: 400px;
          }

          .search-bar {
            padding: 10px 16px;
          }

          .search-input {
            font-size: 14px;
          }

          .search-btn {
            width: 32px;
            height: 32px;
          }

          .icon-btn {
            width: 40px;
            height: 40px;
          }

          .icon-btn.cart-btn {
            display: flex;
          }

          .profile-box,
          .right .icon-btn:not(.cart-btn) {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          /* Hide category nav on mobile */
          .category-nav-wrapper {
            display: none;
          }
        }

        /* SMALL MOBILE - 480px */
        @media (max-width: 480px) {
          .header {
            padding: 10px 12px;
            gap: 8px;
          }

          .logo {
            height: 50px;
          }

          .search-input {
            font-size: 13px;
          }

          .search-wrapper {
            max-width: 200px;
          }

          .search-bar {
            padding: 5px 14px;
            gap: 8px;
          }

          .search-btn {
            width: 30px;
            height: 30px;
          }

          .icon-btn {
            width: 38px;
            height: 38px;
          }

          .mobile-menu-btn {
            width: 38px;
            height: 38px;
          }

          .cart-badge {
            font-size: 10px;
            padding: 2px 5px;
            min-width: 16px;
          }
        }

        /* EXTRA SMALL MOBILE - 375px */
        @media (max-width: 375px) {
          .header {
            padding: 8px 10px;
            gap: 6px;
          }

          .logo {
            height: 40px;
          }

          .search-bar {
            padding: 7px 12px;
            gap: 6px;
          }

          .search-input {
            font-size: 12px;
          }

          .search-input::placeholder {
            font-size: 12px;
          }

          .search-btn {
            width: 28px;
            height: 28px;
          }

          .icon-btn,
          .mobile-menu-btn {
            width: 36px;
            height: 36px;
          }
        }

        /* MINIMUM SUPPORT - 320px */
        @media (max-width: 320px) {
          .header {
            padding: 8px 8px;
            gap: 4px;
          }

          .logo {
            height: 28px;
          }

          .search-bar {
            padding: 6px 10px;
            gap: 6px;
          }

          .search-input {
            font-size: 11px;
          }

          .search-input::placeholder {
            font-size: 11px;
          }

          .search-btn {
            width: 26px;
            height: 26px;
          }

          .search-btn svg {
            width: 14px;
            height: 14px;
          }

          .icon-btn,
          .mobile-menu-btn {
            width: 34px;
            height: 34px;
          }

          .icon-btn svg,
          .mobile-menu-btn svg {
            width: 18px;
            height: 18px;
          }

          .cart-badge {
            font-size: 9px;
            padding: 1px 4px;
            min-width: 14px;
            top: -2px;
            right: -2px;
          }
        }

        /* ACCESSIBILITY */
        .search-btn:focus,
        .icon-btn:focus,
        .profile-box:focus,
        .mobile-menu-btn:focus,
        .close-menu-btn:focus {
          outline: 3px solid var(--primary-pink);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
      `}</style>

      {/* STICKY CONTAINER - Announcement + Header stay fixed */}
      <div className="header-sticky-container">
        <AnnouncementBar />

        <header className="header-wrapper">
          {/* CONTAINED HEADER CONTENT */}
          <div className="header">
            {/* LOGO */}
            <div className="logo-container">
              <img
                src="/assets/logo.png"
                alt="Seach Clothing & Printing"
                className="logo"
              />
            </div>

            {/* SEARCH BAR */}
            <div className="search-wrapper">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className="search-btn"
                  onClick={handleSearch}
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="right">
              <button className="icon-btn" aria-label="Secure checkout">
                <Lock size={20} />
              </button>
              <button className="icon-btn" aria-label="Wishlist">
                <Heart size={20} />
              </button>
              <button className="icon-btn cart-btn" aria-label="Shopping cart">
                <ShoppingCart size={20} />
                <span className="cart-badge">3</span>
              </button>

              <button className="profile-box" aria-label="User profile">
                <span className="profile-name">Ryman Alex</span>
                <div className="avatar">
                  <User size={20} />
                </div>
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </header>

        {/* CATEGORY NAV - HIDES ON SCROLL */}
        <div
          className={`category-nav-wrapper ${hideCategories ? "hidden" : ""}`}
        >
          <CategoryNav />
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button
            className="close-menu-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-menu-profile">
          <div className="avatar">
            <User size={24} />
          </div>
          <div className="mobile-profile-info">
            <h3>Ryman Alex</h3>
            <p>View Profile</p>
          </div>
        </div>

        <div className="mobile-menu-actions">
          <button className="mobile-menu-item">
            <Heart size={20} />
            <span>Wishlist</span>
          </button>
          <button className="mobile-menu-item">
            <Lock size={20} />
            <span>Secure Checkout</span>
          </button>
          <button className="mobile-menu-item">
            <User size={20} />
            <span>Account Settings</span>
          </button>
        </div>

        <div className="menu-section-divider">
          <div className="divider-line"></div>
          <span className="divider-text">Browse Categories</span>
          <div className="divider-line"></div>
        </div>

        <div className="mobile-menu-categories">
          <div className="category-section-title">Categories</div>
          <CategoryNav isMobileMenuOpen={mobileMenuOpen} />
        </div>
      </div>
    </>
  );
};

export default Header;

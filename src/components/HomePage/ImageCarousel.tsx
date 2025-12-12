import { useState, useEffect, useRef } from "react";

const ImageCarousel = () => {
  const images = [
    "assets/print2.jpg",
    "assets/print1.jpg",
    "assets/print3.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startAutoSlide = () => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  const handlePrevClick = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <style>{`
        :root {
          --primary-pink: #E91E63;
          --primary-gold: #F7B500;
          --neutral-dark: #2C3E50;
          --white: #FFFFFF;
          --container-max-width: 1280px;
          --container-padding: 48px;
          --transition: all 0.3s ease;
        }

        /* FULL WIDTH BACKGROUND */
        .carousel-outer {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 20px 0 0 0;
          background: #ffffff;
        }

        /* MATCHES HEADER WIDTH */
        .carousel-inner {
          width: 100%;
          max-width: var(--container-max-width);
          padding: 0 var(--container-padding);
        }

        /* IMAGE AREA CONTAINER */
        .carousel-wrapper {
          width: 100%;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          background: #f5f5f5;
        }

        /* PRINTO-STYLE ASPECT RATIO - Shorter/Wider */
        .carousel-aspect-ratio {
          position: relative;
          width: 100%;
          padding-bottom: 35%; /* Shorter like Printo ~2.85:1 ratio */
          overflow: hidden;
        }

        .carousel-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-slide {
          min-width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* SUBTLE GRADIENT OVERLAY */
        .carousel-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.05) 0%,
            transparent 30%,
            transparent 70%,
            rgba(0, 0, 0, 0.15) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* NAVIGATION ARROWS */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .carousel-arrow:hover {
          background: var(--white);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 16px rgba(233, 30, 99, 0.3);
        }

        .carousel-arrow.prev {
          left: 24px;
        }

        .carousel-arrow.next {
          right: 24px;
        }

        .carousel-arrow svg {
          width: 24px;
          height: 24px;
          color: var(--neutral-dark);
        }

        /* DOTS */
        .carousel-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 2;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: var(--transition);
          border: 2px solid transparent;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }

        .dot.active {
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-gold));
          transform: scale(1.3);
          box-shadow: 0 2px 8px rgba(233, 30, 99, 0.5);
        }

        /* LARGE DESKTOP */
        @media (min-width: 1440px) {
          .carousel-aspect-ratio {
            padding-bottom: 32%; /* Wider on large screens */
          }
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .carousel-inner {
            --container-padding: 32px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 40%;
          }

          .carousel-arrow {
            width: 44px;
            height: 44px;
          }

          .carousel-arrow.prev {
            left: 20px;
          }

          .carousel-arrow.next {
            right: 20px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .carousel-inner {
            --container-padding: 16px;
          }

          .carousel-wrapper {
            border-radius: 12px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 50%;
          }

          .carousel-arrow {
            width: 40px;
            height: 40px;
          }

          .carousel-arrow.prev {
            left: 16px;
          }

          .carousel-arrow.next {
            right: 16px;
          }

          .carousel-arrow svg {
            width: 20px;
            height: 20px;
          }

          .carousel-dots {
            bottom: 16px;
            gap: 10px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }
        }

        @media (max-width: 480px) {
          .carousel-wrapper {
            border-radius: 10px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 60%;
          }

          .carousel-arrow {
            width: 36px;
            height: 36px;
          }

          .carousel-arrow.prev {
            left: 12px;
          }

          .carousel-arrow.next {
            right: 12px;
          }

          .carousel-dots {
            bottom: 12px;
            gap: 8px;
          }

          .dot {
            width: 8px;
            height: 8px;
          }
        }

        @media (max-width: 375px) {
          .carousel-inner {
            --container-padding: 12px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 65%;
          }
        }

        @media (max-width: 320px) {
          .carousel-inner {
            --container-padding: 10px;
          }

          .carousel-wrapper {
            border-radius: 8px;
          }

          .carousel-aspect-ratio {
            padding-bottom: 70%;
          }

          .carousel-arrow {
            width: 32px;
            height: 32px;
          }
        }

        /* ACCESSIBILITY */
        .carousel-arrow:focus,
        .dot:focus {
          outline: 2px solid var(--primary-pink);
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-container {
            transition: none;
          }

          .dot,
          .carousel-arrow {
            transition: none;
          }
        }
      `}</style>

      <div className="carousel-outer">
        <div className="carousel-inner">
          <div className="carousel-wrapper">
            <div className="carousel-aspect-ratio">
              <div
                className="carousel-container"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {images.map((src, index) => (
                  <div className="carousel-slide" key={index}>
                    <img
                      src={src}
                      alt={`Printing service showcase ${index + 1}`}
                      className="carousel-image"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* NAVIGATION ARROWS */}
            <button
              className="carousel-arrow prev"
              onClick={handlePrevClick}
              aria-label="Previous slide"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="carousel-arrow next"
              onClick={handleNextClick}
              aria-label="Next slide"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* DOTS */}
            <div className="carousel-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${current === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;

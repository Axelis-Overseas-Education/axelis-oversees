// components/TestimonialCarousel.jsx

import { useState } from "react";

const TestimonialCarousel = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    setActiveIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);
  };

  return (
    <div className="testimonial-carousel">
      <div className="arrow left-arrow" onClick={prevSlide}>
        &lt; {/* Left arrow */}
      </div>
      <div className="carousel-container">
        <div className="testimonial-card previous">
          <div className="testimonial">
            <img
              src={
                testimonials[
                  (activeIndex - 1 + testimonials.length) % testimonials.length
                ].image
              }
              alt={
                testimonials[
                  (activeIndex - 1 + testimonials.length) % testimonials.length
                ].author
              }
            />
            <p>
              {
                testimonials[
                  (activeIndex - 1 + testimonials.length) % testimonials.length
                ].quote
              }
            </p>
            <p>
              -{" "}
              {
                testimonials[
                  (activeIndex - 1 + testimonials.length) % testimonials.length
                ].author
              }
            </p>
          </div>
        </div>
        <div className="testimonial-card current">
          <div className="testimonial">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].author}
            />
            <p>{testimonials[activeIndex].quote}</p>
            <p>- {testimonials[activeIndex].author}</p>
          </div>
        </div>
        <div className="testimonial-card next">
          <div className="testimonial">
            <img
              src={testimonials[(activeIndex + 1) % testimonials.length].image}
              alt={testimonials[(activeIndex + 1) % testimonials.length].author}
            />
            <p>{testimonials[(activeIndex + 1) % testimonials.length].quote}</p>
            <p>
              - {testimonials[(activeIndex + 1) % testimonials.length].author}
            </p>
          </div>
        </div>
      </div>
      <div className="arrow right-arrow" onClick={nextSlide}>
        &gt; {/* Right arrow */}
      </div>
      

      <style jsx>{`
        .testimonial-carousel {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }

        .arrow {
          font-size: 24px;
          cursor: pointer;
          background-color: #f2f2f2;
          border-radius: 50%;
          padding: 10px;
          margin: 0 10px;
          transition: background-color 0.3s ease;
        }

        .left-arrow {
          transform: rotate(360deg); /* Rotate left arrow */
        }

        .arrow:hover {
          background-color: #ddd;
        }

        .testimonial-card {
          flex: 0 0 30%; /* Adjust card width */
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.5s, box-shadow 0.5s;
        }

        .testimonial-card:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .testimonial-card.current {
          transform: translateZ(0);
          background-color: #add8e6; /* Color for the centered card */
        }

        .testimonial {
          text-align: center;
          padding: 20px;
        }

        img {
          width: 100%;
          height: auto;
          border-radius: 8px 8px 0 0;
        }

        .previous,
        .next {
          opacity: 0.6; /* Adjust the transparency of the side cards */
        }
        
        .carousel-container {
          display: flex;
          justify-content: space-between;
          width: 80%;
          perspective: 1000px;
          position: relative;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;

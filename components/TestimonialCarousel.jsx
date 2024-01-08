// components/TestimonialCarousel.jsx
'use client';
import { useState } from "react";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: 'Siddhant Babar',
      degree: 'Masters in Business Strategy and Entrepreneurship',
      uni: 'Cardiff University',
      review : 'I had the pleasure of working with Axelis Overseas Education Pvt Ltd when I was applying for my Masters in Business Strategy and Entrepreneurship at Cardiff University. They were extremely helpful and knowledgeable in guiding me through the entire process. From providing information about the course to helping me with my application, they were always available to answer my queries and provide me with the best advice. I would highly recommend Axelis Overseas Education Pvt Ltd to anyone looking for professional guidance and support when applying for higher education abroad.',
      image: '/images/test/Siddhant_Babar.jpeg',
      href: 'https://www.linkedin.com/in/siddhant-jaydip-babar-ba6553245',
    },
    {
      name: 'Diksha Babbar',
      degree: 'Masters in Strategic Marketing',
      uni: 'Cardiff University',
      review : 'I am thrilled to share my incredible journey of pursuing a Master`s degree in Strategic Marketing at Cardiff University, all thanks to the exceptional support and guidance provided by Axelis Overseas Education Pvt Ltd. From the very first interaction with the consultants, I was impressed by their extensive portfolio of study programs spanning across 29 countries. Their in-depth knowledge about various universities and the range of undergraduate and postgraduate programs available helped me narrow down my options and choose the best fit for my academic goals.',
      image: '/images/test/Diksha_Babbar.jpeg',
      href: 'https://www.linkedin.com/in/dikshababbar/',
    },
    {
      name: 'M Vasundhara Rao',
      degree: 'Master of Science - MS, Electrical and Computer Engineering',
      uni: 'Northeastern University',
      review : 'I had the privilege to be assisted by Axelis Overseas Education Pvt Ltd for my Master of Science in Electrical and computer engineering at Northeastern University. As an aspiring international student, I was overwhelmed with the entire study abroad process. However, Axelis stood out as a remarkable study abroad consultant that guided me seamlessly throughout the entire journey.',
      image: '/images/test/M_Vasundhara_Rao.png',
      href: 'https://www.linkedin.com/in/vasundhara-rao/',
    },
    {
      name: '',
      degree: '',
      uni: '',
      review : '',
      image: '/images/photo.jpg',
      href: '',
    },
    {
      name: '',
      degree: '',
      uni: '',
      review : '',
      image: '/images/photo.jpg',
      href: '',
    },
    {
      name: 'Jane Smith',
      uni: 'Designer',
      image: '/images/photo.jpg',
    },
    {
      name: 'John Doe',
      uni: 'Developer',
      image: '/images/photo.jpg',
      href: 'https://www.linkedin.com/in/shubham-raj-2a32a317b',
    },
    {
      name: 'Jane Smith',
      uni: 'Designer',
      image: '/images/photo.jpg',
    },

  ];

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
                ].name
              }
            />
            <p>
              {
                testimonials[
                  (activeIndex - 1 + testimonials.length) % testimonials.length
                ].name
              }
            </p>
            <p>
              {" "}
              {
                testimonials[
                  (activeIndex - 1 + testimonials.length) % testimonials.length
                ].uni
              }
            </p>
          </div>
        </div>
        <div className="testimonial-card current">
          <div className="testimonial">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
            />
            <p>{testimonials[activeIndex].name}</p>
            <p>{testimonials[activeIndex].uni}</p>
          </div>
        </div>
        <div className="testimonial-card next">
          <div className="testimonial">
            <img
              src={testimonials[(activeIndex + 1) % testimonials.length].image}
              alt={testimonials[(activeIndex + 1) % testimonials.length].name}
            />
            <p>{testimonials[(activeIndex + 1) % testimonials.length].name}</p>
            <p>
              {testimonials[(activeIndex + 1) % testimonials.length].uni}
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
          margin: 30px;
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

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const testimonials = [
  {
    name: " Siddhant Babar",
    degree: "Masters in Business Strategy and Entrepreneurship",
    university: "Cardiff University",
    review:
      "I had the pleasure of working with Axelis Overseas Education Pvt Ltd when I was applying for my Masters in Business Strategy and Entrepreneurship at Cardiff University. They were extremely helpful and knowledgeable in guiding me through the entire process. From providing information about the course to helping me with my application, they were always available to answer my queries and provide me with the best advice. I would highly recommend Axelis Overseas Education Pvt Ltd to anyone looking for professional guidance and support when applying for higher education abroad.",
    image: "/images/img_1.jpg",
    linkedin: "https://www.linkedin.com/in/siddhant-jaydip-babar-ba6553245/",
  },
  {
    name: "Diksha Babbar",
    degree: "Masters in Strategic Marketing",
    university: "Cardiff University",
    review:
      "I am thrilled to share my incredible journey of pursuing a Master's degree in Strategic Marketing at Cardiff University, all thanks to the exceptional support and guidance provided by Axelis Overseas Education Pvt Ltd. From the very first interaction with the consultants, I was impressed by their extensive portfolio of study programs spanning across 29 countries. Their in-depth knowledge about various universities and the range of undergraduate and postgraduate programs available helped me narrow down my options and choose the best fit for my academic goals.",
    image: "/images/jane-smith.jpg",
    linkedin: "https://www.linkedin.com/in/dikshababbar/",
  },
  {
    name: "M Vasundhara Rao",
    degree: "Master of Science - MS, Electrical and Computer Engineering",
    university: "Northeastern University",
    review:
      "I had the privilege to be assisted by Axelis Overseas Education Pvt Ltd for my Master of Science in Electrical and computer engineering at Northeastern University. As an aspiring international student, I was overwhelmed with the entire study abroad process. However, Axelis stood out as a remarkable study abroad consultant that guided me seamlessly throughout the entire journey.",
    image: "/images/jane-smith.jpg",
    linkedin: "https://www.linkedin.com/in/vasundhara-rao/",
  },
  {
    name: "Neetesh Jain",
    degree: "Masters in Business Strategy and Entrepreneurship",
    university: "Cardiff University",
    review:
      "Working with Axelis Overseas has been fantastic for Neetesh's academic journey abroad. Rishabh Agrawal, who shares the entrepreneurial spirit, has been a great mentor and friend. The advice from him and the team has truly shaped my perspective. Axelis isn't just a consultancy; it's a supportive community for those aiming to excel in their studies. A big thank you for the positive experiences, and we're eagerly looking forward to what's ahead! ",
    image: "/images/jane-smith.jpg",
    linkedin: "https://www.linkedin.com/in/neeteshjain06/",
  },
  {
    name: "Abhinandan",
    degree: "Masters in Business Management",
    university: "Cardiff University",
    review:
      "I was quite sceptical while choosing between Germany and the UK while choosing for Masters. Axelis’s expertise helped me in choosing the perfect fit for my background and shaping my career trajectory.",
    image: "/images/jane-smith.jpg",
    linkedin: "https://www.linkedin.com/in/abhinandan-katharwani/",
  },
  {
    name: "Rudrank Verma",
    degree: "Masters in Business Strategy and Entrepreneurship",
    university: "Cardiff University",
    review:
      " I personally know Rishabh, we are pals before a counsellor and client relationship. I was quite confused with the plethora of options I had considering my engineering background, however Axelis and their tools helped me realise my true inclination.",
    image: "/images/jane-smith.jpg",
    linkedin: "https://www.linkedin.com/in/rudrank-v-758733223/",
  },
  {
    name: "Arnab Chakravorty",
    degree: "Masters in Health Psychology",
    university: "University Of Nottingham",
    review:
      " I extend my gratitude to Rishabh and your team for guiding me in choosing psychology studies. Unsure whether to pursue it in India or abroad, your expert advice was invaluable. Thanks for making my decision clearer.",
    image: "/images/jane-smith.jpg",
    linkedin: "https://www.linkedin.com/in/arnab-chakravorty/",
  },
  {
    name: "Palak Shah",
    degree: "BA (Hons) Graphic Communication and Design",
    university: "University of Westminster",
    review:
      " I am delighted to share my incredible experience with Axelis Overseas Education Pvt Ltd, a renowned study abroad consultancy that truly sets the bar high in guiding students towards a successful education journey. With their exceptional services and unwavering support, I was able to embark on an unforgettable study abroad experience.",
    image: "/images/jane-smith.jpg",
    linkedin: "https://www.linkedin.com/in/palakshah23/",
  },
  {
    name: "Shivangi Sen",
    degree: "Masters of Multimedia Journalism",
    university: "University Of Westminster",
    review:
      "I highly recommend Axelis Overseas as study abroad consultants. With their extensive network of partner universities in 29 countries, they offer a wide range of options for students seeking to study abroad. What sets them apart is their commitment to providing exceptional service without any fees. They go above and beyond by offering comprehensive support, including housing assistance, visa counseling, employability counseling, part-time job assistance, and even guidance on securing loans. Axelis Overseas is truly dedicated to helping students achieve their dreams of studying abroad, and I wholeheartedly recommend their services.",
    image: "/images/jane-smith.jpg",
    linkedin: "https://www.linkedin.com/in/shivangi-sen-8941771bb/",
  },
  {
    name: "Ansh Sonchattra",
    degree: "Bachelors in Accounting and Finance",
    university: "Cardiff University",
    review:
      "Axelis Overseas is an organisation that specialises in helping students pursue their dreams of studying abroad. They offer comprehensive services to ensure a smooth and hassle-free experience. From financial aid and part-time job assistance to visa support and career counselling, Axelis Overseas covers all aspects of studying abroad. What sets them apart is that they do not charge any fees, making education accessible to all. Their commitment to making studying abroad a reality is truly commendable.",
    image: "/images/jane-smith.jpg",
    linkedin: "https://www.linkedin.com/in/ansh-sonchhatra-895564246/",
  },
  // Add more testimonials...
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const navigateSlide = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (activeIndex + 1) % testimonials.length;
    } else {
      newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    }
    setActiveIndex(newIndex);
  };
  const prevIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <div className="testimonial-carousel">
      <div className="arrow left-arrow" onClick={() => navigateSlide("prev")}>
        {/* Left arrow SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M14 7l-5 5 5 5V7z" />
        </svg>
      </div>
      <div className="carousel-container">
        <div
          className={`testimonial-card ${
            prevIndex === activeIndex ? "current" : "previous"
          }`}
          onClick={() => goToSlide(prevIndex)}
        >
          <div className="testimonial">
            <img
              src={testimonials[prevIndex].image}
              alt={testimonials[prevIndex].name}
            />
            <p>Name: {testimonials[prevIndex].name}</p>
            <p>Degree: {testimonials[prevIndex].degree}</p>
            <p>University: {testimonials[prevIndex].university}</p>
            <p>{testimonials[prevIndex].review}</p>

            <a
              href={testimonials[prevIndex].linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div
          className={`testimonial-card ${
            activeIndex === activeIndex ? "current" : "center"
          }`}
          onClick={() => goToSlide(activeIndex)}
        >
          <div className="testimonial">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
            />
            <p>Name: {testimonials[activeIndex].name}</p>
            <p>Degree: {testimonials[activeIndex].degree}</p>
            <p>University: {testimonials[activeIndex].university}</p>
            <p>{testimonials[activeIndex].review}</p>

            <a
              href={testimonials[activeIndex].linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div
          className={`testimonial-card ${
            nextIndex === activeIndex ? "current" : "next"
          }`}
          onClick={() => goToSlide(nextIndex)}
        >
          <div className="testimonial">
            <img
              src={testimonials[nextIndex].image}
              alt={testimonials[nextIndex].name}
            />

            <p>Name: {testimonials[nextIndex].name}</p>
            <p>Degree: {testimonials[nextIndex].degree}</p>
            <p>University: {testimonials[nextIndex].university}</p>
            <p>{testimonials[nextIndex].review}</p>
            <a
              href={testimonials[nextIndex].linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="arrow right-arrow" onClick={() => navigateSlide("next")}>
        {/* Right arrow SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 17l5-5-5-5v10z" />
        </svg>
      </div>

      <style jsx>{`
        .testimonial-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 150px;
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
          transform: rotate(360deg);
        }

        .arrow:hover {
          background-color: #ddd;
        }

        .carousel-container {
          display: flex;
          justify-content: space-between;
          width: 90%;
          position: relative;
          overflow: hidden;
        }

        .testimonial-card {
          flex: 0 0 30%;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.5s, box-shadow 0.5s;
          cursor: pointer
          opacity:0.6;
        }

        .testimonial-card:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .testimonial-card.current {
          transform: translateZ(0);
          background-color: #add8e6;
        }

        .testimonial-card.center {
          flex: 0 0 40%;
        }

        .testimonial {
          text-align: center;
          padding: 20px;
          font-size: 12px; /* Adjust the font size as needed */
        }

        img {
          width: 100%;
          height: auto;
          border-radius: 8px 8px 0 0;
        }

        a {
          display: block;
          margin-top: 10px;
          color: blue;
        }
        .previous,
        .next {
          opacity: 0.6;E
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;

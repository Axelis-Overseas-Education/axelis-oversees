// components/TestimonialCarousel.jsx
"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: "Siddhant Babar",
      degree: "Masters in Business Strategy and Entrepreneurship",
      uni: "Cardiff University",
      review:
        "I had the pleasure of working with Axelis Overseas Education Pvt Ltd when I was applying for my Masters in Business Strategy and Entrepreneurship at Cardiff University. They were extremely helpful and knowledgeable in guiding me through the entire process. From providing information about the course to helping me with my application, they were always available to answer my queries and provide me with the best advice. I would highly recommend Axelis Overseas Education Pvt Ltd to anyone looking for professional guidance and support when applying for higher education abroad.",
      image: "/images/test/Siddhant_Babar.jpeg",
      href: "https://www.linkedin.com/in/siddhant-jaydip-babar-ba6553245",
    },
    {
      name: "Diksha Babbar",
      degree: "Masters in Strategic Marketing",
      uni: "Cardiff University",
      review:
        "I am thrilled to share my incredible journey of pursuing a Master`s degree in Strategic Marketing at Cardiff University, all thanks to the exceptional support and guidance provided by Axelis Overseas Education Pvt Ltd. From the very first interaction with the consultants, I was impressed by their extensive portfolio of study programs spanning across 29 countries. Their in-depth knowledge about various universities and the range of undergraduate and postgraduate programs available helped me narrow down my options and choose the best fit for my academic goals.",
      image: "/images/test/Diksha_Babbar.jpeg",
      href: "https://www.linkedin.com/in/dikshababbar/",
    },
    {
      name: "M Vasundhara Rao",
      degree: "Master of Science - MS, Electrical and Computer Engineering",
      uni: "Northeastern University",
      review:
        "I had the privilege to be assisted by Axelis Overseas Education Pvt Ltd for my Master of Science in Electrical and computer engineering at Northeastern University. As an aspiring international student, I was overwhelmed with the entire study abroad process. However, Axelis stood out as a remarkable study abroad consultant that guided me seamlessly throughout the entire journey.",
      image: "/images/test/M_Vasundhara_Rao.png",
      href: "https://www.linkedin.com/in/vasundhara-rao/",
    },
    {
      name: "Neetesh Jain",
      degree: "Masters in Business Strategy and Entrepreneurship",
      uni: "Cardiff University",
      review:
        "Working with Axelis Overseas has been fantastic for Neetesh's academic journey abroad. Rishabh Agrawal, who shares the entrepreneurial spirit, has been a great mentor and friend. The advice from him and the team has truly shaped my perspective. Axelis isn't just a consultancy; it's a supportive community for those aiming to excel in their studies. A big thank you for the positive experiences, and we're eagerly looking forward to what's ahead! ",
      image: "/images/test/neetesh-jain.jpg",
      linkedin: "https://www.linkedin.com/in/neeteshjain06/",
    },
    {
      name: "Abhinandan",
      degree: "Masters in Business Management",
      uni: "Cardiff University",
      review:
        "I was quite sceptical while choosing between Germany and the UK while choosing for Masters. Axelis’s expertise helped me in choosing the perfect fit for my background and shaping my career trajectory.",
      image: "/images/test/abhinandan.jpeg",
      linkedin: "https://www.linkedin.com/in/abhinandan-katharwani/",
    },
    {
      name: "Rudrank Verma",
      degree: "Masters in Business Strategy and Entrepreneurship",
      uni: "Cardiff University",
      review:
        " I personally know Rishabh, we are pals before a counsellor and client relationship. I was quite confused with the plethora of options I had considering my engineering background, however Axelis and their tools helped me realise my true inclination.",
      image: "/images/test/rudrank-verma.jpeg",
      linkedin: "https://www.linkedin.com/in/rudrank-v-758733223/",
    },
    {
      name: "Arnab Chakravorty",
      degree: "Masters in Health Psychology",
      uni: "University Of Nottingham",
      review:
        " I extend my gratitude to Rishabh and your team for guiding me in choosing psychology studies. Unsure whether to pursue it in India or abroad, your expert advice was invaluable. Thanks for making my decision clearer.",
      image: "/images/test/arnab-chakravorty.jpg",
      linkedin: "https://www.linkedin.com/in/arnab-chakravorty/",
    },
    {
      name: "Palak Shah",
      degree: "BA (Hons) Graphic Communication and Design",
      uni: "University of Westminster",
      review:
        " I am delighted to share my incredible experience with Axelis Overseas Education Pvt Ltd, a renowned study abroad consultancy that truly sets the bar high in guiding students towards a successful education journey. With their exceptional services and unwavering support, I was able to embark on an unforgettable study abroad experience.",
      image: "/images/test/palak-shah.JPG",
      linkedin: "https://www.linkedin.com/in/palakshah23/",
    },
    {
      name: "Shivangi Sen",
      degree: "Masters of Multimedia Journalism",
      uni: "University Of Westminster",
      review:
        "I highly recommend Axelis Overseas as study abroad consultants. With their extensive network of partner universities in 29 countries, they offer a wide range of options for students seeking to study abroad. What sets them apart is their commitment to providing exceptional service without any fees. They go above and beyond by offering comprehensive support, including housing assistance, visa counseling, employability counseling, part-time job assistance, and even guidance on securing loans. Axelis Overseas is truly dedicated to helping students achieve their dreams of studying abroad, and I wholeheartedly recommend their services.",
      image: "/images/test/shivangi-sen.JPG",
      linkedin: "https://www.linkedin.com/in/shivangi-sen-8941771bb/",
    },
    {
      name: "Ansh Sonchattra",
      degree: "Bachelors in Accounting and Finance",
      uni: "Cardiff University",
      review:
        "Axelis Overseas is an organisation that specialises in helping students pursue their dreams of studying abroad. They offer comprehensive services to ensure a smooth and hassle-free experience. From financial aid and part-time job assistance to visa support and career counselling, Axelis Overseas covers all aspects of studying abroad. What sets them apart is that they do not charge any fees, making education accessible to all. Their commitment to making studying abroad a reality is truly commendable.",
      image: "/images/test/ansh-sonchattra.jpg",
      linkedin: "https://www.linkedin.com/in/ansh-sonchhatra-895564246/",
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
            <div className="image-container">
              <img
                src={
                  testimonials[
                    (activeIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].image
                }
                alt={
                  testimonials[
                    (activeIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].name
                }
              />
            </div>
            <div className="info-container">
              <div className="name-container">
                <p>
                  {
                    testimonials[
                      (activeIndex - 1 + testimonials.length) %
                        testimonials.length
                    ].name
                  }
                </p>{" "}
              </div>
            </div>
            <div className="edu-container">
              <p>
                {
                  testimonials[
                    (activeIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].uni
                }
              </p>
              <p>
                {
                  testimonials[
                    (activeIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].degree
                }
              </p>
            </div>
            <div className="review-container">
              <p>
                {
                  testimonials[
                    (activeIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].review
                }
              </p>
            </div>
            <div className="linkedin-container">
              <a
                href={
                  testimonials[
                    (activeIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].linkedin
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="testimonial-card current">
            <div className="testimonial">
              <div className="image-container">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                />
              </div>
              <div className="info-container"></div>
              <div className="name-container">
                <p>{testimonials[activeIndex].name}</p>
              </div>
              <div className="edu-container">
                {" "}
                <p>{testimonials[activeIndex].uni}</p>
                <p>{testimonials[activeIndex].degree}</p>
              </div>
              <div className="review-container">
                <p>{testimonials[activeIndex].review}</p>
              </div>
              <div className="linkedin-container">
                <a
                  href={testimonials[activeIndex].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>

          <div className="testimonial-card next">
            <div className="testimonial">
              <div className="image-container">
                <img
                  src={
                    testimonials[(activeIndex + 1) % testimonials.length].image
                  }
                  alt={
                    testimonials[(activeIndex + 1) % testimonials.length].name
                  }
                />
              </div>
              <div className="info-container">
                <div className="name-container">
                  <p>
                    {testimonials[(activeIndex + 1) % testimonials.length].name}
                  </p>
                </div>
              </div>
              <div className="edu-container">
                <p>
                  {testimonials[(activeIndex + 1) % testimonials.length].uni}
                </p>
                <p>
                  {testimonials[(activeIndex + 1) % testimonials.length].degree}
                </p>
              </div>
              <div className="review-container">
                <p>
                  {testimonials[(activeIndex + 1) % testimonials.length].review}
                </p>
              </div>
              <div className="linkedin-container">
                <a
                  href={
                    testimonials[(activeIndex + 1) % testimonials.length]
                      .linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow right-arrow" onClick={nextSlide}>
          &gt; {/* Right arrow */}
        </div>

        <style jsx>{`
          .testimonial-carousel {
            display: flex;
            flex-direction: column; /* Align cards vertically */
            align-items: center; /* Align cards center horizontally */
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

          .testimonial-card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .testimonial-card.current {
            transform: translateZ(0);
            background-color: #ddd; /* Color for the centered card */
          }
          .testimonial-card {
            flex: 0 0 auto; /* Adjust card size if needed */
            width: 80%; /* Adjust width of cards */
          }

          .previous,.next {
              opacity: 0.6; /* Adjust the transparency of the side cards */
          }

          .testimonial-card .image-container {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              overflow: hidden;
              margin-right: 20px;
              float: left;
          }

          .testimonial-card .image-container img {
              width: 100%;
              height: 100%;
              object-fit: cover;
          }

          .testimonial-card .info-container {
              width: calc(100% - 100px); /* Adjust as per the requirement */
              float: left;
          }

          .testimonial-card .name-container {
              font-weight: bold;
              text-align: right;
          }

          .testimonial-card .edu-container {
              font-style: italic;
              font-size: 0.8em;
              text-align: right;
          }

          .testimonial-card .review-container {
              text-align: justify;
              font-size: 0.8em;
          }

          .testimonial-card .linkedin-container {
              text-align: right;
              margin-top: 10px; /* Adjust as needed */
          }
          }
        `}</style>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

// components/TestimonialCarousel.jsx
"use client";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: "Arnab Chakravorty",
      degree: "Masters in Health Psychology",
      uni: "University Of Nottingham",
      review:
        " I extend my gratitude to Rishabh and your team for guiding me in choosing psychology studies. Unsure whether to pursue it in India or abroad, your expert advice was invaluable. Thanks for making my decision clearer.",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/arnab-chakravorty.jpg",
      linkedin: "https://www.linkedin.com/in/arnab-chakravorty/",
    },
    {
      name: "Diksha Babbar",
      degree: "Masters in Strategic Marketing",
      uni: "Cardiff University",
      review:
        "Axelis Overseas Education Pvt Ltd played a vital role in achieving my Master's in Strategic Marketing at Cardiff University. Their consultants, knowledgeable about diverse global study programs, helped align my choices with academic goals. Axelis' comprehensive support significantly shaped my educational journey.",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/Diksha_Babbar.jpeg",
      href: "https://www.linkedin.com/in/dikshababbar/",
    },
    {
      name: "M Vasundhara Rao",
      degree: "Master of Science - MS, Electrical and Computer Engineering",
      uni: "Northeastern University",
      review:
        "I was privileged to be assisted by Axelis Overseas Education Pvt Ltd for my Master's in Electrical and Computer Engineering at Northeastern University. As an aspiring international student, overwhelmed by the study abroad process, Axelis stood out as a remarkable consultant, seamlessly guiding me through the entire journey.",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/M_Vasundhara_Rao.png",
      href: "https://www.linkedin.com/in/vasundhara-rao/",
    },
    {
      name: "Siddhant Babar",
      degree: "Masters in Business Strategy and Entrepreneurship",
      uni: "Cardiff University",
      review:
        "Axelis Overseas Edu Pvt Ltd offered vital guidance for my Cardiff University Master's application. Comprehensive support, from course details to application, was exceptional. Accessible and expert advice throughout, I highly recommend Axelis for pursuing higher education abroad.",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/Siddhant_Babar.jpeg",
      href: "https://www.linkedin.com/in/siddhant-jaydip-babar-ba6553245",
    },
    {
      name: "Neetesh Jain",
      degree: "Masters in Business Strategy and Entrepreneurship",
      uni: "Cardiff University",
      review:
        "Axelis Overseas, led by mentor Rishabh Agrawal, has been pivotal in Neetesh's academic journey abroad. More than a consultancy, it's a supportive community shaping perspectives for academic excellence. Grateful for positive experiences, eagerly anticipating the future!",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/neetesh-jain.jpg",
      linkedin: "https://www.linkedin.com/in/neeteshjain06/",
    },
    {
      name: "Abhinandan",
      degree: "Masters in Business Management",
      uni: "Cardiff University",
      review:
        "Navigating the decision between Germany and the UK for my Master's was challenging. Axelis Overseas Education Pvt Ltd's expertise played a pivotal role in guiding me toward the ideal choice that aligned with my background and career aspirations. Their insights were invaluable in shaping my educational and professional trajectory.",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/abhinandan.jpeg",
      linkedin: "https://www.linkedin.com/in/abhinandan-katharwani/",
    },
    {
      name: "Rudrank Verma",
      degree: "Masters in Business Strategy and Entrepreneurship",
      uni: "Cardiff University",
      review:
        "I personally know Rishabh; we share a friendship beyond the counselor-client relationship. Amidst confusion about my engineering background and numerous options, Axelis, along with their tools, played a pivotal role in helping me recognize my true inclination.",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/rudrank-verma.jpeg",
      linkedin: "https://www.linkedin.com/in/rudrank-v-758733223/",
    },
    {
      name: "Palak Shah",
      degree: "BA (Hons) Graphic Communication and Design",
      uni: "University of Westminster",
      review:
        " I am delighted to share my incredible experience with Axelis Overseas Education Pvt Ltd, a renowned study abroad consultancy that truly sets the bar high in guiding students towards a successful education journey. With their exceptional services and unwavering support, I was able to embark on an unforgettable study abroad experience.",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/palak-shah.JPG",
      linkedin: "https://www.linkedin.com/in/palakshah23/",
    },
    {
      name: "Shivangi Sen",
      degree: "Masters of Multimedia Journalism",
      uni: "University Of Westminster",
      review:
        "I highly recommend Axelis Overseas for study abroad. With a vast network spanning 29 countries, they offer fee-free, comprehensive services, including housing, visa counseling, employability guidance, part-time job assistance, and loan advice. Axelis is dedicated to realizing students' dreams of studying abroad.",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/shivangi-sen.JPG",
      linkedin: "https://www.linkedin.com/in/shivangi-sen-8941771bb/",
    },
    {
      name: "Ansh Sonchattra",
      degree: "Bachelors in Accounting and Finance",
      uni: "Cardiff University",
      review:
        "Axelis Overseas specializes in realizing students' study abroad dreams, providing comprehensive and fee-free services for a seamless experience. From financial aid to part-time job assistance, visa support, and career counseling, Axelis covers all aspects, ensuring accessibility for all students. Their commitment to making studying abroad a reality is truly commendable.",
      image: "https://storage.googleapis.com/small-media-axelis-webapp/images/test/ansh-sonchattra.jpg",
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
    <div>
      <div className="flex justify-center">
      <h1 className="text-[#1a4a9c] text-2xl font-bold">Sucess Stories</h1>
      </div>
    <div className="flex justify-center items-center my-24">
      
    <div className="arrow left-arrow" onClick={prevSlide}>
    <FaArrowLeft/> {/* Left arrow */}
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
          <h2 className="float-left w-full text-lg font-medium text-white;
  font-family: `Rubik`, sans-serif">
            {" "}
            {
              testimonials[
                (activeIndex - 1 + testimonials.length) % testimonials.length
              ].name
            }
          </h2>  
          <h2 className="float-left w-full text-lg font-medium text-white;
  font-family: `Rubik`, sans-serif">
            {" "}
            {
              testimonials[
                (activeIndex - 1 + testimonials.length) % testimonials.length
              ].uni
            }
          </h2>
          <h2 className="float-left w-full text-sm font-medium text-white;
  font-family: `Rubik`, sans-serif">
            {" "}
            {
              testimonials[
                (activeIndex - 1 + testimonials.length) % testimonials.length
              ].degree
            }
          </h2>                      
          <p className="inline-block pt-4 text-sm">          
          {/* <RiDoubleQuotesL size={25} className=" inline-block -ml-6 -mt-4"/> */}
            {
              testimonials[
                (activeIndex - 1 + testimonials.length) % testimonials.length
              ].review
            }
            {/* <RiDoubleQuotesR size={25} className="inline-block -mt-4 content-end" /> */}
          </p>                    
        </div>
        </div>
        <div className="testimonial-card current">
          <div className="testimonial">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
            />            
            <h2 className="float-left w-full text-lg font-medium text-white;
  font-family: `Rubik`, sans-serif">{testimonials[activeIndex].name}</h2>
            <h2 className="float-left w-full text-lg font-medium text-white;
  font-family: `Rubik`, sans-serif">{testimonials[activeIndex].uni}</h2>
            <h2 className="float-left w-full text-sm font-medium text-white;
  font-family: `Rubik`, sans-serif">{testimonials[activeIndex].degree}</h2>
            <p className="inline-block pt-4 text-sm">{testimonials[activeIndex].review}</p>            
          </div>
        </div>
        <div className="testimonial-card next">
          <div className="testimonial">
            <img
              src={testimonials[(activeIndex + 1) % testimonials.length].image}
              alt={testimonials[(activeIndex + 1) % testimonials.length].name}
            />
            <h1 className="float-left w-full text-lg font-medium text-white;
  font-family: `Rubik`, sans-serif">
              {testimonials[(activeIndex + 1) % testimonials.length].name}
            </h1>
            <h2 className="float-left w-full text-lg font-medium text-white;
  font-family: `Rubik`, sans-serif">
              {testimonials[(activeIndex + 1) % testimonials.length].uni}
            </h2>
            <h2 className="float-left w-full text-sm font-medium text-white;
  font-family: `Rubik`, sans-serif">
              {testimonials[(activeIndex + 1) % testimonials.length].degree}
            </h2>
            <p className="inline-block pt-4 text-sm">{testimonials[(activeIndex + 1) % testimonials.length].review}</p>
            
          </div>
        </div>
      </div>
      <div className="arrow right-arrow" onClick={nextSlide}>
        <FaArrowRight/> {/* Right arrow */}
      </div>


      <style jsx>{`        
        .arrow {
          font-size: 24px;
          cursor: pointer;
          background-color: #f2f2f2;
          border-radius: 50%;
          padding: 10px;
          margin: 0 50px;
          transition: background-color 0.3s ease;
        }
        .left-arrow {
          transform: rotate(360deg); /* Rotate left arrow */
        }
        .arrow:hover {
          background-color: #ddd;
        }
        .testimonial-card {
          float: left;
          width: 100%;
          min-height: 400px;
          background-color: #1a4a9c;
          border-radius: 8px;
          padding-top: 100px;
          padding-bottom: 50px;
          padding-left: 50px;
          padding-right: 50px;
          margin:20px          
        }
        .testimonial-card:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .testimonial-card.current {
          transform: translateZ(0);
          background-color: #1a4a9c; /* Color for the centered card */
          color: white;
          margin:20px
        }
        img {
          float: left;
          width: 150px;
          border-radius: 100%;
          margin-top: -180px;
          margin-left: 10px;
        }
        .previous,
        .next {
          opacity: 0.4;
          color: white; /* Adjust the transparency of the side cards */
        }
        
        .carousel-container {
          display: flex;
          justify-content: space-between;
          width: 80%;
          perspective: 1000px;
          position: relative;
          margin: auto;
        }
      `}</style>
    </div>
    </div>
  );
};
  

export default TestimonialCarousel;

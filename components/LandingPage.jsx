"use client";
import React, { useState } from "react";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import TestimonialCarousel from "./TestimonialCarousel";
//import Offerings from "./Offerings";

const LandingPage = () => {
  const [showWindow, setShowWindow] = useState(false);

  const services = [
    {
      title: "Part Time Job Assistance",
      description: "Discover the best-fit universities for your career goals.",
      link: "/part-time-job-assistance",
    },
    {
      title: "Housing Assistance",
      description: "Discover the best-fit universities for your career goals.",
      link: "/housing-assistance",
    },
    {
      title: "Scholarship (1600+)",
      description: "Discover the best-fit universities for your career goals.",
      link: "/scholarships",
    },
    {
      title: "15+ Loans Partners",
      description:
        "Guidance and support throughout the visa application process.",
      link: "/loan-partners",
    },
    {
      title: "Test Preparation",
      description: "Prepare for standardized tests with our expert tutors.",
      link: "/test-preparation",
    },
    {
      title: "Visa Aid",
      description: "Comprehensive visa assistance and guidance",
      link: "/test-preparation",
    },
  ];

  return (
    <div className="font-sans">
      <section className="bg-gray-100">
      <div class="relative flex items-center bg-gray-400  justify-center h-screen overflow-hidden"> 
        <video src= "video/home_page.mp4"
            autoplay="{true}" loop muted 
            className="absolute w-auto  
            min-w-full min-h-full max-w-none"> 
        </video> 
        <div className="text-white w-full z-10 bg-[#ffffff30]">        
        <div className="max-w-[800px] mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">            
          {/* <p className="text-gray-200 font-bold p-2 uppercase md:text-6xl sm:text-6xl text-4xl">
            Get Ready To Fly
          </p>
          <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold md:py-6">
          Your Study Abroad Expert
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">
              NO 
            </p>
            {/* <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold pl-3"
              strings={[" CONSULTANCY FEES !"," HIDDEN FEES !"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            /> 
          </div> */}
          <Link href={'/forms'}>
          <button className="bg-[#0096FF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Enquire Now</button>          
          </Link>
        </div>                
      </div>  
        {/* <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 z-10 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Cyan to Blue</button> */}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Our Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6" >
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href={service.link}
                  className="block text-blue-500 mt-4 hover:underline"
                >
                  Know More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-500 text-white">
        {/* Content */}
      </section>
    </div>
  );
};

export default LandingPage;

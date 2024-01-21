"use client";
import React, { useState } from "react";
import Link from "next/link";

const LandingPage = () => {
  const [showWindow, setShowWindow] = useState(false);
  const destination = "https://calendly.com/axelisoverseas/counsellingsession";
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
      link: "/scholarShip",
    },
    {
      title: "15+ Loans Partners",
      description:
        "Guidance and support throughout the visa application process.",
      link: "/loans",
    },
    // {
    //   title: "Test Preparation",
    //   description: "Prepare for standardized tests with our expert tutors.",
    //   link: "/test-preparation",
    // },
    // {
    //   title: "Visa Aid",
    //   description: "Comprehensive visa assistance and guidance",
    //   link: "/test-preparation",
    // },
  ];  
  return (
    <div className="font-sans">
      <section className="bg-gray-100 relative overflow-hidden w-full pb-[46%]">
      <video src="video/home_page.mp4" type="video/mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
        {/* <source src="video/home_page.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      {/* Your content on top of the video, e.g., text, buttons, etc. */}
      <div className="absolute flex items-center h-screen">            
        <h1 className="text-4xl w-auto h-1/3 p-8 text-white bg-[#00000063] p-4 rounded-lg -ml-2">We Oversee Your <br /> Overseas Journey</h1>        
        </div>    
        <div className="absolute flex items-center h-screen mt-16 left-16">
        <Link href='/forms' state={{destination: destination}}>
        <button className='rounded-xl text-xl font-bold p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Get Started</button>
        </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-8" >
          <h2 className="text-3xl font-bold mb-8">Our Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6" >
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href={service.link}
                  target="_blank"
                  className="block text-blue-500 mt-4 hover:underline"
                >
                  Know More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-blue-500 text-white">
        
      </section> */}
    </div>
  );
};

export default LandingPage;

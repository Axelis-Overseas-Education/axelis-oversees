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
      <section className="mt-16 bg-gray-100 py-16">{/* Content */}</section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

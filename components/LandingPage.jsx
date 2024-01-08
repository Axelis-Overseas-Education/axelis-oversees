'use client';
import React, {useState} from 'react';
import Link from 'next/link'
import RegisterForm from './RegisterForm';
import TestimonialCarousel from './TestimonialCarousel';

const LandingPage = () => {
  const [window, setWindow] = useState(false)
  return (
    <div className="font-sans">      
      <section className="mt-16 bg-gray-100 py-16">
        <div className="container mx-auto text-center">                 
        {/* <div className={window? 'show m-auto':'hidden'}>
            <RegisterForm/>
          </div>    */}
          <h1 className="text-4xl font-bold mb-4">Your Gateway to Global Education</h1>
          <p className="text-gray-700 mb-8">Unlock opportunities with our expert guidance.</p>
          <Link href="/forms">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700" onClick={() => setWindow(!window)}>
            Get Started
          </button>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Part Time Job Assistance</h3>
              <p>Discover the best-fit universities for your career goals.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Housing Assistance</h3>
              <p>Discover the best-fit universities for your career goals.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Scholarship (1600+)</h3>
              <p>Discover the best-fit universities for your career goals.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">15+ Loans partners</h3>
              <p>Guidance and support throughout the visa application process.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Test Preparation</h3>
              <p>Prepare for standardized tests with our expert tutors.</p>
            </div>
          </div>
          {/* <Offerings/> */}
        </div>
      </section>

      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8">Ready to start your journey? Contact us today!</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-white hover:text-blue-500 border border-white" onClick={() => setWindow(!window)}>
            Contact Now
          </button>
        </div>
      </section>
      {/* <TestimonialCarousel/> */}
    </div>
  );
};

export default LandingPage;
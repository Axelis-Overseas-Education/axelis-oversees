"use client";
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import {useLocation } from 'react-router-dom';
import React, { useState } from 'react'

const RegisterForm = () => {    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [ielts_exam, setIelts] = useState("");
  const [course, setCourse] = useState("");
  const [country, setCountry] = useState("");
  const [start, setStart] = useState("");
  const [fund, setFund] = useState("");
  
  const router = useRouter();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert('Full Name is required.');
      return;
    }
    else if (!email) {
      alert('Email is required.');
      return;
    }
    else if (!phone) {
      alert('Phone Number is required.');
      return;
    }
    else if (!education) {
      alert('Education is required.');
      return;
    }
    else if (!ielts_exam) {
      alert('Selection of Ielts Exam is required.');
      return;
    }
    else if (!course) {
      alert('Course is required.');
      return;
    }
    else if (!start) {
      alert('Enter your start date ');
      return;
    }
    else if (!fund) {
      alert('Selection of Funds is required ');
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/customer", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          education,
          ielts_exam,
          course,
          country,
          start,
          fund,
        }),
      });

      if (res.ok) {
        console.log("Success");
        router.push("https://calendly.com/axelisoverseas/counsellingsession");
      } else {
        throw new Error("Failed to create a Customer");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md pt-32 pb-16">
      {/* <h1 className='flex align-center'>{destination} </h1> */}
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form onSubmit={handleSubmit} className="mb-0 space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='w-full border-gray-300 rounded-lg shadow-sm' type="text" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <div className="mt-1">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='w-full border-gray-300 rounded-lg shadow-sm' type="email" autoComplete="email" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="mt-1">
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className='w-full border-gray-300 rounded-lg shadow-sm' type="number" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your highest education level</label>
            <div className="mt-1">
              <select
                onChange={(e) => setEducation(e.target.value)}
                value={education}
                className='w-full border-gray-300 rounded-lg shadow-sm' required>
                <option value="">Please select</option>
                <option value="school">Right Out of School</option>
                <option value="UG">Undergraduate</option>
                <option value="PG">Post Graduate</option>
                <option value="PHD">PHD</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Have you taken IELTS exam</label>
            <div className="mt-1">
              <select
                onChange={(e) => setIelts(e.target.value)}
                value={ielts_exam}
                className='w-full border-gray-300 rounded-lg shadow-sm' required>
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">What kind of course you are looking for?</label>
            <div className="mt-1">
              <input
                onChange={(e) => setCourse(e.target.value)}
                value={course}
                className='w-full border-gray-300 rounded-lg shadow-sm' type="text" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Where would you like to fly?</label>
            <div className="mt-1">
              <input
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                className='w-full border-gray-300 rounded-lg shadow-sm' type="text" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">When do you plan on starting your studies abroad? </label>
            <div className="mt-1">
              <input
                onChange={(e) => setStart(e.target.value)}
                value={start} className='w-full border-gray-300 rounded-lg shadow-sm' type="text" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">How do you plan to fund your studies?</label>
            <div className="mt-1">
              <select
                onChange={(e) => setFund(e.target.value)}
                value={fund}
                className='w-full border-gray-300 rounded-lg shadow-sm' required>
                <option value="">Please select</option>
                <option value="Self-Funded">Self- Funded</option>
                <option value="Partially Funded with Scholarship">Partially Funded with Scholarship</option>
                <option value="Student Loan">Student Loan</option>
              </select>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default RegisterForm

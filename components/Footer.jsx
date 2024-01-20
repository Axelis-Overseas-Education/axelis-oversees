import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="p-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-slate-700">
        <div>
          <img className="w-[50%]" src="/images/axelis_footer.png" alt="/" />
          {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Axelis Overseas Education Pvt. Ltd.</h1> */}
          {/* <p className="py-4">
            <span>Address: </span> <br />
            B20, VRINDAVAN PLAZA,
            <br />
            NEHRU CHOWK, BILASPUR (C.G.)
          </p> */}
          <div style={{ textDecoration: "none", overflow: "hidden", maxWidth: "100%", width: "400px", height: "40%" }}>
            <div id="google-maps-display" style={{ height: "100%", width: "100%", maxWidth: "100%" }}>
              <iframe style={{ height: "100%", width: "100%" }} src="https://www.google.com/maps/embed/v1/place?q=Axelis+Overseas+Education+Pvt+Ltd,+Nehru+Chowk,+Bilaspur,+Chhattisgarh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
            </div>
          </div>
          <br />
          <p><span>Address :</span><br /> B20, Vrindawan Plaza, Bilaspur, C.G., 495001</p><br />
          <p>
            <span>Phone :</span>
            <br />
            <Link href="tel:8882320522">+91 8882320522</Link>
          </p>
          <br />
          <p>
            <span>Mail : </span>
            <br />
            <Link href="mailto: info@overseeducation.com">
              info@overseeducation.com
            </Link>
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a href={'https://www.facebook.com/profile.php?id=61552129672233&mibextid=LQQJ4d'} target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={30} /></a>
            <a href={'https://www.instagram.com/axelis_overseas?igsh=Nnhvcm9xZmo3MDYw&utm_source=qr'} target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
            {/* <FaXTwitter size={30} /> */}
            <a href={'https://www.linkedin.com/company/axelis-overseas-education-pvt-ltd/'} target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
            <a href={'https://wa.me/message/CBEDYXA6Z3JVP1'} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
            {/* <FaDribbbleSquare size={30} /> */}
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">About Axelis Overseas</h6>
            <ul>
              <Link href="/about">
                <li className="py-2 text-sm hover:border-b-2 border-white">About us</li>
              </Link>
              {/* <li className='py-2 text-sm'>Work with us/ Partner with us</li>
            <li className='py-2 text-sm'>(Alumni)</li> */}
              <Link href="/workWithUs">
                <li className="py-2 text-sm hover:border-b-2 border-white">Work with us</li>
              </Link>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Resources</h6>
            <ul>
              <Link href="/lor_page">
                <li className="py-2 text-sm hover:border-b-2 border-white">LOR</li>
              </Link>
              <Link href="/sop_page">
                <li className="py-2 text-sm hover:border-b-2 border-white">SOP</li>
              </Link>
              {/* <li className='py-2 text-sm'>IELTS Prep Crash Course / TOEFL</li> */}
              {/* <li className='py-2 text-sm'>API Status</li> */}
            </ul>
          </div>
          <div>
            <h6 className="font-large text-gray-400">Study Abroad</h6>
            <ul>
              <Link href="/pdf" as={`/pdf/${"usa.pdf"}`}><li className="py-2 text-sm hover:border-b-2 border-white">USA</li></Link>
              <Link href="/pdf" as={`/pdf/${"netherlands.pdf"}`}><li className="py-2 text-sm hover:border-b-2 border-white">Netherlands</li></Link>
              <Link href="/pdf" as={`/pdf/${"ireland.pdf"}`}><li className="py-2 text-sm hover:border-b-2 border-white">Ireland</li></Link>
              <Link href="/pdf" as={`/pdf/${"australia.pdf"}`}><li className="py-2 text-sm hover:border-b-2 border-white">Australia</li></Link>
              <Link href="/pdf" as={`/pdf/${"canada.pdf"}`}><li className="py-2 text-sm hover:border-b-2 border-white">Canada</li></Link>
              {/* <Link href="/pdf" as={`/pdf/${"japan.pdf"}`}><li className="py-2 text-sm">JAPAN</li></Link> */}
              <Link href="/pdf" as={`/pdf/${"singapore.pdf"}`}><li className="py-2 text-sm hover:border-b-2 border-white">Singapore</li></Link>
              <Link href="/pdf" as={`/pdf/${"uk.pdf"}`}><li className="py-2 text-sm hover:border-b-2 border-white">UK</li></Link>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Offerings</h6>
            <ul>
              <Link href="/part-time-job-assistance">
                <li className="py-2 text-sm hover:border-b-2 border-white">Part Time Job Assistance</li>
              </Link>
              <Link href="/housing-assistance">
                <li className="py-2 text-sm hover:border-b-2 border-white">Housing Assistance</li>
              </Link>
              <Link href="/scholarShip">
                <li className="py-2 text-sm hover:border-b-2 border-white">Scholarship (1600+)</li>
              </Link>
              <Link href="/loans">
                <li className="py-2 text-sm hover:border-b-2 border-white">15+ Loans partners</li>
              </Link>
              {/* <li className="py-2 text-sm">For Universities</li> */}
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-slate-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Axelis Overseas All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

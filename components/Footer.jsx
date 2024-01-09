import React from 'react';
import Link from 'next/link';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <div className='p-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-slate-700'>
        <div>
          <img className="w-[50%]" src="/images/axelis_footer.png" alt="/" />
          {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Axelis Overseas Education Pvt. Ltd.</h1> */}
          <p className='py-4'><span>Address: </span> <br />B20, VRINDAVAN PLAZA,
            <br />
            NEHRU CHOWK, BILASPUR (C.G.)</p>
          <p><span>Phone :</span><br /><Link href="tel:8882320522">+91 8882320522</Link></p>
          <br />
          <p><span>Mail : </span><br /><Link href="mailto: info@overseeducation.com">info@overseeducation.com</Link></p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaXTwitter size={30} />
          <FaLinkedin size={30} />
          {/* <FaDribbbleSquare size={30} /> */}
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>About Axelis Overseas</h6>
          <ul>
            <Link href="/about">
              <li className='py-2 text-sm'>About us</li>
            </Link>
            {/* <li className='py-2 text-sm'>Work with us/ Partner with us</li>
            <li className='py-2 text-sm'>(Alumni)</li> */}
            <li className='py-2 text-sm'>Work with us</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Resources</h6>
          <ul>
          <Link href="/lor_page">
            <li className='py-2 text-sm'>LOR</li>
            </Link>
            <Link href="/sop_page">
            <li className='py-2 text-sm'>SOP</li>
            </Link>
            {/* <li className='py-2 text-sm'>IELTS Prep Crash Course / TOEFL</li> */}
            {/* <li className='py-2 text-sm'>API Status</li> */}
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Study Abroad</h6>
          <ul>
            <li className='py-2 text-sm'>USA</li>
            <li className='py-2 text-sm'>Netherlands</li>
            <li className='py-2 text-sm'>Ireland</li>
            <li className='py-2 text-sm'>AUSTRALIA</li>
            <li className='py-2 text-sm'>CANADA</li>
            <li className='py-2 text-sm'>JAPAN</li>
            <li className='py-2 text-sm'>Singapore</li>
            <li className='py-2 text-sm'>UK</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Offerings</h6>
          <ul>
            <li className='py-2 text-sm'>Part Time Job Assistance</li>
            <li className='py-2 text-sm'>Housing Assistance</li>
            <li className='py-2 text-sm'>Scholarship (1600+)</li>
            <li className='py-2 text-sm'>15+ Loans partners</li>
            <li className='py-2 text-sm'>For Universities</li>
          </ul>
        </div>
      </div>
    </div >

      <footer className="bg-slate-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Axelis Overseas All rights reserved.</p>
        </div>
      </footer>
  </>
  );
};

export default Footer;
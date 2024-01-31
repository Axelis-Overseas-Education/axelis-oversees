'use client';
import React, { Fragment } from 'react';
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react';
import { IoMdArrowDown } from "react-icons/io";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <>
    <div className='fixed z-10 w-full h-20'>
    <div className='justify-center items-center h-10 flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2'>        
    <h1>Book a Free Counseling Session 🎉</h1>
    <Link href={{pathname:'/forms', query:{ destination : "https://calendly.com/axelisoverseas/counsellingsession"}}} target='_blank'><button className='text-white bg-transparent border ml-[15px] pt-0 pb-0.5 px-2.5 rounded-[5px] border-solid border-white'>Book A Session</button></Link>  
    </div>
    <div className='h-16 flex justify-between items-center px-8 bg-white'>      
      <Link href={"/"}><img className="h-16 max-auto color-black hover:cursor-pointer" src="https://storage.googleapis.com/small-media-axelis-webapp/images/logo_black.svg" alt="/" /></Link>      
      <ul className='flex items-center'>      
        <li className='p-4 hover:border-b-2 border-black'>
          <Menu as='div' className='relative inline-block text-left'>
            <Menu.Button>Offerings</Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/part-time-job-assistance"
                      target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Part Time Job Assistance
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/housing-assistance"
                      target='_blank'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Housing Assistance
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/scholarShip"
                      target='_blank'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Scholarships
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/loans"
                      target='_blank'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Loans
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>        
        <li className='p-4 hover:border-b-2 border-black'>
          <Menu as='div' className='relative inline-block text-left'>
            <Menu.Button>Study Abroad</Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href={{pathname:'/forms', query:{ destination : `/pdf/${"usa.pdf"}`}}}                      
                      target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        USA
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href={{pathname:'/forms', query:{ destination : `/pdf/${"netherlands.pdf"}`}}}                                 
                      target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Netherlands
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href={{pathname:'/forms', query:{ destination : `/pdf/${"ireland.pdf"}`}}}                      
                      target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Ireland
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href={{pathname:'/forms', query:{ destination : `/pdf/${"australia.pdf"}`}}}                      
                      target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Australia
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href={{pathname:'/forms', query:{ destination : `/pdf/${"canada.pdf"}`}}}                      
                      target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Canada
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href={{pathname:'/forms', query:{ destination : `/pdf/${"singapore.pdf"}`}}}                      
                      target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Singapore
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      href={{pathname:'/forms', query:{ destination : `/pdf/${"uk.pdf"}`}}}                      
                      target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        UK
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>        
        <li className='p-4 hover:border-b-2 border-black'>
          <Menu as='div' className='relative inline-block text-left'>
            <Menu.Button>Resources</Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='/lor_page'
                        target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        LOR
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='/sop_page'
                        target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        SOP
                      </a>
                    )}
                  </Menu.Item>                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>                
        <li className='p-4 hover:border-b-2 border-black'><Link href={'/about'} target='_blank'>About Us</Link></li>
      </ul>
    </div>
    </div>
    </>
  );
};

export default Navbar;
'use client';
import Head from 'next/head';
import styles from './about.module.css';
import React, {useState, useEffect} from 'react';
import {  
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { FaUserGraduate } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

const AboutUs = () => {

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Developer',
      image: '/images/photo.jpg',
      href: 'https://www.linkedin.com/in/shubham-raj-2a32a317b',
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      image: '/images/photo.jpg',
    },
    {
      name: 'John Doe',
      role: 'Developer',
      image: '/images/photo.jpg',
      href: 'https://www.linkedin.com/in/shubham-raj-2a32a317b',
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      image: '/images/photo.jpg',
    },
    {
      name: 'John Doe',
      role: 'Developer',
      image: '/images/photo.jpg',
      href: 'https://www.linkedin.com/in/shubham-raj-2a32a317b',
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      image: '/images/photo.jpg',
    },
    {
      name: 'John Doe',
      role: 'Developer',
      image: '/images/photo.jpg',
      href: 'https://www.linkedin.com/in/shubham-raj-2a32a317b',
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      image: '/images/photo.jpg',
    },

  ];

  const faqs = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      

      <main className={styles.aboutContainer}>
      <section className={styles.landmarkPage}>
          <div className={styles.landIntro}>
            <h1 className={styles.introHeading}>Our Mission</h1>
            <div className={styles.introDescription}>
              <h1>We are building</h1><span>the</span><span className={styles.highlight}> global citizens</span> of tomorrow
            </div>
            <div className={styles.flagImages}>
            <div className={styles.flagContainer}>
              <div className={styles.flagWithText}>
                <img src="/images/UK.png" alt="Flag 1" className={styles.flag} />
              </div>
              <div className={styles.flagWithText}>
                <img src="/images/Australia.png" alt="Flag 2" className={styles.flag} />
              </div>
              <div className={styles.flagWithText}>
                <img src="/images/Canada.png" alt="Flag 3" className={styles.flag} />
              </div>
              <div className={styles.flagWithText}>
                <img src="/images/US.png" alt="Flag 4" className={styles.flag} />
              </div>
            </div>
          </div>
          <p  className={styles.textShade}>&nbsp;&nbsp;and more</p>
          </div>
        </section>
        <section className={styles.introSection}>
        <div className={styles.intorHeading}>
      <Head>
        {/* ... (existing code) */}
      </Head>
      <h5>Our Story</h5>
      <div className={styles.introSection}>
        <div className={styles.introduction}>
          <h3>Introduction</h3>
          <p>
            Your company introduction text goes here. Provide a brief overview of your company's mission, values, and
            what you offer.
          </p>
        </div>
        <div className={styles.video}>
          {/* Insert your video component or embed code here */}
          <iframe
            width="230"
            height="405"
            src="/video/intro_axelis.mp4"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Rest of the content */}
    </div>
        </section>

        <section className={styles.statistics}>
        <ul className={styles.statsGrid}>
    <li>
      <div>
        <i className="fas fa-globe"></i>
        <FaGlobeAmericas size={100}/>
        <h3>29+ Countries</h3>
        <p>Number of countries we operate in</p>
      </div>
    </li>
    <li>
      <div>
        <i className="fas fa-user-graduate"></i>
        <FaUserGraduate size={100}/>
        <h3>200+ Students</h3>
        <p>Number of students impacted</p>
      </div>
    </li>
    <li>
      <div>
        <i className="fas fa-university"></i>
        <FaPeopleRoof size={100}/>
        <h3>2500+ University Partners</h3>
        <p>Number of university partners</p>
      </div>
    </li>
    <li>
      <div>
        <i className="fas fa-handshake"></i>
        <GiTakeMyMoney size={100}/>
        <h3>1600+ Scholarships Partners</h3>
        <p>Number of scholarships partners</p>
      </div>
    </li>
  </ul>
        </section>

        <section className={styles.team}>
        <div className={styles.container}>
      <Head>
        <title>Our Team - Your Company</title>
        <meta name="description" content="Meet our talented team members" />
        {/* Add other meta tags or SEO-related data */}
      </Head>

      <h1 className={styles.heading}>Our Team</h1>
      <div className={styles.teamCards}>
        {teamMembers.map((member, index) => (
          <div className={styles.memberCard}>
      <img src={member.image} alt={member.name} className={styles.memberImage} />
      <h3>{member.name}</h3>
      <div className={styles.roleBorder}></div>
      <p>{member.role}</p>
      <a href={member.href} target="_blank"><FaLinkedin size={30}/></a>
    </div>
        ))}
      </div>
    </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.container}>
            <Head>
              {/* ... (existing code) */}
            </Head>
            <h2>FAQ</h2>
            <div className={styles.faqSection}>
              {faqs.map((faq, index) => (
                <div key={index} className={`${styles.faq} faq ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                  <div className={styles.question}>
                    <p>{faq.question}</p>
                    <span>{activeIndex === index ? '-' : '+'}</span>
                  </div>
                  <div className={styles.answer} style={{ display: activeIndex === index ? 'block' : 'none' }}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;

'use client';
import Head from 'next/head';
import styles from './about.module.css';
import React, {useState, useRef} from 'react';
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
      name: 'Rishabh Agrawal',
      role: 'Founder',
      image: '/images/images/Rishabh.png',
      href: 'https://www.linkedin.com/in/rishabhagrawal1828',
    },
    {
      name: 'John Daniel Oonnoonny',
      role: 'Co-Founder',
      image: '/images/images/John.jpg',
      href:'https://www.linkedin.com/in/john-daniel-oonnoonny-7920b11bb'
    },
    {
      name: 'Shristi Agrawal',
      role: 'Creative Head',
      image: '/images/images/Shristi Agrawal.jpeg',
      href: 'https://www.linkedin.com/in/shristi-agrawal',
    },
    {
      name: 'Joydip Bhowmick',
      role: 'Head of Data Science & Analytics',
      image: '/images/images/Joy.jpg',
      href: 'https://www.linkedin.com/in/joydip-bhowmick-69363315b'
    },
    {
      name: 'Harsh Singh',
      role: 'Head of Business Development',
      image: '/images/images/Harsh Singh.jpeg',
      href: 'https://www.linkedin.com/in/harsh-singh-80b916169',
    },
    {
      name: 'Saee Pushkar Konher',
      role: 'Business Development Manager',
      image: '/images/images/Saee.jpg',
      href: 'https://www.linkedin.com/in/saee-konher-11ab60249',
    },
    {
      name: 'Vishwa Priya Talari',
      role: 'Operations Manager',
      image: '/images/images/Vishwa Priya.JPG',
      href: 'https://www.linkedin.com/in/talarivishwapriya',
    },
    {
      name: 'Sidharth Bansal',
      role: 'Software Developer',
      image: '/images/images/Sidharth Bansal.jpeg',
      href: 'https://www.linkedin.com/in/bansalsid31',
    },
    {
      name: 'Shubham Raj',
      role: 'Software Developer',
      image: '/images/images/Shubham.jpg',
      href: 'https://www.linkedin.com/in/shubham-raj-2a32a317b',
    },
    {
      name: 'Vicky Kumar',
      role: 'Software Developer',
      image: '/images/images/vicky.jpg',
      href: 'https://www.linkedin.com/in/vicky-kumar-raja',
    },
    {
      name: 'Neeraj Thombre',
      role: 'Business Development Associate',
      image: '/images/images/Neeraj.jpg',
      href: '',
    },
    {
      name: 'Oshin Khandelwal',
      role: 'Business Development Associate',
      image: '/images/images/Oshin Khandelwal.jpg',
      href: 'https://www.linkedin.com/in/oshin-khandelwal-083566a4',
    },
    {
      name: 'Rubi Kumari',
      role: 'Business Development Associate',
      image: '/images/images/Rubi kumari.jpg',
      href: 'https://www.linkedin.com/in/rubi-kumari-77775021b',
    },
    {
      name: 'Jagrati Upadhyay',
      role: 'DevOps Intern',
      image: '/images/images/Jagrati.jpg',
      href: 'https://www.linkedin.com/in/jagrati-upadhyay-079a16221/',
    },

  ];

  const faqs = [
    {
      question: ' What services does Axelis Overseas provide?',
      answer: '✨ Axelis offers comprehensive overseas education services, including admissions guidance, housing assistance, loan partnerships, scholarships, visa support, and career counseling.',
    },
    {
      question: ' How is Axelis different from other consultancies?',
      answer: '💰 Axelis, an alumni-based company, provides insider insights, a global network, and personalized support, ensuring a unique and informed experience for aspiring students.',
    },
    {
      question: 'What countries does Axelis operate in?',
      answer: 'Axelis operates in 29 countries, facilitating study opportunities in the United States, United Kingdom, Canada, Australia, Germany, France, Italy, Spain, and more.🏠',
    },
    {
      question: ' Can Axelis help with housing arrangements?',
      answer: 'Yes, Axelis collaborates with housing platforms like UniAcco, AmberStudent, and others to offer tailored housing solutions for students studying abroad.',
    },
    {
      question: '  How many loan partners does Axelis have?',
      answer: 'Axelis has partnered with 15+ financial institutions, providing students with diverse options for education loans.',
    },
    {
      question: 'Are there scholarship opportunities through Axelis?',
      answer: 'Yes, Axelis offers access to 1600+ scholarship opportunities, supporting students in their academic pursuits.',
    },
    {
      question: ' What visa assistance does Axelis provide?',
      answer: 'Axelis provides dedicated assistance in visa application processes, ensuring a smooth transition for students moving abroad.',
    },
    {
      question: ' How does Axelis support career development?',
      answer: 'Axelis assists students not only in finding accommodation but also in part-time housing support and career counseling, ensuring holistic support.',
    },
    {
      question: "What is Axelis's approach to admissions guidance?",
      answer: 'Axelis employs a targeted approach, leveraging data-driven insights and personalized marketing to connect students with the right programs and scholarships.',
    },
    {
      question: " How can universities partner with Axelis?",
      answer: 'Universities can partner with Axelis to attract top international talent, enhance global reputation, reduce admissions workload, and expand their reach into new regions.',
    },
    // Add more FAQ items as needed
  ];

  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const showMore = () => {
    setDisplayCount(faqs.length);
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };


  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      

      <main className={styles.aboutContainer}>
      <section className={styles.landmarkPage}>
          <div className={styles.landIntro}>
            {/* <h1 className={styles.introHeading}>Our Mission</h1> */}
            <div className={styles.introDescription}>
              <h1 className='text-white'>We Oversee Your <br /> Overseas Journey</h1>
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
      <h5 className={styles.introHeader}>Our Story</h5>
      <div className={styles.introSection}>
        <div className={styles.introduction}>
          <h3>Why Axelis?</h3>
                <p>
                  We're your go-to squad for international education, offering:

                  Part-Time Opportunities: Beyond stuffing your brain with knowledge, we link you to part-time gigs in major countries. Earn while you learn and turn your degree into a powerhouse of experience.

                  Funds and Scholarships: Say goodbye to financial worries! We're your financial fairy godmother, guiding you to every scholarship and aid opportunity available.

                  Housing Solutions: Stress-free living is our priority. Axelis ensures you find a cozy home away from home.

                  No Fees: Quality education without the financial strain—our mission is to make education accessible to all.

                  We're present in 29 countries, connected with renowned universities, and focused on getting you not just any degree but the right one for an epic career.

                  Employability Counselling Approach? That's our secret sauce. Whether it's Undergrad, Postgrad, or a PhD, Axelis is your partner-in-crime for a global education journey filled with both learning and fun.

                  Ready to embark on your academic adventure? Connect with us at Axelis, and let's turn your dreams into reality!
                </p>
        </div>
              <div className={styles.video}>
                <video
                  ref={videoRef}
                  src="/video/intro_axelis.mp4"
                  type="video/mp4"
                  loop
                  className="top-0 left-0 w-25 h-50 object-cover"
                  onClick={togglePlayPause}
                  />   
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
        <i className=""></i>
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
      <div className={styles.borderDesign}></div>
      <div className={styles.teamCards}>
        {teamMembers.map((member, index) => (
          <div className={styles.memberCard}>
      <img src={member.image} alt={member.name} className={styles.memberImage} />
      <h3>{member.name}</h3>
      <div className={styles.roleBorder}></div>
      <p>{member.role}</p>
      <a href={member.href} target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a>
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
            <h2 className={styles.heading}>FAQ</h2>
            <div className={styles.borderFaq}></div>
            <h1 className={styles.headiInfo}>Please contact us if you cannot find an answer to your question.</h1>
            <div className={styles.faqSection}>
              {faqs.slice(0, displayCount).map((faq, index) => (
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
              {faqs.length > initialDisplayCount && displayCount < faqs.length && (
                <div className={styles.moreButton}> <button onClick={showMore} >
                  More
                </button></div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;

'use client'
import Head from 'next/head';
import styles from './workwithus.module.css'
import React, {useEffect} from 'react';


const WorkWithUs = () => {


  const workPartners = [
      {
        image: '/images/office1.jpg',
        name: 'office1'
      },
      {
        image: '/images/office2.jpg',
        name: 'office2'
      },
      {
        image: '/images/office3.JPG',
        name: 'office3'
      }
    // Add similar objects for the remaining culture items
  ];

    const cultureItems = [
        {
          title: 'Embark on a Continuous Learning Journey:',
          description: 'At Axelis, we encourage you to wear multiple hats, fostering a dynamic learning curve. Embrace challenges, learn from mistakes, and collectively grow as a team.',
        },

        {
            title: 'Embrace Diversity at Its Core:',
            description: 'Our company, comprised of dedicated alumni, thrives on diversity. Collaborate seamlessly with professionals from different corners of the world, enriching your work experience.',
          },
          {
            title: 'Recognition That Matters:',
            description: 'At Axelis, we believe in recognizing exceptional efforts. Going the extra mile never goes unnoticed, and we ensure that your contributions are duly acknowledged and rewarded.',
          },
          {
            title: 'Your Voice Matters:',
            description: 'We treat every employee like family, ensuring that everyone has a say. Enjoy an open communication culture where every team members input is valued, fostering a sense of approachability.',
          },
          {
            title: 'Encouraging an Experimental Mindset:',
            description: 'Explore beyond your usual domain. Axelis promotes an experimenting attitude, allowing you to involve into projects that spark your interest and broaden your skill set.',
          },
          {
            title: 'Work with Young and Enthusiastic Professionals:',
            description: 'Join a vibrant team of young and enthusiastic colleagues across various functions. Collaborate in an environment that values energy, passion, and innovative thinking.',
          },
        // Add similar objects for the remaining culture items
      ];

  return (
    <div>
      <Head>
        <title>Work With Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className={styles.landmarkPage}>
      <header className={styles.headSummary}>
        <h1>Discover endless opportunities and enrich your life by venturing abroad with Axelis Overseas</h1>
      </header>
        <div className={styles.workWithUsSummary}>
          <img src="/gif/workWithBackground.gif" alt="Flag 1" className={styles.flag} />
        </div>
          <div className={styles.landIntro}>
            <div className={styles.introDescription}>
            </div>
          </div>
        </section>
        <div className={styles.WorkCultureHead}>Life @ Axelis Overseas</div>
        <h1 className={styles.WorkSummary}>"Embrace dedication, celebrate even more at Axelis OverSeas."</h1>
        <section className={styles.teams}>
        <div className={styles.teamCards}>
        {workPartners.map((item, index) => (
          <div key={index} >
            <h3><img src={item.image} alt={item.name} className={styles.memberImage} /></h3>
          </div>
        ))}
        </div>
      </section>
        <div className={styles.WorkCulture}>Why Choose Axelis Overseas as Your Workplace?</div>
        <section className={styles.culture}>
      <div className={styles.cultureGrid}>
        {cultureItems.map((item, index) => (
          <div key={index} className={styles.cultureItem}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>

      <section className={styles.whyus}>
        <h2 className={styles.whyWithUs}>Why Work With Us?</h2>
        <p>
          Join our team and be part of a company that values your skills, encourages growth, and fosters a positive
          working environment. We're committed to excellence and believe in the potential of every individual to make a
          difference. </p><br />
        <h1 className={'styles.shareCv'}>Please share your CV with axelisoverseas@overseeducation.com and we would be delighted to know more about you.</h1>
      </section>
    </div>
    
  );
};

export default WorkWithUs;

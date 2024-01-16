"use client"
import React, { useState } from 'react';
import styles from './scholarship.module.css';

const Scholarship = () => {
  const scholarships = [
    {
      id: 1,
      title: 'USA',
      description1: 'Shine with Excellence: Merit-based scholarships reward academic prowess, offering up to $25,000/year!',
      description2: 'Bridge the Gap: Need-based scholarships help you achieve your goals without limitations.',
      description3: 'Balance Brilliance: Athletic scholarships let you excel on and off the field, pursuing both academics and athletics.',
      description4: 'Fuel Your Research: Dedicated funding supports groundbreaking research endeavours.',
    },
    {
      id: 2,
      title: 'UK',
      description: 'Exceptional Minds Recognized: Chevening Scholarships reward leadership potential with merit-based funding.Global Collaboration: Foster knowledge exchange across Commonwealth nations with Commonwealth Scholarships.Dive Deep into Research: Postgraduate funding fuels groundbreaking research aspirations.',
      eligibility: 'For students pursuing a degree in STEM fields',
      deadline: 'April 15, 2024',
    },
    {
      id: 3,
      title: 'CANADA',
      description: 'Quisque non felis quis quam cursus scelerisque. Integer eget sem nec dolor bibendum efficitur. Sed vel dui sed purus mattis ullamcorper ut a mi. Aliquam id risus a eros tristique suscipit id vitae quam. Vestibulum consequat euismod risus, eget fermentum ex tincidunt in. Duis fermentum odio vitae erat cursus luctus. Sed nec odio eu nisi bibendum fringilla non in nunc.',
      eligibility: 'Available for students with demonstrated financial need',
      deadline: 'May 1, 2024',
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  const collegeScholarships = [
    "1. Central Michigan University, Mount Pleasant, Michigan - International President's Award: $1,000 to $9,000 a year",
    "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
    'University C',
  ];


  
 





  
  const thirdPartyScholarships = [
    'Scholarship X',
    'Scholarship Y',
    'Scholarship Z',
  ];
  
  const openUniversityPopup = (universities, scholarshipType) => {
    const universitiesText = universities.join('\n');
    const newWindow = window.open('', '_blank', 'resizable=yes, scrollbars=yes, toolbar=no, menubar=no, location=no, status=no');
  
    const content = `
      <style>
        body {
          line-height: 1.5;
          font-weight: bold;
        }
        h2 {
          margin-bottom: 10px;
          font-family:sans-serif;
        }
      </style>
      <h2>${scholarshipType} Universities</h2>
      <pre>${universitiesText}</pre>
    `;
  
    newWindow.document.write(content);
  
    const contentHeight = newWindow.document.body.scrollHeight;
    const contentWidth = newWindow.document.body.scrollWidth;
  
    newWindow.resizeTo(contentWidth + 20, contentHeight + 20);
  };


  return (
    <div className={styles.main}>
      <div className={styles.title}>Welcome to Axelis Scholarships 1600+ Scholarships worth $3Billion Available</div>
      <section className={styles.partiesGrid}>
      <div className={styles.gridAlign}>
      <div className={styles.card}>
        <h2>College Scholarship</h2>
        <h1>Click to view college scholarship universities list.</h1>
        <button className={styles.button} onClick={() => openUniversityPopup(collegeScholarships, 'College')}>
          Open Universities
        </button>
      </div>

      <div className={styles.card}>
        <h2>Third-Party Scholarship</h2>
        <h1>Click to view third-party scholarship universities list.</h1>
        <button className={styles.button} onClick={() => openUniversityPopup(thirdPartyScholarships, 'Third-Party')}>
          Open Universities
        </button>
      </div>
    </div>
      </section>
      
      <section>
      <div className={styles.scholarshipContainer}>
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className={styles.scholarshipCard}>
            <h2>{scholarship.title}</h2>
            <div className={styles.content}>
              <h1 className={`${styles.description} ${expandedCard === scholarship.id ? styles.expanded : ''}`}>
                <h1>{scholarship.description1}</h1>
                <h1>{scholarship.description2}</h1>
                <h1>{scholarship.description3}</h1>
                <h1>{scholarship.description4}</h1>
              </h1>
              {expandedCard === scholarship.id && (
                <>
                  {/* <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                  <p><strong>Deadline:</strong> {scholarship.deadline}</p> */}
                </>
              )}
            </div>
            <div className={styles.cardFooter}>
              <button
                onClick={() => handleToggleExpand(scholarship.id)}
                className={styles.toggleButton}>
                {expandedCard === scholarship.id ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
      </section>
      
    </div>
  );
};

export default Scholarship;

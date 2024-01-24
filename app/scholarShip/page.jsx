"use client";
import React, { useState } from "react";
import styles from "./scholarship.module.css";

const Scholarship = () => {
  const scholarships = [
    {
      id: 1,
      title: "USA",

      description: (
        <ol>
          <li>
            Shine with Excellence: Merit-based scholarships reward academic
            prowess, offering up to $25,000/year!"
          </li>
          <li>
            Bridge the Gap: Need-based scholarships help you achieve your goals
            without limitations."
          </li>
          <li>
            Balance Brilliance: Athletic scholarships let you excel on and off
            the field, pursuing both academics and athletics."
          </li>
          <li>
            Fuel Your Research: Dedicated funding supports groundbreaking
            research endeavours."
          </li>
        </ol>
      ),
    },
    {
      id: 2,
      title: "UK",

      description: (
        <ol>
          <li>
            Exceptional Minds Recognized: Chevening Scholarships reward
            leadership potential with merit-based funding.
          </li>
          <li>
            Global Collaboration: Foster knowledge exchange across Commonwealth
            nations with Commonwealth Scholarships.
          </li>
          <li>
            Dive Deep into Research: Postgraduate funding fuels groundbreaking
            research aspirations.
          </li>
        </ol>
      ),
    },
    {
      id: 3,
      title: "Canada",

      description: (
        <ol>
          <li>
            Automatic Scholarship Awards: No need for separate applications!
            Canadian institutions proactively grant scholarships based on your
            merit.
          </li>
          <li>
            Top Universities Await: Maximize your scholarship potential at
            renowned institutions like University Canada West, Wilfrid Laurier
            University, Dalhousie University, and more.
          </li>
        </ol>
      ),
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);
  const [modal, setModal] = useState(null);
  const [usa, setUSA] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  const collegeScholarships = [
    "1. Central Michigan University, Mount Pleasant, Michigan - International President's Award: $1,000 to $9,000 a year",
    "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
    "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
    "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
    "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
    "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
    "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
    "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
  ];

  const thirdPartyScholarships = [
   "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
   "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
   "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
   "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
   "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
   "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
   "2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year",
  ];

  const openUniversityPopup = (universities, scholarshipType) => {
    const universitiesText = universities.join("\n");
    const newWindow = window.open(
      "",
      "_blank",
      "resizable=yes, scrollbars=yes, toolbar=no, menubar=no, location=no, status=no"
    );

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
      {modal ? (
        <div className={styles.modal} onClick={() => setModal(null)}>
          <div className={styles.modalContent}>{modal}</div>
        </div>
      ) : null}
      <div className={styles.headingContainer}>
        <img
          src="/images/Scholarships-main.png"
          alt="Image"
          className={styles.headingImage}
        />
        <h1 className={styles.heading}>
          Welcome to Axelis Scholarships 1600+ Scholarships worth $3 Billion
          Available
        </h1>
      </div>
      <section className={styles.partiesGrid}>
        <div className={styles.gridAlign}>
          <div className={styles.card}>
            <h1 className={styles.universityHeader}>College Scholarship</h1>
            <p>Click to view college scholarship universities list.</p>
            <button
              className={styles.button}
              onClick={() =>
                setModal(collegeScholarships.map((scholarship, index) => (
                  <p key={index}>{scholarship}</p>
                )))
              }
            >
              Open Universities
            </button>
          </div>

          <div className={styles.card}>
            <h2 className={styles.universityHeader}>Third-Party Scholarship</h2>
            <h1>Click to view third-party scholarship universities list.</h1>
            <button
              className={styles.button}
              onClick={() =>
                //openUniversityPopup(thirdPartyScholarships, "Third-Party")
                 setModal(thirdPartyScholarships.map((scholarship, index) => (
                  <p key={index}>{scholarship}</p>
                )))
              }
            >
              Open Universities
            </button>
          </div>
        </div>
      </section>

      <section className="m-32">
        <div className={styles.scholarship7Container}>
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className={styles.scholarshipCard}

            >
              <h2 className={styles.universityHeader}>{scholarship.title}</h2>
              <div className={styles.content}>
                <h1
                  className={`${styles.description} ${expandedCard !== scholarship.id ? styles.expanded : ""
                    }`}
                >
                  <h1>{scholarship.description}</h1>
                </h1>
              </div>
              <div className={styles.cardFooter}>
                <button
                  onClick={() => {
                    handleToggleExpand(scholarship.id);
                    console.log(expandedCard);
                  }}
                  className={styles.toggleButton}
                >
                  {expandedCard === scholarship.id ? "Read Less" : "Read More"}
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

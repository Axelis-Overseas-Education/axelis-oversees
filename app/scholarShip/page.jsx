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
    `1. Central Michigan University, Mount Pleasant, Michigan - International President's Award: $1,000 to $9,000 a year`,
    `2. Cleveland State University, Cleveland, Ohio - Academic Excellence Scholarship: $1,500 per year`,
    `3. Colorado State University, Fort Collins, Colorado - Merit-based scholarship: $2,000 to $12,000 per year`,
    `4. Concordia University Chicago, River Forest, Illinois - Freshman Merit Scholarship/Award: $5,000 - $15,000 per year`,
    `5. DePaul University, Chicago, Illinois - Merit-based scholarship: $9,000 - $25,000 per year`,
    `6. Eastern Michigan University, Ypsilanti, Michigan - Presidential Scholarship: Full tuition and room & board`,
    `7. Embry Riddle Aeronautical University, Daytona Beach, Florida, and Prescott, Arizona - Merit-based scholarship: $3,000 / year to $12,000 / year`,
    `8. Fairleigh Dickinson University, New Jersey - FDU International Scholarship: Up to $24,000 per year`,
    `9. Fisher College, Boston, Massachusetts - Merit-Based Scholarships (Presidential Scholarship): $12,000 to $22,000 per year`,
    `10. Florida Institute Of Technology, Melbourne, Florida - Florida Tech Funds: $10,000 / year`,
    ``,
    `United Kingdom:`,
    `1. Brunel University London`,
    `2. The University of Sheffield`,
    `3. University of Liverpool`,
    `4. University of Leicester`,
    `5. Queen's University Belfast`,
    `6. Loughborough University, London`,
    `7. Swansea University`,
    `8. University of Stirling`,
    `9. University of Portsmouth`,
    `10. Manchester Metropolitan University`,
    ``,
    `Canada:`,
    `In Canada, the scholarship landscape differs, eliminating the need for a separate application. Institutions proactively provide scholarships, and Axelis Overseas Study Abroad Consulting ensures you are well-informed about these opportunities.`,
    `1. University Canada West`,
    `2. Lambton College - Sarnia Campus`,
    `3. Wilfrid Laurier University`,
    `4. Dalhousie University`,
    `5. University of Victoria`,
    `6. Trent University`,
    `7. University of Lakehead`,
    `8. University of Waterloo - UG`,
    `9. University of Guelph - UG`,
    `10. Brock University`,
  ];

  const thirdPartyScholarships = [
    "1. USA:",
    "   - Merit-Based Scholarships: Shine with academic excellence and leadership prowess.\n",
    "   - Need-Based Scholarships: Bridge the financial gap and pursue your goals without limitations.\n",
    "   - Athletic Scholarships: Excel both on and off the field, balancing academics and athletic brilliance.\n",
    "   - Research Scholarships: Fuel your groundbreaking research endeavors with dedicated funding.\n",
    "2. UK:",
    "   - Chevening Scholarships: Merit-based recognition for exceptional minds with leadership potential.",
    "   - Commonwealth Scholarships: Foster collaboration and knowledge exchange among Commonwealth nations.",
    "   - Research Council Scholarships: Dive deep into groundbreaking research with postgraduate funding.",
    "3. Canada:",
    "   - Vanier Canada Graduate Scholarships: Exceptional doctoral students, exceptional support.",
    "   - Entrance Scholarships: Rewarded from the start, based on your academic achievements.",
    "   - International Tuition Fee Scholarships: Ease the financial burden and focus on academic pursuits.",
    "4. Australia:",
    "   - Australia Awards Scholarships: Funded by the Australian government, opening doors for students from developing countries.",
    "   - Research Training Program Scholarships: Fuel your postgraduate research journey in the Land Down Under.",
    "   - Endeavour Scholarships: Embrace international collaboration and enrich your learning experience.",
    "5. Germany:",
    "   - DAAD Scholarships: A diverse spectrum of opportunities for international students at all levels.",
    "   - Deutschlandstipendium: Merit-based support for high-flying academic talents.",
    "6. France:",
    "   - Eiffel Excellence Scholarship Program: Master's and Ph.D. aspirants, your French adventure awaits!",
    "   - Erasmus+ Scholarships: Experience mobility and exchange programs across Europe.",
    "7. Italy:",
    "   - Italian Government Scholarships: Embrace funded opportunities for foreign students.",
    "   - Bologna University Study Grants: Merit-based support for international scholars.",
    "8. Spain:",
    "   - Spanish Government Scholarships: Immerse yourself in Spanish studies with government-funded support.",
    "   - La Caixa Foundation Scholarships: Explore a variety of postgraduate scholarship options.",
    "9. Netherlands:",
    "   - Orange Knowledge Programme: Professionals worldwide, build your capacity with dedicated scholarships.",
    "   - Holland Scholarship: Enticement for international students to embark on their Dutch academic journey.",
    "10. Sweden:",
    "   - Swedish Institute Scholarships: Government-funded support for international scholars seeking Swedish horizons.",
    "   - Karolinska Institutet Global Master's Scholarships: Dive into the world of health sciences with master's program funding.",
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
          <div className={styles.modalContent}>
            {modal.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
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
            <h2>College Scholarship</h2>
            <h1>Click to view college scholarship universities list.</h1>
            <button
              className={styles.button}
              onClick={() => setModal(collegeScholarships.join("\n"))}
            >
              Open Universities
            </button>
          </div>

          <div className={styles.card}>
            <h2>Third-Party Scholarship</h2>
            <h1>Click to view third-party scholarship universities list.</h1>
            <button
              className={styles.button}
              onClick={() => setModal(thirdPartyScholarships.join("\n"))}
            >
              Open Universities
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.scholarship7Container}>
          {scholarships.map((scholarship) => (
            <div key={scholarship.id} className={styles.scholarshipCard}>
              <h2>{scholarship.title}</h2>
              <div className={styles.content}>
                <h1
                  className={`${styles.description} ${
                    expandedCard !== scholarship.id ? styles.expanded : ""
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

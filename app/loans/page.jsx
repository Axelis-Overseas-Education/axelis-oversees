import React from "react";
import styles from "app/lor_page/lor.module.css";
const Loan = () => {
  const loanMatchingCaptainSection = (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Axelis Overseas: Your Loan-Matching Captain</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="font-bold text-xl">Demystifying paperwork</p>
            <p>We navigate the application process step-by-step</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="font-bold text-xl">Expert guidance</p>
            <p>We assess your profile and connect you with the perfect lender</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="font-bold text-xl">Negotiation ninjas</p>
            <p>We secure the most favorable terms and rates for you</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="font-bold text-xl">Post-loan support</p>
            <p>We're your trusted advisor throughout your repayment journey.</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className={styles.lorFont}>
      <section className={styles.mainContent}>
        <article className={styles.articleDesign}>
          <div className={styles.lorHeading}>
            <div>
              <h2 className={styles.mainHeading}>Axelis Loans</h2>
            </div>
            <div>
              <img
                className={styles.lorMainImage}
                src="/images/loan.jpg"
                alt="housing assistance pics"
              />
            </div>
          </div>
          <p>
            Embark on your international education journey with the perfect
            study abroad loan from Axelis Overseas. We partner with leading
            banks and NBFCs to offer customizable loans meeting your unique
            needs and academic aspirations.
          </p>
        </article>
        <h2 className={`${styles.heading2}`}>
          Public Banks: Reliable Footholds for Stable Climbers
        </h2>
        <section className={styles.statistics}>
          <ul className={styles.statsGridForLoan}>
            <li>
              <div>
                <img
                  className={styles.bankImg}
                  src="/images/sbi 1.png"
                  alt="Sop pics"
                />
                <h2 className={styles.heading2}></h2>
                <p>Widest network</p>
                <p>competitive rates</p>
                <p>flexible repayment options</p>
                <p>Ideal for: Stability</p>
                <p>government backing</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  className={styles.bankImg}
                  src="/images/pnb1.png"
                  alt="Sop pics"
                />
                <h2 className={styles.heading2}></h2>
                <p>Attractive interest rates</p>
                <p>customizable plans</p>
                <p>deal for: Competitive terms</p>
                <p>personalization</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  className={styles.bankImg}
                  src="/images/canara.png"
                  alt="Sop pics"
                />
                <h2 className={styles.heading2}></h2>
                <p>Varied loan schemes</p>
                <p>transparent processes</p>
                <p>Ideal for: Diverse options</p>
                <p>clarity</p>
              </div>
            </li>
          </ul>
        </section>
        <h2 className={`${styles.heading2}`}>
          Private Banks: Agile Sherpas for Ambitious Voyagers
        </h2>
        <section className={styles.statistics}>
          <ul className={styles.statsGridForLoan}>
            <li>
              <div>
                <img
                  className={styles.bankImg}
                  src="/images/icici.png"
                  alt="Sop pics"
                />
                <h2 className={styles.heading2}></h2>
                <p>Quick processing</p>
                <p>ailored loan structures</p>
                <p>Ideal for: Personalized approach</p>
                <p>quick access</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  className={styles.bankImg}
                  src="/images/hdfc.png"
                  alt="Sop pics"
                />
                <h2 className={styles.heading2}></h2>
                <p>Streamlined processes</p>
                <p>competitive rates</p>
                <p>Ideal for: Efficiency</p>
                <p>cost-effectiveness</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  className={styles.bankImg}
                  src="/images/axis.png"
                  alt="Sop pics"
                />
                <h2 className={styles.heading2}></h2>
                <p>Axis Bank: Comprehensive services</p>
                <p>digital-friendly</p>
                <p>Ideal for: Tech-savvy students</p>
                <p>all-inclusive solutions</p>
              </div>
            </li>
          </ul>
          </section>
          <h2 className={`${styles.heading2}`}>
          NBFCs: Nimble Sloops for Unconventional Explorers
        </h2>
        <section className={styles.statistics}>
          <ul className={styles.statsGridForLoan}>
            <li>
              <div>
                <img
                  className={styles.bankImg}
                  src="/images/avanse Financial Services.jpeg"
                  alt="Sop pics"
                />
                <h2 className={styles.heading2}></h2>
                <p>Specialized education loans</p>
                <p> flexible terms</p>
                <p>Ideal for: Customized education financing</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  className={styles.bankImg}
                  style={{height:"182px"}}
                  src="/images/Credila .jpg"
                  alt="Sop pics"
                />
                <h2 className={styles.heading2}></h2>
                <p>Education loan expertise</p>
                <p>easy application</p>
                <p>Ideal for: Education-specific solutions</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  className={styles.bankImg}
                  src="/images/InCred.png"
                  alt="Sop pics"
                  style={{height:"182px"}}
                />
                <h2 className={styles.heading2}></h2>
                <p>Fast processing</p>
                <p>student-centric policies</p>
                <p>Ideal for: Quick</p>
                <p>student-friendly process</p>
              </div>
            </li>
          </ul>
        </section>
              {loanMatchingCaptainSection}
      </section>
    </div>
  );
};

export default Loan;

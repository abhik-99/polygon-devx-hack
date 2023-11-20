import React from 'react'
import styles from './AboutSection.module.css'
import SectionHeading from '@/app/components/SectionHeading'

const AboutSection = () => (
  <div className={styles.container}>
    <SectionHeading heading="How it Works?" subheading="Streamlined Crypto Investment in Three Simple Steps" />
    <div className={styles.body}>
      <div className={styles.card}>
        <img src="FaBriefcase.svg" alt="investor" />
        <h2>Investor</h2>
        <p>As an investor, take control of your financial destiny. Register with ease, create your Smart Contract Wallet, and choose your investment strategy. Whether you're seeking the stability of SIP or the excitement of lump-sum investments, we've got you covered.</p>
        <button>Start Investing</button>
      </div>
      <div className={styles.card}>
        <img src="IoHome.svg" alt="fund" />
        <h2>Fund House</h2>
        <p>Fund Houses, enjoy a seamless collaboration experience. Verify your identity, create and launch funds, and receive investments from retail users. Our platform provides you with the tools and flexibility to efficiently manage your funds, with the added security of maintaining collateral and insolvency proof.</p>
        <button>Start Funding</button>
      </div>
      <div className={styles.card}>
        <img src="IoCash.svg" alt="investor" />
        <h2>Profit</h2>
        <p>Profits should be hassle-free. For investors, request withdrawals or set up Systematic Withdrawal Plans with just a few clicks. For Fund Houses, distribute profits and process withdrawals swiftly. We make sure that the journey from investment to profit is smooth and efficient.</p>
        <button>Start Profiting</button>
      </div>
    </div>
  </div>
)

export default AboutSection
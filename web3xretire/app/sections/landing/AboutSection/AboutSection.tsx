import React from 'react'
import styles from './AboutSection.module.css'

const AboutSection = () => (
  <div className={styles.container}>
    <img src="logo-light.svg" alt="logo" />
    <img src="logo-light.svg" alt="logo" />
    <div className={styles.heading}>
      <h1>How it Works?</h1>
      <p>Streamlined Crypto Investment in Three Simple Steps</p>
    </div>
    <div className={styles.body}>
      <div className={styles.card}>
        <img src="" alt="" />
        <h2></h2>
        <p></p>
        <button></button>
      </div>
    </div>
  </div>
)

export default AboutSection
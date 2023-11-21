import React from 'react'
import styles from './TechStackSection.module.css'
import SectionHeading from '@/app/components/SectionHeading'

const TechStackSection = () => {
  return (
    <div className={styles.container}>
      <SectionHeading heading="Tech Stack" subheading="Our Secret Sauce: The Ingredients of Our Tech Magic" />      
      <div className="rectangle"
      style={{
        minWidth: '92%',
        height: '720px',
        borderRadius: '30px',
        border: '2px solid var(--yellow)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <h1 style={{
          color: 'var(--yellow)',
          fontSize: '100px',
          fontWeight: 'bold',
          textAlign: 'center',          
          paddingTop: '30px',
        }}>
          Loading...
          </h1>
      </div>
    </div>
  )
}

export default TechStackSection
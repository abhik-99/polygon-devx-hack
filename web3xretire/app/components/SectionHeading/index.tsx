import React from 'react'
import styles from './SectionHeading.module.css'

interface ISectionHeadingProps {
    children?: React.ReactNode
    heading: string
    subheading: string
}

const SectionHeading = ({children, heading, subheading}: ISectionHeadingProps) => (
    <>
        <img src="logo-light.svg" alt="logo" />
        <img src="logo-light.svg" alt="logo" />
        <div className={styles.heading}>
            <h1>{heading}</h1>
            <p>{subheading}</p>
        </div>
    </>
)

export default SectionHeading
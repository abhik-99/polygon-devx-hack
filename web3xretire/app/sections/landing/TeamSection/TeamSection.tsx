import React from 'react'
import styles from './TeamSection.module.css'
import SectionHeading from '@/app/components/SectionHeading'

const TEAM_MEMBERS = [
  {
    name: 'Abhik',
    designation: 'Master of Blockchain',
    image: 'star1.png',
    socials: [
      {
        name: 'Github',
        icon: 'FaGithub.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      },
      {
        name: 'LinkedIn',
        icon: 'FaLinkedin.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      },
      {
        name: 'Website',
        icon: 'FaGlobe.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      }
    ]
  },
  {
    name: 'Bhaskar',
    designation: 'Architect of the Web3 World',
    image: 'star2.png',
    socials: [
      {
        name: 'Github',
        icon: 'FaGithub.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      },
      {
        name: 'LinkedIn',
        icon: 'FaLinkedin.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      },
      {
        name: 'Website',
        icon: 'FaGlobe.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      }
    ]
  },
  {
    name: 'Priyanshu',
    designation: 'Coding the Future of Finance',
    image: 'star3.png',
    socials: [
      {
        name: 'Github',
        icon: 'FaGithub.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      },
      {
        name: 'LinkedIn',
        icon: 'FaLinkedin.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      },
      {
        name: 'Website',
        icon: 'FaGlobe.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      }
    ]
  },
  {
    name: 'Sumon',
    designation: 'Designing the Future',
    image: 'star4.png',
    socials: [
      {
        name: 'Github',
        icon: 'FaGithub.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      },
      {
        name: 'LinkedIn',
        icon: 'FaLinkedin.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      },
      {
        name: 'Website',
        icon: 'FaGlobe.svg',
        url: 'https://www.linkedin.com/in/abhik-ghosh-1b1b3b1b1/'
      }
    ]
  }
]

const TeamSection = () => {
  return (
    <div className={styles.container}>
    <SectionHeading heading="Meet The Team" subheading="Present the Squad Behind this Vision" />
    <div className={styles.body}>
      {TEAM_MEMBERS.map((member) => (
        <div className={styles.card}>
          <img src={member.image} alt="team-member" />
          <h2>{member.name}</h2>
          <p>{member.designation}</p>
          <div className={styles.socials}>
            {member.socials.map((social) => (
              <a href={social.url} className={styles.social}>
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TeamSection
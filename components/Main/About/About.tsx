import React from 'react'
import Image from 'next/image'
import styles from './about.module.scss'
import Mentor from '../../utils/Mentor/Mentor'
import BackStar from '../../utils/BackStar/BackStar'

const About = () => {
  const mentors = [
    {
      imageParams: {
        alt: 'Wade Warren',
        src: '/Wade_Warren.png',
        width: 184,
        height: 184,
        marginRight: '23px'
      },
      name: 'Wade Warren',
      descr: 'Front-end engineers work closely with designers',
    },
    {
      imageParams: {
        alt: 'Kristin Watson',
        src: '/Kristin_Watson.png',
        width: 184,
        height: 184,
        marginRight: '23px',
        top: '-50px',
      },
      name: 'imageParams',
      descr: 'Front-end engineers work closely with designers',
    },
    {
      imageParams: {
        alt: 'Robert Fox',
        src: '/Robert_Fox.png',
        width: 184,
        height: 184,
        marginRight: '0'
      },
      name: 'Robert Fox',
      descr: 'Front-end engineers work closely with designers',
    },
  ]

  return (
    <div className={styles.aboutWrapper + ' ' + styles.section}>
      <h2 className={styles.mainTitles}>
        About Us
      </h2>
      <div className={styles.aboutMentors}>
        <div className={styles.aboutMentorsBlock}>
          <h3 className={styles.aboutMentorsTitle}>
            Mentors
          </h3>
          <Image alt='' src='/line.svg' width='400' height='156' />
          <div className={styles.aboutMentorsImages}>
            {mentors.map((mentor, index) =>
              <Mentor
              key={index}
              imageParams={mentor.imageParams}
              name={mentor.name}
              descr={mentor.descr} />
            )}
          </div>
        </div>
        <div className={styles.aboutMentorsDescr}>
          Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
        </div>
      </div>
    </div>
  )
}

export default About
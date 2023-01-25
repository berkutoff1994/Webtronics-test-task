import React, { FC } from 'react'
import Image from 'next/image'
import { IMentorImageParams } from '../../../types'
import styles from './mentor.module.scss'

interface MentorProps {
  imageParams: IMentorImageParams,
  name: string,
  descr: string,
  marginRight?: string,
}

const Mentor:FC<MentorProps> = ({imageParams, name, descr, marginRight}) => {
  return (
    <div className={styles.aboutMentor} style={{marginRight: marginRight, top: imageParams.top}}>
      <Image 
        className={styles.aboutMentorImage} 
        alt={imageParams.alt} 
        src={imageParams.src} 
        width={imageParams.width}  
        height={imageParams.height}  />
      <h4 className={styles.aboutMentorName}>
        {name}
      </h4>
      <p className={styles.aboutMentorDescr}>
        {descr}
      </p>
    </div>
  )
}

export default Mentor
import React from 'react'
import MyButton from '../ui/MyButton/MyButton'
import BackEllipse from '../utils/BackEllipse/BackEllipse'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <BackEllipse
          top={''}
          bottom={'-7%'}
          right={''}
          left={''}
         />
         <BackEllipse
          top={''}
          bottom={'12%'}
          right={'-15%'}
          left={''}
         />
        <h1 className={styles.heroTitle}>
          <span className={styles.heroFirstTitle}>Front-End</span><br />
          <span className={styles.heroSecondTitle}>Developer</span><br />
          <span className={styles.heroThirdTitle}>Courses</span>
        </h1>
        <p className={styles.heroText}>
          Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more). 
        </p>
        <div className={styles.heroButtonWrapper}>
          <MyButton children='Start my career change' />
        </div>
      </div>
    </div>
  )
}

export default Hero
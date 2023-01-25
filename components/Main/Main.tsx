import React from 'react'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import FAQ from './FAQ/FAQ'
import Gallery from './Gallery/Gallery'
import styles from './main.module.scss'
import Review from './Review/Review'
import Steps from './Steps/Steps'
import Technologies from './Technologies/Technologies'

const Main = () => {
  return (
    <div className={styles.container}>
      <About />
      <Technologies />
      <Steps />
      <FAQ />
      <Review />
      <Gallery />
      <Contacts />
    </div>
  )
}

export default Main
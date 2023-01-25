import React from 'react'
import BackEllipse from '../../utils/BackEllipse/BackEllipse'
import TechnologiesCard from '../../utils/TecnnologiesCard/TechnologiesCard'
import styles from './technologies.module.scss'

const Technologies = () => {
  const technologiesCards = [
    {
      imgLink: '/angular.png',
      descr: 'Angular',
    },
    {
      imgLink: '/react.png',
      descr: 'React',
    },
    {
      imgLink: '/vue.png',
      descr: 'Vue.js',
    },
    {
      imgLink: '/js.png',
      descr: 'JavaScript',
    },
  ]

  return (
    <div className={styles.technologiesWrapper + ' ' + styles.section}>
       <BackEllipse
          top={'-57%'}
          bottom={''}
          right={'-18%'}
          left={''}
         />
         <BackEllipse
          top={'40%'}
          bottom={''}
          right={''}
          left={'-12%'}
         />
      <h2 className={styles.mainTitles + ' ' + styles.technologiesTitle}>
        Programming
        <span>technologies</span>
      </h2>
      <p className={styles.technologiesDescr}>
        By the end, you’ll have the portfolio and interview skills you need to start your new career.
      </p>
      <div className={styles.technologiesCardsBlock}>
        {technologiesCards.map((card, index) => 
          <TechnologiesCard key={index} imgLink={card.imgLink} descr={card.descr}/>
        )}
      </div>
    </div>
  )
}

export default Technologies
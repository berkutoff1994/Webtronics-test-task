import React, { FC } from 'react'
import { ISlide } from '../../../types'
import styles from './slide.module.scss'

interface ISlideProps {
  prop: ISlide
}

const Slide: FC<ISlideProps> = ({prop}) => {
  return (
    <div className={styles.slideDescrBlock}>
      <h3 className={styles.slideSubtitle}>{prop.title}</h3>
      <p className={styles.slideDescr}>{prop.descr}</p>
    </div>
  )
}

export default Slide
import React, { FC } from 'react'
import Image from 'next/image'
import styles from './technologiesCard.module.scss'

interface TechnologiesCardProps {
  imgLink: string,
  descr: string,
}

const TechnologiesCard: FC<TechnologiesCardProps> = (props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImageBlock}>
        <Image alt={props.descr} src={props.imgLink} width='162' height='136' />
      </div>
      <span>
        {props.descr}
      </span>
    </div>
  )
}

export default TechnologiesCard
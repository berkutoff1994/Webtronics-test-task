import React, { FC } from 'react'
import type { Property } from 'csstype'
import styles from './navigation.module.scss'

interface NavigationProps {
  navList: Array<string>,
  direction?: Property.FlexDirection,
  itemMargin?: Property.Margin,
}

const Navigation:FC<NavigationProps> = ({navList, direction, itemMargin}) => {
  return (
    <ul className={styles.navList} style={{flexDirection: `${direction ? direction : 'row'}`}}>
      {navList.map((item: string, index) =>
        <li key={index} style={{margin: itemMargin}}>{item}</li>
      )}
    </ul>
  )
}

export default Navigation
import React from 'react'
import Image from 'next/image'
import styles from './header.module.scss';
import Navigation from '../utils/Navigation/Navigation';

const Header = () => {

  const navList: string[] = [
    'About', 'Programs', 'Steps', 'Questions', 'Get in touch',
  ]

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <Image alt='Webtronics logo' src='/logo.png' width='169' height='33' />
        </div>
        <div className={styles.headerNav}>
          <Navigation navList={navList} itemMargin='0 0 0 48px'/>
        </div>
      </div>
    </div>
  )
}

export default Header
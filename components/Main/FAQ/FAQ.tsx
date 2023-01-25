import React from 'react'
import Image from 'next/image'
import styles from './faq.module.scss'
import Tab from '../../utils/Tab/Tab'
import { ITabs } from '../../../types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import BackEllipse from '../../utils/BackEllipse/BackEllipse'
import BackStar from '../../utils/BackStar/BackStar'

const FAQ = () => {
  const tabs: ITabs[] = [
    {
      title: 'What is the price?',
      descr: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
      svg: true,
    },
    {
      title: 'What is the price?',
      descr: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
      svg: false,
    },
    {
      title: 'What is the price?',
      descr: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
      svg: false,
    },
    {
      title: 'What is the price?',
      descr: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
      svg: false,
    },
    {
      title: 'What is the price?',
      descr: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
      svg: false,
    },
  ]

  const activeTab = useSelector((state: RootState) => state.changeActiveTab);
  tabs.forEach((tab, index) => index != activeTab ? tab.svg = false : tab.svg = true)

  return (
    <div className={styles.FAQWrapper + ' ' + styles.section}>
      <BackEllipse
        top={'0'}
        bottom={''}
        right={'-18%'}
        left={''}
        />
      <h2 className={styles.mainTitles + ' ' + styles.FAQTitle}>
      Frequently Asked
      <span>Questions</span>
      </h2>
      <div className={styles.FAQContentWrapper}>
        <div className={styles.FAQContentLeft}>
          <p className={styles.FAQContentDescr}>
            Do you have any kind of questions?<br/> We are here to help.
          </p>
          <div className={styles.FAQContentImage}>
            <Image alt='' src='/ask_simbol.png' width='344' height='405' />
          </div>
        </div>
        <div className={styles.FAQContentRight}>
          {tabs.map((tab, index) => 
            <Tab tab={tab} index={index}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default FAQ
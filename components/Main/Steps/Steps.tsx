import React from 'react'
import Arrow from '../../../public/svg/Arrow'
import EllipseForArrow from '../../../public/svg/EllipseForArrow'
import BackEllipse from '../../utils/BackEllipse/BackEllipse'
import BackStar from '../../utils/BackStar/BackStar'
import styles from './steps.module.scss'

const Steps = () => {
  const steps = [
    {
      title: 'Step 1',
      subTitle: 'Introduction to Front-End',
      descr: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      title: 'Step 2',
      subTitle: 'Overview of Development',
      descr: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      title: 'Step 3',
      subTitle: 'Introduction to Front-End',
      descr: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      title: 'Step 4',
      subTitle: 'Overview of Development',
      descr: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      title: 'Step 5',
      subTitle: 'Introduction to Front-End',
      descr: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
    {
      title: 'Step 6',
      subTitle: 'Overview of Development',
      descr: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    },
  ]

  return (
    <div className={styles.stepsWrapper + ' ' + styles.section}>
      <BackEllipse
        top={'40%'}
        bottom={''}
        right={''}
        left={'-12%'}
         />
      <h2 className={styles.mainTitles}>
        Steps
      </h2>
      <div className={styles.stepsCardBlock}>
        <div className={styles.stepsCardLeft}>
          {steps.map((step, index) => 
            index % 2 === 0 || index === 0 
            ?
            <div key={index} className={styles.stepsItemLine}>
              <div className={styles.stepsItemBack}> 
                <div key={index} className={styles.stepsItemCard}>
                  <h3 className={styles.stepsItemTitle}>
                    {step.title}
                  </h3>
                  <h4 className={styles.stepsItemSubtitle}>
                    {step.subTitle}
                  </h4>
                  <p className={styles.stepsItemDescr}>
                    {step.descr}
                  </p>
                </div>
                <div className={styles.arrowBlock}>
                  <EllipseForArrow />
                  <Arrow />
                </div> 
              </div>
            </div>    
            : 
            null
          )}
        </div>
        <div className={styles.stepsCardRight}>
          {steps.map((step, index) => 
            index % 2 !== 0 && index !== 0 
            ? 
            <div key={index} className={styles.stepsItemRightLine}>
              <div className={styles.stepsItemBackRight}> 
                <div key={index} className={styles.stepsItemCard}>
                  <h3 className={styles.stepsItemTitle}>
                    {step.title}
                  </h3>
                  <h4 className={styles.stepsItemSubtitle}>
                    {step.subTitle}
                  </h4>
                  <p className={styles.stepsItemDescr}>
                    {step.descr}
                  </p>
                </div>
                <div className={styles.arrowBlock}>
                  <EllipseForArrow />
                  <Arrow />
                </div> 
              </div> 
            </div>
            : 
            null
          )}
        </div>
      </div>
    </div>
  )
}

export default Steps
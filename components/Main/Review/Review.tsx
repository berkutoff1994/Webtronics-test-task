import React, { useState } from 'react'
import { ISlide } from '../../../types'
import Next from '../../ui/SlideButtons/Next'
import Prev from '../../ui/SlideButtons/Prev'
import Slide from '../../utils/Slide/Slide'
import Image from 'next/image'
import styles from './review.module.scss'
import BackEllipse from '../../utils/BackEllipse/BackEllipse'
import BackStar from '../../utils/BackStar/BackStar'

const Review = () => {
  const slides: ISlide[] = [
    {
      title: 'Best courses ever',
      descr: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
      alt: 'man 1',
      active: false,
      activeImage: '/man-1_active.png',
      passiveImage: '/man-1_passive.png',
    },
    {
      title: 'Amazing teaching',
      descr: 'The explanation is crazy it really doesn`t have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.',
      alt: 'man 2',
      active: false,
      activeImage: '/woman-1_active.png',
      passiveImage: '/woman-1_passive.png',
    },
    {
      title: 'Simple and easy',
      descr: 'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.',
      alt: 'man 3',
      active: false,
      activeImage: '/man-2_active.png',
      passiveImage: '/man-2_passive.png',
    },
  ]
  const [count, setCount] = useState<number>(1)

  const onPrev = (e: any) => {
    if(count - 1 > 0) {
      setCount(count - 1)
    } else {
      setCount(3)
    }
    
  }

  const onNext = (e: any) => {
    setCount(count + 1)
    if(count + 1 <= slides.length) {
      setCount(count + 1)
    } else {
      setCount(1)
    }
  }

  slides.forEach((slide, index) => index === count - 1 ? slide.active = true : slide.active = false);
  let activeSlide = slides.findIndex(slide => slide.active === true)
  let renderSlides = slides.sort((first, second) => first.active ? -1 : 1)

  return (
    <div className={styles.reviewWrapper + ' ' + styles.section}>
      <BackEllipse
        top={'0'}
        bottom={''}
        right={'-18%'}
        left={''}
        />
        <BackEllipse
        top={'-24%'}
        bottom={''}
        right={''}
        left={'-4%'}
        />
      <h2 className={styles.mainTitles}>
        Review
      </h2>
      <div className={styles.reviewContent}>
        <div className={styles.reviewLeftBlock}>
          {slides.map((slide, index) => 
            slide.active ? <Slide prop={slide} key={index} /> : null 
          )}
        </div> 
        <div className={styles.reviewRightBlock}>
          <div className={styles.reviewNavigation}>
            <div className={styles.counterBlock}>
              <span className={styles.presentValue}>{count}/</span>
              <span className={styles.totalValue}>{slides.length}</span>
            </div>
            <div className={styles.btnsBlock}>
              <button className={styles.sliderBtn + ' ' + styles.prevBtn}>
                <Prev onPrev={onPrev}/>
              </button>
              <button className={styles.sliderBtn + ' ' + styles.nextBtn}>
                <Next onNext={onNext}/>
              </button>
            </div>
          </div>
          <div className={styles.imagesBlock}>
          {slides.map((slide, index) =>
            <div 
              className={
                slide.active 
                ? 
                styles.imageContainer 
                : 
                styles.imageContainer + ' ' + styles.imageContainerActive
              } 
              key={index} 
              style={{width: slide.active ? 392 : 184}}>
              <Image 
                className={styles.imageSlide} 
                alt={slide.alt} 
                src={slide.active ? slide.activeImage : slide.passiveImage} 
                width={slide.active ? 392 : 250} 
                height='422'/>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Review
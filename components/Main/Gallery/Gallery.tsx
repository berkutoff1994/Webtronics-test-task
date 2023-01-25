import React from 'react'
import Image from 'next/image'
import styles from './gallery.module.scss'
import BackEllipse from '../../utils/BackEllipse/BackEllipse'
import BackStar from '../../utils/BackStar/BackStar'

const Gallery = () => {
  return (
    <div className={styles.galleryWrapper + ' ' + styles.section}>
      <BackEllipse
        top={'58%'}
        bottom={''}
        right={''}
        left={'-6%'}
        />
      <h2 className={styles.mainTitles + ' ' + styles.galleryTitle}>Gallery</h2>
      <div className={styles.contentBlock}>
        <div className={styles.leftContentBlock}>
          <p className={styles.leftContentDescr}>
            By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects. 
          </p>
          <div className={styles.leftContentImage}>
            <Image 
              className={styles.galleryImage} 
              alt='developer'
              src='/gallery-img1.png'
              width='288' 
              height='434'/>
          </div>
        </div>
        <div className={styles.rightContentBlock}>
          <div className={styles.rightImagesBlock}>
            <div className={styles.rightMainImage}>
              <Image
                className={styles.galleryImage + ' ' + styles.mainImage}
                alt='developer'
                src='/gallery-img2.png'
                width='600' 
                height='434'/>
            </div>
            <div className={styles.rightAdditionaryImages}>
              <Image 
                className={styles.galleryImage + ' ' + styles.additionaryFirstImage}
                alt='developer'
                src='/gallery-img3.png'
                width='288' 
                height='209'/>

              <Image 
                className={styles.galleryImage}
                alt='developer'
                src='/gallery-img4.png'
                width='288' 
                height='209'/>
            </div>
          </div>
          <p className={styles.rightContentDescr}>
            If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
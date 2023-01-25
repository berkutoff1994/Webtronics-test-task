import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.headerAndHeroWrapper}>
        <Header />
        <Hero />
      </div>
      <Main />
      <Footer />
    </>
  )
}

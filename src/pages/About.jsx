import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import styles from './About.module.css'
import HeroSection from '../components/HeroSection/HeroSection'
import data from "../data/hero.json"
/**
 * component to combine whole view of about page. {Note: currently only a part of about page is given to render}
 * @returns <JSX>
 */
const About = () => {
  return (
    <main className={styles.about} >
        <NavBar/>
        <HeroSection textData = {data}/>
    </main>
  )
}

export default About
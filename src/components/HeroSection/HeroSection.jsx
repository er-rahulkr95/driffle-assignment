import React from "react";
import styles from "./HeroSection.module.css";
import OrbitTiles from "./OrbitTiles/OrbitTiles";
import HeroContent from "./HeroContent/HeroContent";

/**
 * Component to render whole hero section i.e. Hero text and background animation.
 * @param {object} param0 | textData => data to display hero text content.
 * @returns <JSX>
 */
const HeroSection = ({textData}) => {
  return (
    <section className={styles.hero} aria-label="hero section">
      <OrbitTiles />
      <span className={styles.backgroundGradient}></span>
      <HeroContent heroData = {textData} />
    </section>
  );
};

export default HeroSection;

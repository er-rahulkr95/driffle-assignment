import React from "react";
import styles from "./HeroContent.module.css";
import Button from "../../Button/Button";

/**
 * Component to display Hero text 
 * @param {object} param0 | heroData => data to dispaly hero text, data is modular coming from json file as a prop which can be edited
 * in future to change the texts without disturbing anything in component, which makes the component reusable 
 * @returns <JSX>
 */
const HeroContent = ({heroData}) => {
  return (
    <div className={styles.heroContentWrapper} aria-label="hero contents">
      <div
        className={styles.heroContent}
        aria-label="hero content : heading and short description of driffle"
      >
        <h1 className={styles.heroHeading}>
          {heroData.heading.normalCont1}{" "}
          <span className={styles.colorHeroText}>
            {heroData.heading.colorCont1}
          </span>{" "}
          {heroData.heading.normalCont2}
        </h1>
        <p className={styles.heroSubHeading}>{heroData.heroContent}</p>
        <div>
          <Button
            type="button"
            className={styles.heroButton}
            aria-label="click to visit store"
          >
            <p className={styles.heroButtonText}>Visit our store</p>
            <span className={styles.heroButtonArrow}>&#129122;</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

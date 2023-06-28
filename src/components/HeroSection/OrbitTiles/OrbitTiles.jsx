import React from "react";
import styles from "./OrbitTiles.module.css";

/**
 * Component to render the background orbits with moving game tiles
 * @returns <JSX>
 */

const OrbitTiles = () => {
  return (
    <div className={styles.orbits} aria-label="game orbits">
      <div className={styles.orbit1} aria-label=" game tiles in orbit 1">
        <div
          className={styles.orbit1_T1}
          role="img"
          aria-label="grand theft auto game tile"
        >
          <img src={require("../../../assets/gta.png")} alt="gtaTile" />
        </div>
      </div>
      <div className={styles.orbit2} aria-label="game tiles in orbit 2">
        <div
          className={styles.orbit2_T1}
          role="img"
          aria-label="gift card tile"
        >
          <img
            src={require("../../../assets/giftCard.png")}
            alt="giftCardTile"
          />
        </div>
        <div
          className={styles.orbit2_T2}
          role="img"
          aria-label="batman game tile"
        >
          <img src={require("../../../assets/batman.png")} alt="batmanTile" />
        </div>
      </div>
      <div className={styles.orbit3} aria-label="game tiles in orbit 3">
        <div
          className={styles.orbit3_T1}
          role="img"
          aria-label="mortal combat game tile"
        >
          <img
            src={require("../../../assets/mortalCombat.png")}
            alt="mortalCombatTile"
          />
        </div>
        <div
          className={styles.orbit3_T2}
          role="img"
          aria-label="fifa game tile"
        >
          <img
            src={require("../../../assets/player.png")}
            alt="fifaPlayerTile"
          />
        </div>
        <div
          className={styles.orbit3_T3}
          role="img"
          aria-label="blocks game tile"
        >
          <img src={require("../../../assets/blocks.png")} alt="blocksTile" />
        </div>
      </div>
    </div>
  );
};

export default OrbitTiles;

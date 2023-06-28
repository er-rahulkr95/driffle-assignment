import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Globe } from "../../assets/globe.svg";
import { ReactComponent as Favourite } from "../../assets/favourite.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { ReactComponent as Cart } from "../../assets/store.svg";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";

/**
 * Component to render navbar
 * @returns <JSX>
 */
const NavBar = () => {
  return (
    <header className={styles.navBarWrapper}>
      <nav className={styles.navBar} aria-label="Nav bar">
        <div>
          <Logo className={styles.logo} role="img" aria-label="driffle logo" />
        </div>
        <div className={styles.menuBarWrapper}>
          <Button
            className={styles.country}
            aria-label="Choose coutry"
            type="button"
          >
            <Globe role="img" aria-label="country globe" />
            <p className={styles.countryText}>India (English) &#x2022; INR</p>
          </Button>

          <Button
            className={styles.iconButton}
            aria-label="Select to open favourites"
            type="button"
          >
            <Favourite role="img" aria-label="favourite" />
          </Button>

          <Button
            className={styles.iconButton}
            aria-label="Select to open Cart"
            type="button"
          >
            <div className={styles.cart}>
              <Cart role="img" aria-label="cart" />
              <div
                className={styles.cartItems}
                aria-label="Total item in carts"
              >
                2
              </div>
            </div>
          </Button>
          <Button
            className={styles.iconButton}
            aria-label="select to view your profile options"
            type="button"
          >
            <Profile role="img" aria-label="profile" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

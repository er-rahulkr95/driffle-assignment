import React from "react";
import styles from "./Button.module.css";

/**
 * modular button component
 * @param {object property} param0 | classname => css module property 
 * @param {any} param1 | children => children can be anything either string, html element , component, number
 * @param {string} param2 | type => type can be either submit, reset, or button
 * @param {function} param0 | eventHandler => function of onClick event handling
 * @returns <JSX>
 */

const Button = ({ className, children, type, eventHandler }) => {
  return (
    <button className={`${styles.button} ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;

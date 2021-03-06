import React from "react";
import styles from "./Button.module.css";

const button = (props) => (
  <button
    className={styles.Button + " " + props.customClass}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);
export default button;

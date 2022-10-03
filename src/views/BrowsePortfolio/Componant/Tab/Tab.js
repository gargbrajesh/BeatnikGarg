import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./tab.module.css";
import Cookies from "js-cookie";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import clsx from "clsx";
function Tab() {
  return (
    <section className={styles.artWork_cover}>
      <div className="container">
        <div className={styles.center}>
          <ul className={clsx(styles.ul)}>
            <li className={styles.list}>
              <Link
                to="work"
                spy={true}
                smooth={true}
                duration={700}
                className={styles.anchor}
              >
                <b>Work</b>
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                to="Training"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.anchor}
              >
                <b>Training</b>
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                to="Awards"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.anchor}
              >
                <b>Awards</b>
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                to="Gallery"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.anchor}
              >
                <b>Gallery</b>
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                to="Bio"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.anchor}
              >
                <b>Bio</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tab;

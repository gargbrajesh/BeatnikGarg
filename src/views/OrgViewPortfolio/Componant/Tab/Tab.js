import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./tab.module.css";
import clsx from "clsx";
import { Container,makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  tabCover: {
    position: "relative",
    marginTop:'220px'
  },
  }));
function Tab() {
  const classes = useStyles();

  return (
    <section className={clsx(styles.Tab_cover, "mx-3")}>
    <Container spacing={2} maxWidth="xl">
        <div className={styles.center}>
          <ul className={clsx(styles.ul,'mx-5')}>
            <li className={styles.list}>
              <Link
                to="work"
                spy={true}
                smooth={true}
                duration={700}
                className={styles.anchor}
              >
              <p>Feature</p>
               
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                to="Activities"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.anchor}
              >
              <p>Activities</p>
                
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
              <p> Awards</p>
               
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
              <p>Gallery</p>
                
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
              <p>  Bio</p>
              
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Tab;

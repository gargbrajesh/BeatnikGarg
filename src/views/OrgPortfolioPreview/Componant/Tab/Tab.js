import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './tab.module.css';
import clsx from "clsx";
import {
    Container,
} from "@material-ui/core";
import { Link } from 'react-scroll';
function Tab() {
    return (
        <section className={clsx(styles.Tab_cover, "mx-3")}>
            <Container spacing={2} maxWidth="xl">
                <div className={styles.center}>
                    <ul className={clsx(styles.ul, 'mx-5')}>
                        <li className={styles.list}>
                            <Link to="work"
                                spy={true} smooth={true}
                                duration={700}
                                className={styles.anchor}>
                                Work
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link to="Activities"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={styles.anchor}>
                                Activities
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link to="Awards" s
                                py={true} smooth={true}
                                duration={500}
                                className={styles.anchor}>
                                Awards
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link to="Gallery"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={styles.anchor}>
                                Gallery
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link to="Bio"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={styles.anchor}>
                                Bio
                            </Link>
                        </li>
                    </ul>
                    <hr />
                </div>
            </Container>
        </section>
    )
}

export default Tab


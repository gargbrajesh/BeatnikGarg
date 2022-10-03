import React, { useState, useEffect } from 'react';
import { Paper, } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './tab.module.css';
import Cookies from 'js-cookie'
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import clsx from 'clsx';
function Tab() {
    return (
        <section className={styles.artWork_cover}>
            <div className="container">
            <div className={styles.center}>
                <ul className={clsx(styles.ul,'mx-5')}>
                    <li className={styles.list}><Link to="work" spy={true} smooth={true}  duration={700} className={styles.anchor}>Work</Link></li>
                    <li className={styles.list}><Link to="Training" spy={true} smooth={true}  duration={500} className={styles.anchor}>Training</Link></li>
                    <li className={styles.list}><Link to="Awards" spy={true} smooth={true}  duration={500} className={styles.anchor}>Awards</Link></li>
                    <li className={styles.list}><Link to="Gallery" spy={true} smooth={true}  duration={500} className={styles.anchor}>Gallery</Link></li>
                    <li className={styles.list}><Link to="Bio" spy={true} smooth={true}  duration={500} className={styles.anchor}>Bio</Link></li>
                </ul>
                <hr />
            </div>
            </div>
    
        </section>
    )
}

export default Tab;
import React from "react";
import styles from "./NotFoundCover.module.css";
import { Button } from '@material-ui/core';

function NotFoundCover() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_USER_API_URL_IMAGE +
          `banner-dance/Lets-talk-signup.webp`})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: '100%',
      }}
      className={styles.container}
    >
      <div className="row mx-4">
        <div>
          <div className={styles.inner_form_page}>
            <div className={styles.contentBox}>
              <p className={styles.typo1}>404</p>
              <p className={styles.typo2}>
                Seems like strings aren’t connected
              </p>
              <button className={styles.btn}> Back to home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundCover;

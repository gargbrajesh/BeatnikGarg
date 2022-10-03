import React from "react";
import styles from "./NoInterNet.module.css";


function NoInterNet() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_USER_API_URL_IMAGE + `banner-dance/Lets-talk-signup.webp`})`,
        backgroundRepeat: "no-repeat",
      }}
      className={styles.container}
    >
      <div className="row mx-5">
        <div>
          <div className={styles.inner_form_page}>
            <div className={styles.contentBox}>
              <p className={styles.typo1}>No Internet</p>
              <p className={styles.typo2}>
                Check your internet connection and get back.
              </p>
              <button className={styles.btn}> Retry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoInterNet;

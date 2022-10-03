import React from "react";
import styles from "./../NotFoundCover/NotFoundCover.module.css";

import Link from "next/link";
function NoDataFount() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_USER_API_URL_IMAGE +
          `banner-dance/Lets-talk-signup.webp`})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
      className={styles.container}
    >
      <div className="row mx-5">
        <div>
          <div className={styles.inner_form_page}>
            <div className={styles.contentBox}>
              <p className={styles.typo1}>404</p>
              <p className={styles.typo2}>No Data Found</p>
              <Link href="/account">
                <p className={styles.btn}> Back To Dashboard</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoDataFount;

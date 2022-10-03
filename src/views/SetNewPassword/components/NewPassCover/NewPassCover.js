import React from "react";
import NewPassForm from "../NewPassForm/NewPassForm";
import styles from "../../../SignInCover/SigninCover.module.css";

const NewPassCover = () => {
  return (
    <div>
      <section className={styles.signup__area}>
        <div className={styles.signup__full_container}>
          <div className={styles.signup__right_side}>
            <div className={styles.page__title}>
              <h2
                style={{
                  textAlign: "left",
                  marginLeft: "25px",
                  color: "black",
                }}
              >
                Set New Password
              </h2>
              <div className={styles.longin_container}>
                <NewPassForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewPassCover;

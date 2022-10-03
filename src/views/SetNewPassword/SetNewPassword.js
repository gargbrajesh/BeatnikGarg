import React from "react";
import styles from "./NewPassSet.module.css";
import Logo from "../../../public/assets/Images/logo/Logo_img.svg";
import SignInBackground from "../../../public/assets/Images/logo/signin_img.svg";
import NewPassForm from "./components/NewPassForm/NewPassForm";

const NewPassSet = () => {
  return (
    <div className={styles.wraper}>
      <div
        className={styles.fleft}
        style={{
          backgroundImage: `url(${SignInBackground})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.header_text}>
          <div className="row">
            <div className="col-sm-12 col-12 col-md-12">
              <img src={Logo} alt="logo" className={styles.headingTag} />
            </div>
          </div>
        </div>
        <div className={styles.content_box}>
          <div className="row">
            <div className="col-sm-12 col-12 col-md-12">
              <h2 className={styles.headingTag}>Join</h2>
              <h3 className={styles.headingTag2}>the community and</h3>
              <h2 className={styles.headingTag}>Connect</h2>
              <h3 className={styles.headingTag2}>with artists around you.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fright}>
        <div className={styles.right_content_container}>
          <h4 className={styles.heading_title}>Set New Password</h4>
          <p>Explore the Beatnik community</p>
          <NewPassForm />
        </div>
      </div>
    </div>
  );
};

export default NewPassSet;

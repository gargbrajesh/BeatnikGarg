import React, { useState, useEffect } from "react";
import styles from "./SignUpCover.module.css";
import Link from "next/link";
import Logo from "./../../../public/assets/Images/logo/Logo_img.svg";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FaceBookLogin from "./components/FaceBookLogin";
import GoogleLogin from "./components/GoogleLogin";
import SignUPForm from "./components/SignUpForm/SignUpForm";
import MetaTitle from "components/helper/MetaTitle";
import Spinner from "components/organisms/Spinner";

function NewSignUpCover() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);
  return (
    <div className={styles.wraper}>
      <MetaTitle
        title={`Sign Up | Welcome to Beatnik World `}
        metaKeyWord="Welcome to Beatnik World "
        metaDescription="Welcome to Beatnik World "
      />
      {loading ? (
        <>
          <div
            className={styles.fleft}
            style={{
              backgroundImage: `url(${process.env
                .NEXT_PUBLIC_USER_API_URL_IMAGE +
                `banner-dance/Sign-In-Image.webp`})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <div className={styles.signupIMGP}>
              <div className={styles.header_text}>
                <div className="row">
                  <div className="col-sm-12 col-12 col-md-12">
                  <Link href="/">
                    <p className={styles.backButton}><KeyboardBackspaceIcon/> &nbsp;Back</p>
                  </Link>
                    
                  </div>
                </div>
              </div>
              <div className={styles.content_box}>
                <div className="row">
                  <div className="col-sm-12 col-12 col-md-12">
                  <img
                      src={Logo}
                      alt="Beatnik"
                 
                      className={styles.headingTag}
                    />
                    <h2 className={styles.headingTag}>Join</h2>
                    <h3 className={styles.headingTag2}>the community and</h3>
                    <h2 className={styles.headingTag}>Connect</h2>
                    <h3 className={styles.headingTag2}>
                      with artists around you.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fright}>
            <div className={styles.right_content_container}>
              <h4 className={styles.heading_title}>Sign up to Beatnik</h4>
              <div className={styles.sign__in}>
                <p className={styles.para_style}>
                  Already a member ?
                  <Link href="/signin">
                    <p>Sign In</p>
                  </Link>
                </p>
              </div>
              <div
                className="row mt-3 justify-content-center"
                style={{ justifyItems: "center" }}
              >
                <div className="col-md-6 mb-3">
                  <GoogleLogin />
                </div>
                <div className="col-md-6 mb-3">
                  <FaceBookLogin />
                </div>
              </div>
              <div className={styles.or}>OR</div>
              <SignUPForm />
            </div>
          </div>
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
}

export default NewSignUpCover;

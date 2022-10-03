import React, { useState, useEffect } from "react";
import styles from "./SigninCover.module.css";
import Link from "next/link";
import Logo from "./../../../public/assets/Images/logo/Logo_img.svg";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MetaTitle from "components/helper/MetaTitle";
import FaceBookLogin from "views/SignUpCover/components/FaceBookLogin";
import GoogleLogin from "views/SignUpCover/components/GoogleLogin";
import SignInForm from "./components/SignInForm";
import Spinner from "components/organisms/Spinner";
function SignInCover() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className={styles.wraper}>
      <MetaTitle
        title={`Sign In | Welcome to Beatnik World`}
        metaKeyWord="Welcome to Beatnik World"
        metaDescription="Welcome to Beatnik World"
      />
      {loading ? (
        <>
          <div
            className={styles.fleft}
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_USER_API_URL_IMAGE + `banner-dance/Sign-Up-Image.webp`})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <div className={styles.signupIMGP}>
              <div className={styles.header_text}>
                <div className="row">
                  <div className="col-sm-12 col-12 col-md-12">
                    <Link href="/">
                      <p className={styles.backButton}><KeyboardBackspaceIcon /> &nbsp;Back</p>
                    </Link>

                  </div>
                </div>
              </div>
              <div className={styles.content_box}>
                <div className="row">
                  <div className="col-sm-12 col-12 col-md-12">
                    <img src={Logo} alt="logo" className={styles.headingTag} />
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
              <h4 className={styles.heading_title}>Sign in to Beatnik</h4>
              <div className={styles.sign__in}>
                <p className={styles.para_style}>
                  Not a member ?
                  <Link href="/signup">
                    <p>Sign Up</p>
                  </Link>
                </p>
              </div>
              <>
                <SignInForm />
              </>
              <div
                className="row mt-4 mb-4"
                style={{ width: "100%", alignItems: 'center' }}
              >
                <div className={styles.or} style={{ width: '75%', marginLeft: '-5px', padding: 0 }}>OR</div>
                <div className={styles.btnContainer}>
                  <div className={styles.Gbtn}>
                    <GoogleLogin />
                  </div>
                  <div className={styles.Fbtn}>
                    <FaceBookLogin />
                  </div>
                </div>

              </div>
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

export default SignInCover;

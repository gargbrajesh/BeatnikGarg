import React, { useState, useEffect } from "react";
import styles from "./aboutUs.module.css";
import { Container, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import titileBg from "../../../public/assets/Images/logo/logoWhite.svg";
import MetaTitle from "components/helper/MetaTitle";
import Link from "next/link";
import Spinner from "components/organisms/Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",

  },
  mainCon: {
    position: "relative",
  },
  title: {
    fontFamily: "Hill House !important",
    fontStyle: "normal !important",
    fontWeight: "500",
    fontSize: "70px",
    lineHeight: "71px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  para: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "27px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    textAlign: "justify",
    marginBottom: "10px",
    '@media (min-width: 300px) and (max-width: 400px)': {
      fontSize: "12px",
      lineHeight: "22px",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      fontSize: "12px",
      lineHeight: "22px",
    },
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    top: "0",
    left: "0",
    right: "0",
    backgroundSize: "100%",
    '@media (min-width: 300px) and (max-width: 400px)': {
      marginTop: "0px !important",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      marginTop: "0px !important",
    },
  },
  contactBtn: {
    background: "#FAA61A",
    borderRadius: "20px",
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "30px",
    display: "inline-block",
    letterSpacing: "0.02em",
    padding: "10px 20px",
    alignItems: "center",
    textAlign: "center",
    margin: "20px 0 0 0",
    color: "#FFFFFF",
    cursor: "pointer",
    '@media (min-width: 300px) and (max-width: 400px)': {
      padding: '2px 20px',
      fontSize: "18px",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      padding: '2px 20px',
      fontSize: "20px",
    },
  },
  titileBgImg:{
    width: "400px",
    height: "auto",
    marginBottom: "20px",
    '@media (min-width: 300px) and (max-width: 400px)': {
      width: "220px",
      marginBottom: "0px",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      width: "220px",
      marginBottom: "0px",
    },
  }
}));
const AboutUs = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      <MetaTitle
        title={`About US | Beatnik - For those who love art, live art `}
        metaKeyWord="Beatnik - For those who love art, live art "
        metaDescription="Beatnik - For those who love art, live art "
      />
      {loading ? (
        <>
          <Container>
            <div
              style={{
                backgroundImage: `url(${process.env
                  .NEXT_PUBLIC_USER_API_URL_IMAGE +
                  `banner-dance/aboutdB-73b605db0cfd4df49ff240084ede37e6.jpg`})`,
                backgroundRepeat: "no-repeat",
                height: "150vh",
                backgroundSize: "100%",
                marginTop: "-100px",
              }}
              className={classes.backgroundImage}
            ></div>
            <div className={classes.mainCon}>
              <div className={styles.titleBox}>
                <Typography className={styles.typo1}>
                  <img
                    src={titileBg}
                    alt=""
                    className={classes.titileBgImg}
                  />
                </Typography>
                <div className={styles.divSpan}>CREATE</div>
                <div class="d-inline p-2">
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.divSpan}>CONNECT</div>
                <div class="d-inline p-2">
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.divSpan}>ACCESS</div>
              </div>

              <div className={styles.inner_form_page}>
                <Typography className={classes.para}>
                  The name Beatnik is inspired by the 'Beat' generation which
                  characterized being far out of the mainstream of society. It
                  stresses the importance of exploring one's inner self and
                  finding the things that make you laugh, make you cry, make you
                  love, make you connect.. and that's what is art! We are on
                  this journey to explore the art world together and try to make
                  it discoverable and sustainable. Please write to us or call us
                  for any queries, suggestions or comments. We would love to
                  hear from you! !
                </Typography>
                <Typography className={classes.para}>
                  The name Beatnik is inspired by the 'Beat' generation which
                  characterized being far out of the mainstream of society.
                </Typography>

                <Link href="/letTalk">
                  <p className={classes.contactBtn}>Contact Us</p>
                </Link>
              </div>
            </div>
          </Container>

        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};
export default AboutUs;

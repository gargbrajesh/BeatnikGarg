import React, { useEffect, } from "react";
import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types';
import styles from "../../../ViewPortfolio/Componant/PortfolioBanner/portfolio.module.css";
import Cookies from "js-cookie";
import { makeStyles } from "@material-ui/core";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({

  editBtn: {
    width: "140px",
    height: "45px",
    fontFamily: "Nunito Sans",
    fontSize: "20px",
    color: "#212427",
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    letterSpacing: " 0.02em",
    display: "inline-block",
    textAlign: "center",
    padding: "10px",
    fontWeight: "700",
    opacity: ".8",
    '@media screen and (max-width: 400px)': {
      width: "80%",
      fontSize:'15px',
      padding: "5px",
      height: "30px",
      marginLeft:'20px',
    },
    '@media (min-width: 410px) and  (max-width: 600px)': {
      width: "80%",
      fontSize:'15px',
      padding: "5px",
      height: "30px",
      marginLeft:'20px',
    },
  },
  publishBtn: {
    width: "140px",
    height: "45px",
    fontFamily: "Nunito Sans",
    fontSize: "20px",
    color: "#FFFFFF",
    backgroundColor: "#ffa900",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    background: "#FAA61A",
    letterSpacing: " 0.02em",
    display: "inline-block",
    textAlign: "center",
    padding: "10px",
    fontWeight: "700",
    opacity: ".8",
    '@media screen and (max-width: 400px)': {
      marginTop: "12px",
      width: "80%",
      fontSize:'15px',
      padding: "5px",
      height: "30px",
      justifyContent:'center',
      marginLeft:'20px'
    },
    '@media (min-width: 410px) and  (max-width: 600px)': {
      width: "80%",
      marginTop: "12px",
      fontSize:'15px',
      padding: "5px",
      height: "30px",
      marginLeft:'20px',
    },
  },
  typo_design:{
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "90%",
    padding: "20px",
    alignItems: "center",
    marginTop: "10px",
    color: "#000000",
    textAlign: "center",
    '@media screen and (max-width: 400px)': {
      fontSize: "30px",
    },
    '@media (min-width: 410px) and  (max-width: 600px)': {
      fontSize: "32px",
    },
  }
}));
const PreviewBanner = props => {
  const classes = useStyles();
  const { pages, themeMode, className, ...rest } = props;
  const userID = Cookies.get("id");
  const handleChangeHideShow = (event) => {
    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("action", 'show');
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_active_deactive_portfolio_by_id`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    handleChangeHideShow();
  }, []);
  return (
    <div className="container">
      <div className={styles.innerContainer}>
        <div>
          <Typography
            className={classes.typo_design}>
            Portfolio Preview
          </Typography>

          <div className="row justify-content-center p-3 mb-5">
            <div className="col-md-4 mx-4">
              <Link
                href="/update-artist"

              >
                <a href='#' className={classes.editBtn}>Edit</a>

              </Link>
            </div>
            <div className="col-md-4 mx-4 ">
              <Link
                href="/view-portfolios"
                className={classes.publishBtn}
              >
                <a className={classes.publishBtn}>Publish</a>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PreviewBanner.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default PreviewBanner;
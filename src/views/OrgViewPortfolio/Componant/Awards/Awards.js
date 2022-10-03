import React, { useState, useEffect } from "react";
import styles from "./Awards.module.css";
import Cookies from "js-cookie";
import link from "../../../../../public/assets/Images/common/linkImg.svg";
import { Container, Typography, Grid, makeStyles } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  awardCard: {
    padding: "30px",
    background: "rgba(229, 229, 229, 0.42)",
    marginBottom: "30px",
  },

  awardTitle: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "55px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.02em",
    color: "#212427",
  },
  awardYear: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "38px",
    lineHeight: "52px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.02em",
    color: "#212427",
    textAlign: "right",
    float: "right",
  },
  awardorganization: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "26px",
    lineHeight: "35px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.02em",
    color: "#212427",
    marginBottom: "10px",
  },
  awarddescription: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "25px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.02em",
    color: "#212427",
    marginBottom: "10px",
  },
  artWork_cover: {
    width: "100%",
    height: "auto",
    marginTop: "5% !important",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px !important",
    background: "#212427",
  },
  heading: {
    fontFamily: "Hill House !impoatant",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "40px",
    lineHeight: "65px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "white",
  },
}));
function Awards() {
  const [awardDetails, setAwardDetails] = useState([]);
  const [galleryBox, setGalleryBox] = useState([]);
  const [getSocialMedia, setSocialMedia] = useState([]);
  const classes = useStyles();


  useEffect(() => {
    const userID = Cookies.get("id");
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=53cd7e4df10209638906cbceefe0b33dd3f7d309"
    );

    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("action", "saved");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://app.whyuru.com/api/beatnik_portfolio_org_show",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);
        } else {
          var awardData = JSON.parse(responseJson.result.data.awards);
          var galleryData = JSON.parse(responseJson.result.data.gallery);
          setSocialMedia(JSON.parse(responseJson.result.data.socialLink));
          console.log(galleryData);
          console.log(responseJson.result.data);
          setAwardDetails(awardData);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <section id="Awards" className="mx-3">
      <Container spacing={4} maxWidth="xl">
        <div>
          <h1 className={styles.heading}>Awards and Press mentions</h1>
        </div>

        {awardDetails.map((awardDetails, index) => (
          <Grid container spaceing={3} className={classes.awardCard}>
            <Grid item md={8}>
              <Typography className={classes.awardTitle}>
                {awardDetails && awardDetails.title}&nbsp;
                <a href={awardDetails && awardDetails.link} target="_blank">
                  <img src={link} alt="Link" />
                </a>
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography className={classes.awardYear}>
                {moment(awardDetails && awardDetails.year).format("YYYY")}
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography className={classes.awardorganization}>
                {awardDetails && awardDetails.organization}
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography className={classes.awarddescription}>
                {awardDetails && awardDetails.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
      <Grid className={classes.artWork_cover}>
        <div className="p-3">
          <h1 className={styles.heading} style={{ color: "#fff !important" }}>
            Gallery
          </h1>
        </div>

        <Grid container>
          {galleryBox.map((img, index) => (
            <Grid item md={4}>
              <img
                src={img}
                alt=".."
                style={{ width: "100%", height: "340px" }}
                enableLightbox={true}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  );
}

export default Awards;

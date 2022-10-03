import React, { useState, useEffect } from "react";
import styles from "./artWork.module.css";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import Logo_img from "../../../../../public/assets/Images/logo/Logo_img.svg";
import activeImg2 from "../../../../../public/assets/Images/logo/activiteImg2.svg";
import Cookies from "js-cookie";
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "40px",
  },
  textPara: {
    fontWeight: "400",
    fontSize: "18px",
    color: "#212427",
    alignItems: "baseline",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 7,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Nunito Sans !important",
    marginBottom: "4px",
    marginTop: "10px",
    lineHeight: "25px",
  },
  activitiesCon: {
    background: "#000",
    marginBottom: "100px",
    paddingBottom: "70px",
  },
  imgCard: {
    width: "100%",
    height: "600px",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  cardTitle: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "34px",
    color: "#020826 ",
    opacity: "0.8",
    marginTop: "4%",
    alignItems: "baseline",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  paraDescription: {
    fontWeight: "400",
    fontSize: "18px",
    color: "#212427",
    alignItems: "baseline",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 5,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Nunito Sans !important",
    marginBottom: "20px !important",
    marginTop: "10px",
  },
  featureTitle: {
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "44px",
    opacity: ".8",
    color: "#020826",
    alignItems: "baseline",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Nunito Sans !important",
    marginBottom: "4px",
    marginTop: "10px",
  },
}));
function Featured() {
  const classes = useStyles();
  const [activities, setActivities] = useState([]);
  const [answer, setAnswer] = useState([]);
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
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_portfolio_org_show`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);
        } else {
          var y = JSON.parse(responseJson.result.data.featured_art_work);
          setAnswer(y);
          var activities = JSON.parse(responseJson.result.data.training);
          setActivities(activities);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <section id="work">
      <Container spacing={4} maxWidth="xl">
        <Grid className={styles.artWorkContainer}>
          <div>
            <h1 className={styles.heading1}>Featured</h1>
          </div>

          {answer &&
            answer.map((ans, index) => (
              <Grid container className={styles.featureArtWorkContainer}>
                <Grid item md={6}>
                  <div className={styles.imgContainer}>
                    <img src={ans.image} alt="" width="100%" height="350" />
                  </div>
                </Grid>

                <Grid item md={6}>
                  <div className={classes.cardContainer}>
                    <div>
                      <img src={Logo_img} alt=".." />
                    </div>
                    <Typography className={classes.featureTitle}>
                      {ans.title}
                    </Typography>

                    <Typography className={classes.textPara}>
                      {ans.description}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            ))}
        </Grid>

        {/* Other work start here*/}
        <section className={classes.activitiesCon}>
          <Container
            className={styles.activitiesContainer}
            maxWidth="xl"
            spacing={4}
          >
            <div className="p-4">
              <h1 className={styles.heading2}>Activities</h1>
            </div>

            <Grid container spacing={3}>
              {activities.map((data, index) => (
                <Grid item md={6}>
                  <div className={styles.cardCon}>
                    <div className={classes.imgCard}>
                      <img src={activeImg2} alt="" />
                    </div>
                    <div className={styles.artContentArea}>
                      <p>
                        <img src={Logo_img} alt="..." />
                      </p>
                      <Typography className={classes.cardTitle}>
                        {data && data.title}
                      </Typography>
                      <Typography className={classes.paraDescription}>
                        {data && data.description}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>
      </Container>
    </section>
  );
}

export default Featured;

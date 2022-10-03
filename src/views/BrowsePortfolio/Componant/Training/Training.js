import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Grid, makeStyles } from "@material-ui/core";
import Link from "../../../../../public/assets/Images/common/linkImg.svg";
import moment from 'moment';
const useStyles = makeStyles((theme) => ({
  artWork_cover: {
    width: "95%",
    margin: "auto",
    marginTop: "60px",
  },
  chipCard: {
    background: "rgba(229, 229, 229, 0.42)",
    padding: "20px",
    marginBottom: "25px",
  },
  titleSec: {
    textAlign: "center",
  },
  heading: {
    fontFamily: "Hill House",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "64px",
    lineHeight: "65px",
    marginBottom: "40px",
    letterSpacing: "0.02em",
    color: "#212427",
  },
  courseTitle: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight:'55px',
    marginBottom: "0",
    letterSpacing: "0.02em",
    color: "#212427",
    '& a ':{
      '& img ':{
        width:'20px'
      }
    }
  },
  year: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "38px",
    lineHeight:'52px',
    textAlign: "end",
    marginBottom: "0",
    alignItems: "center",
    display: "flex",
    float: "right",
    color: "#212427",
  },
  normal: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "26px",
    lineHeight:'35px',
    textAlign: "start",
    marginBottom: "0",
    alignItems: "center",
    display: "flex",
    color: "#212427",
 
  },
}));
function Training() {
  const classes = useStyles();
  const userID = Cookies.get("id");
  const [getTraining, setTraining] = useState([]);
  const [getAward, setAward] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=c3768cfbd1cbf3a16a1adf4bac6f99b38e08d3e3"
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
     process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_portfolio_artist_show`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);
        } else {
          var traningData = JSON.parse(responseJson.result.data.training);
          var awardData = JSON.parse(responseJson.result.data.awards);
          setAward(awardData);
          setTraining(traningData);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <section className={classes.artWork_cover} id="Training">
        <Grid container>
          <Grid item md={12}>
            <div className={classes.titleSec}>
              <h1 className={classes.heading}>Training</h1>
            </div>
          </Grid>
        </Grid>

        {getTraining.map((data, index) => (
          <div className={classes.chipCard}>
            <Grid container>
              <Grid item md={6}>
                <p className={classes.courseTitle}>{data.courseTitle}</p>
              </Grid>
              <Grid item md={6}>
                <p className={classes.year}>   {moment(data && data.year).format("YYYY")} </p>
              </Grid>
              <Grid item md={12}>
                <p className={classes.normal}>{data.Institution}</p>
              </Grid>
              <Grid item md={12}>
                <p className={classes.normal}>{data.City}</p>
              </Grid>
            </Grid>
          </div>
        ))}
      </section>
      <section className={classes.artWork_cover} id="Training">
        <Grid container>
          <Grid item md={12}>
            <div className={classes.titleSec}>
              <h1 className={classes.heading}>Awards and Press mentions</h1>
            </div>
          </Grid>
        </Grid>

        {getAward.map((data, index) => (
          <div className={classes.chipCard}>
            <Grid container>
              <Grid item md={6}>
                <p className={classes.courseTitle}>
                  {data.title}
                  <a href={data.link} target="_blank">
                    {" "}
                    <img src={Link} alt="..." />
                  </a>
                </p>
              </Grid>
              <Grid item md={6}>
                <p className={classes.year}>{moment(data && data.year.split("-")[0]).format("YYYY")} 
                </p>
              </Grid>
              <Grid item md={12}>
                <p className={classes.normal}>{data.organization}</p>
              </Grid>
              <Grid item md={12}>
                <p className={classes.normal}>{data.description}</p>
              </Grid>
            </Grid>
          </div>
        ))}
      </section>
    </>
  );
}

export default Training;

import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo_img from "../../../../../public/assets/Images/logo/Logo_img.svg";
import styles from "./about.module.css";
import Cookies from "js-cookie";
import clsx from "clsx";
import backArrow from "../../../../../public/assets/Images/backArrow.svg";
import PreArrow from "../../../../../public/assets/Images/preArrow.svg";


function About({ children }) {
  const [userName, setUserName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [bio, setBio] = useState("");

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
          setUserName(responseJson.result.data[0].name);
          setSpecialization(responseJson.result.data[0].specialization);
          setBio(responseJson.result.data[0].bio);
          console.log(userName);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <section id="about" className="mx-3">
        <Container spacing={4} maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p className={styles.previous}>
                {" "}
                <img src={PreArrow} alt=".." />
                &nbsp; Previous
              </p>
            </Grid>
            <Grid item xs={6}>
              <p className={styles.nextArrow}>
                Next &nbsp;
                <img src={backArrow} alt=".." />
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="position-relative">
            <Grid item xs={12}>
              <img src={`${process.env.NEXT_PUBLIC_USER_API_URL_IMAGE + `banner-dance/Lets-talk-signup.webp`}`} alt="" style={{ width: "100%" }} />
            </Grid>
            <Grid
              container
              className={clsx(styles.aboutContainer, "position-absolute")}
              xs={10}
            >
              <Grid
                item
                xs={12}
                className={clsx(styles.logoContainer, "d-flex")}
              >
                <Grid xs={6} spacing={2} className="ps-3 pt-3">
                  <p>
                    {" "}
                    <img src={Logo_img} alt="" />
                  </p>
                </Grid>
                <Grid xs={6} className="pt-3">
                  <p
                    className={styles.rightTitle}
                    style={{ marginRight: "20px" }}
                  >
                    {" "}
                    WE PROVIDE
                  </p>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                className={clsx(styles.textContainer, "d-flex")}
              >
                <Grid
                  xs={12}
                  md={6}
                  spacing={2}
                  className={clsx(styles.innerTextContainer, "ps-3")}
                >
                  <p className={styles.para}>Hipnotics Dance Studio</p>
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  spacing={2}
                  className={clsx(styles.innerTextContainer, "me-3")}
                >
                  <p className={styles.para3}>
                    Rehearsal Space , Performance Venue, Funding Education
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <p className={clsx(styles.para1, "ms-3")}>
                  {" "}
                  Dance - Bollywood , Salsa
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                className={clsx(styles.textContainer, "d-flex")}
              >
                <Grid
                  xs={12}
                  spacing={2}
                  className={clsx(styles.innerTextContainer, "ms-3")}
                >
                  <p className={styles.para1}>Bangalore, India</p>
                </Grid>
                <Grid
                  xs={12}
                  spacing={2}
                  className={clsx(styles.innerTextContainer, "me-3")}
                >
                  <p className={styles.para3}>
                    {" "}
                    <button
                      className={styles.connectBtn}>
                      connect
                    </button>
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default About;

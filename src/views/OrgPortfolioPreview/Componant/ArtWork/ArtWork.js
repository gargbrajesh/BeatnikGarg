import React, { useState, useEffect } from "react";
import styles from "./artWork.module.css";
import { Container, Grid, Typography } from "@material-ui/core";

import Logo_img from "../../../../../public/assets/Images/logo/Logo_img.svg";

import activeImg2 from "../../../../../public/assets/Images/logo/activiteImg2.svg";

import Cookies from "js-cookie";

function ArtWork() {
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
      "https://app.whyuru.com/api/beatnik_portfolio_org_show",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);
        } else {
          var y = JSON.parse(responseJson.result.data[0].featured_art_work);
          setAnswer(y);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <section id="work" className="mx-3">
      <Container spacing={4} maxWidth="xl">
        <div>
          <h1 className={styles.heading1}>Featured Art Works</h1>
        </div>
        {answer.map((answer, index) => (
          <div className="row ms-5 mt-5">
            <div className="col-5 mx-3" style={{ height: "70vh" }}>
              <img src={answer.image} alt="" style={{ height: "70vh" }} />
            </div>
            <div
              className="col-6 d-flex p-5"
              style={{
                height: "70vh",
                background: "rgba(229, 229, 229, 0.42)",
              }}
            >
              <div style={{ padding: "4px", height: "60vh", width: "100%" }}>
                <div className={styles.logoContainer}>
                  <div className="text-aligin-left">
                    <img src={Logo_img} alt=".." />
                  </div>
                </div>
                <Typography className={styles.typo1}>{answer.title}</Typography>
                <Typography className={styles.typo2}>
                  {" "}
                  {answer.artForm},{answer.year}
                </Typography>
                <Typography className={styles.typo3}>
                  {answer.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}

        {/* Other work start here*/}

        <Container
          className={styles.activitiesContainer}
          maxWidth="xl"
          spacing={4}
        >
          <div className="p-4">
            <h1 className={styles.heading2}>Activities</h1>
          </div>

          <Grid container spacing={3} className="p-3">
            <Grid item md={6}>
              <div className={styles.cardCon}>
                <div>
                  <img src={activeImg2} alt="" style={{ width: "100%" }} />
                </div>
                <div className={styles.artContentArea}>
                  <p>
                    <img src={Logo_img} alt="" className="ms-3" />
                  </p>
                  <Typography className={styles.typo1}>
                    My Dance performance at Shiamak Davar International
                  </Typography>
                  <Typography className={styles.typo2}>
                    {" "}
                    Shiamak October Fest, Bangalore, 2019
                  </Typography>
                  <Typography className={styles.typo4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna interdum lectus mi nulla at tempor quis arcu. Nec, quis
                    interdum at sapien sem sit tincidunt. Id arcu non, nibh
                    cursus quam egestas viverra.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className={styles.cardCon}>
                <div>
                  <img src={activeImg2} alt="" style={{ width: "100%" }} />
                </div>
                <div className={styles.artContentArea}>
                  <p>
                    <img src={Logo_img} alt="" className="ms-3" />
                  </p>
                  <Typography className={styles.typo1}>
                    My Dance performance at Shiamak Davar International
                  </Typography>
                  <Typography className={styles.typo2}>
                    {" "}
                    Shiamak October Fest, Bangalore, 2019
                  </Typography>
                  <Typography className={styles.typo4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna interdum lectus mi nulla at tempor quis arcu. Nec, quis
                    interdum at sapien sem sit tincidunt. Id arcu non, nibh
                    cursus quam egestas viverra.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
}

export default ArtWork;

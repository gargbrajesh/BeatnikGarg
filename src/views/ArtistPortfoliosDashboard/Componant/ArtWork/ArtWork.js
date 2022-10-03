import React, { useState, useEffect } from "react";
import styles from "./artWork.module.css";
import { Grid, Typography, Container } from "@material-ui/core";

import Logo_img from "../../../../../public/assets/Images/logo/Logo_img.svg";
import Girl_dance from "../../../../../public/assets/Images/logo/newgirldance.svg";
import Girl_Pic from "../../../../../public/assets/Images/logo/girl_dance1.svg";
import Cookies from "js-cookie";

function ArtWork() {


  const [answer, setAnswer] = useState([]);

  const [ans1, setAnswer1] = useState([]);

  const [otherWorkAnswer, setOtherWorkAnswer] = useState([]);

  useEffect(() => {
    const userID = Cookies.get("userID");
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
      process.env.NEXT_PUBLIC_USER_API_URL +`/beatnik_portfolio_artist_show`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);
        } else {
          console.log(responseJson);

          var featured_art_work = JSON.parse(
            responseJson.result.data[0].featured_art_work
          );
          setAnswer(featured_art_work);

          var otherWork = JSON.parse(responseJson.result.data[0].otherWork);
          // console.log('otherWork',otherWork);
          setOtherWorkAnswer(otherWork);
          console.log(otherWork);

          var profile_media_two = JSON.parse(
            responseJson.result.data[0].profile_media_two
          );
          setAnswer1(profile_media_two);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <section id="work">
      <Container spacing={1} maxWidth="xl">
        <Grid className={styles.artWorkContainer}>
          <div>
            <h1 className={styles.heading1}>Featured Art Works</h1>
          </div>
          <Grid spacing={3} container>
            {answer.map((data, index) => (
              <>
                <Grid md={6}>
                  <div className={styles.artWorkImg}>
                    <img src={answer} alt="..." />
                  </div>
                </Grid>
                <Grid md={6}>
                  <div className={styles.artWorkContentCon}>
                    <div className={styles.artWorkContent}>
                      <Typography className={styles.typo1}>
                        {data.title}
                      </Typography>
                      <Typography className={styles.typo2}>
                        {" "}
                        {data.event},{data.venue}, {data.year}
                      </Typography>

                      <Typography className={styles.typo2}>
                        Art Form : {data.artForm}
                      </Typography>
                      <Typography className={styles.typo2}>
                        Collborator : {data.collaborators}
                      </Typography>

                      <Typography className={styles.typo3}>
                        {data.description}
                      </Typography>
                      <div className="d-flex justify-content-center mt-2">
                        <div className="text-aligin-center">
                          <img src={Logo_img} alt=".." />
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>

        <Grid spacing={1} container>
          <Grid md={12}>
            <div className={styles.otherArtWork}>
              <h1 className={styles.heading2}>Other Art Works</h1>
              <div className={styles.otherArtWorkBg}></div>
            </div>
          </Grid>
          <Grid className={styles.cardArtContainer} container spacing={3}>
            <Grid item md={4}>
              <div className={styles.cardCon}>
                <div
                  className={styles.cardBackImg}
                  style={{
                    backgroundImage: `url(${Girl_Pic})`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className={styles.artContentArea}>
                  <p>
                    <img src={Logo_img} alt="" />
                  </p>
                  <Typography className={styles.typo1}>
                    Lorem Ipsum is simply dummy text{" "}
                  </Typography>
                  <Typography className={styles.typo2}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={styles.cardCon}>
                <div
                  className={styles.cardBackImg}
                  style={{
                    backgroundImage: `url(${Girl_dance})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.artContentArea}>
                  <p>
                    <img src={Logo_img} alt="" />
                  </p>
                  <Typography className={styles.typo1}>
                    Lorem Ipsum is simply dummy text{" "}
                  </Typography>
                  <Typography className={styles.typo2}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={styles.cardCon}>
                <div
                  className={styles.cardBackImg}
                  style={{
                    backgroundImage: `url(${Girl_Pic})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                <div className={styles.artContentArea}>
                  <p>
                    <img src={Logo_img} alt="" />
                  </p>
                  <Typography className={styles.typo1}>
                    Lorem Ipsum is simply dummy text{" "}
                  </Typography>
                  <Typography className={styles.typo2}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default ArtWork;

import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import styles from "./about.module.css";
import Carousel from "react-multi-carousel";
import Cookies from "js-cookie";
import clsx from "clsx";
import ProfileIMG from "./../../../../../public/assets/default/d.jpg";
import ProfileIMG_Girl from "./../../../../../public/assets/default/girl.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginTop: "50px",
  },
}));
function About({ children }) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [bio, setBio] = useState("");
  const [tag, setTag] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [profile, setProfile] = useState([]);
  const [userImage, setUserImage] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [answer, setAnswer] = useState([]);
  useEffect((async) => {
    const userID = Cookies.get("id");
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

    var data = fetch(
      process.env.NEXT_PUBLIC_USER_API_URL +`/beatnik_portfolio_artist_show`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);
        } else {
          console.log("00000000000000", responseJson.result.data);

          setUserImage(responseJson.result.data[0].gallery);
          setUserName(responseJson.result.data[0].name);
          setSpecialization(responseJson.result.data[0].specialization);
          setCurrentLocation(responseJson.result.data[0].currentWorkLocation);
          setBio(responseJson.result.data[0].bio);
          setTag(responseJson.result.data[0].tags);
          setProfile(JSON.parse(responseJson.result.data[0].profile_media_one));
          var y = JSON.parse(responseJson.result.data[0].gallery);
          setAnswer(y);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className={classes.root}>
      <Container spacing={4} maxWidth="xl">
        <Grid item xs={12}>
          <div className={styles.profileFullC}>
            <Grid container spacing={2} className={styles.innerContainer}>
              <Grid item xs={8} className={styles.imgOuterContainer}>
                <div className={styles.imgContainer}>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      {/* {profile.map((file, index) => ( */}
                      <div className="carousel-item d-block">
                        <div className={styles.carouselImg}>
                          <div className={styles.carouseleInnerimg}>
                            <img
                              src={ProfileIMG_Girl}
                              alt="..."
                              className={styles.imageSize}
                            />
                          </div>
                        </div>

                        {/* {console.log('Som', file.gallery)} */}
                      </div>
                      {/* ))} */}
                    </div>
                    <button
                      className="carousel"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                    >
                      <span className="carousel" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                    >
                      <span className="carousel" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4} className={styles.aboutContainer}>
                <div className={styles.AboutCard}>
                  <Typography className={styles.title}>KAVYA SRI</Typography>
                  <Typography className={styles.subtitle}>
                    A classical dancer based in Banglore
                  </Typography>
                </div>
                <div className="position-relative mt-5">
                  <div
                    className={clsx(
                      styles.CardInnerContainer,
                      "position-absolute"
                    )}
                  >
                    <div className="card-body">
                      <h5 className={styles.cardTitle}>ABOUT</h5>
                      <p className={styles.cardText}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <a href="#" className="btn ">
                        Read More
                      </a>
                    </div>
                    <p className={styles.tagTextTitle}>Tags:</p>
                    <div className={styles.tagText}>
                      <div className={styles.tagTitle}>
                        <Button className={styles.btn}>Open to work</Button>
                      </div>
                      <div className={styles.tagTitle}>
                        <Button className={styles.btn}>Teacher</Button>
                      </div>
                      <div className={styles.tagTitle}>
                        <Button className={styles.btn}>Full-time</Button>
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.btnConnect}
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default About;

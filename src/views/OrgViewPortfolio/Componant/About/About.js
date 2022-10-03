import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Container, Typography } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo_img from "../../../../../public/assets/Images/logo/Logo_img.svg";
import styles from "./about.module.css";
import Cookies from "js-cookie";
import clsx from "clsx";
import { Link } from "react-scroll";
import Spinner from "components/organisms/Spinner";
import link from "../../../../../public/assets/Images/common/linkImg.svg";
import moment from "moment";
import activeImg2 from "../../../../../public/assets/Images/logo/activiteImg2.svg";
import FooterLogo from "../../../../../public/assets/Images/common/FooterLogo.svg";
import Facebook from "../../../../../public/assets/Images/socialmedia/facebook.svg";
import Twitter from "../../../../../public/assets/Images/socialmedia/twitter.svg";
import Instagram from "../../../../../public/assets/Images/socialmedia/instagram.svg";
import uparrow from "../../../../../public/assets/Images/logo/uparrow.svg";
const scroolLink = [
  {
    id: 1,
    name: "Feature",
  },
  {
    id: 2,
    name: "Activities",
  },
  {
    id: 2,
    name: "Awards",
  },
  {
    id: 3,
    name: "Gallery",
  },
  {
    id: 4,
    name: "Bio",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
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
  heading: {
    fontFamily: "Hill House !important",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "64px",
    lineHeight: "65px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#000",
  },
  bioDescription: {
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.02em",
    color: "#212427",
    width: "95%",
    margin: "50px auto",
    textAlign: "justify",
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

  bannerCard: {
    position: "relative",
    width: "80%",
    margin: "0 auto",
  },
  logoContainer: {
    position: "absolute",
    width: "100%",
    background: "#fff",
    margin: "0 auto",
    left: "0",
    right: "0",
    top: "-75px !important",
    boxShadow: "0px 4px 10px rgb(196 196 196 / 50%)",
    borderRadius: "2px",
    display: "flex",
    flexWrap: "wrap",
    padding: "30px",
    "& p": {
      marginBottom: "0px",
    },
  },
  bannerLink: {
    background: "#feaa02",
    borderRadius: "30px",
    fontSize: "24px",
    lineHeight: "33px",
    fontWeight: "700",
    display: "inline-block",
    padding: "8px 25px",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgb(196 196 196 / 50%)",
  },
  tabCover: {
    position: "relative",
    marginTop: "230px",
  },
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
    '@media only screen and (max-width: 600px)':{
      marginBottom: "10px",
    }
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
function About({ children }) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [weProvide, setWeProvide] = useState("");
  const [country, setCountry] = useState("");
  const [artForm, setArtForm] = useState("");
  const [city, setCity] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [bannerImage, setBannerImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activities, setActivities] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [awardDetails, setAwardDetails] = useState([]);
  const [galleryBox, setGalleryBox] = useState([]);
  const [getBio, setBio] = useState("");
  const [getSocialMedia, setSocialMedia] = useState([]);
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
          setLoading(true);
          setUserName(responseJson.result.data.name);
          setUserAddress(responseJson.result.data.address);
          setArtForm(responseJson.result.data.art_form);
          setWeProvide(responseJson.result.data.weProvide);
          setCountry(responseJson.result.data.country);
          setCity(responseJson.result.data.city);
          setSpecialization(responseJson.result.data.specialization);
          setBannerImage(responseJson.result.data.profile_media_one);
          var featuredArtWork = JSON.parse(
            responseJson.result.data.featured_art_work
          );
          setAnswer(featuredArtWork);
          var activities = JSON.parse(responseJson.result.data.training);
          setActivities(activities);
          var awardData = JSON.parse(responseJson.result.data.awards);
          var galleryData = JSON.parse(responseJson.result.data.gallery);
          setAwardDetails(awardData);
          setSocialMedia(JSON.parse(responseJson.result.data.socialLink));
          var bioData = responseJson.result.data.bio;
          setBio(bioData);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      {loading ? (
        <>
          <section id="about">
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
                      Connect
                    </button>
                  </p>
                </Grid>
              </Grid>
            </Grid>
            </Grid>
          </section>
          <section className={clsx(classes.tabCover)}>
            <Container spacing={2} maxWidth="xl">
              <div className={styles.center}>
              <ul className={clsx(styles.ul, 'mx-5')}>
                  {scroolLink.map((data, index) => (
                    <li className={styles.list}>
                      <Link
                        to={data.name}
                        spy={true}
                        smooth={true}
                        duration={700}
                        className={styles.anchor}
                      >
                        <p>{data.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <hr />
              </div>
            </Container>
          </section>
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
                          <img
                            src={ans.image}
                            alt=""
                            width="100%"
                            height="350"
                          />
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
          <section id="Awards">
            <Container spacing={4} maxWidth="xl">
              <div>
                <h1 className={styles.heading1}>Awards and Press mentions</h1>
              </div>
              {awardDetails.map((awardDetails, index) => (
                <Grid container spaceing={3} className={classes.awardCard}>
                  <Grid item md={8}>
                    <Typography className={classes.awardTitle}>
                      {awardDetails && awardDetails.title}&nbsp;
                      <a
                        href={awardDetails && awardDetails.link}
                        target="_blank"
                      >
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
                <h1
                  className={styles.heading}
                >
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
          <section id="Bio">
            <Grid spacing={4} className={clsx(styles.Bio_cover, "mx-2")}>
              <Grid spacing={1} container className="mt-5">
                <Grid md={12}>
                  <div className="p-3">
                    <h1 className={classes.heading}>Bio</h1>
                    <div className="d-flex justify-content-center">
                      {getSocialMedia &&
                        getSocialMedia.map((data, index) => (
                          <div className="p-2">
                            <a
                              href={data.link}
                              target="_blank"
                              title="Soundcloud"
                            >
                              {data.choosePlatform === "Instagram" ? (
                                <>
                                  <img
                                    class="socialicon"
                                    src={Instagram}
                                    height="20"
                                    width="20"
                                    alt="Instagram"
                                  />
                                </>
                              ) : null}

                              {data.choosePlatform === "Facebook" ? (
                                <>
                                  <img
                                    class="socialicon"
                                    src={Facebook}
                                    height="20"
                                    width="20"
                                    alt="Facebook"
                                  />
                                </>
                              ) : null}
                              {data.choosePlatform === "Twitter" ? (
                                <>
                                  <img
                                    class="socialicon"
                                    src={Twitter}
                                    height="20"
                                    width="20"
                                    alt="Twitter"
                                  />
                                </>
                              ) : null}
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={12}>
                  <div className={classes.bioDescription}>{getBio}</div>
                </Grid>
              </Grid>
            </Grid>
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "30px" }}
            >
              <p>
                Scroll back to top <img src={uparrow} alt="..." />
              </p>
            </div>

            <div className="mt-3">
              <img src={FooterLogo} alt="..." style={{ width: "100%" }} />
            </div>
          </section>
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </>
  );
}

export default About;


import React, { useState, useEffect } from "react";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";
import styles from "./../../../UserPortFolioView/Componant/About/about.module.css";
import "react-multi-carousel/lib/styles.css";
import clsx from "clsx";
import { Link } from "react-scroll";
import Girl_Pic from "../../../../../public/assets/Images/logo/girl_dance.jpeg";
import Carousel from "react-multi-carousel";
import Logo_img from "../../../../../public/assets/Images/logo/Logo_img.svg";
import moment from "moment";
import LinkIMG from "../../../../../public/assets/Images/common/linkImg.svg";
import FooterLogo from "../../../../../public/assets/Images/common/FooterLogo.svg";
import Facebook from "../../../../../public/assets/Images/socialmedia/facebook.svg";
import Twitter from "../../../../../public/assets/Images/socialmedia/twitter.svg";
import Instagram from "../../../../../public/assets/Images/socialmedia/instagram.svg";
import uparrow from "../../../../../public/assets/Images/logo/uparrow.svg";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const scroolLink = [
  {
    id: 1,
    name: "Work",
  },
  {
    id: 2,
    name: "Training",
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
  carousel_container: {
    "&.react-multiple-carousel__arrow": {
      color: "black",
      marginLeft: "100px",
    },
  },

  card_color: {
    boxShadow: "0 4px 8px rgb(0 0 0 / 12%)",
    borderRadius: "4px",
    marginRight: "30px",
    marginBottom: "20px",
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: "10px",
    borderRadius: "8px",
  },

  testimonial: {
    fontSize: "22px",
    marginTop: "20px",
  },
  testimonialHeading: {
    fontWeight: "700",
    fontSize: "20px",
  },
  carouselCard: {
    "& ul": {
      display: "flex",
      padding: "0px",
      width: "90%",
      margin: "0 auto",
    },
    "& li": {
      listStyle: "none",
      marginRight: "10px",
    },
  },

  dotCls: {
    position: "absolute",
    display: "flex",
    left: "0",
    bottom: "12% !important",
    justifyContent: "center",
    margin: "auto",
    padding: "0",
    listStyle: "none",
    textAlign: "center",
    "& .react-multi-carousel-dot button": {
      width: "6px",
      height: "6px",
      background: "white",
      border: "none",
    },
    "& .react-multi-carousel-dot--active button": {
      background: "black",
    },
  },
  featureArtWork: {
    padding: "20px",
    position: "relative",
  },
  brandLogo: {
    textAlign: "center",
  },
  descriptionPara: {
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#212427",
    alignItems: "baseline",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 6,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Nunito Sans !important",
    marginBottom: "4px",
    marginTop: "10px !important",
  },
  descriptionParaArt: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#212427",
    alignItems: "baseline",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 6,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Nunito Sans !important",
    marginBottom: "4px",
    marginTop: "10px !important",
  },
  textPara: {
    fontWeight: "400",
    fontSize: "18px",
    color: "#212427",
    alignItems: "baseline",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 6,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Nunito Sans !important",
    marginBottom: "4px",
    marginTop: "10px !important",
  },
  otherArtWorkCon: {
    marginTop: "60px",
  },
  sliderimg: {
    position: "relative",
    display: "inline-block",
  },
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
    fontFamily: "Hill House !important",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "64px",
    lineHeight: "65px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "white",
    marginBottom: "40px",
  },
  courseTitle: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "55px",
    marginBottom: "0",
    letterSpacing: "0.02em",
    color: "#212427",
    "& a ": {
      "& img ": {
        width: "20px",
      },
    },
  },
  year: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "38px",
    lineHeight: "52px",
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
    lineHeight: "35px",
    textAlign: "start",
    marginBottom: "0",
    alignItems: "center",
    display: "flex",
    color: "#212427",
  },
  artWork_coverGallery: {
    width: "100%",
    height: "auto",
    marginTop: "5% !important",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px !important",
    background: "#212427",
  },
  nextPreButton: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  }
  , next: {
    color: '#faa61a',
  }
}));


function AllUserPortFolio({ children }) {
  const [userIndex, setUserIndex] = useState(0);
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [getArtform, setArtform] = useState([]);
  const [currentWorkingLocation, setWorkingLocation] = useState([]);
  const [userBio, setUserBio] = useState([]);
  const [getUsersTag, setUserTag] = useState([]);
  const [bannerImage, setBannerImage] = useState([]);
  const [getFeatureArtWork, setFeatureArtWork] = useState([]);
  const [getOtherArtWork, setOtherArtWork] = useState([]);
  const [getTraining, setTraining] = useState([]);
  const [getAward, setAward] = useState([]);
  const [getGallary, setGallary] = useState([]);
  const [getBio, setBio] = useState("");
  const [getSocialMedia, setSocialMedia] = useState([]);
  const [userIDList, setUserIDList] = useState([]);
  const changeUserID = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=99f3614e8a2c4bdf99a0ca7ce644dcabe3938099"
    );
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const result = await fetch(
      process.env.NEXT_PUBLIC_USER_API_URL +
      `/beatnik_get_all_users_portfolio?userID=1`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setUserIDList(responseJson.result.data);
      });
  };

  const portFolioViewAll = async (userID) => {
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
        if (responseJson.valid === false) {
          alert(responseJson.result.message);
        } else {
          setUserName(responseJson.result.data.name);
          setArtform(responseJson.result.data.art_form);
          setWorkingLocation(responseJson.result.data.currentWorkLocation);
          setUserBio(responseJson.result.data.bio);
          setUserTag(responseJson.result.data.tags.split(","));
          setBannerImage(
            JSON.parse(
              JSON.stringify(responseJson.result.data.profile_media_one)
            )
          );
          setFeatureArtWork(
            JSON.parse(responseJson.result.data.featured_art_work)
          );

          setOtherArtWork(JSON.parse(responseJson.result.data.otherWork));
          var traningData = JSON.parse(responseJson.result.data.training);
          var awardData = JSON.parse(responseJson.result.data.awards);
          setAward(awardData);
          setTraining(traningData);
          var gallaryItem = JSON.parse(responseJson.result.data.gallery);
          setGallary(gallaryItem);
          var bioData = responseJson.result.data.bio;
          setSocialMedia(JSON.parse(responseJson.result.data.socialLink));
          setBio(bioData);
        }
      });
  };
  useEffect(() => {
    changeUserID();
    // portFolioViewAll();
    // index++;


  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleUserApiNext = () => {
    if (userIndex <= userIDList.length) {
      var x = userIndex + 1;
      setUserIndex(x)
      portFolioViewAll(userIDList[userIndex].userID);
      alert(userIDList[userIndex].userID)
    } else {
      setUserIndex(0);
    }

  }
  const handleUserApiPreviour = () => {
    if (userIndex <= userIDList.length && userIndex >= 0) {
      var x = userIndex - 1;
      setUserIndex(x)
      portFolioViewAll(userIDList[userIndex].userID);
      alert(userIDList[userIndex].userID)
    } else {
      setUserIndex(0);
    }

  }
  return (
    <div className={classes.root}>
      <>
        <Grid item xs={12}>



          <div className={classes.nextPreButton}>
            <Button className={classes.previous} onClick={handleUserApiPreviour}>
              <ArrowBackIcon />&nbsp; Previous
            </Button>
            <Button className={classes.next} onClick={handleUserApiNext}>
              <ArrowForwardIcon />&nbsp; Next
            </Button>
          </div>


          <div className={styles.profileFullC}>
            <Grid container spacing={2} className={styles.innerContainer}>
              <Grid item xs={7} className={styles.imgOuterContainer}>
                <div className={styles.imgContainer}>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item d-block">
                        <div className={styles.carouselImg}>
                          <div className={styles.carouseleInnerimg}>
                            <img
                              src={bannerImage && bannerImage}
                              alt="About US"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={5} className={styles.aboutContainer}>
                <div className={styles.AboutCard}>
                  <Typography className={styles.title}>
                    {userName && userName}
                  </Typography>
                  <Typography className={styles.subtitle}>
                    A classical {getArtform && getArtform} based in{" "}
                    {currentWorkingLocation && currentWorkingLocation}
                  </Typography>
                </div>
                <div className="position-relative mt-5">
                  <div
                    className={clsx(
                      styles.CardInnerContainer,
                      "position-absolute"
                    )}
                  >
                    <div className={styles.cardBody}>
                      <h5 className={styles.cardTitle}>ABOUT</h5>
                      <p className={styles.cardText}>{userBio && userBio}</p>
                      <a href="#" className={styles.readMore}>
                        Read More
                      </a>
                    </div>
                    <p className={styles.tagTextTitle}>Tags:</p>
                    <div className={styles.tagText}>
                      <div className={styles.tagTitle}>
                        {getUsersTag.map((Tags) => (
                          <Button className={styles.btn}>{Tags}</Button>
                        ))}
                      </div>
                    </div>
                    {/* <Button
                      variant="contained"
                      color="primary"
                      className={styles.btnConnect}
                    >
                      Connect
                    </Button> */}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        {/* {getFeatureArtWork && getFeatureArtWork == null ? ( */}
          <div className="container">
            <div className={styles.center}>
              <ul className={clsx(styles.ul)}>
                {scroolLink.map((data, index) => (
                  <li className={styles.list}>
                    <Link
                      key={data.id}
                      to={data.name}
                      spy={true}
                      smooth={true}
                      block="start"
                      duration={700}
                      className={styles.anchor}
                    >
                      <b>{data.name}</b>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        {/* ) : null} */}

        {getFeatureArtWork.length >= 1 && getFeatureArtWork[0].title  ? (
          <section id="Work">
            <Grid className={styles.artWorkContainer}>
              <div>
                <h1 className={styles.heading1_black}>Featured Art Works</h1>
              </div>
              {getFeatureArtWork &&
                getFeatureArtWork.map((data, index) => (
                  <Grid container className={styles.featureArtWorkContainer}>
                    <Grid item md={6}>
                      <div className={styles.imgContainer}>
                        <img
                          src={JSON.parse(JSON.stringify(data && data.image))}
                          alt=""
                          width="100%"
                          height="350"
                        />
                      </div>
                    </Grid>

                    <Grid item md={6}>
                      <div className={classes.featureArtWork}>
                        <Typography className={styles.typo1}>
                          {data && data.title}
                        </Typography>
                        <Typography className={styles.typo2}>
                          {" "}
                          {data && data.eventName}, {data && data.venue},{" "}
                          {data && data.featureYear}
                        </Typography>
                        <Typography className={styles.typo2}>
                          Art Form : {data && data.featureArtForm}
                        </Typography>
                        <Typography className={styles.typo2}>
                          Collborator : {data && data.collaborators}
                        </Typography>
                        <Typography className={classes.textPara}>
                          {data && data.featureDescription}
                        </Typography>

                        <div className={classes.brandLogo}>
                          <img src={Logo_img && Logo_img} alt="Beatnik" />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </section>
        ) : null}
        {getOtherArtWork.length >= 1  ? (
          <Grid
            spacing={1}
            container
            className={classes.otherArtWorkCon}
            id="OtherArtWorks
"
          >
            <Grid md={12}>
              <div className={styles.otherArtWork}>
                <h1
                  className={styles.heading1}
                  style={{
                    color: "#FFFFFF !important",
                    position: "relative",
                    zIndex: "99",
                    padding: "60px 0 0 0",
                  }}
                >
                  Other Art Works
                </h1>

                <div className={styles.otherArtWorkBg}></div>
              </div>
            </Grid>
            <Grid className={styles.cardArtContainer} spacing={3}>
              <Carousel
                itemClass="carousel-item-padding-40-px"
                className={classes.carouselCard}
             
              >
                {getOtherArtWork &&
                  getOtherArtWork.map((data, index) => (
                    <div className={classes.sliderimg}>
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
                          <Typography className={styles.datatitle}>
                            {data && data.title}
                          </Typography>
                          <Typography className={classes.descriptionParaArt}>
                            {data && data.description}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  ))}
              </Carousel>
            </Grid>
          </Grid>
        ) : null}
        {getTraining.length >= 1 ? (
          <>
            <section className={classes.artWork_cover} id="Training">
              <Grid container>
                <Grid item md={12}>
                  <div className={classes.titleSec}>
                    <h1
                      className={classes.heading}
                      style={{
                        color: "black",
                      }}
                    >
                      Training
                    </h1>
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
                      <p className={classes.year}>
                        {" "}
                        {moment(data && data.year).format("YYYY")}{" "}
                      </p>
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
          </>
        ) : null}

        {getAward.length >=1 ? (
          <section className={classes.artWork_cover} id="Awards">
            <Grid container>
              <Grid item md={12}>
                <div className={classes.titleSec}>
                  <h1
                    className={classes.heading}
                    style={{
                      color: "black",
                    }}
                  >
                    Awards and Press mentions
                  </h1>
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
                        <img src={LinkIMG} alt="..." />
                      </a>
                    </p>
                  </Grid>
                  <Grid item md={6}>
                    <p className={classes.year}>
                      {moment(data && data.year.split("-")[0]).format("YYYY")}
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
        ) : null}

        {getGallary.length >= 1 ? (
          <section id="Gallery">
            <Grid className={classes.artWork_coverGallery}>
              <div className="p-3">
                <h1 className={classes.heading}>Gallery</h1>
              </div>

              <Grid container>
                {getGallary &&
                  getGallary.map((img, index) => (
                    <Grid item md={4}>
                      <img
                        src={img && img}
                        alt="Gallary"
                        style={{ width: "100%", height: "340px" }}
                        enableLightbox={true}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </section>
        ) : null}

        <section id="Bio">
          {getBio ? (
            <>
              <Grid spacing={1} container className="mt-5">
                <Grid md={12}>
                  <h1
                    className={classes.heading}
                    style={{
                      color: "black",
                      marginTop: "20px",
                      marginBottom: "15px",
                    }}
                  >
                    Bio
                  </h1>
                  <div class="container">
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
                                    height="33"
                                    width="33"
                                    alt="Instagram"
                                  />
                                </>
                              ) : null}

                              {data.choosePlatform === "Facebook" ? (
                                <>
                                  <img
                                    class="socialicon"
                                    src={Facebook}
                                    height="33"
                                    width="33"
                                    alt="Facebook"
                                    style={{
                                      marginBottom: "-10px",
                                    }}
                                  />
                                </>
                              ) : null}
                              {data.choosePlatform === "Twitter" ? (
                                <>
                                  <img
                                    class="socialicon"
                                    src={Twitter}
                                    height="33"
                                    width="33"
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
                <Grid md={12}>
                  <p
                    className={clsx(styles.para)}
                    style={{
                      padding: "50px",
                      fontSize: "20px",
                      fontWeight: "400",
                    }}
                  >
                    {getBio && getBio}
                  </p>
                </Grid>
              </Grid>
            </>
          ) : null}

          <div className="d-flex justify-content-center mt-4">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "400",
                cursor: "pointer",
              }}
              onClick={scrollToTop}
            >
              Scroll back to top <img src={uparrow} alt="..." />
            </p>
          </div>

          <div className="mt-5">
            <img src={FooterLogo} alt="..." style={{ width: "100%" }} />
          </div>
        </section>
      </>
    </div>
  );
}

export default AllUserPortFolio;

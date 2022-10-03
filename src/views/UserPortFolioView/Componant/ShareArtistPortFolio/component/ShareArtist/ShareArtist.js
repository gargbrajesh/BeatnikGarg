import React, { useState, useEffect } from "react";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";
import styles from "./../../../About/about.module.css";
import "react-multi-carousel/lib/styles.css";
import Cookies from "js-cookie";
import clsx from "clsx";
import { Link } from "react-scroll";
import Girl_Pic from "../../../../../../../public/assets/Images/logo/girl_dance1.svg";
import Carousel from "react-multi-carousel";
import Logo_img from "../../../../../../../public/assets/Images/logo/Logo_img.svg";
import moment from "moment";
import LinkIMG from "../../../../../../../public/assets/Images/common/linkImg.svg";
import FooterLogo from "../../../../../../../public/assets/Images/common/FooterLogo.svg";
import Facebook from "../../../../../../../public/assets/Images/socialmedia/facebook.svg";
import Twitter from "../../../../../../../public/assets/Images/socialmedia/twitter.svg";
import Instagram from "../../../../../../../public/assets/Images/socialmedia/instagram.svg";
import uparrow from "../../../../../../../public/assets/Images/logo/uparrow.svg";
import Spinner from "components/organisms/Spinner";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
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
}));
const  ShareArtist = ({ children }) => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [getArtform, setArtform] = useState([]);
  const [currentWorkingLocation, setWorkingLocation] = useState([]);
  const [userBio, setUserBio] = useState([]);
  const [getUsersTag, setUserTag] = useState([]);
  const [bannerImage, setBannerImage] = useState([]);
  const [getFeatureArtWork, setFeatureArtWork] = useState([]);
  const [getOtherArtWork, setOtherArtWork] = useState([]);
  const userID = Cookies.get("id");
  const [getTraining, setTraining] = useState([]);
  const [getAward, setAward] = useState([]);
  const [getGallary, setGallary] = useState([]);
  const [getBio, setBio] = useState("");
  const [getSocialMedia, setSocialMedia] = useState([]);
  const [getFullData, setFullData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userNameURL, setUserNameURL] = useState();
  const [userIDURL, setUserIDURL] = useState();
  const [joinAsURL, setJoinAsURL] = useState();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userNameURL = params.get("n");
    const userIDURL = params.get("id");
    const joinAsURL = params.get("type");
    setUserNameURL(userNameURL);
    setUserIDURL(userIDURL);
    setJoinAsURL(joinAsURL);
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=c3768cfbd1cbf3a16a1adf4bac6f99b38e08d3e3"
    );

    var formdata = new FormData();
    formdata.append("userID", userIDURL);
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
          setLoading(true);
          setFullData(responseJson.result.data);
          setUserName(responseJson.result.data.name);
          setArtform(responseJson.result.data.art_form);
          setWorkingLocation(responseJson.result.data.currentWorkLocation);
          setUserBio(responseJson.result.data.bio);
          setUserTag(responseJson.result.data.tags);
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
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className={classes.root}>
      {/* {loading ? ( */}
        <>
          <Grid item xs={12}>
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
                              <img src={bannerImage} alt="About US" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={5} className={styles.aboutContainer}>
                  <div className={styles.AboutCard}>
                    <Typography className={styles.title}>{userName}</Typography>
                    <Typography className={styles.subtitle}>
                      A classical {getArtform} based in {currentWorkingLocation}
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
                        <p className={styles.cardText}>{userBio}</p>
                        <a href="#" className={styles.readMore}>
                          Read More
                        </a>
                      </div>
                      <p className={styles.tagTextTitle}>Tags:</p>
                      <div className={styles.tagText}>
                        <div className={styles.tagTitle}>
                          {/* <Button className={styles.btn}>{getUsersTag}</Button> */}
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
          <div className="container">
            <div className={styles.center}>
              <ul className={clsx(styles.ul)}>
                {scroolLink.map((data, index) => (
                  <li className={styles.list}>
                    <Link
                      key={data.id}
                      to="work"
                      spy={true}
                      smooth={true}
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
          <section id="Work">
            <Grid className={styles.artWorkContainer}>
              <div>
                <h1 className={styles.heading1}>Featured Art Works</h1>
              </div>
              {getFeatureArtWork.map((data, index) => (
                <Grid container className={styles.featureArtWorkContainer}>
                  <Grid item md={6}>
                    <div className={styles.imgContainer}>
                      <img
                        src={JSON.parse(JSON.stringify(data.image))}
                        alt=""
                        width="100%"
                        height="350"
                      />
                    </div>
                  </Grid>

                  <Grid item md={6}>
                    <div className={classes.featureArtWork}>
                      <Typography className={styles.typo1}>
                        {data.title}
                      </Typography>
                      <Typography className={styles.typo2}>
                        {" "}
                        {data.event}, {data.venue}, {data.year}
                      </Typography>
                      <Typography className={styles.typo2}>
                        Art Form : {data.artForm}
                      </Typography>
                      <Typography className={styles.typo2}>
                        Collborator : {data.collaborators}
                      </Typography>
                      <Typography className={classes.textPara}>
                        {data.featureDescription}
                      </Typography>

                      <div className={classes.brandLogo}>
                        <img src={Logo_img} alt="Beatnik" />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </section>

          <Grid spacing={1} container className={classes.otherArtWorkCon}>
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
                responsive={responsive}
              >
                {getOtherArtWork.map((data, index) => (
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
                          {data.title}
                        </Typography>
                        <Typography className={classes.descriptionParaArt}>
                          {data.description}
                        </Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Grid>
          </Grid>
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
          <section id="Gallery">
            <Grid className={classes.artWork_coverGallery}>
              <div className="p-3">
                <h1 className={classes.heading}>Gallery</h1>
              </div>

              <Grid container>
                {getGallary.map((img, index) => (
                  <Grid item md={4}>
                    <img
                      src={img}
                      alt="Gallary"
                      style={{ width: "100%", height: "340px" }}
                      enableLightbox={true}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </section>
          <section id="Bio">
            <Grid spacing={1} container className="mt-5">
              <Grid md={12} xs={12}>
                <h1 className={styles.heading}>Bio</h1>
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
              <Grid md={12}>
                <p className={clsx(styles.para)}>{getBio}</p>
              </Grid>
            </Grid>
            <div className="d-flex justify-content-center">
              <p>
                Scroll back to top <img src={uparrow} alt="..." />
              </p>
            </div>

            <div className="mt-5">
              <img src={FooterLogo} alt="..." style={{ width: "100%" }} />
            </div>
          </section>
        </>
      {/* ) : (
        <>
          <Spinner />
        </>
      )} */}
    </div>
  );
}

export default ShareArtist;

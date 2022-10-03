import React, { useState, useEffect } from "react";
import styles from "./artWork.module.css";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Logo_img from "../../../../../public/assets/Images/logo/Logo_img.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Girl_Pic from "../../../../../public/assets/Images/logo/girl_dance1.svg";
import Cookies from "js-cookie";

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
const useStyles = makeStyles((theme) => ({
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
}));
function ArtWork() {
  const classes = useStyles();
  const userID = Cookies.get("id");
  const [getFeatureArtWork, setFeatureArtWork] = useState([]);
  const [getOtherArtWork, setOtherArtWork] = useState([]);

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
        if (responseJson.valid == false) {
          alert(responseJson.result.message);
        } else {
          setFeatureArtWork(
            JSON.parse(responseJson.result.data.featured_art_work)
          );
          setOtherArtWork(JSON.parse(responseJson.result.data.otherWork));
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <section id="work">
      
    </section>
  );
}

export default ArtWork;

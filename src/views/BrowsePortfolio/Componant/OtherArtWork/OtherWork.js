import React, { useState } from "react";
import styles from "./otherWork.module.css";
import { Paper } from "@material-ui/core";
import {  makeStyles } from "@material-ui/core";
import Cookies from "js-cookie";
import Carousel from "react-multi-carousel";
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
  sliderimg: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    cursor: "pointer",
  },
  testimonial: {
    fontSize: "22px",
    marginTop: "20px",
  },
  testimonialHeading: {
    fontWeight: "700",
    fontSize: "20px",
  },

  avtr: {
    marginLeft: "200px",
    marginTop: "10px",
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
      // borderColor: '#ff230136',
      background: "white",
      border: "none",
    },
    "& .react-multi-carousel-dot--active button": {
      // background: 'var(--theme-color)',
      background: "black",
    },
  },

  // arrowButton: {
  //   '& .react-multiple-carousel__arrow--right': {
  //     background: 'var(--white)',
  //     color: 'red',
  //   },
  //   '& .react-multiple-carousel__arrow--left': {
  //     background: 'var(--white)',
  //     color: 'red',
  //   },
  //   '& .react-multiple-carousel__arrow--left': {
  //     left: 'calc(4% + -31px)',
  //     minWidth: '0px',
  //     minHeight: '0px',
  //     marginTop: '-150px',
  //     [theme.breakpoints.down('sm')]: {
  //       left: 'calc(4% + 4px)',
  //     },
  //     background: 'var(--white)',
  //     border: 'var(--border)',
  //     boxShadow: 'var(--bs-lg)',
  //   },
  //   '& .react-multiple-carousel__arrow--right': {
  //     right: 'calc(4% + -39px)',
  //     [theme.breakpoints.down('sm')]: {
  //       right: 'calc(4% + -11px)',
  //     },
  //     minWidth: '27px',
  //     minHeight: '27px',
  //     marginTop: '-150px',
  //     background: 'var(--white)',
  //     border: 'var(--border)',
  //     boxShadow: 'var(--bs-lg)',
  //   },
  //   '.react-multiple-carousel__arrow ': {
  //     background: 'var(--white)',
  //   },
  //   '.react-multi-carousel-dot--active button': {
  //     background: 'var(--white)',
  //   },
  // },
}));
function OtherWork() {
  const userID = Cookies.get("id");
  const classes = useStyles();
  const [getOtherArtWork, setOtherArtWork] = useState();
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
        console.log(
          "00000000000000000000",
          JSON.parse(responseJson.result.data.otherWork)
        );
      }
    })
    .catch((error) => console.log("error", error));
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section id="otherwork">
      <h1 className={styles.heading}>
        OTHER ART WORK000000000 {getOtherArtWork}
      </h1>
      <Carousel responsive={responsive}>
        <div className={classes.sliderimg}>
          <Paper elevation={2} className={styles.paper_cover}>
            <h3 className="mx-5">Lorem Ipsum has been the industry</h3>

            <div className="overflow-auto mx-5 mt-4" style={{ height: "auto" }}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s...bk,
            </div>
            <div className={styles.float_container}>
              <div className={styles.float_child1}>
                <input type="text" className={styles.float_link1} />
                <button type="button" className="btn btn-warning mx-4">
                  go
                </button>
              </div>
              <div className={styles.float_child2}>
                <input type="text" className={styles.float_link1} />
                <button type="button" className="btn btn-warning mx-4">
                  go
                </button>
              </div>
            </div>
          </Paper>
        </div>
      </Carousel>
      <div className={styles.float_container}></div>
    </section>
  );
}

export default OtherWork;

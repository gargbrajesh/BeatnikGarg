import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Typography, Box, Modal, makeStyles, Button } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from "../../../../../public/assets/Images/logo/logo.svg";
import HorizontalGrand from "../../../../../public/assets/Images/banner/vertical-brand.png";
import styles from "./Banner.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
const useStyles = makeStyles((theme) => ({
  carousel_container: {
    "&.react-multiple-carousel__arrow": {
      color: "black",
      marginLeft: "100px",
    },
    "& ul": {
      position: "relative",
      "& li ": {
        position: "relative",
      },
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

  avtr: {
    marginLeft: "200px",
    marginTop: "10px",
  },

  dotCls: {
    position: "absolute",
    display: "flex",
    left: "0",
    bottom: "6% !important" /*  Added by Ashok */,
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
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: 5,
};
const Banner = (props) => {
  const [getCreated, setCreated] = useState();
  const userID = Cookies.get("id");
  const handleClose = (text) => {
    setOpenModel(false);
    if ("create" === text) {
      router.push({
        pathname: "/account",
      });
    } else {
      router.push({
        pathname: "/Organization",
      });
    }
  };
  const [openModel, setOpenModel] = useState(false);
  const router = useRouter();
  const { className, ...rest } = props;
  const classes = useStyles();
  const data = [
    {
      id: 1,
      title: "For Those Who",
      subTitle: "Love Art , Live Art",
      para:
        "Bringing together artists and art spaces across dance,music and theatre.",
      testiImage:
        process.env.NEXT_PUBLIC_USER_API_URL_IMAGE +
        `banner-dance/image+23.png`,

  
      bottomTitle1: "A",
      bottomTitle2: "COMMUNITY",
      to: `To <br/> Showcases your work,<br/> Discover opportunities & <br/> Get Inspired`,
      horizontalLogo: HorizontalGrand,
      buttonName: "Join The Community",
      buttonLink: "#",
    },
    {
      id: 2,
      title: "For Those Who",
      subTitle: "Love Art , Live Art",
      para:
        "Bringing together artists and art spaces across dance,music and theatre.",
      testiImage:
        process.env.NEXT_PUBLIC_USER_API_URL_IMAGE +
        `banner-dance/join+copy+1.png`,
      bottomTitle1: "A",
      bottomTitle2: "COMMUNITY",
      to: `To <br/> Showcase your work,<br/> Discover opportunities & <br/> Connect with artist around the <br> world`,
      horizontalLogo: HorizontalGrand,
      buttonName: "Join The Community",
      buttonLink: "#",
    },
    {
      id: 3,
      title: "For Those Who",
      subTitle: "Love Art , Live Art",
      para:
        "Bringing together artists and art spaces across dance,music and theatre.",
      testiImage:
        process.env.NEXT_PUBLIC_USER_API_URL_IMAGE +
        `banner-dance/image+30.png`,
      bottomTitle1: "A",
      bottomTitle2: "COMMUNITY",
      to: `To <br/> Showcase your work,<br/> Discover opportunities & <br/> Connect with artist around the <br> world`,
      horizontalLogo: HorizontalGrand,
      buttonName: "Join The Community",
      buttonLink: "#",
    },
  ];

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
  const checkPortfolio = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=c54b269aecb51b724e6e9f364d58830b80e72584"
    );

    var formdata = new FormData();
    formdata.append("userID", userID);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_portfolio_artist_status`,
      requestOptions
    )
      .then((response) => response.json())

      .then((responseJson) => {
        if (responseJson.valid === true) {
          setCreated(responseJson.result.message);
        } else {
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    checkPortfolio();
  });
  return (
    <>
      <div className={styles.banner_container}>
        <div className={className} {...rest}>
          <Carousel
            minHeight="80%"
            responsive={responsive}
            containerClass="carousel_container"
            onSwipeStart
            dotListClass={classes.dotCls}
            showDots={true}
            onClickItem
            autoPlay={true}
          >
            {data.map((name) => (
              <div className={styles.sliderimg}>
                <div className={styles.img_section}>
                  <LazyLoadImage
                    alt="Som"
                    height={name.height}
                    src={name.testiImage} // use normal <img> attributes as props
                    width={name.width}
                  />
                </div>
                <div className={styles.content_section}>
                  <div className={styles.title_part}>
                    <h5>{name.title}</h5>
                    <h1>
                      <span> {name.subTitle}</span>
                    </h1>
                    <p>{name.para}</p>
                  </div>
                  <div className={styles.horizontal_content}>
                    <h4>
                      {name.bottomTitle1}
                      <b> {name.bottomTitle2}</b>
                    </h4>
                    <div
                      className={styles.cont_letter}
                      dangerouslySetInnerHTML={{ __html: name.to }}
                    />
                  </div>
                  <blockquote>{name.content}</blockquote>
                  <div className={styles.horizontalBbrand}>
                    <img
                      src={name.horizontalLogo}
                      alt="#"
                      className={styles.bannerImage}
                    />
                  </div>

                  {userID ? (
                    <>
                      {getCreated === "Portfolio already filled!" ? (
                        <>
                          {" "}
                          <Link href="/account">
                            <p className={styles.community_btn}>
                              <span>Update Portfolio</span>
                            </p>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link href="/account">
                            <p className={styles.community_btn}>
                              <span>Create Portfolio</span>
                            </p>
                          </Link>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Link href="/signin">
                        <p className={styles.community_btn}>
                          <span>Join The Community</span>
                        </p>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        {/* =================== */}
        <Modal
          open={openModel}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.cp_modal_body}>
              <div className="d-flex justify-content-center">
                <div>
                  <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: "10%" }}
                  >
                    {" "}
                    <img src={Logo} alt="logo" />
                  </div>
                  <Typography
                    className={styles.typo_design}
                    style={{
                      fontFamily: "Nunito Sans",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "36px",
                      lineHeight: "119%",
                      padding: "25px",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                      color: "#000000",
                    }}
                  >
                    You want to create portfolio as ?
                  </Typography>

                  <div
                    className="row justify-content-center p-4"
                    style={{ marginBottom: "10%" }}
                  >
                    <div
                      className="col-md-5"
                      style={{ marginRight: "25px", marginBottom: "10%" }}
                    >
                      <Button
                        style={{
                          width: "100%",
                          height: "45px",
                          fontFamily: "Nunito Sans",
                          fontSize: "20px",
                          fontWeight: "40",
                          color: "#212427",
                          backgroundColor: "#fff",
                          borderRadius: "20px",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                          transition: "all 0.3s ease 0s",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleClose("create");
                        }}
                      >
                        Artist
                      </Button>
                    </div>

                    <div
                      className="col-md-5"
                      style={{ marginRight: "25px", marginBottom: "10%" }}
                    >
                      <Button
                        style={{
                          width: "100%",
                          height: "45px",
                          fontFamily: "Nunito Sans",
                          fontSize: "20px",
                          fontWeight: "40",
                          color: "#212427",
                          backgroundColor: "#fff",
                          borderRadius: "20px",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                          transition: "all 0.3s ease 0s",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleClose("org");
                        }}
                      >
                        Organization
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                height: "30px",
                marginLeft: "0px",
                background: "#FAA61A",
              }}
            ></div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

Banner.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Banner;

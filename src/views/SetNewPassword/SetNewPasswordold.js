import React from "react";
import MetaTitle from "components/helper/MetaTitle";
import styles from "../SignInCover/SigninCover.module.css";
import Logo from "../../../public/assets/Images/logo/Logo_img.svg";
import { Grid } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import HeroBanner from "./../../../public/assets/Images/banner/hero1.jpg";
import BrandLogo from "./../../../public/assets/Images/banner/home4.svg";
import NewPassCover from "./components/NewPassCover";

const useStyles = makeStyles((theme) => ({
  carousel_container: {
    // '&.react-multiple-carousel__arrow': {
    //   color: 'black',
    //   marginLeft: '100px',
    // },
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
    fontSize: "26px",
  },

  avtr: {
    marginLeft: "200px",
    marginTop: "10px",
  },

  dotCls: {
    color: "red",
    "& .react-multi-carousel-dot button": {
      borderColor: "#ff230136",
    },
    "& .react-multi-carousel-dot--active button": {
      background: "var(--theme-color)",
    },
  },
}));
const SetNewPassword = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
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
  const data = [
    {
      id: 1,
      testiImage: HeroBanner,
      brandImage: BrandLogo,
    },
    {
      id: 2,
      testiImage: HeroBanner,
      brandImage: BrandLogo,
    },
    {
      id: 3,
      testiImage: HeroBanner,
      brandImage: BrandLogo,
    },
  ];
  return (
    <div>
      <MetaTitle
        title={`Reset Password | Welcome to Beatnik World`}
        metaKeyWord="Welcome to Beatnik World"
        metaDescription="Welcome to Beatnik World"
      />
      <div className={styles.sign_in_cover}>
        <Grid className={styles.main_account}>
          <Grid
            item
            className={styles.left_side_card}
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
          >
            <div className={styles.fleft1}>
              <div className={styles.header_text}>
                <div className="row">
                  <div className="col-sm-12 col-12 col-md-12">
                    <img src={Logo} alt="logo" className={styles.headingTag} />
                  </div>
                </div>
              </div>
              <div className={styles.content_box}>
                <div className="row">
                  <div className="col-sm-12 col-12 col-md-12">
                    <h2 className={styles.headingTag}>Join</h2>
                    <h3 className={styles.headingTag2}>the community and</h3>
                    <h2 className={styles.headingTag}>Connect</h2>
                    <h3 className={styles.headingTag2}>
                      with artists around you.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <div className={styles.formContainer}>
              <div className={styles.login_board}>
                <div className={styles.login_container}>
                  <NewPassCover />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SetNewPassword;

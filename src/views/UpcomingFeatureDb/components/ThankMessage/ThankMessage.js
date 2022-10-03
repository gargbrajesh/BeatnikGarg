import React from "react";
import { Typography } from "@mui/material";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ThanksMessage from "../../../../../public/assets/Images/logo/message.png";
import DOTIMGD from "../../../../../public/assets/Images/three-dot.png";
const useStyles = makeStyles((theme) => ({
  inner_form_page: {
    margin: "170px auto 0",
    textAlign: "center",
    padding: "80px 60px",
    width: "80%",
    height: " auto",
    borderRadius: "0px",
    position:'relative',
    zIndex:'99',
    '@media (max-width: 600px)': {
      marginTop: "265px",
      width: '100%',
      padding: '20px 15px',
      height: "115vh",
    },
  },
  title: {
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "72px !important",
    lineHeight: "98px !important",
    alignItems: "center !important",
    textAlign: "center !important",
    color: "#fff",
    marginBottom: "30px",
    '@media (max-width: 600px)': {
      fontSize: "40px !important",
      lineHeight: "50px !important",
      fontWeight: "400 !important",
    }
  },
  subPara: {
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "400",
    fontSize: "24px !important",
    lineHeight: "33px",
    alignItems: "center",
    textAlign: "center",
    color: "#Fff",
    width: "80%",
    margin: "30px auto !important",
  },
  connect: {
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "33px",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    width: "60% !important",
    margin: " 30px auto !important",
  },

  imgPart: {
    width: "65px",
    margin: "0px auto 10px",
    textAlign: "center",
    alignItems: "center",
  },
  imgBlock: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    flexDirection: "column",
  },
  DOTIMG: {
    width: "70px",
    margin: "25px auto",
  },
}));
const ThankMessage = () => {
  const classes = useStyles();

  return (

    <div
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_USER_API_URL_IMAGE + `banner-dance/Lets-talk-signup.webp`})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        left: "0",
        right: "0",
        height: "1024px",
        backgroundSize: "100%",
        marginTop: "-100px",
        '@media (max-width: 600px)': {
          height: "700px",
        }
      }}
      className={classes.container}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid md={12}>
            <div className={classes.inner_form_page}>
              <div className={classes.imgBlock}>
                <img
                  className={classes.imgPart}
                  src={ThanksMessage}
                  alt="Beatnik"
                />
                <img className={classes.DOTIMG} src={DOTIMGD} alt="Beatnik" />
              </div>

              <Typography className={classes.title}>Thank you !</Typography>
              <Typography className={classes.subPara}>
                Thank you for showing interest in us, we will notify you as soon
                as we have our new features live !
              </Typography>

              <Typography className={classes.connect}>
                Stay tuned, we are nearly there..
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ThankMessage;

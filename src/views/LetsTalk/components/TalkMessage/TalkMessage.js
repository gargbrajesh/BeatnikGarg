import React from "react";
import { Typography, Container, Grid, makeStyles } from "@material-ui/core";
import DOTIMGD from "../../../../../public/assets/Images/three-dot.png";
import ThanksMessage from "../../../../../public/assets/Images/logo/message-talk.png";
const useStyles = makeStyles((theme) => ({
  inner_form_page: {
    margin: "170px auto 0",
    textAlign: "center",
    padding: "80px 60px",
    width: "80%",
    height: " auto",
    borderRadius: "0px",
  },
  subPara: {
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "32px !important",
    lineHeight: "44px ",
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
    width: "280px",
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
const TalkMessage = () => {
  const classes = useStyles();

  return (
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

            <Typography className={classes.subPara}>
              Your mesage has been sent !
            </Typography>

            <Typography className={classes.connect}>
              Stay tuned, we are nearly there..
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TalkMessage;

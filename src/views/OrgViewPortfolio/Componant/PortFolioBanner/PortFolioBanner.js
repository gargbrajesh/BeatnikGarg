import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import styles from "./portfolio.module.css";
import { makeStyles } from "@material-ui/core";
import backArrow from "../../../../../public/assets/Images/backArrow.svg";
import PreArrow from "../../../../../public/assets/Images/preArrow.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "3rem 0 ",
    '@media (min-width: 300px) and (max-width: 400px)': {
      margin: "1rem 0 ",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      margin: "1rem 0 ",
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2rem",
   
 },
  artists: {
    color: "#000",
    fontSize: "16px",
    transition: "all 0.3s ease 0s",
    fontFamily: "Nunito Sans",
    fontWeight: 500,
    borderRadius: "3em",
    padding: "5px 1.5rem",
    letterSpacing: ".1rem",
    backgroundColor: "#fff !important",
    '@media (min-width: 300px) and (max-width: 400px)': {
      fontSize: "12px",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      fontSize: "14px",
    },
    
  },
  ArtSpaces: {
    color: "#FFFFFF",
    fontSize: "16px",
    transition: "all 0.3s ease 0s",
    fontFamily: "Nunito Sans",
    fontWeight: 500,
    borderRadius: "3em",
    padding: "5px 1.5rem",
    letterSpacing: ".1rem",
    backgroundColor: "#faa61a !important",
    '@media (min-width: 300px) and (max-width: 400px)': {
      fontSize: "12px",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      fontSize: "14px",
    },
  },
}));
function PortFolioBanner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={styles.typo_design}>
              Discover Artists and Art Spaces
            </Typography>
            <Typography style={{ textAlign: "center" }}>
              Discover new artists from around the world! You can browse random
              portfolios and get inspired by their work and artistic practice.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ justifyContent: "space-around" }}>
          <Grid item xs={12} md={8}>
            <Grid className={classes.btnContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.artists}
              >
                Artists
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.ArtSpaces}
              >
                Art Spaces
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p className={styles.previous}>
              {" "}
              <img src={PreArrow} alt=".." />
              &nbsp; Previous
            </p>
          </Grid>
          <Grid item xs={6}>
            <p className={styles.nextArrow}>
              Next &nbsp;
              <img src={backArrow} alt=".." />
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PortFolioBanner;

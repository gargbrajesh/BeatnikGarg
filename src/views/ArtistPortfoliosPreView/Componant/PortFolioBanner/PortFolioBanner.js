import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import styles from "./portfolio.module.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "3rem 0 ",
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
    padding: "5px 2.5rem",
    letterSpacing: ".1rem",
    backgroundColor: "#fff !important",
    "@media (min-width: 320px) and (max-width:375px)": {
      justifyContent: "center",
      fontSize: "14px",
      marginLeft: "30%",
    },
  },
  ArtSpaces: {
    color: "#FFFFFF",
    fontSize: "16px",
    transition: "all 0.3s ease 0s",
    fontFamily: "Nunito Sans",
    fontWeight: 500,
    borderRadius: "3em",
    padding: "5px 2.5rem",
    letterSpacing: ".1rem",
    backgroundColor: "#faa61a !important",
    "@media (min-width: 320px) and (max-width:375px)": {
      justifyContent: "center",
      marginTop: "10px",
      fontSize: "14px",
      marginLeft: "25%",
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
              Portfolio Preview
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ justifyContent: "space-around" }}>
          <Grid item xs={12} md={5}>
            <Grid className={classes.btnContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.artists}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.ArtSpaces}
              >
                Publish
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PortFolioBanner;

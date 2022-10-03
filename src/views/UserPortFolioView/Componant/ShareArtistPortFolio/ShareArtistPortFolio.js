import React, { useEffect, useState } from "react";
import MetaTitle from "components/helper/MetaTitle";
import { Container, makeStyles } from "@material-ui/core";
import { ShareArtist } from "./component";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  mainCon: {
    boxShadow:
      "0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
    border: "1px solid #cdcdcd6b",
    marginTop: "130px",
    borderRadius: "5px",
    overflow: "hidden",
    '@media (max-width: 600px)': {
      marginTop: "12px",
    }
  },
}));
const  ShareArtistPortFolio = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <MetaTitle
        title={`User Portfolio | Welcome to Beatnik World `}
        metaKeyWord="Welcome to Beatnik World "
        metaDescription="Welcome to Beatnik World "
      />
      <Container>
        <div className={classes.mainCon}>
         <ShareArtist />
       
        </div>
      </Container>
    </div>
  );
}

export default ShareArtistPortFolio;

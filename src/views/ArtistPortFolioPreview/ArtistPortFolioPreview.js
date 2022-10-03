import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import PreviewBanner from './components/PreviewBanner'
import MetaTitle from "components/helper/MetaTitle";
import { About } from "views/UserPortFolioView/Componant";
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
    '@media screen and (max-width: 400px)':{
      marginTop: "12px",
    },
    '@media  (min-width: 410px) and  (max-width: 600px)':{
      marginTop: "12px",
    }
  },
}));
const  ArtistPortFolioPreview =()=>  {
  const classes = useStyles();

  return (
    <div className="container">
      <MetaTitle
        title={`Artist Portfolio Preview  | Welcome to Beatnik World `}
        metaKeyWord="Welcome to Beatnik World "
        metaDescription="Welcome to Beatnik World "
      />
      <Container>
        <div className={classes.mainCon}>
          <PreviewBanner/>
          <About/>
        </div>
      </Container>
      {/* <Footer/> */}
    </div>
  );
}

export default ArtistPortFolioPreview ;
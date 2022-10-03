import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import PortfolioBanner from "./Componant/PortfolioBanner";
import MetaTitle from "components/helper/MetaTitle";
import { Footer } from "layouts/Main/components";
import AllUserPortFolio from './Componant/AllUserPortFolio/AllUserPortFolio';
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
    '@media screen and (max-width: 400px)': {
      marginTop: "12px",
    },
    '@media (min-width: 410px) and  (max-width: 600px)': {
      marginTop: "14px",
    },
  },
}));
function MainView() {
  const classes = useStyles();

  return (
    <div className="container">
      <MetaTitle
        title={`View Portfolio | Welcome to Beatnik World `}
        metaKeyWord="Welcome to Beatnik World "
        metaDescription="Welcome to Beatnik World "
      />
      <Container>
        <div className={classes.mainCon}>
          <PortfolioBanner />
          <AllUserPortFolio />
        </div>
      </Container>
      {/* <Footer/> */}
    </div>
  );
}

export default MainView;

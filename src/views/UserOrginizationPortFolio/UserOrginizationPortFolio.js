import React from "react";
import MetaTitle from "components/helper/MetaTitle";
import { Container, makeStyles } from "@material-ui/core";
import {
  About
} from "views/OrgViewPortfolio/Componant";
import { Footer } from "layouts/Main/components";

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
function UserOrginizationPortFolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Orginization Portfolio | Welcome to Beatnik World `}
        metaKeyWord="Welcome to Beatnik World "
        metaDescription="Welcome to Beatnik World "
      />
      <Container>
        <div className={classes.mainCon}>
          <About />
        
        </div>
      </Container>
      {/* <Footer/> */}
    </div>
  );
}

export default UserOrginizationPortFolio;

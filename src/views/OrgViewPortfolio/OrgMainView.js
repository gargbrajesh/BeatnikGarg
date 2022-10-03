import React from "react";
import AboutMe from "./Componant/About";
import Bio from "./Componant/Bio";
import PortFolioBanner from "./Componant/PortFolioBanner";
import MetaTitle from "components/helper/MetaTitle";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
    mainCon: {
    boxShadow:
      "0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
    border: "1px solid #cdcdcd6b",
    marginTop: "40px",
    borderRadius: "5px",
    overflow:'hidden',
    '@media (min-width: 300px) and (max-width: 400px)': {
      marginTop: "15px",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      marginTop: "16px",
    },
  },
}));
function MainView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Orgnization User Portfolio | Beatnik - For those who love art, live art `}
        metaKeyWord="Beatnik - For those who love art, live art "
        metaDescription="Beatnik - For those who love art, live art "
      />
      <Container>
        <div className={classes.mainCon}>
          <PortFolioBanner />
          <AboutMe />
        </div>
      </Container>
    </div>
  );
}

export default MainView;

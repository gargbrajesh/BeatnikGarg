import React from "react";
import About from "./Componant/About";
import MetaTitle from "components/helper/MetaTitle";
import { Container, makeStyles } from "@material-ui/core";
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
    overflow:'hidden',
    '@media (max-width: 958px)': {
      marginTop: "0px",
     }
  },
}));
function UserPortFolioView() {
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
          <About />
        </div>
      </Container>
      {/* <Footer/> */}
    </div>
  );
}

export default UserPortFolioView;

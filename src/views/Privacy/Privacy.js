import React from "react";
import MetaTitle from "components/helper/MetaTitle";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { Footer } from "layouts/Main/components";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  mainCon: {
    marginTop: "130px",
    borderRadius: "5px",
    overflow: "hidden",
    '@media (min-width: 300px) and (max-width: 400px)': {
      marginTop: "15px",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      marginTop: "16px",
    },
  },
    title: {
      fontFamily: "Hill House !important",
      fontStyle: "normal !important",
      fontWeight: "500",
      fontSize: "70px",
      lineHeight: "71px",
      display: "flex",
      alignItems: "center",
      color: "#000000",
      '@media (min-width: 300px) and (max-width: 400px)': {
        fontSize: "22px",
        lineHeight: "40px",
      },
      '@media (min-width: 401px) and (max-width: 600px) ': {
        fontSize: "22px",
        lineHeight: "40px",
      },
    },
    para: {
      marginTop: "40px",
      "& p": {
        fontFamily: "Helvetica !important",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "21px",
        display: "flex",
        alignItems: "center",
        color: "#000000",
        opacity: "0.5",
        '@media (min-width: 300px) and (max-width: 400px)': {
          fontSize: "12px",
          lineHeight: "20px",
        },
        '@media (min-width: 401px) and (max-width: 600px) ': {
          fontSize: "12px",
          lineHeight: "20px",
        },
      },
    },
  }));
function Tc() {
  const classes = useStyles();
  return (
    <div className="container">
      <MetaTitle
        title={`Privacy Policy | Beatnik - For those who love art, live art `}
        metaKeyWord="Beatnik - For those who love art, live art "
        metaDescription="Beatnik - For those who love art, live art "
      />
      <Container>
        <div className={classes.mainCon}>
          <Typography className={classes.title}>Privacy Policy</Typography>
          <div className={classes.para}>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default Tc;

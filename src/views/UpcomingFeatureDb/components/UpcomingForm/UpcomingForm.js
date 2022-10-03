import React, { useState, useEffect } from "react";
import styles from './../../upComing.module.css';
import { Typography, Box, } from "@mui/material";

import {
  Container,
  Snackbar,
  Grid,
  makeStyles,
  Backdrop,
  CircularProgress,
  Button,
  TextField,
} from "@material-ui/core";
import Link from "next/link";
import MuiAlert from "@material-ui/lab/Alert";
import Spinner from "components/organisms/Spinner";
import ThankMessage from "../ThankMessage";
import { Formik } from "formik";
import * as Yup from "yup";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  inner_form_page: {
    marginTop: "170px",
    background: "rgba(255, 255, 255, 0.8);",
    border: "1px solid rgb(192, 192, 192)",
    textAlign: "center",
    padding: "80px 60px",
    width: "100%",
    height: "auto",
    borderRadius: "0px",
    zIndex: '99',
    position: "relative",
    '@media (min-width: 412px) and (max-width: 600px)': {
      marginTop: "285px",
      width: '100%',
      padding: '20px 15px',
      height: "78vh",
    },
    '@media (min-width: 375px) and (max-width: 410px)': {
      marginTop: "260px",
      height: "78vh",
      padding: '0px 15px',
    }
  },
  title: {
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "72px !important",
    lineHeight: "98px !important",
    alignItems: "center !important",
    textAlign: "center !important",
    color: "#212427",
    marginBottom: "10px",
    '@media (max-width: 600px)': {
      fontSize: "40px !important",
      lineHeight: "50px !important",
      fontWeight: "400 !important",
    }
  },
  subPara: {
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "400",
    fontSize: "24px !important",
    lineHeight: "33px",
    alignItems: "center",
    textAlign: "center",
    color: "#212427",
    width: "85%",
    margin: "0 auto !important",
    '@media (max-width: 600px)': {
      fontSize: "14px !important",
      lineHeight: "25px !important",
    }
  },
  connect: {
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "33px",
    alignItems: "center",
    textAlign: "center",
    color: "#212427",
    width: "60% !important",
    margin: " 30px auto !important",
  },
  connectD: {
    fontFamily: "Nunito Sans ",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "20px !important",
    lineHeight: "27px !important",
    alignItems: "center",
    textAlign: "center",
    color: "#212427 !important",
    width: "100% !important",
    margin: " 50px auto !important",
    '@media (max-width: 600px)': {
      fontSize: "16px !important",
    },
  },
  fieldData: {
    width: "60%",
    margin: " 50px auto",
  },
  fieldDataInput: {
    display: "flex",
    width: "828px",
    height: "73px",
    background: "#FFFFFF",
    borderRadius: "20px 20px 20px 20px",
    marginLeft: "-65px",
    '@media (max-width: 600px)': {
      width: "331px",
      height: "42px",
    }
  },
  notifie: {
    width: "647px",
    height: "73px",
    background: "#FFFFFF",
    borderRadius: "20px 0px 0px 20px",
    fontFamily: "Nunito Sans ",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    paddingLeft: "25px",
    lineHeight: "27px",
    alignItems: "left",
    textAlign: "left",
    color: "#000000",
    border: "none",
    "& .MuiInputBase-input": {
      padding: "24px 0",
    },
    '@media (max-width: 600px)': {
      width: '420px',
      height: "42px",
      padding: '12px 0px',
      "& .MuiInputBase-input": {
        padding: "0px 18px",
      },
    },
  },

  btn: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "33px",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    background: "#FAA61A",
    width: "181px",
    border: "none",
    borderRadius: "0px 20px 20px 0px",
    "&:hover": {
      background: "#FAA61A",
    },
    '@media (max-width: 600px)': {
      fontSize: "14px",
    },
  },
  contactBtn: {
    display: "inline-block",
    textDecorationLine: "underline",
    cursor: "pointer",
  },
  containerD: {
    position: "relative",
    "&:before": {
      content: "",
      position: "absolute",
      height: "101vh",
      width: "100%",
      background: "#00000063",
      top: "-7px",
      left: 0,
    },
  },
}));
const UpcomingForm = () => {
  const classes = useStyles();
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const DataPost = async (values) => {
    setOpen(!open);
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=e394a80251a27f082d9bfbf595e3a498e5172dcc"
    );
    var formdata = new FormData();
    formdata.append("email", values.email);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    const result = await fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_save_email`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setOpen(false);
        if (responseJson.valid === false) {
          setMessage(responseJson.result.message);
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
        }
      });
  };
  const handleCloseFalse = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFalse(false);
  };
  const handleCloseTrue = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenTrue(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);
  return (
    <div className={styles.upcomming}>
      {getMessageTrue ? null : (
        <div
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_USER_API_URL_IMAGE +
              `banner-dance/Lets-talk-signup.webp`})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            left: "0",
            right: "0",
            height: "160vh",
            backgroundSize: "100%",
            marginTop: "-100px",
            '@media (max-width: 600px)': {
              height: "110vh !important",
            },
          }}
          className={classes.containerD}
        >
          <Snackbar
            open={openFalse}
            autoHideDuration={1000}
            onClose={handleCloseFalse}
          >
            <Alert onClose={handleCloseFalse} severity="error">
              {getMessage}
            </Alert>
          </Snackbar>
          <Snackbar
            open={openTrue}
            autoHideDuration={1000}
            onClose={handleCloseTrue}
          >
            <Alert onClose={handleCloseTrue} severity="success">
              {getMessageTrue}
            </Alert>
          </Snackbar>
          {loading ? (
            <Container>
              <Grid container spacing={4}>
                <Grid md={12}>
                  <div className={classes.inner_form_page}>
                    <Typography className={classes.title}>
                      Coming Soon
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        p: 1,
                        m: 1,

                        borderRadius: 1,
                      }}
                    >
                      <span className={styles.dot}></span>
                      <span className={styles.dot2}></span>
                      <span className={styles.dot3}></span>
                    </Box>
                    <Typography className={classes.subPara}>
                      Very soon you'll be able to connect with your favourite artists, apply to opportunities and find art resources around you. To know more about the upcoming feature,
                      <Link href="/letTalk">
                        <p className={classes.contactBtn}>contact us</p>
                      </Link>
                      !
                    </Typography>

                    <Typography className={classes.connect}>
                      Stay tuned, we are nearly there..
                    </Typography>
                    <div className={classes.fieldData}>
                      <Formik
                        initialValues={{
                          email: "",
                        }}
                        validationSchema={Yup.object().shape({
                          email: Yup.string()
                            .max(50)
                            .required("Email ID is required.")
                            .email("Email ID is invalid."),
                        })}
                        onSubmit={async (values) => {
                          const result = DataPost(values);
                        }}
                      >
                        {({
                          errors,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          setFieldValue,
                          isValid,
                          touched,
                          values,
                        }) => (
                          <div>
                            <form onSubmit={handleSubmit} autocomplete="off">
                              <div className={classes.fieldDataInput}>
                                <TextField
                                  name="email"
                                  type="email"
                                  className={classes.notifie}
                                  error={Boolean(touched.email && errors.email)}
                                  helperText={touched.email && errors.email}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.email}
                                />
                                <Button
                                  className={classes.btn}
                                  onClick={DataPost}
                                  type="button"
                                >
                                  NOTIFY ME
                                </Button>
                                <Backdrop
                                  className={classes.backdrop}
                                  open={open}
                                  onClick={DataPost}
                                >
                                  <CircularProgress color="inherit" />
                                </Backdrop>
                              </div>
                            </form>
                          </div>
                        )}
                      </Formik>

                      <Typography className={classes.connectD}>
                        We Promise to never spam you.
                      </Typography>
                      <div></div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          ) : (
            <>
              <Spinner />
            </>
          )}
        </div>
      )}
      {getMessageTrue === "Email Saved Successfully" ? (
        <>
          <ThankMessage />
        </>
      ) : null}
    </div>
  );
};

export default UpcomingForm;

import React, { useState } from "react";

import styles from "../Banner/Banner.module.css";

import {
  Button,
  TextField,
  makeStyles,
  Grid,
  Typography,
  Snackbar,
  Backdrop,
  CircularProgress,
  Container,
  Card,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import Email from "../../../../../public/assets/Images/common/Email.svg";
import Telephone from "../../../../../public/assets/Images/common/call.svg";
import MuiAlert from "@material-ui/lab/Alert";
import TalkMessage from "../TalkMessage";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
  },
  card_container: {
    width: "100%",
    marginTop: "170px",
    '@media (max-width: 600px)': {
      marginTop: "85px",
    }
  },
  inner_containner: {
    background: "rgba(255, 255, 255, 0.8)",
    padding: "40px 60px 80px 60px",
    '@media (max-width: 600px)': {
      padding: "20px",
    }
  },
  textcontainer: {
    display: "block",
    width: "50%",
    '@media (max-width: 600px)': {
      width: "100%",
    }
  },
  queryContainer: {
    top: " 16%",
    left: "61%",
    width: "500px",
    /* height: 80vh, */
    padding: "35px 50px",
    position: "absolute",
    background: "white",
    display: "block",
    '@media (max-width: 600px)': {
      top: " 110%",
      left: "0",
    }
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  form_control_lg: {
    width: "100%",
    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
      transform: "translate(36px, -8px) scale(0.75)",
      background: "#fff",
      padding: "0 10px",
      color: "#FAA61A",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: " #fff",
      borderRadius: "30px",
      border: " 2px solid #888888",
      borderBottom: " 2px solid #888888 !important",
      "&:active": {
        border: " 2px solid #FAA61A !important",
        borderBottom: " 2px solid #FAA61A !important",
      },
      "&:focus": {
        border: " 2px solid #FAA61A !important",
        borderBottom: " 2px solid #FAA61A !important",
      },
      "&:focus-within": {
        border: " 2px solid #FAA61A !important",
        borderBottom: " 2px solid #FAA61A !important",
      },
      "&:visited": {
        border: " 2px solid #FAA61A !important",
        borderBottom: " 2px solid #FAA61A !important",
      },
      "&:focus-visible": {
        border: " 2px solid #FAA61A !important",
        borderBottom: " 2px solid #FAA61A !important",
      },
      "&:target": {
        border: " 2px solid #FAA61A !important",
        borderBottom: " 2px solid #FAA61A !important",
      },
    },
    "& .MuiFilledInput-underline": {
      "&:before": {
        transition: "none",
        borderBottom: "none",
      },
      "&:after": {
        transition: "none",
        borderBottom: "none",
      },
      transition: "none",
      borderBottom: "none",
    },
    "& .MuiFilledInput-input": {
      padding: "10px 20px 8px 25px !important",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(20px, 12px) scale(1)",
    },
  },
  createAcc: {
    backgroundColor: " #faa61a",
    borderRadius: "30px",
    border: " 2px solid #faa61a",
    borderBottom: " 2px solid #faa61a !important",
    padding: "6px 60px",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: " #faa61a !important",
    },
  },
  mobileNumber: {
    display: "flex",
    backgroundColor: " #fff",
    borderRadius: "30px",
    border: " 2px solid #888888",
    width: "100%",
  },
  formContainer: {
    position: "relative",
    '@media (max-width: 600px)': {
      width: "80%",
    }
  },
  innerContianer: {
    marginTop: "20px",
    "& .MuiButton-containedPrimary ": {
      borderRadius: "20px",
      width: "100px",
    },
  },
  heading: {
    fontFamily: "Nunito Sans",
    fontStyle: 'normal',
    fontWeight: '800 !important',
    fontSize: '90px',
    lineHeight: '120px',
    color: ' #212427',
    '@media (max-width: 600px)': {
      fontSize: "50px",
      lineHeight: '45px',
    }
  },

  para: {
    marginTop: '25px',
    fontFamily: "Nunito Sans",
    fontStyle: 'normal',
    fontWeight: '400 !important',
    fontSize: '18px',
    lineHeight: '25px',
    color: ' #212427',
    '@media (max-width: 600px)': {
      fontSize: "16px",
      lineHeight: '22px',
      marginTop: '20px',
    }
  }
}));
const LetTalkCard = () => {
  const classes = useStyles();
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [open, setOpen] = useState(false);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const createAccountSubmit = async (values) => {
    setOpen(!open);
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=93ebf988fabcaf6b4bf9f45a6251d6aaf6e8c705"
    );
    var formdata = new FormData();
    formdata.append("fullName", values.name);
    formdata.append("email", values.email);
    formdata.append("number", values.phone);
    formdata.append("msg", values.query);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    const result = await fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_contact_form`,
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
      })
      .catch((error) => console.log("error", error));
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
  return (
    <div style={{ position: 'relative', zIndex: '99' }}>
      {getMessageTrue ? null : (
        <>

          <Container>
            <Grid xs={12}>
              <div className={classes.card_container}>
                <Card className={classes.inner_containner}>
                  <Grid container className={classes.textcontainer}>
                    <h1 className={classes.heading}>Let's Talk</h1>
                    <p className={classes.para}>
                      Hello! Thanks for visiting Beatnik :).
                    </p>
                    <div className={classes.para}>
                      {" "}
                      We are excited to be on this journey to explore the art
                      world and build a sustainable community with art
                      enthusiasts like you!
                    </div>
                    <div className={classes.para}>
                      Please write to us or call us for any queries,
                      suggestions or comments". We would love to hear from
                      you"
                    </div>
                    <div className={classes.para}>
                      <ul
                        className={styles.contact}
                        style={{ listStyle: "none" }}
                      >
                        <li>
                          <a href="#" className={styles.anchor}>
                            <div>
                              <img src={Email} alt="" />
                              <span className="email-add">
                                {" "}
                                &nbsp;&nbsp;hello@beatnik.community
                              </span>
                            </div>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" className={styles.anchor}>
                            <div>
                              <img src={Telephone} alt="" />
                              <span className="phone-number">
                                {" "}
                                &nbsp;&nbsp;+91 8197009093
                              </span>
                            </div>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Grid>
                </Card>
                <Grid container className={classes.queryContainer}>
                  <div>
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
                    <div>
                      <Formik
                        initialValues={{
                          name: "",
                          email: "",
                          query: "",
                          phone: "",
                        }}
                        validationSchema={Yup.object().shape({
                          name: Yup.string()
                            .max(
                              30,
                              "Name should be at greater then  30 characters."
                            )
                            .min(3, "Name must be at least 3 characters.")
                            .required("Name is required"),
                          email: Yup.string()
                            .max(50)
                            .required("Email ID is required.")
                            .email("Email ID is invalid."),
                          phone: Yup.string()
                            .required("Phone number is required")
                            .matches(phoneRegExp, "Phone number is not valid")
                            .min(10, "Phone number is too short")
                            .max(10, "Phone number is too long"),
                          query: Yup.string()

                            .required("Message is required"),
                        })}
                        onSubmit={async (values, { setSubmitting }) => {
                          const result = createAccountSubmit(values, null, 2);
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
                          <div className={classes.formContainer}>
                            <Grid item xs={12}>
                              {" "}
                              <Typography className={styles.sub_heading}>
                                Queries . Suggestions . Comments
                              </Typography>
                            </Grid>
                            <Grid item className={classes.innerContianer}>
                              <form
                                onSubmit={handleSubmit}
                                id="my-form"
                                autoComplete="off"
                              >
                                <div className="form-outline mb-4">
                                  <TextField
                                    id="name"
                                    variant="filled"
                                    label="Name"
                                    className={classes.form_control_lg}
                                    error={Boolean(
                                      touched.name && errors.name
                                    )}
                                    helperText={touched.name && errors.name}
                                    name="name"
                                    size="small"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.name}
                                  />
                                </div>
                                <div className="form-outline mb-4">
                                  <TextField
                                    id="email"
                                    type="email"
                                    variant="filled"
                                    label="Email Address"
                                    className={classes.form_control_lg}
                                    error={Boolean(
                                      touched.email && errors.email
                                    )}
                                    helperText={touched.email && errors.email}
                                    name="email"
                                    size="small"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                  />
                                </div>

                                <div className="form-outline mb-4">
                                  <TextField
                                    id="phone"
                                    type="phone"
                                    variant="filled"
                                    label="Phone Number"
                                    className={classes.form_control_lg}
                                    error={Boolean(
                                      touched.phone && errors.phone
                                    )}
                                    helperText={touched.phone && errors.phone}
                                    name="phone"
                                    size="small"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.phone}
                                  />
                                </div>
                                <div className="form-outline mb-2">
                                  <TextField
                                    id="query"
                                    type="query"
                                    variant="filled"
                                    label="Message"
                                    className={classes.form_control_lg}
                                    error={Boolean(
                                      touched.query && errors.query
                                    )}
                                    helperText={touched.query && errors.query}
                                    name="query"
                                    size="small"
                                    multiline
                                    rows={3}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.query}
                                  />
                                </div>
                                <div className="d-flex justify-content">
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.createAcc}
                                    disabled={isSubmitting}
                                  >
                                    <span></span>Send
                                  </Button>
                                  <Backdrop
                                    className={classes.backdrop}
                                    open={open}
                                    onClick={createAccountSubmit}
                                  >
                                    <CircularProgress color="inherit" />
                                  </Backdrop>
                                </div>
                              </form>
                            </Grid>
                          </div>
                        )}
                      </Formik>
                    </div>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Container>


        </>
      )}
      {getMessageTrue === 'Data Saved Successfully' ? <> '<TalkMessage />' </> : null}

    </div>
  );
};

export default LetTalkCard;

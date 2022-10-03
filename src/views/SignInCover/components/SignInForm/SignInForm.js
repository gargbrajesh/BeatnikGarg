import React, { useState } from "react";
import styles from "../../SigninCover.module.css";
import Link from "next/link";
import {
  Backdrop,
  CircularProgress,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import Router from "next/router";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Cookies from "js-cookie";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  form_control_lg: {
    width: "70%",
    "@media(max-width: 720px)": {
      width: "100%",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
      transform: "translate(36px, -8px) scale(0.75)",
      background: "#fff",
      padding: "0 10px",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: " #fff",
      borderRadius: "30px",
      border: " 1px solid #888888",
      borderBottom: " 1px solid #888888 !important",
      overflow: "hidden",
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
      padding: "10px 20px 12px 25px !important",
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
    "&:hover": {
      backgroundColor: " #faa61a",
    },
    "@media(max-width: 720px)": {
      marginLeft: "50px",
    },
  },
}));
function SignInForm() {
  const router = useRouter();
  const classes = useStyles();
  const [getMessage, setMessage] = useState();
  const [getMessageTrue, setMessageTrue] = useState();
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [createdAt, setCreateAt] = useState();
  const [dob, setDOB] = useState();
  const [email, setEmail] = useState();
  const [fromSocial, setFormSocial] = useState();
  const [gender, setGender] = useState();
  const [id, setID] = useState();
  const [isActive, setISActive] = useState();
  const [joinAs, setJoinAs] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [open, setOpen] = React.useState(false);

  const LoginAccountSubmit = async (values) => {
    setOpen(!open);
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=408f2edd7b13ace3ae508e93b84e9747e0608a74"
    );
    var formdata = new FormData();
    formdata.append("email", values.email);
    formdata.append("passsword", values.passsword);

    var requestOptions = {
      method: "POST",
      body: formdata,
      headers: myHeaders,
      redirect: "follow",
    };

    const result = await fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnikLogin`,
      requestOptions
    )
      .then((response) => response.json())

      .then((responseJson) => {
        setOpen(false);
        if (responseJson.valid === true) {
          setMessageTrue(responseJson.result.message);
          setCity(responseJson.result.data[0].city);
          setCountry(responseJson.result.data[0].country);
          setCreateAt(responseJson.result.data[0].createdAt);
          setDOB(responseJson.result.data[0].dob);
          setEmail(responseJson.result.data[0].email);
          setFormSocial(responseJson.result.data[0].fromSocial);
          setGender(responseJson.result.data[0].gender);
          setID(responseJson.result.data[0].id);
          setISActive(responseJson.result.data[0].isActive);
          setJoinAs(responseJson.result.data[0].joinAs);
          setName(responseJson.result.data[0].name);
          setPhoneNumber(responseJson.result.data[0].phoneNumber);
          setOpenTrue(true);
          Cookies.set("aboutMe", responseJson.result.data[0].aboutMe);
          Cookies.set("city", responseJson.result.data[0].city);
          Cookies.set("country", responseJson.result.data[0].country);
          Cookies.set("createdAt", responseJson.result.data[0].createdAt);
          Cookies.set("dob", responseJson.result.data[0].dob);
          Cookies.set("email", responseJson.result.data[0].email);
          Cookies.set("fromSocial", responseJson.result.data[0].fromSocial);
          Cookies.set("gender", responseJson.result.data[0].gender);
          Cookies.set("id", responseJson.result.data[0].id);
          Cookies.set("isActive", responseJson.result.data[0].isActive);
          Cookies.set("joinAs", responseJson.result.data[0].joinAs);
          Cookies.set("name", responseJson.result.data[0].name);
          Cookies.set("phoneNumber", responseJson.result.data[0].phoneNumber);

          Router.push(`account`, undefined, {
            shallow: true,
          });
        } else {
          setMessage(responseJson.result.message);
          setOpenFalse(true);
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
  return (
    <>
      <Snackbar
        open={openFalse}
        autoHideDuration={6000}
        onClose={handleCloseFalse}
      >
        <Alert onClose={handleCloseFalse} severity="error">
          {getMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openTrue}
        autoHideDuration={6000}
        onClose={handleCloseTrue}
      >
        <Alert onClose={handleCloseTrue} severity="success">
          {getMessageTrue}
        </Alert>
      </Snackbar>
      <Formik
        initialValues={{
          email: "",
          passsword: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .max(50)
            .required("Email ID is required.")
            .email("Email ID is invalid."),
          passsword: Yup.string()
            .required("No password provided.")
            .min(4, "Password is too short - should be 4 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const result = LoginAccountSubmit(values, null, 2);
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
              <div className="form-outline mt-5 mb-4">
                <TextField
                  id="email"
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  name="email"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  variant="filled"
                  className={classes.form_control_lg}
                  label="Email ID"
                />
              </div>
              <div className="form-outline">
                <TextField
                  label="Password"
                  id="passsword"
                  variant="filled"
                  className={classes.form_control_lg}
                  error={Boolean(touched.passsword && errors.passsword)}
                  helperText={touched.passsword && errors.passsword}
                  type="password"
                  name="passsword"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.passsword}
                />
              </div>
              <div className={styles.sign__action}>
                <div className={styles.sign__agree}>
                  <input
                    className="m-check-input bg-#FAA61A"
                    type="checkbox"
                    id="m-agree"
                    style={{
                      color: "#FAA61A",
                      border: "1px solid #FAA61A !important",
                      marginTop: "10px",
                    }}
                  />
                  <label className={styles.m_check_label} htmlFor="m-agree">
                    Remember Me
                  </label>
                </div>
                <div className={styles.sign__forgot}>
                  <Link href="/reset-password">
                    <p>Forgot password?</p>
                  </Link>
                </div>
              </div>
              <div className="d-flex pt-3">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className={classes.createAcc}
                >
                  Sign In
                </Button>
                <Backdrop
                  className={classes.backdrop}
                  open={open}
                  onClick={LoginAccountSubmit}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default SignInForm;

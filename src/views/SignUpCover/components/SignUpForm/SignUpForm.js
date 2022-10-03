import React, { useState } from "react";
import styles from "../../SignUpCover.module.css";
import { useRouter } from "next/router";
import Router from "next/router";
import {
  Button, Backdrop,
  CircularProgress, TextField, makeStyles, Select
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
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
    width: "100%",
    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
      transform: "translate(36px, -8px) scale(0.75)",
      background: "#fff",
      padding: "0 10px",
      color: "#FAA61A",
    },
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      backgroundColor: " #fff",
      borderRadius: "30px",
      border: " 1px solid #888888",
      borderBottom: " 1px solid #888888 !important",
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
      padding: "8px 20px 12px 25px !important",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(20px, 12px) scale(1)",
    },
  },
  mobileCode: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: " #fff",
    borderRadius: "30px",
    border: " 1px solid #888888",
    borderBottom: " 1px solid #888888 !important",
    width: "120px",
    padding: "4px 15px 4px 15px !important",
  },
  mobileNumber: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: " #fff",
    borderRadius: "30px",
    border: " 1px solid #888888",
    borderBottom: " 1px solid #888888 !important",
    width: "90%",
    marginLeft: "20px",
    padding: "4px 20px 4px 25px !important",
  },
  createAcc: {
    backgroundColor: " #faa61a",
    borderRadius: "30px",
    border: " 2px solid #888888",
    borderBottom: " 2px solid #888888 !important",
    padding: "5px 60px",
    marginTop: "35px",
    "&:hover": {
      backgroundColor: " #faa61a",
    },
  },
}));
function SignUpForm() {
  const classes = useStyles();
  const router = useRouter();
  const [passsword, setPasssword] = useState("");
  const [confirm_pass, setConfirm_pass] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [joinAs, setJoinAs] = useState();
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [open, setOpen] = React.useState(false);

  const createAccountSubmit = async (values) => {
    setOpen(!open);
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=408f2edd7b13ace3ae508e93b84e9747e0608a74"
    );
    var formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("email", values.email);
    formdata.append("password", values.password);
    formdata.append("phoneNumber", phoneNumber);
    formdata.append("joinAs", "artist");
    formdata.append("aboutMe", "");
    var requestOptions = {
      method: "POST",
      body: formdata,
      headers: myHeaders,
      redirect: "follow",
    };
    const result = await fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnikSignup`,
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
          Cookies.set("phoneNumber", responseJson.result.data.phoneNumber);
          Cookies.set("name", responseJson.result.data.name);
          Cookies.set("joinAs", responseJson.result.data.joinAs);
          Cookies.set("id", responseJson.result.data.id);
          Cookies.set("email", responseJson.result.data.email);
          Cookies.set("aboutMe", responseJson.result.data.aboutMe);
          Router.push(`account`, undefined, {
            shallow: true,
          });
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
    <div className={styles.wraper}>

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
      <div className={styles.hhh}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            passsword: "",

            check: "",
            confirm_pass: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .max(30, "Name should be at greater then  30 characters.")
              .min(3, "Name must be at least 3 characters.")
              .required("Name is required"),
            email: Yup.string()
              .max(50)
              .required("Email ID is required.")
              .email("Email ID is invalid."),
            check: Yup.string().required("Please checked terms and condition"),
            password: Yup.string()
              .required("No password provided.")
              .min(4, "Password is too short - should be 4 chars minimum.")
              .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
            confirm_pass: Yup.string().when("password", {
              is: (val) => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
              ),
            }),
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
            <div className={styles.right_content_From}>
              <form onSubmit={handleSubmit} id="my-form" autocomplete="off">
                <div className="form-outline mb-3">
                  <TextField
                    id="name"
                    variant="filled"
                    label="Name"
                    className={classes.form_control_lg}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                    name="name"
                    size="small"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
                <div className="form-outline mb-3">
                  <TextField
                    id="email"
                    type="email"
                    variant="filled"
                    label="Email ID"
                    className={classes.form_control_lg}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    name="email"
                    size="small"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-outline mb-3">
                      <TextField
                        id="password"
                        variant="filled"
                        label="Password"
                        type={passsword.showPassword ? "text" : "password"}
                        className={classes.form_control_lg}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                        name="password"
                        size="small"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-outline mb-3">
                      <TextField
                        id="confirm_pass"
                        variant="filled"
                        label="Confirm Password"
                        type={confirm_pass.showPassword ? "text" : "password"}
                        className={classes.form_control_lg}
                        error={Boolean(
                          touched.confirm_pass && errors.confirm_pass
                        )}
                        helperText={touched.confirm_pass && errors.confirm_pass}
                        name="confirm_pass"
                        size="small"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirm_pass}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-3">
                  {/* <label className={styles.label_font} for="phone">
                    <span>
                      Phone Number <small>( Optional )</small>
                    </span>
                  </label> */}
                  <div
                    className="d-flex"
                    style={{ alignItems: "flex-start", marginTop: "-12px" }}
                  >
                    <Select
                      native
                      className={classes.mobileCode}
                      onChange={handleChange}
                      inputProps={{
                        name: "age",
                        id: "filled-age-native-simple",
                      }}
                    >
                      <option value={10}>+ 91</option>
                    </Select>
                    <TextField
                      id="phoneNumber"
                      type="number"
                      className={classes.mobileNumber}
                      name="phoneNumber"
                      size="small"
                      placeholder="Mobile No. (Optional)"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                    />
                  </div>
                </div>

                <div className="md-flex ">
                  <h6 className="mb-0 me-4">
                    I want to join as?{" "}
                    <small style={{ color: "#888888" }}>( Optional )</small>
                  </h6>
                  <div class="container mt-3">
                    <div class={styles.row}>
                      <div class="col-sm d-flex">
                        <div className="form-check form-check-inline ">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="joinAs"
                            id="joinAs"
                            value="artist"
                            onChange={(e) => setJoinAs(e.target.value)}
                          />
                          <label className="form-check-label" for="joinAs">
                            <span className={styles.label_fontSize}>
                              Artist
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="col-sm d-flex">
                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="joinAs"
                            id="joinAs"
                            value={1}
                            onChange={(e) => setJoinAs(e.target.value)}
                          />
                          <label
                            htmlFor="joinAs"
                            className="form-check-label"
                            for="joinAs"
                          >
                            <span className={styles.label_fontSize}>
                              Organization
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="col-sm d-flex">
                        <div className="form-check form-check-inline mb-0">
                          <label className="form-check-label" for="joinAs">
                            <span className={styles.label_fontSize}>
                              Hobbyist
                            </span>
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="joinAs"
                            id="joinAs"
                            value={2}
                            onChange={(e) => setJoinAs(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.termsContidion} style={{ marginTop: '10px', display: 'flex' }}>
                  <TextField
                    required
                    id="check"
                    type="checkbox"
                    className={styles.formControlTerms}
                    error={Boolean(touched.check && errors.check)}
                    helperText={touched.check && errors.check}
                    name="check"
                    size="small"
                    onBlur={handleBlur}
                    value={isSubscribed}
                    onChange={handleChange}
                    style={{ color: "#FAA61A", marginRight: "5px" }}
                  />
                  <label
                    className="form-check-label"
                    style={{ fontFamily: "Nunito Sans" }}
                    for="form2Example3"
                  >
                    I agree to Platform’s
                    <span style={{ color: "#FAA61A" }}>
                      Terms of Service
                    </span>{" "}
                    and <span style={{ color: "#FAA61A" }}>Privacy Policy</span>
                  </label>
                </div>
                <div className="d-flex justify-content pt-3">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.createAcc}
                  >
                    <span></span> Create Account
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
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignUpForm;

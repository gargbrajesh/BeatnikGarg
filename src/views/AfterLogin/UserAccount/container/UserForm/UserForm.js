import React, { useEffect, useState } from "react";
import styles from "./UserForm.module.css";
import Cookies from "js-cookie";
import {
  Grid,
  TextField,
  makeStyles,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
    Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useRouter } from "next/router";
import countrydata from "../../../../../../src/Countrydata.json";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const selectGender = [
  {
    id: "Male",
    name: "Male",
  },
  {
    id: "Female",
    name: "Female",
  },
  {
    id: "Others",
    name: "Others",
  },
];
const useStyles = makeStyles((theme) => ({
    backdrop: {
    zIndex: '99999',
    color: "#fff",
  },
  inputField: {
    width: "100%",
    "& .MuiFilledInput-root": {
      borderRadius: "30px",
      border: "2px solid #888888",
      background: "#fff",
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
    "& .MuiFilledInput-underline:after": {
      display: "none",
    },
    "& .MuiFilledInput-underline:before": {
      display: "none",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense ": {
      transform: "translate(40px, -7px) scale(0.75)",
      background: "#fff",
      padding: "1px 10px",
      color: "#000",
      fontWeight: "500",
    },
    "& .MuiFilledInput-input": {
      padding: "10px 20px 10px 28px !important",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-marginDense": {
      transform: "translate(30px, 15px) scale(1)",
    },
  },
  formControl: {
    width: "100%",
    "& .MuiFilledInput-root": {
      borderRadius: "30px",
      border: "2px solid #888888",
      background: "#fff",
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
    "& .MuiFilledInput-underline:after": {
      display: "none",
    },
    "& .MuiFilledInput-underline:before": {
      display: "none",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-shrink ": {
      transform: "translate(40px, -7px) scale(0.75)",
      background: "#fff",
      padding: "1px 10px",
      color: "#000",
      fontWeight: "500",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(30px, 13px) scale(1)",
    },
  },
  inputFieldDOB: {
    position: "relative",
    width: "100%",
    margin: 0,
    borderRadius: "30px",
    border: "2px solid #888888",
    background: "#fff",
    padding: "6px 0px 6px 0",
    borderBottom: "2px solid #888888",
    "&>button": {
      position: "relative",
      top: "5px",
    },
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
    "& .MuiInputBase-formControl": {
      "&:before": {
        display: "none",
      },
      "&:after": {
        display: "none",
      },
    },
    "& label": {
      background: "#fff",
      borderRadius: "30px",
      position: "absolute",
      top: "-30px",
      padding: "0px 6px",
      left: "13px",
      width: "150px",
      fontSize: "16px",
      color: "#000",
    },
    "& input ": {
      padding: "6px 15px 0px 28px !important",
      background: "#fff",
      borderRadius: "30px",
    },
    "& span.MuiIconButton-label": {
      padding: "0px 0px 12px 0px",
    },
  },
  inputFieldDOBLabel: {
    background: "#fff",
    borderRadius: "30px",
    position: "absolute",
    top: "-9px",
    padding: "0px 6px",
    left: "26px",
    width: "105px",
    fontSize: "16px",
    color: "#000",
    zIndex: "99",
  },
}));
function UserForm(props) {
  const router = useRouter();
  const classes = useStyles();
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [defName, setDefname] = useState("");
  const [defEmail, setDefEmail] = useState("");
  const [defPhone, setDefPhone] = useState("");
  const [defaboutMe, setDefaboutMe] = useState("");
  const [defgender, setDefgender] = useState("");
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [open, setOpen] = React.useState(false);

  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "ci_session=fba41c3e7ffafea7982b486d308d977f96d17f60"
  );
  const userID = Cookies.get("id");
  const accountDetails = async (values) => {
    setOpen(!open);
    var formdata = new FormData();
    formdata.append("fullName", defName);
    formdata.append("email", defEmail);
    formdata.append("phoneNumber", defPhone);
    formdata.append("dob", selectedDate);
    formdata.append("gender", defgender);
    formdata.append("country", countryid);
    formdata.append("city", '98');
    formdata.append("aboutMe", defaboutMe);
    formdata.append("userID", userID);
    formdata.append("password", "123456");
    formdata.append("userType", "artist");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    const result = await fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_userDetailSave`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
                setOpen(false);
        if (responseJson.valid == false) {
          setMessage("Please try after some time.");
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          setDefaboutMe(responseJson.result.data[0].aboutMe);
          setStateid(responseJson.result.data[0].city);
          setCountryid(responseJson.result.data[0].country);
          setDefgender(responseJson.result.data[0].gender);
          setDefname(responseJson.result.data[0].name);
          setDefEmail(responseJson.result.data[0].email);
          setDefPhone(responseJson.result.data[0].phoneNumber);
          setSelectedDate(responseJson.result.data[0].dob);
        }
      })
      .catch((error) => console.log("error", error));
  };
  // Country and State code start here by brajesh

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  };
const resetPass = () =>{
  router.push({
    pathname: "/reset-password",
  });
}
  const handlestate = (e) => {
    const stateid = e.target.value;
    setStateid(stateid);
    setStateid(countryid);
  };
  // Country and State code end here

  var getDataHeaders = new Headers();
  getDataHeaders.append(
    "Cookie",
    "ci_session=6c1d9268a2d7c7d28961d85d2e60a05b21025b4e"
  );

  var formdata = new FormData();
  formdata.append("userID", userID);
  useEffect(() => {
    var requestOptions = {
      method: "POST",
      headers: getDataHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch(process.env.NEXT_PUBLIC_USER_API_URL +`/beatnik_userDetails`, requestOptions)
      .then((response) => response.json())
      .then((responseJson) => {
 
        if (responseJson.valid === false) {
          setMessage("data not found.");
        } else {
          setDefaboutMe(responseJson.result.data[0].aboutMe);
          setStateid(responseJson.result.data[0].city);
          setCountryid(responseJson.result.data[0].country);
          setDefgender(responseJson.result.data[0].gender);
          setDefname(responseJson.result.data[0].name);
          setDefEmail(responseJson.result.data[0].email);
          setDefPhone(responseJson.result.data[0].phoneNumber);
          setSelectedDate(responseJson.result.data[0].dob);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

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
    <div>
      <div className={styles.div_scroll}>
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
          initialValues={{}}
          validationSchema={Yup.object().shape({})}
          onSubmit={async (values, { setSubmitting }) => {
            const result = accountDetails(values, null, 2);
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
            <form onSubmit={handleSubmit} autoComplete="off">
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <div className="form-outline">
                    <TextField
                      required
                      id="name"
                      type="text"
                      className={classes.inputField}
                      label="Full Name"
                      variant="filled"
                      onChange={(e) => setDefname(e.target.value)}
                      value={defName}
                      name="defName"
                      size="small"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-outline">
                    <TextField
                      required
                      id="defEmail"
                      type="text"
                      className={classes.inputField}
                      label="Email Address"
                      variant="filled"
                      onChange={(e) => setDefEmail(e.target.value)}
                      value={defEmail}
                      name="defEmail"
                      size="small"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div
                    className="form-outline"
                    style={{ position: "relative" }}
                  >
                    <InputLabel className={classes.inputFieldDOBLabel}>
                      {" "}
                      Date of Birth
                    </InputLabel>
                    <TextField
                      required
                      className={classes.inputFieldDOB}
                      id="filled-basic"
                      variant="filled"
                      margin="normal"
                      type="date"
                      format="dd/mm/yyyy"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-outline">
                    <TextField
                      required
                      id="defPhone"
                      type="text"
                      className={classes.inputField}
                      label="Phone Numbaer"
                      variant="filled"
                      onChange={(e) => setDefPhone(e.target.value)}
                      value={defPhone}
                      name="defPhone"
                      size="small"
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl variant="filled" className={classes.formControl}>
                    <TextField
                      required
                      select
                      label="Select Gender"
                      id="country"
                      name="defcountry"
                      size="small"
                      variant="filled"
                      className={classes.inputField}
                      onChange={(e) => setDefgender(e.target.value)}
                      value={defgender}
                    >
                      {selectGender.map((option, index) => (
                        <MenuItem key={index} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl variant="filled" className={classes.formControl}>
                    <TextField
                      required
                      select
                      id="country"
                      label="Select Country"
                      name="defcountry"
                      size="small"
                      variant="filled"
                      className={classes.inputField}
                      onChange={(e) => handlecounty(e)}
                      value={countryid}
                    >
                      {countrydata.map((option, index) => (
                        <MenuItem key={index} value={option.country_id}>
                          {option.country_name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>
                {/* <Grid item xs={6}>
                  <FormControl variant="filled" className={classes.formControl}>
                    <TextField
                      required
                      select
                      id="country"
                      label="Select City"
                      name="defcountry"
                      size="small"
                      variant="filled"
                      className={classes.inputField}
                      onChange={(e) => handlestate(e)}
                      value={stateid}
                    >
                      {state.map((option, index) => (
                        <MenuItem key={index} value={option.state_id}>
                          {option.state_name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid> */}
                <Grid item xs={12}>
                  <div className="form-outline">
                    <TextField
                      required
                      id="defaboutMe"
                  
                      type="text"
                      className={classes.inputField}
                      label="About Me"
                      multiline
                      rows={4}
                      variant="filled"
                      onChange={(e) => setDefaboutMe(e.target.value)}
                      value={defaboutMe}
                      name="defaboutMe"
                      size="small"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className={styles.btnContainer}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.createAcc}
                    >
                      Save Change
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.createAcc2}
                      onClick={resetPass}
                    >
                      Reset Password
                    </Button>
                      <Backdrop
                  className={classes.backdrop}
                  open={open}
                  onClick={accountDetails}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                  </div>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default UserForm;

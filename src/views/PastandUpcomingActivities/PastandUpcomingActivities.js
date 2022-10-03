import React, { useState } from "react";
import styles from "./OrgScreenTwo.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import DropFileInput from "./components/drop-file-input";
import Link from "next/link";
import DateFnsUtils from "@date-io/date-fns";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import awardIcon from "../../../public/assets/Images/common/awardIcon.svg";
import GalleryIcon from "../../../public/assets/Images/common/GalleryIcon.svg";
import PastandUpcomingIcon from "../../../public/assets/Images/common/PastandUpcomingIcon.svg";
import socialLink from "../../../public/assets/Images/common/socialLink.svg";
import MetaTitle from "components/helper/MetaTitle";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik } from "formik";
import * as Yup from "yup";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height:'auto',
  },
  inputField: {
    width: "100%",
    border: " 2px solid #888888 !important",
    borderBottom: "2px solid #888888 !important",
    borderRadius: "30px",
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
    "& label ": {
      fontSize: ".8rem !important",
    },
    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
      transform: "translate(36px, -8px) scale(0.75)",
      background: "#fff",
      padding: "0 10px",
    },

    "& .MuiFilledInput-root": {
      backgroundColor: " #fff",
      borderRadius: "30px",
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
  accordionTop: {
    marginTop: "40px",
    marginBottom: "15px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1) !important",
    "&:before": {
      backgroundColor: "transparent !important",
    },
  },
  MuiInputBaseInput: {
    border: "2px solid #3d9237",
  },
  formControl: {
    width: "100%",
    "& label": {
      fontSize: ".8em",
    },
    "& .MuiFilledInput-underline": {
      "&:before": {
        display: "none",
      },
      "&:after": {
        display: "none",
      },

      transition: "none",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(20px, 15px) scale(1)",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "#fff",
    },

    "& .MuiInputLabel-filled.MuiInputLabel-shrink": {
      transform: "translate(37px, -8px) scale(1)",
      background: "#fff",
      padding: "0px 5px",
    },
  },
  inputFieldDOB: {
    position: "relative",
    width: "100%",
    margin: 0,
    borderRadius: "30px",
    border: "2px solid #ffaf00",
    background: "#fff",
    padding: "0 10px",

    "& label": {
      background: "#fff",
      borderRadius: "30px",
      position: "absolute",
      top: "-15px",
      padding: "7px",
      left: "30px",
      width: "60px",
    },
    "& input ": {
      padding: "10px 15px 13px 28px !important",
    },
    "& .MuiInput-formControl": {
      marginTop: "3px",
    },
  },
  genderGroupLabel: {
    "& .MuiSvgIcon-root": {
      fill: "#000 !important",
    },
  },
  accordionTopTb: {
    marginBottom: "15px",
    width: "100%",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1) !important",
    "&:before": {
      backgroundColor: "transparent !important",
    },
  },
  saveDataBtn: {
    background: "#ffa900",
    borderRadius: "30px",
    padding: "9px 30px",
    color: "#fff",
    margin: "0 10px ",
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px ",
    "&:hover ": {
      background: "#ffa900",
    },
    '@media (max-width: 958px)': {
      marginBottom: '8px',
      fontSize: '10px',
      fontWeight: "300",
      lineHeight: "15px ",
    }
  },
  btnAddDes: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "27px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: " 0.02em",
    color: "#FAA61A",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    transition: "all 0.3s ease 0s",
    cursor: "pointe",
    borderRadius: "20px",
    padding: "12px 35px",
    display: "inline-block",
    marginBottom: "30px",
    '@media (max-width: 600px)': {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
    }
  },
}));
function PastandUpcomingActivities() {
  const router = useRouter();
  const classes = useStyles();
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const userID = Cookies.get("id");
  const newAr = [];
  const activiteTemplate = {
    title: "",
    date: "",
    socialLink: "",
    description: "",
  };
  const [activities, setActivities] = useState([activiteTemplate]);

  const handleAddUserRemove = (index) => {
    const list = [...socials];
    list.splice(index, 1);
    setSocials(list);
  };
  const handleActivitiesRemove = (index) => {
    const list = [...activities];
    list.splice(index, 1);
    setActivities(list);
  };
  const handleAwardsRemove = (index) => {
    const list = [...awards];
    list.splice(index, 1);
    setAwards(list);
  };

  const addActivite = () => {
    setActivities([...activities, activiteTemplate]);
  };
  const changeActivitiesHadler = (e, index) => {
    const updatedActivities = activities.map((activite, i) =>
      index == i
        ? Object.assign(activite, { [e.target.name]: e.target.value })
        : activite
    );
    setActivities(updatedActivities);
  };
  // Other Work end
  const awardsTemplate = {
    title: "",
    organization: "",
    link: "",
    description: "",
  };
  const [awards, setAwards] = useState([awardsTemplate]);
  const addAwards = () => {
    setAwards([...awards, awardsTemplate]);
  };
  const changeAwardsHadler = (e, index) => {
    const updatedAwardsHadler = awards.map((award, i) =>
      index == i
        ? Object.assign(award, { [e.target.name]: e.target.value })
        : award
    );
    setAwards(updatedAwardsHadler);
  };

  const socialTemplate = { choosePlatform: "", link: "" };
  const [socials, setSocials] = useState([socialTemplate]);
  const addUser = () => {
    setSocials([...socials, socialTemplate]);
  };
  const changeSocialLink = (e, index) => {
    const updatedSocials = socials.map((social, i) =>
      index == i
        ? Object.assign(social, { [e.target.name]: e.target.value })
        : social
    );
    setSocials(updatedSocials);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onFileChange = (files) => {
    {
      files.map((file, index) =>
        toBase64(files[index]).then((data) => {
          // setImage64(data)
          newAr[index] = data;
          console.log(newAr);
        })
      );
    }
  };

  // Awards end
  const DataPost = (text) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=1509133b00c67872c56e4fbae766db2772b25852"
    );

    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("training", JSON.stringify(activities));
    formdata.append("awards", JSON.stringify(awards));
    formdata.append("socialLink", JSON.stringify(socials));
    formdata.append("gallery", JSON.stringify(newAr));
    formdata.append("action", "screenTwo");
    formdata.append("add_flag", text);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_portfolio_org_add_edit`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.valid);
        if (responseJson.valid == false) {
          setMessage(responseJson.result.message);
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          return router.push({
            pathname: "/orginization-portfolio",
          });
        }
      })
      .catch((error) => console.log("error", error));
  };
  // For Snakes Bar
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
    <div className={classes.root}>
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
      <MetaTitle
        title={`Artist Portfolio | Beatnik`}
        metaKeyWord="Artist Portfolio | Beatnik"
        metaDescription="Artist Portfolio | Beatnik"
      />
      <Container>
        <Formik
          initialValues={{}}
          validationSchema={Yup.object().shape({})}
          onSubmit={async (values, { setSubmitting }) => {
            const result = DataPost(values, null, 2);
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
            <form onSubmit={handleSubmit} id="my-form" autocomplete="off">
              <div className={styles.artistSam}>
                <Grid container>
                <Grid item md={12} xs={12}>
                  <div className={styles.titleContainer}>
                    <div className={styles.titleCon}>
                      <Link href="/art-space-portfolio">
                        <p>
                          <KeyboardBackspaceIcon /> <span>Go Back</span>
                        </p>
                      </Link>
                    </div>
                    <div className={styles.formButton}>
                      <Button
                        className={classes.saveDataBtn}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                      // onClick={() => DataPost("draft")}
                      >
                        Save as Draft
                      </Button>

                      <Button
                        className={classes.saveDataBtn}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                      // onClick={() => DataPost("save")}
                      >
                        Preview & Publish
                      </Button>
                    </div>
                  </div>
                </Grid>
                </Grid>
                <Accordion className={classes.accordionTop}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={styles.titleCon}>
                      <span
                        className={styles.span_design}
                        style={{ width: "100%", display: "flex" }}
                      >
                        <img src={PastandUpcomingIcon} alt="" /> Past and
                        Upcoming Activities{" "}
                        <span className={styles.optional}>
                          {" "}
                          &nbsp;(optional)
                        </span>
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      spacing={4}
                      style={{ marginBottom: "20px" }}
                    >
                      {activities.map((user, index) => (
                        <>
                          <Grid item md={6} xs={12}>
                            <TextField required
                              type="text"
                              className={classes.inputField}
                              label="Title"
                              variant="filled"
                              id="title"
                              name="title"
                              onChange={(e) => changeActivitiesHadler(e, index)}
                              size="small"
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <TextField
                              id="Date"
                              name="date"
                              type="text"
                              className={classes.inputField}
                              label="Year (YYYY)"
                              variant="filled"
                              onChange={(e) => changeActivitiesHadler(e, index)}
                              size="small"
                              placeholder="Year"
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <TextField required
                              type="text"
                              className={classes.inputField}
                              label="Social Link"
                              variant="filled"
                              id="socialLink"
                              name="socialLink"
                              onChange={(e) => changeActivitiesHadler(e, index)}
                              size="small"
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <TextField required
                              id="descriptionTextarea1"
                              type="text"
                              className={classes.inputField}
                              label="Description"
                              placeholder="Minimum 50 words."
                              variant="filled"
                              name="description"
                              size="small"
                            />
                          </Grid>
                          <Grid item xs={12} style={{ textAlign: "center" }}>
                            {activities.length - 1 === index &&
                              activities.length < 4 && (
                                <Button
                                  type="button"
                                  className={classes.btnAddDes}
                                  onClick={addActivite}
                                >
                                  + Add 1 More
                                </Button>
                              )}
                            &nbsp;&nbsp;&nbsp;
                            {activities.length !== 1 && (
                              <Button
                                type="button"
                                onClick={() => handleActivitiesRemove(index)}
                                className={classes.btnAddDes}
                              >
                                <span>Remove</span>
                              </Button>
                            )}
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordionTopTb}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={styles.titleCon}>
                      <span
                        className={styles.span_design}
                        style={{ width: "100%", display: "flex" }}
                      >
                        <img src={awardIcon} alt="" /> Awards and Press mentions{" "}
                        <span className={styles.optional}>
                          {" "}
                          &nbsp;(optional)
                        </span>
                      </span>
                    </div>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Grid container spacing={4}>
                      {awards.map((user, index) => (
                        <>
                          <Grid item md={6} xs={12}>
                            <TextField required
                              id="title"
                              name="title"
                              type="text"
                              className={classes.inputField}
                              label="Title"
                              variant="filled"
                              onChange={(e) => changeAwardsHadler(e, index)}
                              size="small"
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <TextField required
                              id="organization"
                              name="organization"
                              type="text"
                              className={classes.inputField}
                              label="Organization"
                              variant="filled"
                              onChange={(e) => changeAwardsHadler(e, index)}
                              size="small"
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <TextField
                              id="Year"
                              name="year"
                              type="text"
                              className={classes.inputField}
                              label="Year (YYYY)"
                              variant="filled"
                              onChange={(e) => changeAwardsHadler(e, index)}
                              size="small"
                              placeholder="Year"
                            />
                          </Grid>

                          <Grid item md={6} xs={12}>
                            <TextField required
                              id="link"
                              name="link"
                              onChange={(e) => changeAwardsHadler(e, index)}
                              type="text"
                              className={classes.inputField}
                              label="link"
                              variant="filled"
                              size="small"
                            />
                          </Grid>

                          <Grid item md={12} xs={12}>
                            <TextField required
                              id="descriptionTextarea1"
                              type="text"
                              className={classes.inputField}
                              label="Description"
                              placeholder="Minimum 50 words."
                              multiline
                              rows={3}
                              onChange={(e) => changeAwardsHadler(e, index)}
                              variant="filled"
                              name="description"
                              size="small"
                            />
                          </Grid>
                          <Grid item xs={12} style={{ textAlign: "center" }}>
                            {awards.length - 1 === index && awards.length < 4 && (
                              <Button
                                type="button"
                                className={classes.btnAddDes}
                                onClick={addAwards}
                              >
                                + Add 1 More
                              </Button>
                            )}
                            &nbsp;&nbsp;&nbsp;
                            {awards.length !== 1 && (
                              <Button
                                type="button"
                                onClick={() => handleAwardsRemove(index)}
                                className={classes.btnAddDes}
                              >
                                <span>Remove</span>
                              </Button>
                            )}
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordionTopTb}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={styles.titleCon}>
                      <span
                        className={styles.span_design}
                        style={{ width: "100%", display: "flex" }}
                      >
                        <img src={socialLink} alt="" /> Social Link{" "}
                        <span className={styles.optional}>
                          {" "}
                          &nbsp;(optional)
                        </span>
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={4}>
                      {socials.map((user, index) => (
                        <>
                          <Grid item md={4} xs={12}>
                            <FormControl
                              variant="filled"
                              className={classes.formControl}
                            >
                              <InputLabel>Choose Platform</InputLabel>
                              <Select
                                required
                                id="useType"
                                label="User Type"
                                name="choosePlatform"
                                size="small"
                                variant="filled"
                                onChange={(e) => changeSocialLink(e, index)}
                                className={classes.inputField}
                              >
                                <MenuItem value="Facebook">Facebook</MenuItem>
                                <MenuItem value="Instagram">Instagram</MenuItem>
                                <MenuItem value="Twitter">Twitter</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item md={8} xs={12}>
                            <TextField required
                              id="name"
                              type="text"
                              className={classes.inputField}
                              label="Paste the link"
                              variant="filled"
                              onChange={(e) => changeSocialLink(e, index)}
                              name="link"
                              size="small"
                            />
                          </Grid>
                          <Grid item xs={12} style={{ textAlign: "center" }}>
                            {socials.length - 1 === index &&
                              socials.length < 3 && (
                                <Button
                                  type="button"
                                  className={classes.btnAddDes}
                                  onClick={addUser}
                                >
                                  + Add 1 More
                                </Button>
                              )}
                            &nbsp;&nbsp;&nbsp;
                            {socials.length !== 1 && (
                              <Button
                                type="button"
                                onClick={() => handleAddUserRemove(index)}
                                className={classes.btnAddDes}
                              >
                                <span>Remove</span>
                              </Button>
                            )}
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className={classes.accordionTopTb}
                  style={{ marginBottom: "150px" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={styles.titleCon}>
                      <span
                        className={styles.span_design}
                        style={{ width: "100%", display: "flex" }}
                      >
                        <img src={GalleryIcon} alt="" /> Gallery{" "}
                        <span className={styles.optional}>
                          {" "}
                          &nbsp;(optional)
                        </span>
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className={styles.fleft}
                      style={{ background: "rgba(229, 229, 229, 0.51)" }}
                    >
                      <DropFileInput
                        onFileChange={(files) => onFileChange(files)}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default PastandUpcomingActivities;
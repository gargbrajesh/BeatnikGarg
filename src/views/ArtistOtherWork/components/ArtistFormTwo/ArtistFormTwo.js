import React, { useState, useEffect } from "react";
import styles from "./../../design.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import DropFileInput from "./../DropFileInput/DropFileInput";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Spinner from "components/organisms/Spinner";
import Link from "next/link";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import trainingIcon from "../../../../../public/assets/Images/common/trainingIcon.svg";
import awardIcon from "../../../../../public/assets/Images/common/awardIcon.svg";
import otherWorkIcon from "../../../../../public/assets/Images/common/otherWorkIcon.svg";
import GalleryIcon from "../../../../../public/assets/Images/common/GalleryIcon.svg";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik } from "formik";
import * as Yup from "yup";
import AWS from "aws-sdk";
import { faHouseFloodWaterCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
const S3_BUCKET = "projectblinkit";
const REGION = "ap-south-1";
AWS.config.update({
  accessKeyId: "AKIAXF3QKKS4WJFRTDXM",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
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
  MuiInputBaseInput: {
    border: "2px solid #3d9237",
  },
  formControl: {
    width: "100%",
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
    // borderBottom: "1px solid",
    "& label": {
      background: "#fff",
      borderRadius: "30px",
      position: "absolute",
      top: "-15px",
      padding: "7px",
      left: "30px",
      width: "116px",
    },
    "& input ": {
      padding: "10px 12px 13px 28px !important",
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
  accordionTop: {
    marginTop: "40px",
    marginBottom: "15px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1) !important",
    "&:before": {
      backgroundColor: "transparent !important",
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
  label: {
    background: "#fff",
    borderRadius: "30px",
    position: "absolute",
    top: "130px",
    padding: "8px 0px",
    left: "60px",
    width: "50px",
    zIndex: "99",
  },
  btnBottomG: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "20px 0",
    "& p": {
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "16px",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.02em",
      color: "#000000",
      margin: "30px 0",
    },
  },
}));

function ArtistFormTwo() {
  const router = useRouter();
  const classes = useStyles();
  const [image64, setImage64] = useState([]);
  // let image64 =[];
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  // Other Work state manage here
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const otherWorkTemplate = { title: "", link: "", description: "" };
  const [otherWorks, setOtherWorks] = useState([otherWorkTemplate]);
  const [open, setOpen] = useState(true);

  const handleOtherWorkRemove = (index) => {
    const list = [...otherWorks];
    list.splice(index, 1);
    setOtherWorks(list);
  };

  const handleTrainingsRemove = (index) => {
    const list = [...trainings];
    list.splice(index, 1);
    setTrainging(list);
  };

  const handleAwardsRemove = (index) => {
    const list = [...awards];
    list.splice(index, 1);
    setAwards(list);
  };

  const addOtherWork = () => {
    setOtherWorks([...otherWorks, otherWorkTemplate]);
  };

  const onFileChange = (files, index) => {
    // {
    //   files.map((file, index) =>
    //     toBase64(files[index]).then((data) => {
    //       image64[index] = data;
    //     })
    //   );
    // }
    const params = {
      ACL: "public-read",
      Body: files[0],
      Bucket: S3_BUCKET,
      Key: files[0].name,
    };
    myBucket.upload(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      }
      if (data) {

        setImage64([...image64, data.Location]);
      }
    });
  };
  const changeOtherWorkHadler = (e, index) => {
    const updatedOtherWork = otherWorks.map((otherWork, i) =>
      index == i
        ? Object.assign(otherWork, { [e.target.name]: e.target.value })
        : otherWork
    );
    setOtherWorks(updatedOtherWork);
  };
  // Other Work end

  // taining state manage here
  const trainingTemplate = {
    courseTitle: "",
    Institution: "",
    year: "",
    City: "",
  };
  const [trainings, setTrainging] = useState([trainingTemplate]);
  const addTrainingHadler = () => {
    setTrainging([...trainings, trainingTemplate]);
  };
  const changeTrainingHadler = (e, index) => {
    const updatedTraining = trainings.map((training, i) =>
      index == i
        ? Object.assign(training, { [e.target.name]: e.target.value })
        : training
    );
    setTrainging(updatedTraining);
  };
  // taining end

  // Awards state manage here
  const awardsTemplate = {
    title: "",
    organization: "",
    link: "",
    description: "",
    year: "",
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

  // Awards end

  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "ci_session=5e67c7e4bbcc1408e5c3f99d3c75854c689a0dcc"
  );
  const userID = Cookies.get("id");

  const DataPost = (save) => {
    setOpen(!open);
    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("training", JSON.stringify(trainings));
    formdata.append("awards", JSON.stringify(awards));
    formdata.append("gallery", JSON.stringify(image64));
    formdata.append("otherWork", JSON.stringify(otherWorks));
    formdata.append("action", "screenTwo");
    formdata.append("add_flag", "save");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL +
      `/beatnik_portfolio_artist_add_edit`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setOpen(false);
        if (responseJson.valid == false) {
          setMessageTrue(responseJson.result.message);
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          return router.push({
            pathname: "/view-portfolios",
          });
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

      {loading ? (
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
                          <Link href="/artist-portfolio" className={styles.spanDesignTitle}>
                            <p>
                              <KeyboardBackspaceIcon /> Go Back
                            </p>
                          </Link>
                        </div>
                        <div className={styles.formButton}>
                          <Button
                            className={classes.saveDataBtn}
                            // onClick={() => DataPost("draft")}
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Save as Draft
                          </Button>
                          <Button
                            className={classes.saveDataBtn}
                            // onClick={() => DataPost("save")}
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Preview & Publish
                          </Button>
                          <Backdrop
                            className={classes.backdrop}
                            open={open}
                            onClick={DataPost}
                          >
                            <CircularProgress color="inherit" />
                          </Backdrop>
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
                          <img src={otherWorkIcon} alt="" /> Other Work{" "}
                          <span className={styles.optional}>
                            {" "}
                            &nbsp;(optional)
                          </span>
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={4}>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                          {otherWorks.map((user, index) => (
                            <Grid
                              container
                              item
                              spacing={3}
                              style={{ marginBottom: "20px" }}
                              key={index}
                            >
                              <Grid item md={6} xs={12}>
                                <TextField
                                  id="title"
                                  type="text"
                                  className={classes.inputField}
                                  label="Title"
                                  variant="filled"
                                  onChange={(e) =>
                                    changeOtherWorkHadler(e, index)
                                  }
                                  name="title"
                                  size="small"
                                />
                              </Grid>
                              <Grid item md={6} xs={12}>
                                <TextField
                                  id="link"
                                  type="text"
                                  className={classes.inputField}
                                  label="Add link of your work"
                                  variant="filled"
                                  onChange={(e) =>
                                    changeOtherWorkHadler(e, index)
                                  }
                                  name="link"
                                  size="small"
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  id="descriptionTextarea1"
                                  type="text"
                                  className={classes.inputField}
                                  label="Description"
                                  placeholder="Minimum 50 words."
                                  multiline
                                  rows={3}
                                  variant="filled"
                                  onChange={(e) =>
                                    changeOtherWorkHadler(e, index)
                                  }
                                  name="description"
                                  size="small"
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                style={{ textAlign: "center" }}
                              >
                                {otherWorks.length - 1 === index &&
                                  otherWorks.length < 4 && (
                                    <Button
                                      type="button"
                                      className={classes.btnAddDes}
                                      onClick={addOtherWork}
                                    >
                                      + Add 1 More
                                    </Button>
                                  )}
                                &nbsp;&nbsp;&nbsp;
                                {otherWorks.length !== 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => handleOtherWorkRemove(index)}
                                    className={classes.btnAddDes}
                                  >
                                    <span>Remove</span>
                                  </Button>
                                )}
                              </Grid>
                            </Grid>
                          ))}
                        </Grid>
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
                          <img src={trainingIcon} alt="" /> Education and
                          Trainings{" "}
                          <span className={styles.optional}>
                            {" "}
                            &nbsp;(optional)
                          </span>
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={4}>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                          {trainings.map((user, index) => (
                            <Grid
                              container
                              spacing={3}
                              style={{ marginBottom: "20px" }}
                              key={index}
                            >
                              <Grid item md={6} xs={12}>
                                <TextField
                                  id="courseTitle"
                                  name="courseTitle"
                                  type="text"
                                  className={classes.inputField}
                                  label="Course Title"
                                  variant="filled"
                                  onChange={(e) =>
                                    changeTrainingHadler(e, index)
                                  }
                                  size="small"
                                />
                              </Grid>
                              <Grid item md={6} xs={12}>
                                <TextField
                                  id="Institution"
                                  name="Institution"
                                  type="text"
                                  className={classes.inputField}
                                  label="Institution"
                                  variant="filled"
                                  onChange={(e) =>
                                    changeTrainingHadler(e, index)
                                  }
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
                                  onChange={(e) =>
                                    changeTrainingHadler(e, index)
                                  }
                                  size="small"
                                  placeholder="Year"
                                />
                              </Grid>

                              <Grid item md={6} xs={12}>
                                <FormControl
                                  variant="filled"
                                  className={classes.formControl}
                                >
                                  <InputLabel>Select City</InputLabel>
                                  <Select
                                    id="city"
                                    name="City"
                                    size="small"
                                    variant="filled"
                                    className={classes.inputField}
                                    onChange={(e) =>
                                      changeTrainingHadler(e, index)
                                    }
                                  >
                                    <MenuItem value="Delhi">Delhi</MenuItem>
                                    <MenuItem value="Noida">Noida</MenuItem>
                                    <MenuItem value="Goa">Goa</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                style={{ textAlign: "center" }}
                              >
                                {trainings.length - 1 === index &&
                                  trainings.length < 4 && (
                                    <Button
                                      type="button"
                                      className={classes.btnAddDes}
                                      onClick={addTrainingHadler}
                                    >
                                      + Add 1 More
                                    </Button>
                                  )}
                                &nbsp;&nbsp;&nbsp;
                                {trainings.length !== 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => handleTrainingsRemove(index)}
                                    className={classes.btnAddDes}
                                  >
                                    <span>Remove</span>
                                  </Button>
                                )}
                              </Grid>
                            </Grid>
                          ))}
                        </Grid>
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
                          <img src={awardIcon} alt="" /> Awards and Press
                          mentions{" "}
                          <span className={styles.optional}>
                            {" "}
                            &nbsp;(optional)
                          </span>
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={4}>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                          {awards.map((user, index) => (
                            <Grid
                              container
                              spacing={3}
                              style={{ marginBottom: "20px" }}
                              key={index}
                            >
                              <Grid item md={6} xs={12}>
                                <TextField
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
                                <TextField
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
                                <TextField
                                  type="text"
                                  className={classes.inputField}
                                  label="Add Social Link"
                                  variant="filled"
                                  id="link"
                                  name="link"
                                  onChange={(e) => changeAwardsHadler(e, index)}
                                  size="small"
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  name="description"
                                  id="descriptionTextarea1"
                                  type="text"
                                  className={classes.inputField}
                                  label="Description"
                                  placeholder="Minimum 50 words."
                                  multiline
                                  rows={4}
                                  variant="filled"
                                  onChange={(e) =>
                                    changeAwardsHadler(e.target.value)
                                  }
                                  size="small"
                                />
                              </Grid>

                              <Grid
                                item
                                xs={12}
                                style={{ textAlign: "center" }}
                              >
                                {awards.length - 1 === index &&
                                  awards.length < 4 && (
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
                            </Grid>
                          ))}
                        </Grid>
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
                        style={{
                          background: "#ccc",
                          position: "relative",
                        }}
                      >
                        <DropFileInput
                          onFileChange={(files, index) => onFileChange(files, index)}
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <div
                    className="row  d-flex justify-content-center"

                  >
                    <div className={classes.btnBottomG}>
                      <Grid item md={4} xs={5}>
                        <Button
                          className={classes.saveDataBtn}
                          onClick={() => DataPost("draft")}
                        >
                          Save as draft
                        </Button>
                      </Grid>
                      <Grid item md={4} xs={7}>
                        <Button
                          className={classes.saveDataBtn}
                          onClick={() => DataPost("save")}
                        >
                          Preview and Publish
                        </Button>
                      </Grid>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </Container>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
}

export default ArtistFormTwo;

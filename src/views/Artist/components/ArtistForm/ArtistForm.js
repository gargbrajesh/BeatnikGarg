import React, { useState,useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import MetaTitle from "components/helper/MetaTitle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import styles from "./../../design.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import BasicInfo from "../../../../../public/assets/Images/common/BasicInfoIcon.svg";
import artWorkIcon from "../../../../../public/assets/Images/common/artWorkIcon.svg";
import socialLink from "../../../../../public/assets/Images/common/socialLink.svg";
import MuiAlert from "@material-ui/lab/Alert";
import countrydata from "../../../../../src/Countrydata.json";
import selectArtForm from "../../../../../src/selectArtForm.json";
import selectTags from "./selectTags.json";
import selectPersona from "./selectPersona.json";
import selectOtherArtForm from "./selectOtherArtForm.json";
import selectLanguage from "./selectLanguage.json";
import selectSocialMedia from "./selectSocialMedia.json";
import DropFileInput from "./../DropFileInput/DropFileInput";
import AWS from "aws-sdk";
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
  backdrop: {
    zIndex: "9999999",
    color: "#fff",
  },
  inputField: {
    width: "100%",
    border: " 1px solid #888888 !important",
    borderBottom: "1px solid #888888 !important",
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
      overflow: 'hidden',
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
  accordionTopTb: {
    marginBottom: "15px",
    width: "100%",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1) !important",
    "&:before": {
      backgroundColor: "transparent !important",
    },
  },
  MuiInputBaseInput: {
    border: "2px solid #888888",
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
  formControl: {
    width: "100%",
    "& label ": {
      fontSize: ".8rem !important",
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
    border: "1px solid #888888",
    borderBottom: "1px solid #888888",
    background: "#fff",
    padding: "0 10px",
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
      top: "-15px",
      padding: "7px",
      left: "30px",
      width: "116px",
      fontSize: ".8rem !important",
    },
    "& input ": {
      padding: "10px 12px 13px 28px !important",
      background: "#fff",
      borderRadius:'6px',
    },
    "& .MuiInput-formControl": {
      marginTop: "3px",
    },
  },
  genderGroupLabel: {
    "& .MuiSvgIcon-root": {
      fill: "#000 !important",
      "& path": {
        fill: "red",
      },
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
    '@media (max-width: 600px)': {
      marginBottom:'8px',
      fontSize:'10px',
      padding: "9px 18px",
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
      fontSize: "16px",
      lineHeight: "22px",
      padding: "10px 25px",
    }
  },
  typo_design: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "50px",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    color: "#000000",
    '@media (max-width: 958px)': {
      fontSize: "16px",
      lineHeight: "22px",
    }
  },
  bottomContainer: {
    justifyContent: "center",
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
      '@media (max-width: 600px)': {
        margin: "18px 0",
      }
    },
  },
  inputFieldDOBLabel: {
    background: "#fff",
    borderRadius: "30px",
    position: "absolute",
    top: "9px",
    padding: "0px 6px",
    left: "45px",
    width: "105px",
    fontSize: "16px",
    color: "#000",
    zIndex: "99",
  },
  radio: {
    position: "relative",
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "#FAA61A !important",
    },
  },
  paraText:{
    padding:'0px 20px',
  }
}));
const ArtistForm = (props) => {
  const setPastedURL = props.setPastedURL;
  const classes = useStyles();
  const router = useRouter();
  const [name, setName] = useState();
  const [selectedDate, setSelectedDate] = useState("");
  const [engagement, setEngagement] = useState();
  const [aboutMe, setAboutMe] = useState();
  const [persona, setPersona] = useState();
  const [language, setLanguage] = useState("");
  const [tags, setTags] = useState([]);
  const [otherArtForm, setOtherArtForm] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState("");
  const [gender, setGender] = useState("");
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [orgImage, setOrgImage] = useState([]);
  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");
  const [specilization, setSpecilization] = useState([]);
  const [specilizationId, setSpecilizationId] = useState("");
  const [specilizationIdArtForm, setSpecilizationIdArtForm] = useState("");
  const [open, setOpen] = useState(false);
  // To upload image on s3

  const handleServiceRemove = (index) => {
    const list = [...socials];
    list.splice(index, 1);
    setSocials(list);
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
  const handlestate = (e) => {
    const stateid = e.target.value;
    setStateid(stateid);
  };
  // Country and State code end here
  // Handle ArtForm and there Specilization code start here by brajesh
  const handleArtForm = (e) => {
    const getArtFormId = e.target.value;
    const specilizationData = selectArtForm.find(
      (artForm) => artForm.artID === getArtFormId
    ).specilizationList;
    setSpecilization(specilizationData);
    setSpecilizationId(getArtFormId);
  };
  const handleSpecilization = (e) => {
    const specilizationIdArtForm = e.target.value;
    setSpecilizationIdArtForm(specilizationIdArtForm);
  };
  // Country and State code end here
  const userID = Cookies.get("id");
  const handleServiceRemoveworkDetails = (index) => {
    const list = [...workDetails];
    list.splice(index, 1);
    setWorkDetails(list);
  };
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "ci_session=ace8339c674e65c00c2f5732d2a0749bca2a9e43"
  );
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeEngagement = (event) => {
    setEngagement(event.target.value);
  };
  let workDetailTemplate = {
    title: "",
    event: "",
    venue: "",
    artForm: "",
    year: "",
    collaborators: "",
    social_link: "",
    description: "",
    image: orgImage,
  };
  const [workDetails, setWorkDetails] = useState([workDetailTemplate]);
  const addWorkDetails = () => {
    setWorkDetails([...workDetails, workDetailTemplate]);
  };
  const changeWorkDetails = (e, index) => {
    const updatedWorkDetails = workDetails.map((workDetail, i) =>
      index === i
        ? Object.assign(workDetail, { [e.target.name]: e.target.value })
        : workDetail
    );
    setWorkDetails(updatedWorkDetails);
  };
  const socialTemplate = { choosePlatform: "", link: "" };
  const [socials, setSocials] = useState([socialTemplate]);
  const addUser = () => {
    setSocials([...socials, socialTemplate]);
  };
  const changeSocialLink = (e, index) => {
    const updatedSocials = socials.map((social, i) =>
      index === i
        ? Object.assign(social, { [e.target.name]: e.target.value })
        : social
    );
    setSocials(updatedSocials);
  };
  // Base64 function code start here

  const [getAWSS3IMG, setAWSS3IMG] = useState();

  const onFileChange = (files) => {
    const params = {
      ACL: "public-read",
      Body: files[0],
      Bucket: S3_BUCKET,
      Key: files[0].name,
    };

    myBucket.upload(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      }
      if (data) {
        console.log("Sucess", data.Location);
        setAWSS3IMG(data.Location);
      }
    });
  };
  const onFileChangeWorkDetail = (files, index) => {
    const params = {
      ACL: "public-read",
      Body: files[0],
      Bucket: S3_BUCKET,
      Key: files[0].name,
    };

    myBucket.upload(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      }
      if (data) {
        console.log("Success", data.Location);
        workDetails.map(function(val, i) {
          if (index === i) {
            workDetails[index].image = data.Location;
          }
        });
      }
    });
  };
  // end here
  const saveAsDraft = (text) => {
    setOpen(!open);

    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("name", name);
    formdata.append("gender", gender);
    formdata.append("dob", selectedDate);
    formdata.append("currentWorkLocation", currentlyWorking);
    formdata.append("city", stateid);
    formdata.append("country", countryid);
    formdata.append("bio", aboutMe);
    formdata.append("art_form", specilizationId);
    formdata.append("persona", persona);
    formdata.append("specialization", specilizationIdArtForm);
    formdata.append("profile_media_one", getAWSS3IMG);
    formdata.append("tags", tags);
    formdata.append("language", language);
    formdata.append("other_art_form", otherArtForm);
    formdata.append("action", "screenOne");
    formdata.append("featured_art_work", JSON.stringify(workDetails));
    formdata.append("socialLink", JSON.stringify(socials));
    formdata.append("profile_media_two", JSON.stringify(orgImage));
    formdata.append("profile_media_three", "base 64");
    formdata.append("profile_media_one_type", "audio");
    formdata.append("profile_media_two_type", "video");
    formdata.append("profile_media_three_type", "image");
    formdata.append("age", selectedDate);
    formdata.append("engagement_type", engagement);
    formdata.append("profileFileBase64Data", "000");
    formdata.append("pastedURL", setPastedURL);
    formdata.append("add_flag", "draft");
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
        if (responseJson.valid === false) {
          setMessage(responseJson.result.message);
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          router.push({
            pathname: "/account",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const previewPublish = () => {
    setOpen(!open);
    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("name", name);
    formdata.append("gender", gender);
    formdata.append("dob", selectedDate);
    formdata.append("currentWorkLocation", currentlyWorking);
    formdata.append("city", stateid);
    formdata.append("country", countryid);
    formdata.append("bio", aboutMe);
    formdata.append("art_form", specilizationId);
    formdata.append("persona", persona);
    formdata.append("specialization", specilizationIdArtForm);
    formdata.append("profile_media_one", getAWSS3IMG);
    formdata.append("tags", tags);
    formdata.append("language", language);
    formdata.append("other_art_form", otherArtForm);
    formdata.append("add_flag", "save");
    formdata.append("action", "screenOne");
    formdata.append("featured_art_work", JSON.stringify(workDetails));
    formdata.append("socialLink", JSON.stringify(socials));
    formdata.append("profile_media_two", JSON.stringify(orgImage));
    formdata.append("profile_media_three", "base 64");
    formdata.append("profile_media_one_type", "audio");
    formdata.append("profile_media_two_type", "video");
    formdata.append("profile_media_three_type", "image");
    formdata.append("age", selectedDate);
    formdata.append("engagement_type", engagement);
    formdata.append("profileFileBase64Data", "ajdshkashdkahsd");
    formdata.append("pastedURL", setPastedURL);
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
        console.log("Response: ", responseJson);
        setOpen(false);
        if (responseJson.valid === false) {
          setMessage(responseJson.result.message);
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          router.push({
            pathname: "/preview-artist-portfolio",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const yesIWantToo = (text) => {
    setOpen(!open);
    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("name", name);
    formdata.append("gender", gender);
    formdata.append("dob", selectedDate);
    formdata.append("currentWorkLocation", currentlyWorking);
    formdata.append("city", stateid);
    formdata.append("country", countryid);
    formdata.append("bio", aboutMe);
    formdata.append("art_form", specilizationId);
    formdata.append("persona", persona);
    formdata.append("specialization", specilizationIdArtForm);
    formdata.append("profile_media_one", getAWSS3IMG);
    formdata.append("tags", tags);
    formdata.append("language", language);
    formdata.append("other_art_form", otherArtForm);
    formdata.append("add_flag", "save");
    formdata.append("action", "screenOne");
    formdata.append("featured_art_work", JSON.stringify(workDetails));
    formdata.append("socialLink", JSON.stringify(socials));
    formdata.append("profile_media_two", JSON.stringify(orgImage));
    formdata.append("profile_media_three", "base 64");
    formdata.append("profile_media_one_type", "audio");
    formdata.append("profile_media_two_type", "video");
    formdata.append("profile_media_three_type", "image");
    formdata.append("age", selectedDate);
    formdata.append("engagement_type", engagement);
    formdata.append("profileFileBase64Data", "ajdshkashdkahsd");
    formdata.append("pastedURL", setPastedURL);
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
        if (responseJson.valid === false) {
          setMessage(responseJson.result.message);
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          // xf();
          router.push({
            pathname: "/artist-other-work-portfolio",
          });
        }
      });
  };

  // end here
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
    // handleChangeHideShow();
  }, []);

  function xf(){
    const handleChangeHideShow = (event) => {
      var formdata = new FormData();
      formdata.append("userID", userID);
      formdata.append("action", 'show');
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
  
      fetch(
        process.env.NEXT_PUBLIC_USER_API_URL +`/beatnik_active_deactive_portfolio_by_id`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    };
  }
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
          initialValues={{ name: "", email: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            const result = previewPublish(values, null, 2);
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
                        <span className={styles.spanDesignTitle}>
                          Artist Portfolio
                        </span>
                      </div>
                      <div className={styles.formButton}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={isSubmitting}
                          className={classes.saveDataBtn}
                          onClick={saveAsDraft}
                        >
                          Save as Draft
                        </Button>

                        <Button
                          className={classes.saveDataBtn}
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
                          onClick={previewPublish}
                        >
                          <CircularProgress color="inherit" />
                        </Backdrop>
                        <Backdrop
                          className={classes.backdrop}
                          open={open}
                          onClick={saveAsDraft}
                        >
                          <CircularProgress color="inherit" />
                        </Backdrop>
                      </div>
                    </div>
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
                          <img src={BasicInfo} alt="Basic Info" /> Basic Details
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={4}>
                        <Grid item xs={12} md={6} style={{ marginTop: "50px" }}>
                          <div className={styles.uploadFileSec}>
                            <DropFileInput
                              onFileChange={(files) => onFileChange(files)}
                            />
                            {getAWSS3IMG ? (
                              <>
                                <div
                                  className="imgPreview "
                                 
                                >
                                  <img src={getAWSS3IMG} alt="Preview Img" width={60} height={60}/>
                                </div>
                              </>
                            ) : null}
                          </div>
                        </Grid>
                        <Grid item md={6} style={{ marginTop: "50px" }}>
                          <div className={styles.formDataCon}>
                            <div className={styles.basicForm}>
                              <Grid
                                container
                                spacing={4}
                                className={styles.basicFormData}
                              >
                                <Grid item md={6} xs={12}>
                                  <TextField
                                    required
                                    id="name"
                                    type="text"
                                    className={classes.inputField}
                                    label="Name"
                                    variant="filled"
                                    onChange={(e) => setName(e.target.value)}
                                    name="name"
                                    size="small"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  md={6}
                                  xs={12}
                                  style={{ position: "relative" }}
                                >
                                  <InputLabel
                                    className={classes.inputFieldDOBLabel}
                                  >
                                    {" "}
                                    Date of Birth
                                  </InputLabel>
                                  <TextField
                                    required
                                    className={classes.inputFieldDOB}
                                    id="filled-basic"
                                    type="date"
                                    variant="filled"
                                    margin="normal"
                                    format="dd/mm/yyyy"
                                    onChange={(e) =>
                                      setSelectedDate(e.target.value)
                                    }
                                    KeyboardButtonProps={{
                                      "aria-label": "change date",
                                    }}
                                  />
                                </Grid>

                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select Country</InputLabel>
                                    <Select
                                      required
                                      id="country"
                                      name="country"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) => handlecounty(e)}
                                      value={countryid}
                                    >
                                      {countrydata.map((option, index) => (
                                        <MenuItem
                                          key={index}
                                          value={option.country_id}
                                        >
                                          {option.country_name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select State</InputLabel>
                                    <Select
                                      required
                                      id="city"
                                      name="city"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) => handlestate(e)}
                                      value={stateid}
                                    >
                                      {state.map((option, index) => (
                                        <MenuItem
                                          key={index}
                                          value={option.state_name}
                                        >
                                          {option.state_name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                  <FormControl
                                    component="fieldset"
                                    className={styles.genderGroup}
                                  >
                                    <FormLabel component="legend">
                                      Select Gender
                                    </FormLabel>
                                    <RadioGroup
                                      required
                                      className={styles.genderGroupLabel}
                                      aria-label="gender"
                                      name="gender1"
                                      value={gender}
                                      onChange={handleChangeGender}
                                    >
                                      <FormControlLabel
                                        className={classes.radio}
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                      />
                                      <FormControlLabel
                                        className={classes.radio}
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                      />
                                      <FormControlLabel
                                        className={classes.radio}
                                        value="other"
                                        control={<Radio />}
                                        label="Other"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                  <FormControl
                                    component="fieldset"
                                    className={styles.genderGroup}
                                  >
                                    <FormLabel component="legend">
                                      Engagement Type <small>(Optional)</small>
                                    </FormLabel>
                                    <RadioGroup
                                      className={styles.genderGroupLabel}
                                      aria-label="engagement"
                                      name="ngagement"
                                      value={engagement}
                                      onChange={handleChangeEngagement}
                                    >
                                      <FormControlLabel
                                        className={classes.radio}
                                        value="Full Time"
                                        control={<Radio />}
                                        label="Full Time"
                                      />
                                      <FormControlLabel
                                        className={classes.radio}
                                        value="Part Time"
                                        control={<Radio />}
                                        label="Part Time"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select Art Form</InputLabel>
                                    <Select
                                      required
                                      id="artForm"
                                      name="artForm"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) => handleArtForm(e)}
                                      value={specilizationId}
                                    >
                                      {selectArtForm.map((option, index) => (
                                        <MenuItem
                                          key={index}
                                          value={option.artID}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Specialization</InputLabel>
                                    <Select
                                      required
                                      id="specialization"
                                      name="specialization"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) => handleSpecilization(e)}
                                      value={specilizationIdArtForm}
                                    >
                                      {specilization.map((option, index) => (
                                        <MenuItem
                                          key={index}
                                          value={option.name}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select Tags</InputLabel>
                                    <Select
                                      required
                                      multiple
                                      id="tags"
                                      name="tags"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      value={tags}
                                      onChange={(e) => setTags(e.target.value)}
                                    >
                                      {selectTags.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select Persona</InputLabel>
                                    <Select
                                      required
                                      id="persona"
                                      name="persona"
                                      size="small"
                                      variant="filled"
                                      value={persona}
                                      onChange={(e) =>
                                        setPersona(e.target.value)
                                      }
                                      className={classes.inputField}
                                    >
                                      {selectPersona.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>
                                      Select Other Art form{" "}
                                      <small>(Optional)</small>
                                    </InputLabel>
                                    <Select
                                      id="otherArtForm"
                                      name="otherArtForm"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      value={otherArtForm}
                                      onChange={(e) =>
                                        setOtherArtForm(e.target.value)
                                      }
                                    >
                                      {selectOtherArtForm.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>
                                      Language <small>(Optional)</small>
                                    </InputLabel>
                                    <Select
                                      id="language"
                                      name="language"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      value={language}
                                      onChange={(e) =>
                                        setLanguage(e.target.value)
                                      }
                                    >
                                      {selectLanguage.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={12}>
                                  <TextField
                                    id="name"
                                    type="text"
                                    className={classes.inputField}
                                    label="Currently Working at (optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      setCurrentlyWorking(e.target.value)
                                    }
                                    name="name"
                                    size="small"
                                    value={currentlyWorking}
                                  />
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12}  md={12}>
                          <div className={styles.basicForm}>
                            <h4>Bio</h4>
                            <TextField
                              id="name"
                              type="text"
                              multiline
                              required
                              rows={4}
                              className={classes.inputField}
                              label="Bio"
                              variant="filled"
                              value={aboutMe}
                              onChange={(e) => setAboutMe(e.target.value)}
                              name="name"
                              size="small"
                            />
                          </div>
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
                          <img src={artWorkIcon} alt="" /> Featured Art Works{" "}
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={4}>
                        {workDetails.map((user, index) => (
                          <Grid
                            container
                            item
                            spacing={3}
                            style={{ marginBottom: "20px" }}
                            key={index}
                          >
                            <Grid item xs={12}  md={6}>
                              <div
                                className={styles.uploadFileSecFearureArtWork}
                              >
                                <DropFileInput
                                  onFileChange={(files) =>
                                    onFileChangeWorkDetail(files, index)
                                  }
                                />
                              </div>
                            </Grid>

                            <Grid item xs={12}  md={6} key={index}>
                              <Grid container spacing={3}>
                                <Grid item xs={12}  md={12}>
                                  <TextField
                                    required
                                    id="title"
                                    type="text"
                                    className={classes.inputField}
                                    label="Title"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="title"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={12}>
                                  <TextField
                                    id="eventName"
                                    type="text"
                                    className={classes.inputField}
                                    label="Event Name (Optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="eventName"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <TextField
                                    required
                                    id="venue"
                                    type="text"
                                    className={classes.inputField}
                                    label="Venue"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="venue"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <TextField
                                    required
                                    id="featureArtForm"
                                    type="text"
                                    className={classes.inputField}
                                    label="Art Form"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="featureArtForm"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <TextField
                                    id="featureYear"
                                    type="text"
                                    className={classes.inputField}
                                    label="Year (Optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="featureYear"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <TextField
                                    id="collaborators"
                                    type="text"
                                    className={classes.inputField}
                                    label="Collaborators (optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="collaborators"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={12}>
                                  <TextField
                                    required
                                    id="addSocilaLink"
                                    type="text"
                                    className={classes.inputField}
                                    label="Add Social Link"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="addSocilaLink"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={12}>
                                  <TextField
                                    required
                                    id="featureDescription"
                                    type="text"
                                    className={classes.inputField}
                                    label="Description"
                                    placeholder="Minimum 50 words."
                                    multiline
                                    rows={4}
                                    variant="filled"
                                    onChange={(e) =>
                                      changeWorkDetails(e, index)
                                    }
                                    name="featureDescription"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormGroup>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          icon={
                                            <CheckBoxOutlineBlankIcon fontSize="small" />
                                          }
                                          checkedIcon={
                                            <CheckBoxIcon fontSize="small" />
                                          }
                                          name="checkedI"
                                        />
                                      }
                                      label="Work in progress"
                                    />
                                  </FormGroup>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                              {workDetails.length - 1 === index &&
                                workDetails.length < 4 && (
                                  <Button
                                    type="button"
                                    className={classes.btnAddDes}
                                    onClick={addWorkDetails}
                                  >
                                    + Add 1 More
                                  </Button>
                                )}
                              &nbsp;&nbsp;
                              {workDetails.length !== 1 && (
                                <Button
                                  type="button"
                                  className={classes.btnAddDes}
                                  onClick={() =>
                                    handleServiceRemoveworkDetails(index)
                                  }
                                >
                                  <span>Remove</span>
                                </Button>
                              )}
                            </Grid>
                          </Grid>
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
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={4}>
                        {socials.map((user, index) => (
                          <Grid
                            item
                            container
                            spacing={3}
                            style={{ marginBottom: "20px" }}
                            key={index}
                          >
                            <Grid item xs={12} md={4}>
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
                                  {selectSocialMedia.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                      {option.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item md={8} xs={12}>
                              <TextField
                                required
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
                                  onClick={() => handleServiceRemove(index)}
                                  className={classes.btnAddDes}
                                >
                                  Remove
                                </Button>
                              )}
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <section className={styles.wrap}>
                  <Grid container className={classes.bottomContainer}>
                    <Grid item md={8}>
                      <Typography className={classes.typo_design}>
                        Do you want to add more details ?
                      </Typography>
                    </Grid>
                    <Grid item md={8}>
                      <div className={classes.btnBottomG}>
                        <Grid item md={4} xs={5}>
                          <Button
                            className={classes.saveDataBtn}
                            onClick={yesIWantToo}
                            // next form api next form
                          >
                            Yes, I want to
                          </Button>
                          <p className={classes.paraText}>Look at other fields and publish</p>
                        </Grid>
                        <Grid item md={4} xs={7}>
                          <Button
                            className={classes.saveDataBtn}
                            onClick={previewPublish}
                            // view portfolio next form
                          >
                            No, will do that later
                          </Button>
                          <Backdrop
                            className={classes.backdrop}
                            open={open}
                            onClick={yesIWantToo}
                          >
                            <CircularProgress color="inherit" />
                          </Backdrop>
                          <p className={classes.paraText}>
                            Preview and Publish, you can add more details later{" "}
                          </p>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </section>
              </div>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default ArtistForm;

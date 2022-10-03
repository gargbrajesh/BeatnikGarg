import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Select,
  MenuItem,
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
  InputLabel,
  Snackbar,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Link from "next/link";
import CloseIcon from "@material-ui/icons/Close";
import { Formik } from "formik";
import * as Yup from "yup";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import styles from "../../UpdateArtist.module.css";
import DropFileInput from "../UpdateDropFileInput/UpdateDropFileInput";
import BasicInfo from "../../../../../public/assets/Images/common/BasicInfoIcon.svg";
import artWorkIcon from "../../../../../public/assets/Images/common/artWorkIcon.svg";
import socialLink from "../../../../../public/assets/Images/common/socialLink.svg";
import MuiAlert from "@material-ui/lab/Alert";
import countrydata from "../../../../../src/Countrydata.json";
import selectPlatform from "./../../../Artist/components/ArtistForm/selectPlatform.json";
import selectTags from "../../../Artist/components/ArtistForm/selectTags.json";
import selectPersona from "../../../Artist/components/ArtistForm/selectPersona.json";
import selectOtherArtForm from "../../../Artist/components/ArtistForm/selectOtherArtForm.json";
import selectLanguage from "../../../Artist/components/ArtistForm/selectLanguage.json";
import selectArtForm from "../../../Artist/components/ArtistForm/selectOtherArtForm.json";
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
  inputFieldDOBLabel: {
    background: "#fff",
    borderRadius: "30px",
    position: "absolute",
    top: "-9px",
    padding: "0px 6px",
    left: "26px",
    width: "150px",
    fontSize: "16px",
    color: "#000",
    zIndex: "99",
  },
  genderGroupLabel: {
    "& .MuiSvgIcon-root": {
      fill: "#000 !important",
      "& path": {
        fill: "red",
      },
    },
    "& label ": {
      position:'relative',
      "& .MuiRadio-colorSecondary.Mui-checked": {
        color: "#FAA61A !important",
      },
    },
  },
  radio:{
    position:'relative',
      "& .MuiRadio-colorSecondary.Mui-checked": {
        color: "#FAA61A !important",
      },
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
    },
  },

  formButton: {
    display: "flex",
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
    cursor: "pointer",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    "& b": {
      color: "#fff",
      fontWeight: "600",
      fontSize: "18px",
    },
    "&:hover ": {
      background: "#ffa900",
    },
    '@media (max-width: 958px)': {
      marginBottom:'8px',
      fontSize:'10px',
      fontWeight: "300",
      lineHeight: "15px ",
    }
  },
  imgContainer: {
    position: "relative",
    top: "-120px",
  },
  getImgSec: {
    position: "absolute",
    "& p": {
      position: "relative",
      "& img": {
        width: "110px",
        height: "100px",
        border: "2px solid #888888",
        borderRadius: "3px",
        objectFit: "cover",
      },
      "& span": {
        display: "block",
        position: "absolute",
        background: "#feaa00",
        color: "#fff",
        borderRadius: "50%",
        top: "-13px",
        right: "-14px",
        cursor: "pointer",
      },
    },
  },
  imgContainerDasic: {
    position: "relative",
  },
}));
const UpdateArtistForm = (props) => {
  const setPastedURL = props.setPastedURL;
  const classes = useStyles();
  const router = useRouter();
  const [specilization, setSpecilization] = useState([]);
  const [specilizationId, setSpecilizationId] = useState("");
  const [specilizationIdArtForm, setSpecilizationIdArtForm] = useState("");
  // Form Art Work and there Specilization

  // Featured Art Works Update Api
  const updatedFeatureValTemplate = {
    title: "",
    event: "",
    venue: "",
    artForm: "",
    year: "",
    collaborators: "",
    social_link: "",
    description: "",
    image: "",
  };
  const [updatedFeatureVal, setSomFeatureArtWorkData] = useState([
    updatedFeatureValTemplate,
  ]);
  const changeHadlerAwards = (e, index) => {
    let tempFeatureArtWork = [];
    updatedFeatureVal.forEach((item, i) => {
      if (index === i) {
        item[e.target.name] = e.target.value;
      }
      tempFeatureArtWork.push(item);
    });
    setSomFeatureArtWorkData(tempFeatureArtWork);
  };

  const addFeatureArtWork = () => {
    setSomFeatureArtWorkData([...updatedFeatureVal, updatedFeatureValTemplate]);
  };
  const RemoveFeatureArtWork = (index) => {
    const list = [...updatedFeatureVal];
    list.splice(index, 1);
    setSomFeatureArtWorkData(list);
  };
  // End Featured Art Works Update Api

  // Featured Social Media Title & URL
  const socialMediaDataTEmp = {
    choosePlatform: "",
    link: "",
  };
  const [socialMediaData, setSomsocialMediaData] = useState([
    socialMediaDataTEmp,
  ]);
  const changesocialMediaData = (e, index) => {
    let tempSocialMediaData = [];
    socialMediaData.forEach((item, i) => {
      if (index === i) {
        item[e.target.name] = e.target.value;
      }
      tempSocialMediaData.push(item);
    });
    setSomsocialMediaData(tempSocialMediaData);
  };
  const addSocialMediaData = () => {
    setSomsocialMediaData([...socialMediaData, socialMediaDataTEmp]);
  };
  const RemoveSocialMediaData = (index) => {
    const list = [...socialMediaData];
    list.splice(index, 1);
    setSomsocialMediaData(list);
  };
  // End Featured Art Works Update Api
  const [getName, setToGetName] = useState("");
  const [stateid, setStateid] = useState("");
  const [getGender, setToGetGender] = useState("");
  const [getTagData, setToGetTagData] = useState([]);
  const [countryid, setCountryid] = useState("");
  const [getAboutME, setToGetAboutME] = useState("");
  const [getPersona, setToGetPersona] = useState("");
  const [getLanguage, setToGetLanguage] = useState("");
  const [getPastedURL, setToGetPastedURL] = useState("");
  const [getOtherArtForm, setToGetOtherArtForm] = useState("");
  const [getEngagementType, setToGetEngagementType] = useState("");
  const [getSelectDateDOB, setToGetSelectDateDOB] = useState("");
  const [getCurrentWorking, setToGetCurrentWorking] = useState("");
  const [getSpecialization, setToGetSpecialization] = useState("");
  const [getProfileMediaIMG, setToGetProfileMediaIMG] = useState("");
  const [getprofileFileBase64Data, setToGetprofileFileBase64Data] = useState(
    ""
  );
  const [open, setOpen] = useState(false);

  // socail platform
  // feature art work
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [image64, setImage64] = useState();

  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "ci_session=ace8339c674e65c00c2f5732d2a0749bca2a9e43"
  );
  const userID = Cookies.get("id");
  const handleChangeGender = (event) => {
    setToGetGender(event.target.value);
  };
  const handleChangeEngagement = (event) => {
    setToGetEngagementType(event.target.value);
  };

  // Base64 function code start here
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  //end here
  const onFileChange = async (files) => {
    if (getprofileFileBase64Data) {
      return;
    }

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
        setImage64(data.Location);
      }
    });

    // const base64File = await toBase64(files[0]);
    // setToGetprofileFileBase64Data(base64File);
    // setImage64(base64File);
    // // base64File.then((data) => {
    // // });
  };
  const removeImageProfileMedia = () => {
    setToGetProfileMediaIMG("");
  };
  const onFileChangeWorkDetail = async (files, index) => {
    if (getprofileFileBase64Data) {
      return;
    }

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
        updatedFeatureVal.map(function(val, i) {
          if (index === i) {
            updatedFeatureVal[index].image = data.Location;
          }
        });
      }
    });

    // const base64File = await toBase64(files[0]);
    // base64File.then((data) => {
    //   setToGetprofileFileBase64Data(base64File);
    //   updatedFeatureVal.map(function(val, i) {});
    // });
  };
  const removeFeatureArtWorkIMG = () => {
    alert("bfdhg");
    setToGetprofileFileBase64Data("");
  };
  // end here

  // Country and State code start here by brajesh

  const handlecounty = (e) => {
    const countryidId = e.target.value;
    const getStatedata = countrydata.find(
      (country) => country.country_id === countryidId
    ).states;
    setStateid(getStatedata);
    setCountryid(countryidId);
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
  const mydata = JSON.stringify(socialMediaData);
  const DataPost = (text) => {
    setOpen(!open);
    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("name", getName);
    formdata.append("gender", getGender);
    formdata.append("dob", getSelectDateDOB);
    formdata.append("currentWorkLocation", getCurrentWorking);
    formdata.append("city", stateid);
    formdata.append("country", countryid);
    formdata.append("bio", getAboutME);
    formdata.append("art_form", specilizationId);
    formdata.append("persona", getPersona);
    formdata.append("specialization", getSpecialization);
    formdata.append("profile_media_one", image64);
    formdata.append("profile_media_two", image64);
    formdata.append("profile_media_three", "base 64");
    formdata.append("profile_media_one_type", "audio");
    formdata.append("profile_media_two_type", "video");
    formdata.append("profile_media_three_type", "image");
    formdata.append("age", getSelectDateDOB);
    formdata.append("tags", getTagData);
    formdata.append("language", getLanguage);
    formdata.append("other_art_form", getOtherArtForm);
    formdata.append("engagement_type", getEngagementType);
    formdata.append("profileFileBase64Data", getprofileFileBase64Data);
    formdata.append("pastedURL", getPastedURL);
    formdata.append("add_flag", "save");
    formdata.append("action", "screenOne");
    formdata.append("featured_art_work", JSON.stringify(updatedFeatureVal));
    formdata.append("socialLink", JSON.stringify(socialMediaData));
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
          setMessage(responseJson.result.message);
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          router.push({
            pathname: "/update-artist-other-art-work",
          });
        }
      })
      .catch((error) => {
        console.log(error);
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
    const userID = Cookies.get("id");
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=c3768cfbd1cbf3a16a1adf4bac6f99b38e08d3e3"
    );
    var formdata = new FormData();
    formdata.append("action", "saved");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,

      redirect: "follow",
    };
    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL +
        `/beatnik_show_all_filter_portfolio?fetch=screen_one_basic&userID=${userID}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.valid === false) {
          alert(responseJson.result.message);
        } else {
          setToGetName(responseJson.result.data.name);
          setStateid(responseJson.result.data.city);

          setToGetGender(responseJson.result.data.gender);
          setToGetTagData([responseJson.result.data.tags]);
          setCountryid(responseJson.result.data.country);

          setToGetAboutME(responseJson.result.data.bio);
          setSpecilizationId(responseJson.result.data.art_form);

          setToGetPersona(responseJson.result.data.persona);
          setToGetLanguage(responseJson.result.data.language);
          setToGetPastedURL(responseJson.result.data.pastedURL);
          setToGetOtherArtForm(responseJson.result.data.other_art_form);
          setToGetEngagementType(responseJson.result.data.engagement_type);
          var newDate = responseJson.result.data.dob;
          setToGetSelectDateDOB(newDate);
          setToGetCurrentWorking(responseJson.result.data.currentWorkLocation);
          setToGetSpecialization(responseJson.result.data.specialization);

          setToGetProfileMediaIMG(responseJson.result.data.profile_media_one);

          setToGetprofileFileBase64Data(
            responseJson.result.data.profileFileBase64Data
          );
          var myObject = JSON.parse(responseJson.result.data.socialLink);
          setSomsocialMediaData(myObject);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    const userID = Cookies.get("id");
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=c3768cfbd1cbf3a16a1adf4bac6f99b38e08d3e3"
    );

    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("action", "saved");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      // body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL +
        `/beatnik_show_all_filter_portfolio?fetch=screen_one_featured&userID=${userID}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.valid === false) {
          alert(responseJson.result.message);
        } else {
          setSomFeatureArtWorkData(
            JSON.parse(responseJson.result.data.featured_art_work)
          );
          console.log(JSON.parse(responseJson.result.data.featured_art_work));
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={classes.root}>
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
                        <span className={styles.spanDesignTitle}>
                          Artist Portfolio
                        </span>
                      </div>
                      <div className={classes.formButton}>
                        <Link href="/update-artist-other-art-work">
                          <Typography className={classes.saveDataBtn}>
                            <b>Skip</b>
                          </Typography>
                        </Link>
                        <Backdrop
                          className={classes.backdrop}
                          open={open}
                          onClick={DataPost}
                        >
                          <CircularProgress color="inherit" />
                        </Backdrop>
                        <Button
                          className={classes.saveDataBtn}
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Preview & Publish
                        </Button>
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
                              setPastedURL={setPastedURL}
                            />
                            {getProfileMediaIMG ? (
                              <>
                                <artical className={classes.imgContainerDasic}>
                                  <div className={classes.getImgSec}>
                                    <p>
                                      <img
                                        className={classes.getImg}
                                        src={getProfileMediaIMG}
                                        alt=""
                                      />
                                      <span>
                                        <CloseIcon
                                          onClick={removeImageProfileMedia}
                                        />
                                      </span>
                                    </p>
                                  </div>
                                </artical>
                              </>
                            ) : null}
                          </div>
                        </Grid>
                        <Grid item xs={12}  md={6} style={{ marginTop: "50px" }}>
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
                                    id="getName"
                                    type="text"
                                    className={classes.inputField}
                                    label="Name"
                                    variant="filled"
                                    onChange={(e) =>
                                      setToGetName(e.target.value)
                                    }
                                    value={getName}
                                    name="getName"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <TextField
                                      required
                                      className={classes.inputFieldDOB}
                                      id="filled-basic"
                                      label="Date of Birth"
                                      variant="filled"
                                      type="date"
                                      margin="normal"
                                      format="dd/mm/yyyy"
                                      value={getSelectDateDOB}
                                      onChange={(e) =>
                                        setToGetSelectDateDOB(e.target.value)
                                      }
                                      KeyboardButtonProps={{
                                        "aria-label": "change date",
                                      }}
                                    />
                                  </MuiPickersUtilsProvider>
                                </Grid>

                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <TextField
                                      required
                                      select
                                      label="Select Country"
                                      id="countryid"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) => handlecounty(e)}
                                      value={countryid}
                                      disabled
                                    >
                                      {countrydata.map((option, index) => (
                                        <MenuItem
                                          key={index}
                                          value={option.country_id}
                                        >
                                          {option.country_name}
                                        </MenuItem>
                                      ))}
                                    </TextField>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <TextField
                                      type="text"
                                      required
                                      label="Selected City"
                                      id="stateid"
                                      name="stateid"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) => handlestate(e)}
                                      value={stateid}
                                      disabled
                                    />
                                    {/* {state.map((option, index) => (
                                        <MenuItem
                                          key={index}
                                          value={option.state_id}
                                        >
                                          {option.state_name}
                                        </MenuItem>
                                      ))} */}
                                    {/* </TextField> */}
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
                                      value={getGender}
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
                                      value={getEngagementType}
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
                                {/* <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <TextField
                                      select
                                      required
                                      label="Select Art Form"
                                      id="getArtForm"
                                      name="getArtForm"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) =>
                                        setToGetArtForm(e.target.value)
                                      }
                                      value={getArtForm}
                                    >
                                      {selectArtForm.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </TextField>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <TextField
                                      select
                                      label="Specialization-Dance"
                                      id="specialization"
                                      name="specialization"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) =>
                                        setToGetSpecialization(e.target.value)
                                      }
                                      value={getSpecialization}
                                    >
                                      {specializationDance.map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </TextField>
                                  </FormControl>
                                </Grid> */}
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
                                      disabled
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
                                    {/* <InputLabel>Specialization</InputLabel> */}
                                    <TextField
                                      required
                                      id="specialization"
                                      name="specialization"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={(e) => handleSpecilization(e)}
                                      value={getSpecialization}
                                      disabled
                                    />
                                    {/* {specilization.map((option, index) => (
                                        <MenuItem
                                          key={index}
                                          value={option.name}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select> */}
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <Select
                                      select
                                      multiple
                                      label="Select Tags"
                                      id="getTagData"
                                      name="getTagData"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      value={getTagData}
                                      onChange={(e) =>
                                        setToGetTagData(e.target.value)
                                      }
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
                                    <TextField
                                      select
                                      required
                                      label="Select Persona"
                                      id="getPersona"
                                      name="getPersona"
                                      size="small"
                                      variant="filled"
                                      value={getPersona}
                                      onChange={(e) =>
                                        setToGetPersona(e.target.value)
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
                                    </TextField>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <TextField
                                      select
                                      label="Select Other Art form (optional)"
                                      id="getOtherArtForm"
                                      name="getOtherArtForm"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      value={getOtherArtForm}
                                      onChange={(e) =>
                                        setToGetOtherArtForm(e.target.value)
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
                                    </TextField>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <TextField
                                      select
                                      label="Language (Optional)"
                                      id="getLanguage"
                                      name="getLanguage"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      value={getLanguage}
                                      onChange={(e) =>
                                        setToGetLanguage(e.target.value)
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
                                    </TextField>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <TextField
                                    id="name"
                                    type="text"
                                    className={classes.inputField}
                                    label="Currently Working at (optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      setToGetCurrentWorking(e.target.value)
                                    }
                                    name="name"
                                    size="small"
                                    value={getCurrentWorking}
                                  />
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12}  md={6}>
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
                              value={getAboutME}
                              onChange={(e) => setToGetAboutME(e.target.value)}
                              name="name"
                              size="small"
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>

                  {/* Feature Art work start */}

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
                        {updatedFeatureVal.map((user, index) => (
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
                                {user.image ? (
                                  <>
                                    <artical className={classes.imgContainer}>
                                      <div className={classes.getImgSec}>
                                        <p>
                                          <img
                                            className={classes.getImg}
                                            src={user.image}
                                            alt=""
                                          />
                                          <span>
                                            <CloseIcon
                                              onclick={removeFeatureArtWorkIMG}
                                            />
                                          </span>
                                        </p>
                                      </div>
                                    </artical>
                                  </>
                                ) : null}
                              </div>
                            </Grid>
                            <Grid item xs={12}  md={6} key={index}>
                              <Grid container spacing={3}>
                                <Grid item xs={12}  md={12}>
                                  <TextField
                                    required
                                    id="title"
                                    type="text"
                                    value={user.title}
                                    className={classes.inputField}
                                    label="Title"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeHadlerAwards(e, index)
                                    }
                                    name="title"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <TextField
                                    required
                                    id="event"
                                    type="text"
                                    value={user.eventName}
                                    className={classes.inputField}
                                    label="Event Name (Optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeHadlerAwards(e, index)
                                    }
                                    name="event"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <TextField
                                    id="venue"
                                    type="text"
                                    value={user.venue}
                                    className={classes.inputField}
                                    label="Venue"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeHadlerAwards(e, index)
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
                                    value={user.featureArtForm}
                                    onChange={(e) =>
                                      changeHadlerAwards(e, index)
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
                                    value={user.featureYear}
                                    label="Year (Optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeHadlerAwards(e, index)
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
                                    value={user.collaborators}
                                    label="Collaborators (optional)"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeHadlerAwards(e, index)
                                    }
                                    name="collaborators"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <TextField
                                    required
                                    id="addSocilaLink"
                                    type="text"
                                    className={classes.inputField}
                                    value={user.addSocilaLink}
                                    label="Add Social Link"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeHadlerAwards(e, index)
                                    }
                                    name="addSocilaLink"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item xs={12}  md={6}>
                                  <TextField
                                    required
                                    id="featureDescription"
                                    type="text"
                                    className={classes.inputField}
                                    value={user.featureDescription}
                                    label="Description"
                                    placeholder="Minimum 50 words."
                                    multiline
                                    rows={4}
                                    variant="filled"
                                    onChange={(e) =>
                                      changeHadlerAwards(e, index)
                                    }
                                    name="featureDescription"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={12}>
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
                                <Grid
                                  item
                                  xs={12}
                                  style={{ textAlign: "center" }}
                                >
                                  {updatedFeatureVal.length - 1 === index &&
                                    updatedFeatureVal.length < 4 && (
                                      <Button
                                        type="button"
                                        className={classes.btnAddDes}
                                        onClick={addFeatureArtWork}
                                      >
                                        + Add 1 More
                                      </Button>
                                    )}
                                  &nbsp;&nbsp;&nbsp;
                                  {updatedFeatureVal.length !== 1 && (
                                    <Button
                                      type="button"
                                      onClick={() =>
                                        RemoveFeatureArtWork(index)
                                      }
                                      className={classes.btnAddDes}
                                    >
                                      <span>Remove</span>
                                    </Button>
                                  )}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  {/* Social Media Link Data  */}
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
                        {socialMediaData.map((user, index) => (
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
                                <TextField
                                  required
                                  select
                                  id="choosePlatform"
                                  label="Platform"
                                  name="choosePlatform"
                                  size="small"
                                  value={user.choosePlatform}
                                  variant="filled"
                                  onChange={(e) =>
                                    changesocialMediaData(e, index)
                                  }
                                  className={classes.inputField}
                                >
                                  {selectPlatform.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                      {option.name}
                                    </MenuItem>
                                  ))}
                                  ;
                                </TextField>
                              </FormControl>
                            </Grid>
                            <Grid item md={8} xs={12}>
                              <TextField
                                required
                                id="link"
                                type="text"
                                className={classes.inputField}
                                label="Paste the link"
                                variant="filled"
                                onChange={(e) =>
                                  changesocialMediaData(e, index)
                                }
                                name="link"
                                value={user.link}
                                size="small"
                              />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                              {socialMediaData.length - 1 === index &&
                                socialMediaData.length < 3 && (
                                  <Button
                                    type="button"
                                    className={classes.btnAddDes}
                                    onClick={addSocialMediaData}
                                  >
                                    + Add 1 More
                                  </Button>
                                )}
                              &nbsp;&nbsp;&nbsp;
                              {socialMediaData.length !== 1 && (
                                <Button
                                  type="button"
                                  onClick={() => RemoveSocialMediaData(index)}
                                  className={classes.btnAddDes}
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
                            onClick={() =>
                              router.push("/update-artist-other-art-work")
                            }
                          >
                            Yes, I want to
                          </Button>
                          <p>Look at other fields and publish</p>
                        </Grid>
                        <Grid item md={4} xs={7}>
                          <Button
                            className={classes.saveDataBtn}
                            onClick={() => router.push("/")}
                          >
                            No, will do that later
                          </Button>
                          <p>
                            Preview and Publish, you can add more details later.
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

export default UpdateArtistForm;

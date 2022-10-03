import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import styles from "./organization.module.css";
import DropFileInput from "./components/DropFileInput/DropFileInput";
import ProfileIMG from "../../../public/assets/default/d.jpg";
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
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MetaTitle from "components/helper/MetaTitle";
import BasicInfo from "../../../public/assets/Images/common/BasicInfoIcon.svg";
import ArtSpaceFacilities from "../../../public/assets/Images/common/ArtSpaceFacilities.svg";
import Spinner from "components/organisms/Spinner";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik } from "formik";
import * as Yup from "yup";
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
  accordionTopTb: {
    marginBottom: "15px",
    width: "100%",
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
      fontSize: ".8rem",
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
    border: "2px solid #888888",
    borderBottom: "2px solid #888888",
    background: "#fff",
    padding: "0 10px",

    "& label": {
      background: "#fff",
      borderRadius: "30px",
      position: "absolute",
      top: "-15px",
      padding: "7px",
      left: "30px",
      width: "33%",
      fontSize: ".8rem !important",
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
  map: {
    width: "100%",
    height: "330px",
    "& iframe": {
      width: "100%",
      height: "100%",
    },
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
      padding: "9px 18px",
      fontWeight: "300",
      lineHeight: "15px ",
    }
  },
  normalData: {
    display: "flex",
    justifyContent: "space-around",
    "& p ": {
      fontFamily: "Nunito Sans",
      fontStyle: "normal !important",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "16px",
      alignItems: "center",
      textAlign: "center",
      letterApacing: "0.02em !important",
      color: "#000000",
      width: "25%",
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
    '@media (max-width: 600px)': {
      fontSize: "16px",
      lineHeight: "22px",
      padding: "10px 25px",
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
}));

const Organization = () => {
  const userID = Cookies.get("id");
  const router = useRouter();
  const classes = useStyles();

  const [orgName, setOrgName] = useState("");
  const [started, setStarted] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [artForm, setArtForm] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [weProvide, setWeProvide] = useState("");
  const [bio, setBio] = useState();
  const [lat, setLat] = useState();
  const [image64, setImage64] = useState();
  const [orgImage, setOrgImage] = useState(ProfileIMG);
  const [getMessage, setMessage] = useState("");
  const [getMessageTrue, setMessageTrue] = useState("");
  const [openFalse, setOpenFalse] = useState(false);
  const [openTrue, setOpenTrue] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  let bannerImage = {
    image: image64,
  };
  const handleOrganizationFeaturesRemove = (index) => {
    const list = [...organizationFeatures];
    list.splice(index, 1);
    setOrganizationFeatures(list);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeArt = (event) => {
    setArtForm(event.target.value);
  };

  const handleChangeSpecialization = (event) => {
    setSpecialization(event.target.value);
  };

  const handleChangeSpaceType = (event) => {
    setSpaceType(event.target.value);
  };

  const handleChangeWeProvide = (event) => {
    setWeProvide(event.target.value);
  };
  const featuredImageArr = [];

  const organizationFeaturesTemplate = {
    title: "",
    description: "",
    image: orgImage,
  };
  const [organizationFeatures, setOrganizationFeatures] = useState([
    organizationFeaturesTemplate,
  ]);
  // organizationFeatures['image'] = featuredImageArr;
  const addOrganizationFeatures = () => {
    setOrganizationFeatures([
      ...organizationFeatures,
      organizationFeaturesTemplate,
    ]);
  };

  const changeOrganizationFeatures = (e, index) => {
    const updatedaddOrganizationFeatures = organizationFeatures.map(
      (organizationFeature, i) =>
        index == i
          ? Object.assign(organizationFeature, {
            [e.target.name]: e.target.value,
          })
          : organizationFeature
    );

    setOrganizationFeatures(updatedaddOrganizationFeatures);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const bannerFileChange = (files) => {
    const base64File = toBase64(files[0]);
    base64File.then((data) => {
      setImage64(data);
    });
  };

  const onFileChange = (files) => {
    const base64File = toBase64(files[0]);
    base64File.then((data) => {
      setOrgImage(data);
    });
  };

  const DataPost = (text1) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=c1866a64fb51e3176985e2eb318918795f2fa3b2"
    );

    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("name", orgName);
    formdata.append("address", address);

    formdata.append("startedIn", started);
    formdata.append("city", city);
    formdata.append("country", country);
    formdata.append("typeOfSpace", spaceType);
    formdata.append("weProvide", weProvide);
    formdata.append("bio", bio);
    formdata.append("art_form", artForm);
    formdata.append("persona", "ascasc");
    formdata.append("specialization", specialization);
    formdata.append("add_flag", text1);
    formdata.append("action", "screenOne");
    formdata.append("pastAndUpcomingActivities", "image64");
    formdata.append("featured_art_work", JSON.stringify(organizationFeatures));
    formdata.append("profile_media_one", image64);
    formdata.append("pastedURL", "image64");
    formdata.append("latAndLong", "image64");

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
        console.log(responseJson);
        if (responseJson.valid == false) {
          setMessage(responseJson.result.message);
          setOpenFalse(true);
        } else {
          setMessageTrue(responseJson.result.message);
          setOpenTrue(true);
          router.push({
            pathname: "/past-and-upcoming-activities",
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
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
        title={`Art Space Portfolio | Beatnik`}
        metaKeyWord="Art Space Portfolio | Beatnik"
        metaDescription="Art Space Portfolio | Beatnik"
      />
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
                  <Grid container spacing={3}>
                    <Grid item md={12} xs={12}>
                      <div className={styles.titleContainer}>
                        <div className={styles.titleCon}>
                          <span className={styles.spanDesignTitle}>
                            Art Space Portfolio
                          </span>
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
                        <span className={styles.span_design}>
                          <img src={BasicInfo} alt="..." /> Basic Information{" "}
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <div className={styles.uploadFileSec}>
                            <DropFileInput
                              onFileChange={(files) => bannerFileChange(files)}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <div className={styles.formDataCon}>
                            <div className={styles.basicForm}>
                              <Grid
                                container
                                spacing={4}
                                className={styles.basicFormData}
                              >
                                <Grid item xs={12} md={6}>
                                  <TextField
                                    required
                                    id="name"
                                    type="text"
                                    className={classes.inputField}
                                    label="Organization name"
                                    variant="filled"
                                    onChange={(e) => setOrgName(e.target.value)}
                                    name="orgName"
                                    size="small"
                                  />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                  <TextField

                                    id="name"
                                    type="text"
                                    className={classes.inputField}
                                    label="Started in (optional)"
                                    variant="filled"
                                    onChange={(e) => setStarted(e.target.value)}
                                    name="orgName"
                                    size="small"
                                    placeholder="Year"
                                  />
                                </Grid>

                                <Grid item md={12} xs={12}>
                                  <TextField
                                    required
                                    id="Address"
                                    type="text"
                                    className={classes.inputField}
                                    label="Address"
                                    variant="filled"
                                    onChange={(e) => setAddress(e.target.value)}
                                    name="address"
                                    size="small"
                                  />
                                </Grid>

                                <Grid item xs={12} md={6}>
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
                                      onChange={handleChangeCountry}
                                      value={country}
                                    >
                                      <MenuItem value="India">India</MenuItem>
                                      <MenuItem value="Pakistan">
                                        Pakistan
                                      </MenuItem>
                                      <MenuItem value="China">China</MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Select City</InputLabel>
                                    <Select
                                      required
                                      id="city"
                                      name="city"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={handleChangeCity}
                                      value={city}
                                    >
                                      <MenuItem value="Delhi">Delhi</MenuItem>
                                      <MenuItem value="Noida">Noida</MenuItem>
                                      <MenuItem value="Goa">Goa</MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>

                                <Grid item md={12} xs={12}>
                                  <div className={classes.map}>
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4011591332214!2d77.38284451495223!3d28.617736682423658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff3427f6a17%3A0xb06a2d3f7237b807!2sPlot%20No%20C%2C%2076%2C%20Sector%2063%20Rd%2C%20C%20Block%2C%20Sector%2064%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1650868898630!5m2!1sen!2sin"
                                      title="title"
                                      frameborder="0"
                                      id="lat"
                                      name="lat"
                                      onChange={(e) => setLat(e.target.value)}
                                      style={{ border: 0 }}
                                      value={lat}
                                      allowfullscreen=""
                                      aria-hidden="false"
                                      tabindex="0"
                                    />
                                  </div>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Art Form</InputLabel>
                                    <Select
                                      required
                                      id="city"
                                      name="artForm"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={handleChangeArt}
                                      value={artForm}
                                    >
                                      <MenuItem value="Delhi">
                                        Art option 1
                                      </MenuItem>
                                      <MenuItem value="Noida">
                                        Art option 2
                                      </MenuItem>
                                      <MenuItem value="Goa">
                                        Art option 3
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Specialization</InputLabel>
                                    <Select
                                      required
                                      id="artForm"
                                      name="specialization"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={handleChangeSpecialization}
                                      value={specialization}
                                    >
                                      <MenuItem value="Delhi">
                                        Art option 1
                                      </MenuItem>
                                      <MenuItem value="Noida">
                                        Art option 2
                                      </MenuItem>
                                      <MenuItem value="Goa">
                                        Art option 3
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>Type Of Space</InputLabel>
                                    <Select
                                      required
                                      id="spaceType"
                                      name="spaceType"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={handleChangeSpaceType}
                                      value={spaceType}
                                    >
                                      <MenuItem value="Delhi">
                                        Tag option 1
                                      </MenuItem>
                                      <MenuItem value="Noida">
                                        Tag option 2
                                      </MenuItem>
                                      <MenuItem value="Goa">
                                        Tag option 3
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                  <FormControl
                                    variant="filled"
                                    className={classes.formControl}
                                  >
                                    <InputLabel>We Provide</InputLabel>
                                    <Select
                                      required
                                      id="weProvide"
                                      name="weProvide"
                                      size="small"
                                      variant="filled"
                                      className={classes.inputField}
                                      onChange={handleChangeWeProvide}
                                      value={weProvide}
                                    >
                                      <MenuItem value="Delhi">
                                        We Provide option 1
                                      </MenuItem>
                                      <MenuItem value="Noida">
                                        We Provide option 2
                                      </MenuItem>
                                      <MenuItem value="Goa">
                                        We Provide option 3
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>

                                <Grid item md={12} xs={12}>
                                  <div className={styles.basicForm}>
                                    <h4>Bio</h4>
                                    <TextField
                                      required
                                      id="AboutMe"
                                      type="text"
                                      multiline
                                      rows={3}
                                      placeholder="Write a  detailed  bio about yourself (Minimum : 500 words)"
                                      className={classes.inputField}
                                      label="Bio"
                                      variant="filled"
                                      value={bio}
                                      onChange={(e) => setBio(e.target.value)}
                                      name="bio"
                                      size="small"
                                    />
                                  </div>
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>

                  {/* work details section start here*/}

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
                          <img src={ArtSpaceFacilities} alt="..." /> Art Space
                          Facilities
                        </span>
                      </div>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Grid
                        item
                        xs={12}

                        style={{ textAlign: "center", marginTop: "20px" }}
                      >
                        {organizationFeatures.map((user, index) => (
                          <Grid
                            container
                            spacing={3}
                            style={{ marginBottom: "20px" }}
                            key={index}
                          >
                            <Grid item xs={12} md={6}>
                              <div className={styles.ArtSpaceFacitilities}>
                                <div className={styles.uploadFileSec}>
                                  <DropFileInput
                                    required
                                    onFileChange={(files) =>
                                      onFileChange(files, index)
                                    }
                                  />
                                </div>
                              </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Grid container spacing={3}>
                                <Grid item md={12} xs={12}>
                                  <TextField
                                    required
                                    id="title"
                                    type="text"
                                    className={classes.inputField}
                                    label="Title"
                                    variant="filled"
                                    onChange={(e) =>
                                      changeOrganizationFeatures(e, index)
                                    }
                                    name="title"
                                    size="small"
                                  />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                  <TextField
                                    required
                                    id="description"
                                    type="text"
                                    className={classes.inputField}
                                    label="Description"
                                    placeholder="Minimum 50 words."
                                    multiline
                                    rows={9}
                                    variant="filled"
                                    onChange={(e) =>
                                      changeOrganizationFeatures(e, index)
                                    }
                                    name="description"
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item xs={12} style={{ textAlign: "center" }}>
                              {organizationFeatures.length - 1 === index &&
                                organizationFeatures.length < 4 && (
                                  <Button
                                    type="button"
                                    className={classes.btnAddDes}
                                    onClick={addOrganizationFeatures}
                                  >
                                    + Add 1 More
                                  </Button>
                                )}
                              &nbsp;&nbsp;&nbsp;
                              {organizationFeatures.length !== 1 && (
                                <Button
                                  type="button"
                                  className={classes.btnAddDes}
                                  onClick={() =>
                                    handleOrganizationFeaturesRemove(index)
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
                              router.push("/past-and-upcoming-activities")
                            }
                            // next form api next form
                          >
                            Yes, I want to
                          </Button>
                          <p className={classes.paraText}>Look at other fields and publish</p>
                        </Grid>
                        <Grid item md={5} xs={7}>
                          <Button
                            className={classes.saveDataBtn}
                            onClick={() => router.push("/")}
                            // view portfolio next form
                          >
                            No, will do that later
                          </Button>
                          <Backdrop
                            className={classes.backdrop}
                            // open={open}
                            onClick={() =>
                              router.push("/past-and-upcoming-activities")
                            }
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
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
};

export default Organization;
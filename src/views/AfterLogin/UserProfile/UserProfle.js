import React, { useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Button,
  Box,
  Modal,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import MetaTitle from "../../../components/helper/MetaTitle";
import ShareIcon from "@material-ui/icons/Share";
import Logo from "../../../../public/assets/Images/logo/logo.svg";
import Spinner from "components/organisms/Spinner";
import Updateportfolio from "../../../../public/assets/Images/updateportfolio.png";
import Dashboardviewport from "../../../../public/assets/Images/dashboardviewport.png";
import DashboardHideport from "../../../../public/assets/Images/hideportfolio.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
const accountCard = [
  {
    id: 1,
    title: "View Portfolio",
    subTitle: `View your portfolio information`,
    cardIcon: "",
    cardColor: "#6B705A",
    cardHref: "view-portfolios",
    image: Dashboardviewport,
  },
  {
    id: 2,
    title: "Update Portfolio",
    image: Updateportfolio,
    subTitle: `Update your portfolio information and manage it`,
    cardIcon: "",
    cardColor: "#C74C00",
    cardHref: "update-artist",
  },
  {
    id: 3,
    title: "Hide Portfolio",
    image: DashboardHideport,
    subTitle: `Your portfolio will not be available for viewing. Only you can view and update it.`,
    cardIcon: "",
    cardColor: "#C4C4C4",
    cardHref: "#",
  },
  {
    id: 4,
    title: "Share Portfolio",
    subTitle: `Share your portfolio with peers/friends or while applying to opportunities`,
    cardIcon: <ShareIcon />,
    cardColor: "#F47B20",
    cardHref: "#",
  },
];

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  portfolio: {
    padding: "0px 30px 80px 30px",
  },
  modelBox: {
    background: "#00000052",
    height: "100vh",
  },
  dialogLink: {
    position: "relative",
    width: "100%",
    padding: "10px",
    fontFamily: "Nunito Sans",
    fontSize: "20px",
    fontWeight: "600",
    color: "#212427",
    backgroundColor: "#fff",
    borderRadius: "30px",
    boxShadow: "rgb(0 0 0 / 25%) 0px 4px 10px",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    textAlign: "center",
  },
  dialogContainer: {
    top: "50%",
    position: "absolute",
    left: "50%",
    background: "#fff",
    transform: "translate(-50%, -50%)",
    borderBottom: "40px solid rgb(250, 166, 26)",
    padding: "25px",
  },
  cardData: {
    padding: "10px",
    borderRadius: "30px",
    boxShadow: "0 5px 8px hsl(0deg 0% 0% / 5%)",
    display: "flex",
    width: "100%",
    border: "1px solid #d1d1d185",
    cursor: "pointer",
    alignItems: "center",
    '@media (max-width: 958px)': {
      display: "block",
    }
  },
  cover: {
    width: "25%",
  },
  imageviewPortfolio: {
    position: "relative",
    width: "70px",
    height: " 70px",
    borderRadius: "50%",
    '@media (min-width: 300px) and (max-width: 400px)': {
      width: "50px",
      height: " 50px",
    },
    '@media (min-width: 401px) and (max-width: 600px)': {
      width: "50px",
      height: " 50px",
    }
  },
  imagePortfolio: {
    position: "relative",
    width: "70px",
    height: " 70px",
    borderRadius: "50%",
    border: "0px solid #fff",
    '@media (min-width: 300px) and (max-width: 400px)': {
      width: "50px",
      height: " 50px",
    },
    '@media (min-width: 401px) and (max-width: 600px)': {
      width: "50px",
      height: " 50px",
    }
  },
  circleArea: {
    position: "relative",
    width: "70px",
    height: " 70px",
    borderRadius: "50%",
    textAlign: "center",
    alignItems: "center",
    verticalAlign: " middle",
    display: "flex",
    margin: " 35% auto",
    '@media (min-width: 300px) and (max-width: 400px)': {
      width: "50px",
      height: " 50px",
      "& svg": {
        margin: " 0 -5px !important",
      },
    },
    '@media (min-width: 410px) and (max-width: 600px)': {
      width: "50px",
      height: " 50px",
      "& svg": {
        margin: " 0 -5px !important",
      },
    },
    "& svg": {
      fill: "#fff",
      textAlign: "center",
      margin: " 0 auto",
      width: "65px",
      height: "35px",
    },
  },
  cardContent: {
    position: "relative",
    width: "68%",
    padding: "10px",
    '@media (max-width: 958px)': {
      width: "100%",
      padding: "10px 10px",
    }
  },
  title: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#000",
  },
  subTitle: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontSize: "18px",
    fontWeight: 300,

  },
  cardDataCon: {
    border: "none",
  },
  cardHolder: {
    padding: " 0 40px 40px",
  },
  createPortfolioButton: {
    border: "2px solid #faa61a",
    padding: "6px 60px",
    borderBottom: "2px solid #faa61a !important",
    borderRadius: "30px",
    backgroundColor: "#faa61a",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#faa61a",
    },
  },
  paraDesign: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "27px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.02em",
    marginBottom: "74px",
    color: "#212427",
  },
  hideShow: {
    position: "absolute",
    top: "14px",
    right: "-18px",
    display: "flex",
    '@media (max-width: 958px)': {
      display: 'none',
    }

  },
}));
function UserProfile(props) {
  const classes = useStyles();
  const [openModel, setOpenModel] = useState(false);
  const userID = Cookies.get("id");
  const userName = Cookies.get("name");
  const joinAs = Cookies.get("joinAs");
  const [getCreated, setCreated] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pStatus, setCreatePortfolio] = useState(false);
  const [dStatus, setDraftPortfolio] = useState(false);
  var x =
    `https://api.whatsapp.com/send?text=` +
    `https://beatnik.community/share/artist?id=${userID}&n=${userName}&type=artist`;
  const [userUrl, setUserUrl] = useState(x);
  const [state, setState] = useState({
    checkedC: true,
  });

  const handleClose = (text) => {
    setOpenModel(false);
  };
  const handleChange = () => {
    setOpenModel(true);
  };
  //  to check portfolio created or not

  const checkPortfolio = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=c54b269aecb51b724e6e9f364d58830b80e72584"
    );

    var formdata = new FormData();
    formdata.append("userID", userID);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    const data = await fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_portfolio_artist_status`,
      requestOptions
    )
      .then((response) => response.json())

      .then((responseJson) => {
        if (responseJson.valid === true) {
          setCreated(responseJson.result.message);
          setCreatePortfolio(responseJson.result.data.Pstatus);
          setDraftPortfolio(responseJson.result.data.Dstatus);
        } else {

        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleChangeHideShow = (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("action", `${state.checkedC === false ? "hide" : "true"}`);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_active_deactive_portfolio_by_id`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    checkPortfolio();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  return (
    <div className="medifile_profie">
      <MetaTitle
        title={`Dashboard | Beatnik`}
        metaKeyWord="Dashboard | Beatnik"
        metaDescription="Dashboard | Beatnik"
      />
      {loading ? (
        <>
          {" "}
          <div className="inner_container">
            <div className="medifiles_pannel">
              <div className="medifile_dashboard">
                <h3 className="medifile_head">Portfolio </h3>
                {/* <Breadcrumb url="Dashboard" /> */}
              </div>
            </div>
            <Grid container style={{ justifyContent: "space-between" }}>
              <Grid item lg={12}>
                {pStatus === true ? (
                  <>
                    {dStatus === true ? (
                      <>
                        <div className={classes.cardHolder}>
                          <Grid container spacing={3}>
                            {accountCard.map((card, index) => (
                              <Grid item xs={12} md={6}>
                                <Card
                                  className={classes.cardDataCon}
                                  variant="outlined"
                                >
                                  <Link href={card.cardHref}>
                                    <p className={classes.cardData}>
                                      <div className={classes.cover}>
                                        <div
                                          className={classes.circleArea}
                                          style={{
                                            background: `${card.cardColor}`,
                                          }}
                                        >
                                          {/* {card.cardIcon} */}
                                          {card.id === 2 ? (
                                            <>
                                              <img
                                                className={
                                                  classes.imageviewPortfolio
                                                }
                                                src={card.image}
                                                alt="..."
                                              />
                                            </>
                                          ) : (
                                            card && card.cardIcon
                                          )}

                                          {card.id === 1 ? (
                                            <div>
                                              <img
                                                className={
                                                  classes.imagePortfolio
                                                }
                                                src={card.image}
                                                alt="..."
                                              />
                                            </div>
                                          ) : (
                                            card && card.cardIcon
                                          )}
                                          {card.id === 3 ? (
                                            <div>
                                              <img
                                                className={
                                                  classes.imagePortfolio
                                                }
                                                // src={card.image}
                                                alt="..."
                                              />
                                            </div>
                                          ) : (
                                            card && card.cardIcon
                                          )}
                                        </div>
                                      </div>
                                      <CardContent
                                        className={classes.cardContent}
                                      >
                                        <Typography
                                          className={classes.title}
                                          color="textSecondary"
                                          gutterBottom
                                        >
                                          {card.title}
                                        </Typography>
                                        <Typography
                                          className={classes.subTitle}
                                        >
                                          {card.subTitle}
                                        </Typography>
                                        {card.id === 3 ? (

                                          <>
                                            <FormGroup
                                              className={classes.hideShow}
                                            >
                                              <Typography component="div">
                                                <Grid
                                                  component="label"
                                                  container
                                                  alignItems="center"
                                                  spacing={1}
                                                >
                                                  <Grid item>Hide</Grid>
                                                  <Grid item>
                                                    <AntSwitch
                                                      checked={state.checkedC}
                                                      onChange={
                                                        handleChangeHideShow
                                                      }
                                                      name="checkedC"
                                                    />
                                                  </Grid>
                                                  <Grid item>Show</Grid>
                                                </Grid>
                                              </Typography>
                                            </FormGroup>
                                          </>
                                        ) : null}
                                        {card.id === 4 ? (
                                          <>
                                            <div className="social-share">
                                              <div className="shareMedia">
                                                <MoreVertIcon />
                                                <ul className="shareList">
                                                  <li>
                                                    <Link
                                                      href="https://www.facebook.com/login.php?skip_api_login=1&api_key=140586622674265&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv8.0%2Fdialog%2Fshare%3Fredirect_uri%3Dhttp%253A%252F%252Fs7.addthis.com%252Fstatic%252Fthankyou.html%26display%3Dpopup%26href%3Dhttp%253A%252F%252Fwww.addthis.com%252F%2523.YxCtPW80Y8k.facebook%26client_id%3D140586622674265%26ret%3Dlogin&cancel_url=https%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_GB"
                                                      target="_blank"
                                                    >
                                                      <FacebookIcon className="facebook" />
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link
                                                      href={userUrl}
                                                      target="_blank"
                                                    >
                                                      <TwitterIcon className="TwitterIcon" />
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link href="#">
                                                      <InstagramIcon className="InstagramIcon" />
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link href="https://api.whatsapp.com/send?text=AddThis%20Dashboard%20http%3A%2F%2Fwww.addthis.com%2F%23.YxCrLooIO-I.whatsapp">
                                                      <WhatsAppIcon className="WhatsAppIcon" />
                                                    </Link>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </>
                                        ) : null}
                                      </CardContent>
                                    </p>
                                  </Link>
                                </Card>
                              </Grid>
                            ))}
                          </Grid>
                        </div>
                        ;
                      </>
                    ) : (
                      <>
                        <div className={classes.cardHolder}>
                          <Grid container spacing={3}>
                            {accountCard.map((card, index) => (
                              <Grid item xs={12} md={6}>
                                <Card
                                  className={classes.cardDataCon}
                                  variant="outlined"
                                >
                                  <Link href={card.cardHref}>
                                    <p className={classes.cardData}>
                                      <div className={classes.cover}>
                                        <div
                                          className={classes.circleArea}
                                          style={{
                                            background: `${card.cardColor}`,
                                          }}
                                        >
                                          {/* {card.cardIcon} */}
                                          {card.id === 2 ? (
                                            <>
                                              <img
                                                className={
                                                  classes.imageviewPortfolio
                                                }
                                                src={card.image}
                                                alt="..."
                                              />
                                            </>
                                          ) : (
                                            card && card.cardIcon
                                          )}

                                          {card.id === 1 ? (
                                            <div>
                                              <img
                                                className={
                                                  classes.imagePortfolio
                                                }
                                                src={card.image}
                                                alt="..."
                                              />
                                            </div>
                                          ) : (
                                            card && card.cardIcon
                                          )}
                                          {card.id === 3 ? (
                                            <div>
                                              <img
                                                className={
                                                  classes.imagePortfolio
                                                }
                                                src={card.image}
                                                alt="..."
                                              />
                                            </div>
                                          ) : (
                                            card && card.cardIcon
                                          )}
                                        </div>
                                      </div>
                                      <CardContent
                                        className={classes.cardContent}
                                      >
                                        <Typography
                                          className={classes.title}
                                          color="textSecondary"
                                          gutterBottom
                                        >
                                          {card.title}
                                        </Typography>
                                        <Typography
                                          className={classes.subTitle}
                                        >
                                          {card.subTitle}
                                        </Typography>
                                        {card.id === 3 ? (
                                          <>
                                            <FormGroup
                                              className={classes.hideShow}
                                            >
                                              <Typography component="div">
                                                <Grid
                                                  component="label"
                                                  container
                                                  alignItems="center"
                                                  spacing={1}
                                                >
                                                  <Grid item>Hide</Grid>
                                                  <Grid item>
                                                    <AntSwitch
                                                      checked={state.checkedC}
                                                      onChange={
                                                        handleChangeHideShow
                                                      }
                                                      name="checkedC"
                                                    />
                                                  </Grid>
                                                  <Grid item>Show</Grid>
                                                </Grid>
                                              </Typography>
                                            </FormGroup>
                                          </>
                                        ) : null}
                                        {card.id === 4 ? (
                                          <>
                                            <div className="social-share">
                                              <div className="shareMedia">
                                                <MoreVertIcon />
                                                <ul className="shareList">
                                                  <li>
                                                    <Link
                                                      href="https://www.facebook.com/login.php?skip_api_login=1&api_key=140586622674265&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv8.0%2Fdialog%2Fshare%3Fredirect_uri%3Dhttp%253A%252F%252Fs7.addthis.com%252Fstatic%252Fthankyou.html%26display%3Dpopup%26href%3Dhttp%253A%252F%252Fwww.addthis.com%252F%2523.YxCtPW80Y8k.facebook%26client_id%3D140586622674265%26ret%3Dlogin&cancel_url=https%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_GB"
                                                      target="_blank"
                                                    >
                                                      <FacebookIcon className="facebook" />
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link
                                                      href={userUrl}
                                                      target="_blank"
                                                    >
                                                      <TwitterIcon className="TwitterIcon" />
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link href="#">
                                                      <InstagramIcon className="InstagramIcon" />
                                                    </Link>
                                                  </li>
                                                  <li>
                                                    <Link href="https://api.whatsapp.com/send?text=AddThis%20Dashboard%20http%3A%2F%2Fwww.addthis.com%2F%23.YxCrLooIO-I.whatsapp">
                                                      <WhatsAppIcon className="WhatsAppIcon" />
                                                    </Link>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </>
                                        ) : null}
                                      </CardContent>
                                    </p>
                                  </Link>
                                </Card>
                              </Grid>
                            ))}
                          </Grid>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {/* P is false  */}
                    {dStatus === true ? (
                      <>
                        {" "}
                        <div className={classes.cardHolder}>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Card
                                className={classes.cardDataCon}
                                variant="outlined"
                              >
                                <Link href="/view-portfolios">
                                  <p className={classes.cardData}>
                                    <div className={classes.cover}>
                                      <div
                                        className={classes.circleArea}
                                        style={{
                                          background: "#6B705A",
                                        }}
                                      >
                                        <div>
                                          <img
                                            className={classes.imagePortfolio}
                                            src={Dashboardviewport}
                                            alt="..."
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <CardContent
                                      className={classes.cardContent}
                                    >
                                      <Typography
                                        className={classes.title}
                                        color="textSecondary"
                                        gutterBottom
                                      >
                                        View Portfolio
                                      </Typography>
                                      <Typography className={classes.subTitle}>
                                        View your portfolio information
                                      </Typography>
                                    </CardContent>
                                  </p>
                                </Link>
                              </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Card
                                className={classes.cardDataCon}
                                variant="outlined"
                              >
                                <Link href="/update-artist">
                                  <p className={classes.cardData}>
                                    <div className={classes.cover}>
                                      <div
                                        className={classes.circleArea}
                                        style={{
                                          background: "#C74C00",
                                        }}
                                      > <img
                                          className={classes.imagePortfolio}
                                          src={Updateportfolio}
                                          alt="..."
                                        />
                                        <div>
                                          <img
                                            className={classes.imagePortfolio}
                                            src={Updateportfolio}
                                            alt="..."
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <CardContent
                                      className={classes.cardContent}
                                    >
                                      <Typography
                                        className={classes.title}
                                        color="textSecondary"
                                        gutterBottom
                                      >
                                        Complete Portfolio
                                      </Typography>
                                      <Typography className={classes.subTitle}>
                                        Complete your portfolio information and
                                        manage it
                                      </Typography>
                                    </CardContent>
                                  </p>
                                </Link>
                              </Card>
                            </Grid>
                          </Grid>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={classes.portfolio}>
                          <p className={classes.paraDesign}>
                            Create a professional portfolio to showcase your
                            work and share your artistic practice with thousands
                            of artists around the world
                          </p>
                          <Button
                            variant="contained"
                            onClick={handleChange}
                            className={classes.createPortfolioButton}
                          >
                            Create Portfolio
                          </Button>
                        </div>
                      </>
                    )}
                  </>
                )}
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}

      <Modal
        className={classes.modelBox}
        open={openModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={12} className={classes.dialogInner}>
          <div className={classes.dialogContainer}>
            <div className={classes.cp_modal_body}>
              <div className="d-flex justify-content-center">
                <div>
                  <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: "10%" }}
                  >
                    {" "}
                    <img src={Logo} alt="logo" />
                  </div>
                  <Typography
                    className={classes.typo_design}
                    style={{
                      fontFamily: "Nunito Sans",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "119%",
                      padding: "25px",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                      color: "#000000",
                    }}
                  >
                    You want to create portfolio as ?
                  </Typography>

                  <div
                    className="row justify-content-center p-4"
                    style={{ marginBottom: "10%" }}
                  >
                    <div
                      className="col-md-5"
                      style={{ marginRight: "25px", marginBottom: "10%" }}
                    >
                      <Link
                        href="/artist-portfolio"
                        className={classes.dialogPath}
                      >
                        <p className={classes.dialogLink}>Artist</p>
                      </Link>
                    </div>

                    <div
                      className="col-md-5"
                      style={{ marginRight: "25px", marginBottom: "10%" }}
                    >
                      <Link
                        href="/art-space-portfolio"
                        className={classes.dialogPath}
                      >
                        <p className={classes.dialogLink}> Organization</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default UserProfile;

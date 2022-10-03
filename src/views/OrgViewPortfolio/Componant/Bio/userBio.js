import React, { useState, useEffect } from "react";
import { Container, Paper, Grid, makeStyles } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./bio.module.css";
import Cookies from "js-cookie";
import clsx from "clsx";
import FooterLogo from "../../../../../public/assets/Images/common/FooterLogo.svg";
import Facebook from "../../../../../public/assets/Images/socialmedia/facebook.svg";
import Twitter from "../../../../../public/assets/Images/socialmedia/twitter.svg";
import Instagram from "../../../../../public/assets/Images/socialmedia/instagram.svg";
import uparrow from "../../../../../public/assets/Images/logo/uparrow.svg";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Hill House !important",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "64px",
    lineHeight: "65px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#000",
    '@media (min-width: 300px) and (max-width: 400px)': {
      fontSize: "25px !important",
      lineHeight: "50px",
    },
    '@media (min-width: 401px) and (max-width: 600px) ': {
      fontSize: "25px !important",
      lineHeight: "50px",
    },
  },
  bioDescription: {
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.02em",
    color: "#212427",
    width: "95%",
    margin: "50px auto",
    textAlign: "justify",
  },
}));
function UserBio() {
  const classes = useStyles();
  const [getBio, setBio] = useState("");
  const [getSocialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    const userID = Cookies.get("id");
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=53cd7e4df10209638906cbceefe0b33dd3f7d309"
    );

    var formdata = new FormData();
    formdata.append("userID", userID);
    formdata.append("action", "saved");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://app.whyuru.com/api/beatnik_portfolio_org_show",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);
        } else {
          setSocialMedia(JSON.parse(responseJson.result.data.socialLink));
          var bioData = responseJson.result.data.bio;
          setBio(bioData);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <section maxWidth="xl" id="Bio">
      <Grid spacing={4} className={clsx(styles.Bio_cover, "mx-2")}>
        <Grid spacing={1} container className="mt-5">
          <Grid md={12}>
            <div className="p-3">
              <h1 className={classes.heading}>Bio</h1>
              <div className="d-flex justify-content-center">
                {getSocialMedia &&
                  getSocialMedia.map((data, index) => (
                    <div className="p-2">
                      <a href={data.link} target="_blank" title="Soundcloud">
                        {data.choosePlatform === "Instagram" ? (
                          <>
                            <img
                              class="socialicon"
                              src={Instagram}
                              height="20"
                              width="20"
                              alt="Instagram"
                            />
                          </>
                        ) : null}

                        {data.choosePlatform === "Facebook" ? (
                          <>
                            <img
                              class="socialicon"
                              src={Facebook}
                              height="20"
                              width="20"
                              alt="Facebook"
                            />
                          </>
                        ) : null}
                        {data.choosePlatform === "Twitter" ? (
                          <>
                            <img
                              class="socialicon"
                              src={Twitter}
                              height="20"
                              width="20"
                              alt="Twitter"
                            />
                          </>
                        ) : null}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <div className={classes.bioDescription}>
              {getBio}
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "30px" }}
      >
        <p>
          Scroll back to top <img src={uparrow} alt="..." />
        </p>
      </div>

      <div className="mt-3">
        <img src={FooterLogo} alt="..." style={{ width: "100%" }} />
      </div>
    </section>
  );
}

export default UserBio;

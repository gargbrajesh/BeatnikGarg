import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./bio.module.css";
import Cookies from "js-cookie";
import clsx from "clsx";
import FooterLogo from "../../../../../public/assets/Images/common/FooterLogo.svg";
import Facebook from "../../../../../public/assets/Images/socialmedia/facebook.svg";
import Twitter from "../../../../../public/assets/Images/socialmedia/twitter.svg";

import Instagram from "../../../../../public/assets/Images/socialmedia/instagram.svg";
import uparrow from "../../../../../public/assets/Images/logo/uparrow.svg";

function Bio() {
  const [getBio, setBio] = useState("");
  const userID = Cookies.get("id");
  const [getSocialMedia, setSocialMedia] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=c3768cfbd1cbf3a16a1adf4bac6f99b38e08d3e3"
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
      process.env.NEXT_PUBLIC_USER_API_URL + `/beatnik_portfolio_artist_show`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);
        } else {
          var bioData = responseJson.result.data.bio;
          setSocialMedia(JSON.parse(responseJson.result.data.socialLink));
          setBio(bioData);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <section id="Bio">
      <Grid spacing={1} container className="mt-5">
        <Grid md={12}>
          <h1 className={styles.heading}>Bio</h1>
          <div class="container">
        <div className="d-flex justify-content-center">
          {getSocialMedia && getSocialMedia.map((data, index) => (
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
        <Grid md={12}>
          <p className={clsx(styles.para)}>{getBio}</p>
        </Grid>
      </Grid>
      <div className="d-flex justify-content-center">
        <p>
          Scroll back to top <img src={uparrow} alt="..." />
        </p>
      </div>
    

      <div className="mt-5">
        <img src={FooterLogo} alt="..." style={{ width: "100%" }} />
      </div>
    </section>
  );
}

export default Bio;

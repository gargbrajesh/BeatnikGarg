import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  artWork_cover: {
    width: "100%",
    height: "auto",
    marginTop: "5% !important",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px !important",
    background: "#212427",
  },
  heading: {
    fontFamily: "Hill House !important",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "64px",
    lineHeight: "65px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "white",
    marginBottom:'40px'
  },
}));
function Gallary() {
  const classes = useStyles();
  const [getGallary, setGallary] = useState([]);
  const userID = Cookies.get("id");

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
          var gallaryItem = JSON.parse(responseJson.result.data.gallery);
          setGallary(gallaryItem);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <section id="Gallery">
      <Grid className={classes.artWork_cover}>
        <div className="p-3">
          <h1 className={classes.heading}>Gallery</h1>
        </div>

        <Grid container>
          {getGallary.map((img, index) => (
            <Grid item md={4}>
              <img
                src={img}
                alt="Gallary"
                style={{ width: "100%", height: "340px" }}
                enableLightbox={true}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  );
}

export default Gallary;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Cookies from "js-cookie";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  googleBtn: {
    position: "relative",
    background: "#fff",
    boxShadow: "3px 5px 10px #0000004d",
    borderRadius: "30px",
    overflow: "hidden",
    padding: "8px",
    "& > div > div > div ": {
      // position: 'relative !important',
      border: "none !important",
      textAlign: "center !important",
      width: "100% !important",
      margin: "0 auto !important",
    },
    "@media (min-width: 320px) and (max-width:375px)": {
      width: "70%",
      padding: "0px",
      fontSize: "12px",
      marginLeft: "40px",
    },
    "@media (min-width: 376px) and (max-width:458px)": {
      width: "60%",
      padding: "0px 0px",
      marginLeft: "60px",
    },
    "@media(min-width: 667px) and (max-width: 1024px)": {
      width: "100%",
      padding: "0px 0px !important",
    },
    "@media(min-width: 1025px) and (max-width: 1440px)": {
      width: "90%",
      padding: "0px 0px !important",
    },
  },
}));
function GoogleLogin() {
  const [nameGoogle, setnameGoogle] = useState("");
  const [idGoogle, setidGoogle] = useState("");
  const [googleLOginResult, setGoogleLoginResult] = useState();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://accounts.google.com/gsi/client";
    script.async = false;

    document.body.appendChild(script);

    setTimeout(() => {
      window.google.accounts.id.initialize({
        client_id:
          "899372758468-0t4046ri8pn4iut2up34uvvja41gapbt.apps.googleusercontent.com",
        callback: onResponse,
        auto_select: false,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("showLoginButton"),

        {
          theme: "outline",
          size: "large",
          text: "",
          width: "180",
          redius: "0",
        } // customization attributes
      );
    }, 1000);
  });
  const onResponse = async (res) => {
    console.log(res.credential);
    apiGetGoogleInfo(res.credential);
  };

  const apiGetGoogleInfo = async (googleID) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=408f2edd7b13ace3ae508e93b84e9747e0608a74"
    );

    var requestOptions = {
      method: "GET",
      // body: formdata,
      headers: {
        "user-agent": "Mozilla/4.0 MDN Example",
        "content-type": "application/json",
      },
      redirect: "follow",
    };

    fetch(`https://beatnik.community/google?token=${googleID}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result != null) {
          setnameGoogle(result.name);
          setidGoogle(result.email);
          apiGoogle(result.email, result.name);
          Cookies.set("google_name", result.name);
          Cookies.set("google_id", result.email);
          console.log(result.email, result.name);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const apiGoogle = (email, name) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=f8d4b339983719043172e8c61fd7f0f6a45bbbfd"
    );

    var formdata = new FormData();
    formdata.append("action", "signup");
    formdata.append("email", Cookies.get("google_id"));
    formdata.append("name", Cookies.get("google_name"));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_USER_API_URL +
        `/socialMediaLoginAndSignup_beatnik`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader

        console.log(responseJson);
        if (responseJson.valid === false) {
          alert("Some errors");
        } else {
          setGoogleLoginResult(responseJson.result.message);
          if (googleLOginResult === "email already exists") {
            Cookies.set("id", responseJson.result.data.id);
            Cookies.set("name", responseJson.result.data.name);
            Cookies.set("email", responseJson.result.data.email);
            Router.push({
              pathname: "/account",
            });
          } else {
            Cookies.set("id", responseJson.result.data.id);
            Cookies.set("name", responseJson.result.data.name);
            Cookies.set("email", responseJson.result.data.email);

            Router.push({
              pathname: "/account",
            });
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div id="showLoginButton"></div>
    </>
  );
}

export default GoogleLogin;

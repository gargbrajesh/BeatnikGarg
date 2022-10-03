import React, { useState } from "react";
import { useRouter } from "next/router";
import "react-multi-carousel/lib/styles.css";
import FacebookLogin from "react-facebook-login";
import styles from "../../SignUpCover.module.css";
import Cookies from "js-cookie";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  btnFacebook: {
    position: "relative",
    background: "#fff",
    boxShadow: "3px 5px 10px #0000004d",
    // borderRadius: "30px",
    overflow: "hidden",
    width: "100%",
    padding: "17px !important",
    border: "0px",
  },
});
function FaceBookLogin() {
  const classes = useStyles();
  const [login, setLogin] = useState(false);
  const [nameFacebook, setnameFacebook] = useState("");
  const [idFacebook, setidFacebook] = useState("");
  const responseFacebook = (response) => {
    console.log(response);

    if (response.accessToken != null) {
      setnameFacebook(response.name);
      setidFacebook(response.userId);
      Cookies.set("fbName", response.name);
      Cookies.set("fbEmail", response.userId);
      console.log("fbName", response.name);
      console.log("fbEmail", response.userId);
      apiFacebook();
    }
  };
  const apiFacebook = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "ci_session=f8d4b339983719043172e8c61fd7f0f6a45bbbfd"
    );

    var formdata = new FormData();
    formdata.append("action", "signup");
    formdata.append("email", Cookies.get("fbEmail"));
    formdata.append("name", Cookies.get("fbName"));

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
          alert("Can't fetch email");
        } else {
          if (responseJson.result.message === "email already exists") {
            alert("Email already exist");
          } else {
            Cookies.set("id", responseJson.result.data.id);
            Cookies.set("name", responseJson.result.data.name);
            Cookies.set("email", responseJson.result.data.email);

            return router.push({
              pathname: "/account",
            });
          }
        }
      })
      .catch((error) => console.log("error", error));
  };
  const router = useRouter();

  return (
    <>
      {!login && (
        <FacebookLogin
          appId="556082989553906"
          autoLoad={false}
          buttonText="Login "
          cssClass={styles.btnFacebook}
          callback={responseFacebook}
          icon={<i className="fa fa-facebook"></i>}
          textButton="&nbsp;&nbsp;Sign In with Facebook"
        />
      )}
      {login &&
        router.push({
          pathname: "/dashboard",
        })}
    </>
  );
}

export default FaceBookLogin;

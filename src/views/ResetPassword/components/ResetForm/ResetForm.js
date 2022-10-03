import React, { useState } from "react";
import styles from "../../../SignInCover/SigninCover.module.css";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import {TextField, makeStyles, Select } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  form_control_lg: {
    width: "100%",
    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
      transform: "translate(36px, -8px) scale(0.75)",
      background: "#fff",
      padding: "0 10px",
      color: "#FAA61A",
    },
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      backgroundColor: " #fff",
      borderRadius: "30px",
      border: " 2px solid #888888",
      borderBottom: " 2px solid #888888 !important",
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
      padding: "8px 20px 12px 25px !important",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(20px, 12px) scale(1)",
    },
  },
  mobileCode: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: " #fff",
    borderRadius: "30px",
    border: " 2px solid #888888",
    borderBottom: " 2px solid #888888 !important",
    width: "120px",
    padding: "4px 15px 4px 15px !important",
  },
  mobileNumber: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: " #fff",
    borderRadius: "30px",
    border: " 2px solid #888888",
    borderBottom: " 2px solid #888888 !important",
    width: "90%",
    marginLeft: "20px",
    padding: "4px 20px 4px 25px !important",
  },
  createAcc: {
    backgroundColor: " #faa61a",
    borderRadius: "30px",
    border: " 2px solid #888888",
    borderBottom: " 2px solid #888888 !important",
    padding: "5px 60px",
    marginTop: "35px",
    "&:hover": {
      backgroundColor: " #faa61a",
    },
  },
  resetBtn:{
    fontSize: '20px',
    color: '#ffffff',
    background: '#FAA61A',
    height: '40px',
    lineHeight:' 40px',
    padding: '0 10px',
    borderRadius: '30px',
    textTransform: 'capitalize',
    zIndex: 1,
    overflow: 'hidden',
    width: '30%',
    alignItems: 'flex-start',
    '@media screen and (max-width: 600px)':{
      width: '50%',
    }
  }
}));

const ResetForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const router = useRouter();
  //const [passsword, setPasssword] = useState();
  const [message, setMessage] = useState();
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "ci_session=49fe10b4cceee7e74b43eb3c532e8afda6658230"
  );
  const UserLogin = async (e) => {
    var formdata = new FormData();
    formdata.append("mail", email);
    localStorage.setItem("email", email);
    // formdata.append('password', passsword);

    e.preventDefault();
    fetch("https://app.whyuru.com/api/checkMailAndSendOTP_beatnik", {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader

        console.log(responseJson.valid);
        if (responseJson.valid == false) {
          alert("Email not valid");

          // return router.push({
          //   pathname: '/signin',
          // })
          // return;
        } else {
          alert(responseJson.result.message);

          localStorage.setItem("otp", responseJson.result.otp);

          return router.push({
            pathname: "/",
          });
        }
      })
      .catch((error) => {
        //Hide Loader
        // alert("Invalid credential ");

        console.log(error);
      });
  };
  return (
    <div>
      <div className={styles.sign__wrapper}>
        <div className={styles.sign__input_wrapper}>
          <div className="form-outline mb-3">
                  <TextField
                    id="email"
                    type="email"
                    variant="filled"
                    label="Email ID"
                    className={classes.form_control_lg}
                    name="email"
                    size="small"
                    onChange={(e) => setEmail(e.target.value)}
                   
                  />
                </div>

        </div>

        <div className={styles.sign__action}>
          <div className={styles.sign__agree}>
            <small>
              <em>We will send passsword rest link to your email.</em>
            </small>
          </div>
        </div>

        <Button
          fullWidth
          variant="contained"
          className={classes.resetBtn}
          onClick={UserLogin}
        >
          <span>Reset</span>
        </Button>
      </div>
    </div>
  );
};

export default ResetForm;

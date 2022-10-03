import React, { useState } from 'react';
// import styles from './../../../SigninCover/SigninCover.module.css';
import styles from '../../NewPassSet.module.css'

import Link from 'next/link';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import { TextField, makeStyles, Select } from "@material-ui/core";
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
}));
const NewPassForm = () => {
  const classes = useStyles();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [message, setMessage] = useState();
  // var formdata = new FormData();
  const router = useRouter();
  var myHeaders = new Headers();
  myHeaders.append(
    'Cookie',
    'ci_session=49fe10b4cceee7e74b43eb3c532e8afda6658230',
  );
  const NewPass = async e => {
    if (password == cpassword) {
      var formdata = new FormData();
      const newEmail = localStorage.getItem('email')
      formdata.append('mail', newEmail);
      formdata.append('password', password);
      e.preventDefault();

      fetch('https://app.whyuru.com/api/resetPassword_beatnik', {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader

          console.log(responseJson.valid);
          if (responseJson.valid == false) {
            alert(responseJson.result.message);

            // return router.push({
            //   pathname: '/signin',
            // })
            // return;
          } else {
            alert(responseJson.result.message);
            return router.push({
              pathname: '/signin',
            })
          }

        })
        .catch((error) => {

          console.log(error);
        });
    } else {
      alert('password doesnot match');
    }

  };
  return (
    <div>
      <div className={styles.sign__wrapper}>
        <div className={styles.sign__input_wrapper}>
          <TextField
            id="password"
            type="password"
            variant="filled"
            label="Password"
            className={classes.form_control_lg}
            name="password"
            size="small"
            onChange={e => setPassword(e.target.value)}
          />

          <br />
          <br />
          <TextField
            id="password"
            type="password"
            variant="filled"
            label="Confirm Password"
            className={classes.form_control_lg}
            name="cpassword"
            size="small"
            onChange={e => setCpassword(e.target.value)}
          />

        </div>

        <Button
          variant="contained"
          color="primary"
          className={styles.signup_btn2}
          onClick={NewPass}
          style={{ width: '40% !important' }}
        >
          <Link href="/forgot-password">
            <span> Set Password</span>
          </Link>
        </Button>
        {/*<div className={styles.sign__new}>
          <p>
            <Link href="" onClick={() => router.back()}>
              <p>Go Back</p>
            </Link>
          </p>
        </div>*/}

      </div>
    </div>
  );
};

export default NewPassForm;

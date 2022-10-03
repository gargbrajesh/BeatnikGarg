import React, { useState, useEffect } from "react";
import styles from "./Awards.module.css";
import Cookies from "js-cookie";
import link from "../../../../../public/assets/Images/common/linkImg.svg";
import { Container } from "@material-ui/core";
function Awards() {
  const [answer, setAnswer] = useState([]);

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
          var y = JSON.parse(responseJson.result.data[0].awards);
          setAnswer(y);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <section id="Awards" className="mx-3">
      <Container spacing={4} maxWidth="xl">
        <div>
          <h1 className={styles.heading}>Awards and Press mentions</h1>
        </div>

        {answer.map((answer, index) => (
          <div
            className="row my-3"
            style={{
              background: "rgba(229, 229, 229, 0.42)",
              padding: "2%",
              marginTop: "-2%",
            }}
          >
            <div className="col-6">
              <p className={styles.typo1}>
                {answer.title}{" "}
                <a href={answer.link}>
                  <img src={link} alt="..." />
                </a>{" "}
              </p>
            </div>
            <div className="col-6">
              <p className={styles.yearTypo}>{answer.year.split("-")[0]}</p>
            </div>
            <div className="row">
              {" "}
              <p className={styles.para1}>{answer.organization}</p>
            </div>
            <div className="row">
              {" "}
              <p className={styles.para1}>{answer.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Awards;

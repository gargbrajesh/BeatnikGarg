import React, { useState, useEffect } from 'react';
import styles from './otherWork.module.css';
import { Paper, } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Cookies from 'js-cookie'
function OtherWork() {

    var myHeaders = new Headers();
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=53cd7e4df10209638906cbceefe0b33dd3f7d309");

    var formdata = new FormData();
    formdata.append("userID",  userID);
    formdata.append("action", "saved");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };


    fetch("https://app.whyuru.com/api/beatnik_portfolio_org_show", requestOptions)
    .then(response => response.json())
    .then((responseJson) => {
       
        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);

        
        } else {

        //   alert(responseJson.result.message);
        //   return router.push({
        //     pathname: '/dashboard',
        //   })
        }

      })
        .catch(error => console.log('error', error));
    return (
        <section className={styles.artWork_cover} id="otherwork">
            <h1 className={styles.heading}>OTHER ART WORK</h1>

            <div className={styles.float_container}>
                <Paper elevation={2} className={styles.paper_cover}>
                    <h3 className="mx-5">My Dance performance at Shiamak Davar International</h3>
                    <div className="overflow-auto mx-5 mt-4" style={{ height: 'auto' }}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                    <div className={styles.float_container}>
                        <div className={styles.float_child1}>
                            <input type='text' className={styles.float_link1} />
                            <button type="button" className="btn btn-warning mx-4">go</button>
                        </div>
                        <div className={styles.float_child2}>
                            <input type='text' className={styles.float_link1} />
                            <button type="button" className="btn btn-warning mx-4">go</button>
                        </div>
                    </div>

                </Paper>
            </div>
        </section>
    )
}

export default OtherWork

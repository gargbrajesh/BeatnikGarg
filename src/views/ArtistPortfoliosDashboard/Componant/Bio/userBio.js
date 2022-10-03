import React, { useState, useEffect } from 'react';
import { Container, Paper, Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './bio.module.css';
import Cookies from 'js-cookie';
import clsx from "clsx";
import FooterLogo from '../../../../../public/assets/Images/common/FooterLogo.svg'
import faceBookIcon from '../../../../../public/assets/Images/socialmedia/facebook.svg';
import twitter from '../../../../../public/assets/Images/socialmedia/twitter.svg';
import LinkedIn from '../../../../../public/assets/Images/socialmedia/LinkedIn.svg';
import youtube from '../../../../../public/assets/Images/socialmedia/youtube.svg';
import instagram from '../../../../../public/assets/Images/socialmedia/instagram.svg';
import uparrow from '../../../../../public/assets/Images/logo/uparrow.svg';

function UserBio() {

    const [bio, setBio] = useState('');
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=c3768cfbd1cbf3a16a1adf4bac6f99b38e08d3e3");

    useEffect(() => {
        const userID = Cookies.get('userID');
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "ci_session=c3768cfbd1cbf3a16a1adf4bac6f99b38e08d3e3");

        var formdata = new FormData();
        formdata.append("userID", userID);
        formdata.append("action", "saved");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch( process.env.NEXT_PUBLIC_USER_API_URL +`/beatnik_portfolio_artist_show`, requestOptions)
            .then(response => response.json())
            .then((responseJson) => {

                console.log(responseJson);
                if (responseJson.valid == false) {
                    alert(responseJson.result.message);

                } else {

                    //   alert(responseJson.result.message);
                    var y = responseJson.result.data[0].bio;
                    setBio(y);
                }

            })
            .catch(error => console.log('error', error));
    }, []);
    return (
        <section id="Bio">
            <Container spacing={1} maxWidth="xl">

                <Grid spacing={1} container className='mt-5'>
                    <Grid md={12}>
                        <div className="p-3" ><h1 className={styles.heading}>Bio</h1></div>
                    </Grid>
                </Grid>

                <Grid container >
                    <Grid md={12}>
                        <p className={clsx(styles.para, 'p-5')}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Minus fugiat sed, asperiores officiis nihil earum aliquam voluptatum.
                            Vero enim labore explicabo aperiam deleniti facere! Explicabo similique,
                            odit soluta, odio voluptatum quae,
                            nesciunt laborum doloribus voluptatem velit perspiciatis earum repudiandae dolores magni incidunt?
                            Quam maiores cupiditate culpa officia itaque ipsum saepe!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Minus fugiat sed, asperiores officiis nihil earum aliquam voluptatum.
                            Vero enim labore explicabo aperiam deleniti facere! Explicabo similique,
                            odit soluta, odio voluptatum quae,
                            nesciunt laborum doloribus voluptatem velit perspiciatis earum repudiandae dolores magni incidunt?
                            Quam maiores cupiditate culpa officia itaque ipsum saepe!
                        </p>
                    </Grid>
                </Grid>
                <div className='d-flex justify-content-center'>
                    <p>Scroll back to top <img src={uparrow}  alt='...' /></p>
                </div>
                <div class="container">
                    <div className='d-flex justify-content-center'>

                        <div className='p-2'>
                             <a href="https://soundcloud.com/iamartwrk/" target="new" title="Soundcloud">
                            <img class="socialicon" src={faceBookIcon} height="20" width="20" /> </a></div>


                        <div className='p-2'>
                            <a href="https://soundcloud.com/iamartwrk/" target="new" title="Soundcloud">
                            <img class="socialicon" src={twitter} height="20" width="20" /> </a></div>


                        <div className='p-2'>
                            <a href="https://soundcloud.com/iamartwrk/" target="new" title="Soundcloud">
                            <img class="socialicon" src={instagram} height="20" width="20" /> </a>
                        </div>


                        <div className='p-2'>
                            <a href="https://soundcloud.com/iamartwrk/" target="new" title="Soundcloud">
                            <img class="socialicon" src={youtube} height="20" width="20" /> </a>

                        </div>

                        <div className='p-2'>
                            <a href="https://soundcloud.com/iamartwrk/" target="new" title="Soundcloud">
                            <img class="socialicon" src={LinkedIn} height="20" width="20" /> </a>
                        </div>

                    </div>
                </div>

                <div className='mt-5'>
                    <img src={FooterLogo} alt='...' style={{ width: '100%' }} />
                </div>

            </Container>
        </section>
    )
}

export default UserBio


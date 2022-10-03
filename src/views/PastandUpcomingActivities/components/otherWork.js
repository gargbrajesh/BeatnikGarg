import React, { useState } from 'react';

import styles from "../design.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie'

function OtherWork() {

    const otherWorkTemplate = { title: '', link: '', description: '' };
    const [otherWorks, setOtherWorks] = useState([otherWorkTemplate]);
    const addOtherWork = () => {
        setOtherWorks([...otherWorks, otherWorkTemplate])
    };
    const changeOtherWorkHadler = (e, index) => {
        const updatedOtherWork = otherWorks.map((otherWork, i) =>
            index == i ? Object.assign(otherWork, { [e.target.name]: e.target.value }) : otherWork
        );
        setOtherWorks(updatedOtherWork);
    };

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=f4d4f044765505d314ca6356aab65f6f99a606b2");



    const userID = Cookies.get('id');
    const mydata = JSON.stringify(otherWorks);
    
    const DataPost = () => {
        var formdata = new FormData();
        formdata.append('userID', userID);
        formdata.append('awards_one', JSON.stringify(otherWorks[0]));
        formdata.append('awards_two', JSON.stringify(otherWorks[1]));
        formdata.append('add_flag', 'save');
        formdata.append('action', 'screenTwo');
        // e.preventDefault();
        fetch('https://app.whyuru.com/api/beatnik_portfolio_artist_add_edit', {
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
                } else {
                    alert(responseJson.result.message);
                    console.log(responseJson);
                    alert(JSON.stringify(responseJson.result.data));
                }

            })
            .catch((error) => {

                console.log(error);
            });

    }

    return (
        <section className={styles.wrap}>

            <div className="container p-2 bg-white overflow-auto">

                <div className={styles.ac_input_item}>
                    <h2 style={{ color: '#FAA61A', fontFamily: 'Garamond', marginLeft: '20px', textDecoration: 'underLine' }}>Other Work (optional)</h2>
                </div>

                {
                    otherWorks.map((user, index) => (
                        <div key={index}>

                            <div className="form-row ms-4 d-flex p-2">
                                <div className="form-group col-md-6 p-2">
                                    <label className="form-label" for="title">Title</label>
                                    <input type="text" id="title" name='title' onChange={e => changeOtherWorkHadler(e, index)} className={styles.form_control_lg} />
                                </div>
                                <div className="form-group col-md-6 p-2">
                                    <label className="form-label" for="link">Link</label>
                                    <input type="text" id="link" name='link' onChange={e => changeOtherWorkHadler(e, index)} className={styles.form_control_lg} />
                                </div>
                            </div>
                            <div className="form-row ms-4 d-flex p-2">
                                <div className="col-md-12 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="description">Description</label>

                                        <textarea class="form-control border-dark"
                                            name='description' id="descriptionTextarea1"
                                            rows="3"
                                            onChange={e => changeOtherWorkHadler(e, index)}
                                            className={styles.form_control_lg}
                                            style={{
                                                borderRadius: '4px'
                                                , color: 'black',
                                                borderWidth: '0 0 2px',

                                            }}
                                        ></textarea>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
                <div className="d-flex justify-content-center p-3">
                    <Button type="button" className="btn text-white "
                        onClick={addOtherWork} style={{
                            background: '#FAA61A',
                            borderRadius: '20px', width: '150px', border: 'none'
                        }}>+ Add 1 More</Button>
                </div>
               
            </div>

        </section>
    )
}

export default OtherWork

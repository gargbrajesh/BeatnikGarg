import React, { useState, useEffect } from 'react';
import styles from "../design.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie'

function Training() {

    // taining state manage here
        const trainingTemplate = { schoolName: '', course: '', city: '', year: '' };
        const [trainings, setTrainging] = useState([trainingTemplate]);
        const addTrainingHadler = () => {
            setTrainging([...trainings, traningTemplate])
        };
        const changeTrainingHadler = (e, index) => {
            const updatedTraining = trainings.map((training, i) =>
                index == i ? Object.assign(training, { [e.target.name]: e.target.value }) : traning
            );
            setTrainging(updatedTraining);
        };
 // taining end

  // taining state manage here
    const DataPost = () => {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "ci_session=f4d4f044765505d314ca6356aab65f6f99a606b2");

        const userID = Cookies.get('userID');
        const mydata = JSON.stringify(users);

        var formdata = new FormData();
        formdata.append('userID', userID);
        formdata.append('training_one', JSON.stringify(users[0]));
        formdata.append('training_two', JSON.stringify(users[1]));
        formdata.append("action", "screenTwo");
        formdata.append("add_flag", "save");
        // e.preventDefault();
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://app.whyuru.com/api/beatnik_portfolio_artist_add_edit", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


    }


    return (
        <section className={styles.wrap}>

            <div className="container p-2 bg-white overflow-auto">

                <div className={styles.ac_input_item}>
                    <h2 style={{ color: '#FAA61A', fontFamily: 'Garamond', marginLeft: '20px', textDecoration: 'underLine' }}>Training</h2>
                </div>

                {
                    tranings.map((training, index) => (
                        <div key={index}>
                            <div className="form-row ms-4 d-flex p-2">
                                <div className="form-group col-md-6 p-2">
                                    <div className="form-outline">
                                        <label className="form-label" for="course">Course Title</label>
                                        <input type="text" id="course" name='course' className={styles.form_control_lg} onChange={e => changeTrainingHadler(e, index)} />

                                    </div>
                                </div>
                                <div className="form-group col-md-6 p-2">
                                    <div className="form-outline">
                                        <label className="form-label" for="schoolName">Institution</label>
                                        <input type="text" id="schoolName" onChange={e => changeTrainingHadler(e, index)} name='schoolName' className={styles.form_control_lg} />

                                    </div>
                                </div>
                            </div>
                            <div className="form-row ms-4 d-flex p-2">
                                <div className="form-group col-md-6 p-2">
                                    <div className="form-outline">
                                        <label className="form-label" for="Year">Year</label>
                                        <input type="date" id="Year" onChange={e => changeTrainingHadler(e, index)} name='Year' className={styles.form_control_lg} />

                                    </div>
                                </div>
                                <div className="form-group col-md-6 p-2">
                                    <div className="form-outline ">
                                        <label className="form-label" for="city">City</label>
                                        <select onChange={e => changeTrainingHadler(e, index)} name='City' className="form-control border-dark p-1 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                            style={{
                                                borderRadius: '4px'
                                                , color: 'black',
                                                borderWidth: '0 0 2px',

                                            }}
                                            autocomplete="off">
                                            <option value="" disabled>Select city</option>
                                            <option value="Gwalior">Gwalior</option>
                                            <option value="Noida">Noida</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="indore">indore</option>
                                        </select>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
                <div className="d-flex justify-content-center p-3">
                    <Button type="button" className="btn text-white "
                        onClick={addTrainingHadler} style={{
                            background: '#FAA61A',
                            borderRadius: '20px', width: '150px', border: 'none'
                        }}>+ Add 1 More</Button></div>
                </div>
        </section>
    )
}

export default Training

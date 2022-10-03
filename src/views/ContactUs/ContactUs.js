import React, { useState, useEffect } from 'react';
import styles from './contactUs.module.css';
import Logo from '../../../public/assets/Images/logo/Logo_img.svg'
import { Button } from '@material-ui/core';
import Spinner from "components/organisms/Spinner";
function ContactUs() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
    return (

        <div className={styles.wraper}>
            <div className={styles.fleft}>

                <div className={styles.header_text}>
                    <div className="row">
                        <div className="col-sm-12 col-12 col-md-12">
                            <img src={Logo} alt='logo' className={styles.headingTag} />
                        </div>
                    </div>
                </div>
                <div className={styles.content_box}>
                    <div className="row">
                        <div className="col-sm-12 col-12 col-md-12">
                            <h2 className={styles.heading} >Contact me</h2>
                            <h3 className={styles.headingTag1} >Hello people !</h3>

                            <h3 className={styles.headingTag2} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Urna interdum lectus mi nulla at tempor quis arcu.
                                Nec, quis interdum at sapien sem sit tincidunt.
                                Id arcu non, nibh cursus quam egestas viverra. </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.fright}>

                <div className={styles.right_content_container}>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="name"><span className={styles.label_font}>Name</span></label>
                        <input type="text" id="name" name="name"

                            onChange={e => setName(e.target.value)} className={styles.form_control_lg} />

                    </div>
                    <div className="form-outline mb-4 mt-2">
                        <label className="form-label" for="email"><span className={styles.label_font}>Email Address </span></label>
                        <input type="text" id="email" name="email"

                            onChange={e => setEmail(e.target.value)} className={styles.form_control_lg} />

                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="phone"><span className={styles.label_font}>Mobile No. </span></label>
                        <input type="text" id="phone" name="phone"

                            onChange={e => setPhone(e.target.value)} className={styles.form_control_lg} />

                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="description">Message</label>

                        <textarea class="form-control"
                            name='description' id="descriptionTextarea1"
                            rows="3"
                            onChange={e => setMessage(e.target.value)}
                            className={styles.form_control_lg}
                            style={{
                                borderRadius: '0'
                                , color: 'black',
                                borderWidth: '0 0 2px',
                                outline: 0,
                                marginTop:'10px',
                                borderBottom: '2px solid grey',
                                width:'100%',
                            }}
                        ></textarea>

                    </div>
                    <div className="d-flex justify-content pt-3">
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={styles.signup_btn}
                        >
                            <span></span> Send
                        </Button>
                    </div>

                </div>
            </div>
            <div className={styles.bottomDiv}></div>
        </div>

    )
}

export default ContactUs
import React from 'react'
import styles from './account.module.css';
import Link from 'next/link';
import { useMediaQuery, Divider, Typography,Button } from '@material-ui/core';
function Account() {
    return (
        <div className={styles.div_scroll}>
            <div className="card-body p-md-5 mx-5 text-black bg-white">

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="password">Name</label>
                            <input type="text" id="password" className={styles.form_control_lg} />

                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="confirm_pass">Email</label>
                            <input type="text" id="confirm_pass" className={styles.form_control_lg} />

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="password">Password</label>
                            <input type="text" id="password" className={styles.form_control_lg} />

                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="confirm_pass">Confired Password</label>
                            <input type="text" id="confirm_pass" className={styles.form_control_lg} />

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="password">Phone</label>
                            <input type="text" id="password" className={styles.form_control_lg} />

                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="confirm_pass">Date Of Birth</label>
                            <input type="date" id="confirm_pass" className={styles.form_control_lg} />

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="password">Use Type</label>
                            <select onChange={e => setGender(e.target.value)} name='gender' className="form-control border-dark p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '4px'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                
                                }}
                                placeholder="Select Gender" autocomplete="off">
                                <option selected>Use Type</option>
                                <option>Use Type1</option>
                                <option>Use Type2</option>
                                <option>Use Type3</option>
                            </select>


                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="confirm_pass">Gender</label>
                            <select onChange={e => setGender(e.target.value)} name='gender' className="form-control border-dark p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '4px'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                
                                }}
                                autocomplete="off">
                                
                                <option selected>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="password">Country</label>
                            <select onChange={e => setGender(e.target.value)} name='gender' className="form-control border-dark p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '4px'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                
                                }}
                                 autocomplete="off">
                                <option selected>India</option>
                                <option>China</option>
                                <option>PaK</option>
                                <option>Japan</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="confirm_pass">City</label>
                            <select onChange={e => setGender(e.target.value)} name='gender' className="form-control border-dark p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '4px'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                
                                }}
                                autocomplete="off">
                                <option selected>Gwalior</option>
                                <option>Noida</option>
                                <option>Delhi</option>
                                <option>indore</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="password">About Me</label>
                           
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" className={styles.form_control_lg}></textarea>

                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content pt-3">
                    <Button
                        
                        variant="contained"
                        className={styles.signup_btn}
                    >
                       Save  Change
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Account

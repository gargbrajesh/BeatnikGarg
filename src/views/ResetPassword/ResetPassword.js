
import React from 'react';
import styles from './Reset.module.css';
import Logo from '../../../public/assets/Images/logo/Logo_img.svg'

// import OtpVerificationCover from './components/OtpVerificationCover';
import ResetForm from './components/ResetForm/ResetForm';

const ResetPassword = () => {
    return (
        <div className={styles.wraper}>
          
              
                <div className={styles.fleft} style={{
                    backgroundImage: `url(${process.env
                        .NEXT_PUBLIC_USER_API_URL_IMAGE +
                        `banner-dance/Sign-In-Image.webp`})`, backgroundRepeat: 'no-repeat', backgroundSize: "100%",
                }}>

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
                                <h2 className={styles.headingTag} >Join</h2>
                                <h3 className={styles.headingTag2} >the community and</h3>
                                <h2 className={styles.headingTag} >Connect</h2>
                                <h3 className={styles.headingTag2} >with artists around you.</h3>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className={styles.fright}>

                    <div className={styles.right_content_container}>
                        <h4 className={styles.heading_title}>Reset Password</h4>
                        <p>Explore the Beatnik community</p>
                        <ResetForm />
                    </div>
                </div>
                
            
        </div>


    )
}

export default ResetPassword

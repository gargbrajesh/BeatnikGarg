import React from 'react'
import { Typography } from '@material-ui/core';
import styles from './../PortfolioBanner/portfolio.module.css';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({

    ArtistsBtn: {
        width: "140px",
        height: "45px",
        fontFamily: "Nunito Sans",
        fontSize: "20px",
        color: "#212427",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        transition: "all 0.3s ease 0s",
        cursor: "pointer",
        letterSpacing: " 0.02em",
        display: "inline-block",
        textAlign: "center",
        padding: "10px",
        fontWeight: "700",
        border:'none',
        opacity: ".8",
        
        '@media screen and (max-width: 400px)': {
            width: "80%",
            fontSize: '15px',
            padding: "5px",
            height: "40px",
            marginLeft: '20px',
        },
        '@media (min-width: 410px) and  (max-width: 600px)': {
            width: "80%",
            fontSize: '15px',
            padding: "5px",
            height: "40px",
            marginLeft: '20px',
        },
    },
    ArtSpacesBtn: {
        width: "140px",
        height: "45px",
        fontFamily: "Nunito Sans",
        fontSize: "20px",
        color: "#FFFFFF",
        backgroundColor: "#FAA61A",
        border:'none',
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        transition: "all 0.3s ease 0s",
        cursor: "pointer",
        letterSpacing: " 0.02em",
        display: "inline-block",
        textAlign: "center",
        padding: "10px",
        fontWeight: "700",
        opacity: ".8",
        '& :hover':{
            color: "#FFFFFF",
            backgroundColor: "#FAA61A",
        },
        '@media screen and (max-width: 400px)': {
            marginTop: "12px",
            width: "80%",
            fontSize: '15px',
            height: "40px",
            justifyContent: 'center',
            marginLeft: '20px',
        },
        '@media (min-width: 410px) and  (max-width: 600px)': {
            width: "80%",
            marginTop: "12px",
            fontSize: '15px',
            height: "40px",
            marginLeft: '20px',
        },
    },
    typo_design: {
        fontFamily: "Nunito Sans",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "36px",
        lineHeight: "90%",
        padding: "20px",
        alignItems: "center",
        marginTop: "10px",
        color: "#000000",
        textAlign: "center",
        '@media screen and (max-width: 400px)': {
            fontSize: "22px",

        },
        '@media (min-width: 410px) and  (max-width: 600px)': {
            fontSize: "22px",

        },
    },
    para_design: {
        fontFamily: "Nunito Sans",
        fontStyle: "normal",
        fontSize: "16px",
        padding: "20px",
        alignItems: "center",
        marginTop: "10px",
        color: "#000000",
        textAlign: "center",
        '@media screen and (max-width: 400px)': {
            fontSize: "12px",
        },
        '@media (min-width: 410px) and  (max-width: 600px)': {
            fontSize: "12px",
        },
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0px 0px 10px 10px',
        '@media screen and (max-width: 400px)': {
            display: 'block',
        },
        '@media (min-width: 410px) and  (max-width: 600px)': {
            display: 'block',
        },
    }
}));
function PortfolioBanner() {
    const classes = useStyles();
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div>
                    <Typography className={classes.typo_design}
                    >Find Artists and Art Spaces</Typography>
                    <p className={classes.para_design}>Join the community and connect with artists around you</p>
                    <div className={classes.btnContainer}>

                    <div className='col-md-4 mx-4'>
                        <button className={classes.ArtistsBtn}
                        >
                            Artists
                        </button>
                    </div>

                    <div className='col-md-4 mx-4'>
                        <button className={classes.ArtSpacesBtn}
                        >
                            Art Spaces
                        </button>

                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default PortfolioBanner;

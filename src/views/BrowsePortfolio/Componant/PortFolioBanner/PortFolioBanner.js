import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core';
import styles from './portfolio.module.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        margin:'3rem 0 '
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '2rem',
    },
    artists: {
        color: '#FFFFFF',
        fontSize: '16px',
        transition: 'all 0.3s ease 0s',
        fontFamily: 'Nunito Sans',
        fontWeight: 500,
        borderRadius: '3em',
        padding: '5px 2.5rem',
        letterSpacing: '.1rem',
        backgroundColor: '#faa61a !important',
    },
    ArtSpaces: {
        color: '#000',
        fontSize: '16px',
        transition: 'all 0.3s ease 0s',
        fontFamily: 'Nunito Sans',
        fontWeight: 500,
        borderRadius: '3em',
        padding: '5px 2.5rem',
        letterSpacing: '.1rem',
        backgroundColor: '#fff !important',
    }
}));
function PortFolioBanner() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='container'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography className={styles.typo_design}>Find Artists and Art Spaces</Typography>
                        <Typography style={{ textAlign: 'center' }}>Join the community and connect with artists around you</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ justifyContent: 'space-around' }}>
                    <Grid item xs={12} md={8}>
                        <Grid className={classes.btnContainer}>
                            <Button variant="contained" color="primary" className={classes.artists}>
                                Artists
                            </Button>
                            <Button variant="contained" color="primary" className={classes.ArtSpaces}>
                                Art Spaces
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default PortFolioBanner;

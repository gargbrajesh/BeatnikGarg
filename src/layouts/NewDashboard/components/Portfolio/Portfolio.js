import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@material-ui/core';
import Eye from '../../../../../public/assets/Images/logo/eye_icon.webp'
import styles from './portfolio.module.css';
function Portfolio() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 5,
                    width: 425,
                    height: 169,
                    left: 413,
                    top: 250
                },
            }}
        >
            <Paper elevation={3}>
            <div className={styles.ellipse}>
            <i class="fa fa-eye fa-lg fa-3x" style={{color:'white',marginRight:'20px',marginLeft:'-9px'}} aria-hidden="true"></i> 
            </div>
                 <Typography className={styles.typo1}>View Portfolio</Typography>
                 <Typography className={styles.typo2}>Click &  View your basic information and manage it.</Typography>
            </Paper>
            <Paper elevation={3}>
             <div className={styles.ellipse2}>
             <i class="fa fa-refresh fa-lg fa-3x" style={{color:'white',marginRight:'20px',marginLeft:'-7px'}} aria-hidden="true"></i>
            </div>
                 <Typography className={styles.typo1}>Update Portfolio</Typography>
                 <Typography className={styles.typo2}>Click &  View your basic information and manage it.</Typography>
            </Paper>
            <Paper elevation={3}>
            
                <div className={styles.ellipse3}>
                <i class="fa fa-eye-slash fa-lg fa-3x" style={{color:'white',marginRight:'20px',marginLeft:'-9px'}} aria-hidden="true"></i> 
            
            </div>
                 <Typography className={styles.typo1}>Hide Portfolio</Typography>
                 <Typography className={styles.typo2}>Click &  View your basic information and manage it.</Typography>
            </Paper>
            <Paper elevation={3}>
            
                 <div className={styles.ellipse4}>
                 <i class="fa fa-share-alt fa-lg fa-3x" style={{color:'white',marginRight:'20px',marginLeft:'-9px'}} aria-hidden="true"></i> 
            </div>
                 <Typography className={styles.typo1}>Share Portfolio</Typography>
                 <Typography className={styles.typo2}>Click &  View your basic information and manage it.</Typography>
            </Paper>
        </Box>
    )
}

export default Portfolio

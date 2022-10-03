import React from 'react'
import styles from './messages.module.css';
import { Paper,Button } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import { useMediaQuery, Divider, Typography,Button } from '@material-ui/core';
function OtherWork() {
    return (
        <section className={styles.artWork_cover}>
           
            <div className={styles.float_container}>
                <Paper elevation={0} className={styles.paper_cover}>
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
                        <Button
                variant="contained"
                className={styles.createPortfolioButton}
               
              >Create Portfolio</Button>
                        </div>
                       
                    </div>

                </Paper>
            </div>
        </section>
    )
}

export default OtherWork

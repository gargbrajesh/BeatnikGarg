import React, { useState, useCallback, useEffect } from "react";
import Cookies from 'js-cookie'
// import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photo";
import styles from './gallary.module.css';
import Gallerys from "react-grid-gallery";
import Girl_dance from '../../../../../public/assets/Images/logo/newgirldance.svg';
function Gallary() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [answer, setAnswer] = useState([]);


  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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

    fetch("https://app.whyuru.com/api/beatnik_portfolio_artist_show", requestOptions)
      .then(response => response.json())
      .then((responseJson) => {

        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);

        } else {

          var y = JSON.parse(responseJson.result.data[0].gallery);
         
          setAnswer(y);
          console.log(y)
        }

      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <section className={styles.artWork_cover} id='Gallery'>
      <div className="row">
        <div className="col-12">
          <div className="p-3" ><h1 className={styles.heading}>Gallery</h1></div>
        </div>
       
        {answer.map((img,index)=>(
         <img src={img} alt='..' style={{width:'239px',height:'auto'}}  enableLightbox={true} />
        ))}
      </div>


    </section>
  )
}

export default Gallary

{/* 
     <div>
        
        <Gallerys
          images={IMAGES}
          enableLightbox={true}
          // maxRows={3}
          backdropClosesModal
        // currentImage={3}
        // isOpen={ true}
        /></div>
    
    
    
    */}
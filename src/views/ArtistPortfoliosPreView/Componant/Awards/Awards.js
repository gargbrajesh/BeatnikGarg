import React, { useState, useEffect } from 'react';
import styles from './Awards.module.css';
import Cookies from 'js-cookie'
import link from '../../../../../public/assets/Images/common/linkImg.svg'
function Awards() {

  const [schoolName, setSchoolName] = useState('');
  const [year, setYear] = useState('');
  const [aboutData, setAboutData] = useState('');
  const [bio, setBio] = useState('');
  const [answer, setAnswer] = useState([]);
  // var myHeaders = new Headers();
  // myHeaders.append("Cookie", "ci_session=c3768cfbd1cbf3a16a1adf4bac6f99b38e08d3e3");

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

          var y = JSON.parse(responseJson.result.data[0].awards);
          setAnswer(y);
          
             
             
        }

      })
        .catch(error => console.log('error', error));
}, []);
  return (
    <section className={styles.artWork_cover} id='Awards'  >
     <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="p-3" ><h1 className={styles.heading}>Awards and Press mentions</h1></div>
          </div>
        </div>
        { answer.map((answer,index)=>( 
        <div className="row my-3" style={{background:'rgba(229, 229, 229, 0.42)',padding:'2%',marginTop:'-2%'}} key={index}>
          <div className="col-6">
          <p className={styles.typo1}>{answer.title}<a href={answer.link}> <img src={link} alt ='...' /></a></p></div>
          <div className="col-6" >
          <p className={styles.yearTypo}>{answer.year.split("-")[0]}</p>
          </div>
          <div className='row'> <p className={styles.para1}>{answer.organization}</p></div>
          <div className='row'> <p className={styles.para1}>{answer.description}</p></div>
        </div>
        ))
      }
      </div>
    </section>
  )
}

export default Awards

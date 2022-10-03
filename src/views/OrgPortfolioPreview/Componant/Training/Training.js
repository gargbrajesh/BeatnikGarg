import React, { useState, useEffect } from 'react';
import styles from './Training.module.css';
import Cookies from 'js-cookie'
function Training() {

  var myHeaders = new Headers();
  myHeaders.append("Cookie", "ci_session=c3768cfbd1cbf3a16a1adf4bac6f99b38e08d3e3");
  const userID = Cookies.get('userID');

  const [courseTitle, setcourseTitle] = useState('');
  const [Institution, setInstitution] = useState('');
  const [Year, setYear] = useState('');
  const [City, setCity] = useState('');

  useEffect(() => {
    const userID = Cookies.get('userID');
    var myHeaders = new Headers();
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=53cd7e4df10209638906cbceefe0b33dd3f7d309");

    var formdata = new FormData();
    formdata.append("userID", "1");
    formdata.append("action", "saved");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };


    fetch("https://app.whyuru.com/api/beatnik_portfolio_org_show", requestOptions)
      .then(response => response.json())
      .then((responseJson) => {

        console.log(responseJson);
        if (responseJson.valid == false) {
          alert(responseJson.result.message);

        } else {

          var y = JSON.parse(responseJson.result.data[0].training);
          alert(y[0].courseTitle);
          setcourseTitle(y[0].courseTitle);
          setInstitution(y[0].Institution);
          setYear(y[0].Year);
          setCity(y[0].City);


        }

      })
      .catch(error => console.log('error', error));
  }, []);

  return (

    <section className={styles.artWork_cover} id='Training'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="p-3" ><h1 className={styles.heading}>Training</h1></div>
          </div>
        </div>

        <div className="row my-2" style={{ background: 'rgba(229, 229, 229, 0.42)', padding: '2%', marginTop: '-2%' }}>
          <div className="col-6">
            <p className={styles.typo1}>Diploma in Movement Arts</p></div>
          <div className="col-6" >
            <p className={styles.yearTypo}>2021</p>
          </div>
          <div className='row'> <p className={styles.para1}>Attakkalari Centre for Movement arts</p></div>
          <div className='row'> <p className={styles.para1}>Bangalore</p></div>
        </div>
      </div>
    </section>
  )
}

export default Training

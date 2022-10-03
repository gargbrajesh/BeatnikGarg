import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "../../../Artist/design.module.css";
import { ImageConfig } from "./ImageConfig";
import uploadImg from "../../../../../public/assets/Images/logo/cloud.svg";
import Vecter from "../../../../../public/assets/Images/logo/Vector1.svg";
import Avtar from "../../../../../public/assets/Images/logo/avtar.jpg";
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  drop_file_preview_container:{
    position: "relative",
    justifyContent: 'flex-start',
    border: '2px solid rgb(224 224 224)',
    overflow: 'scroll',
    height: '100px',
    padding: '15px',
    width: '350PX',
    marginBottom: '150px',
    },
    drop_file_input__label: {
      height: 'auto',
      textAlign: 'center',
      color: 'var(--txt-second-color)',
      fontWeight: '600',
      fontSize: '10px',
      marginTop: '15%',
      },
      drop_file_preview__item :{
        position: 'relative',
        display: 'flex',
        marginBottom: '10px',
        backgroundColor: 'var(--input-bg)',
        overflow: 'auto',
        justifyContent: 'flex-start',
        },
        drop_file_preview__item_img :{
          width: '50px',
          height: '50px',
          marginRight: '10px',
          borderRadius: '5px',
          },
          drop_file_preview__item__del: {
            backgroundColor: '#fff',
            width: '30px',
            height: '30px',
            textAlign: 'center',
            borderRadius: '50%',
            display: '-moz-box',
            // display: 'block',
            mozBoxPack:' center',
            boxShadow: 'var(--box-shadow)',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease',
            color: '#feaa00',
            fontSize: '20px',
            fontWeight: '600',
            marginLeft: '10px',
            }
}));

const DropFileInput = (props) => {
  const classes = useStyles();
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      if (newFile.size / 1024 > 1024) {
        alert("File size must be less than 1mb");
      } else {
        const updatedList = [...fileList, newFile];
        setFileList(updatedList);
        props.onFileChange(updatedList);
      }
      // alert(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div>
        <div
          ref={wrapperRef}
          className={styles.drop_file_input}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          style={{ marginTop: "15%", height: "auto" }}
        >
          <div className={classes.drop_file_input__label}>
            <img src={uploadImg} alt=""/>
            <br />
            <img src={Vecter} alt="cloud" />

            <p style={{ marginTop: "60px" }}>
              Drag & Drop your files here (Maximum 12 uploads)
            </p>
            <p>(Maximum 12 uploads)</p>
            <p
              style={{
                cursor: "pointer",
                background: "#FAA61A",
                borderRadius: "20px",
                padding: "4px",
                width: "60%",
                marginLeft: "60px",
                color: "white",
                letterSpacing: "2px",
              }}
            >
              Browse
            </p>
            {/* <br /> */}
            <input type="file" value="" onChange={onFileDrop} />
          </div>
        </div>

        {fileList.length > 0 ? (
          <div className={styles.drop_file_preview}>
            <p className={styles.drop_file_preview__title}>Ready to upload</p>
            <div className={classes.drop_file_preview_container}> {fileList.map((item, index) => (
              <div key={index} className={classes.drop_file_preview__item}>
                <img
                  src={Avtar}
                  alt=""
                  className={classes.drop_file_preview__item_img}
                />
                
               
                <div className={styles.drop_file_preview__item__info}>
                  <p>{item.name}</p>
                  <p>{item.size}B</p>
                </div>
                <span
                  className={classes.drop_file_preview__item__del}
                  onClick={() => fileRemove(item)}
                >
                  x
                </span>
              </div>
            ))}</div>

          </div>
        ) : null}
      </div>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;

import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "../../organization.module.css";
import { ImageConfig } from "./ImageConfig";
import uploadImg from "../../../../../public/assets/Images/logo/cloud.svg";
import Vecter from "../../../../../public/assets/Images/logo/Vector1.svg";
import LinkIcon from "@material-ui/icons/Link";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  linkTag: {
    position: "absolute",
    left: "37%",
    top: "10px",
   
  '@media (min-width: 300px) and (max-width: 400px)': {
      left: "8%",
    top: "9px",
    },
    '@media (min-width: 401px) and (max-width: 600px)': {
      left: "6%",
    top: "9px",
    }
  },
  dropfile: {
    position: "relative",
  },

  pastURLDATA: {
    display: "block",
    position: "relative",
    margin: "5% auto",
    textAlign: "center",
    alignItems: "center",
    '@media (max-width: 600px)': {
      display: "flex",
    }
  },
  btn: {
    background: "#FAA61A",
    color: "white",
    width: " 145px",
    borderRadius: "20px",
    justifyContent: "center",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "16px",
    padding: "4px 0px",
    fontFamily: "Nunito Sans",
  },
  vectorImg: {
    width: "50px !important",
  },
}));
const DropFileInput = (props) => {
  const classes = useStyles();
  const wrapperRef = useRef(null);
  const [getPastedURL, setPastedURL] = useState("");
  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];

    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
  
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };
  const handeOnchangeURL = (event) => {
    alert(event.target.value);
  };

  return (
    <>
      <div className={classes.dropfile}>
        <div
          ref={wrapperRef}
          className={styles.drop_file_input}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className={styles.drop_file_input__label}>
            <img className="uploadImages" src={uploadImg} alt="" />
            <br />
            <img src={Vecter} className="vectorImage" alt="cloud" />

            <p style={{ marginTop: "30px" }}>
              Drag & Drop your files here (Maximum 3 uploads)
            </p>
            {/* <p>(Maximum 3 uploads)</p> */}
            <p
              style={{
                cursor: "pointer",
                background: "#FAA61A",
                borderRadius: "20px",
                padding: "4px",
                width: "60%",
                margin: "0 auto",
                color: "white",
                letterSpacing: "2px",
              }}
            >
              Browse
            </p>
            <br />
            <input type="file" value="" onChange={onFileDrop} />
          </div>
        </div>
      </div>
      {fileList.length > 0 ? (
        <div className={styles.drop_file_preview}>
          <p className={styles.drop_file_preview__title}>Ready to upload </p>
          {fileList.map((item, index) => (
            <div key={index} className={styles.drop_file_preview__item}>
              <img
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <div className={styles.drop_file_preview__item__info}>
                <p>{item.name}</p>
                <p>{item.size}</p>
              </div>
              <span
                className={styles.drop_file_preview__item__del}
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
      <div className={styles.orDevider}>
        <span style={{ width: "80%" }}> For videos and audios</span>
      </div>

      <div className={clsx(classes.pastURLDATA, styles.pastURLDATA)}>
        <input
          type="text"
          className={styles.notifie}
          placeholder="Paste link from web"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handeOnchangeURL}
          value={getPastedURL}
        />
        <p className={classes.linkTag}>
          <LinkIcon />{" "}
        </p>
        <span>
          <button
            className={styles.btn_notifie}
            type="button"
            id="button-addon2"
          >
            GO
          </button>
        </span>
      </div>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;

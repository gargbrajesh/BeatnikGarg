import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "../../../Artist/design.module.css";
import { ImageConfig } from "./ImageConfig";
import uploadImg from "../../../../../public/assets/Images/logo/cloud.svg";
import Vecter from "../../../../../public/assets/Images/logo/Vector1.svg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DropInputFile = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      if (newFile.size / 1024 > 1024) {
        alert("File size must be less than 1Mb");
      } else {
        const updatedList = [...fileList, newFile];
        setFileList(updatedList);
        props.onFileChange(updatedList);
      }
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
          <div className={styles.drop_file_input__label}>
            <img src={uploadImg} alt="" />
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
            <br />
            <input type="file" value="" onChange={onFileDrop} />
          </div>
        </div>

        {fileList.length > 0 ? (
          <div className={styles.drop_file_preview}>
            <p className={styles.drop_file_preview__title}>Ready to upload</p>
            {fileList.map((item, index) => (
              <div key={index} className={styles.drop_file_preview__item}>
                <img
                  src={
                    ImageConfig[item.type.split("/")[1]] ||
                    ImageConfig["default"]
                  }
                  alt=""
                />
                <div className={styles.drop_file_preview__item__info}>
                  <p>{item.name}</p>
                  <p>{item.size}B</p>
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
      </div>
    </>
  );
};

DropInputFile.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropInputFile;

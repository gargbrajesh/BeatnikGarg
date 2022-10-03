import React, { useState } from "react";
import PropTypes from "prop-types";
import AWS from "aws-sdk";
const S3_BUCKET = "projectblinkit";
const REGION = "ap-south-1";

AWS.config.update({
  accessKeyId: "AKIAXF3QKKS4WJFRTDXM",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadS3IMG = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [a, setA] = useState();
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket.upload(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      }
      if (data) {
        console.log("Sucess", data.Location);
        setA(data.Location);
      }
    });
  };

  return (
    <>
      <img src={a} alt="ashdjka"/>
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </>
  );
};

export default UploadS3IMG;

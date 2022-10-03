import React from "react";
import LetTalkCard from "../LetTalkCard";
import styles from './Banner.module.css';

const Banner = () => {

  return (
    <div className={styles.banner_container}>
      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_USER_API_URL_IMAGE + `banner-dance/Lets-talk-signup.webp`})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          position: "absolute",
          height: "150vh",
          top: "-80px",
          left: "0",
          right: "0",
          backgroundSize: "100%",
        }}
      >
        <LetTalkCard />
      </div>
    </div>
  );
};

export default Banner;

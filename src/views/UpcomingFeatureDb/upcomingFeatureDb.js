import React, { useState, useEffect } from "react";

import MetaTitle from "components/helper/MetaTitle";
import { makeStyles } from "@material-ui/core";
import Spinner from "components/organisms/Spinner";
import { UpcomingForm } from "./components";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom:'60px',
    '@media (max-width: 600px)': {
      height: "110vh",
    },
  },
}));
const UpcomingFeature = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Upcoming Features | Welcome to Beatnik World `}
        metaKeyWord="Welcome to Beatnik World "
        metaDescription="Welcome to Beatnik World "
      />
      {loading ? (
        <UpcomingForm />
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
};

export default UpcomingFeature;

import React, { useEffect, useState } from "react";
import MetaTitle from "components/helper/MetaTitle";
import { makeStyles } from "@material-ui/core";
import { Banner } from "./components";
import Spinner from "components/organisms/Spinner";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom:'150px',
    '@media (min-width: 413px) and (max-width: 600px)': {
      height: "100vh",
      marginBottom:'240px',
    },
   
    '@media (min-width: 375px) and (max-width: 412px)': {
      height: "110vh",
      marginBottom:'270px',
    }
  },
}));
function LetsTalk() {
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
        title={`Let's Talk | Beatnik - For those who love art, live art `}
        metaKeyWord="Beatnik - For those who love art, live art "
        metaDescription="Beatnik - For those who love art, live art "
      />
      {loading ? (
        <Banner/>
      ) : (
        <>
          <Spinner />
        </>
      )}

    </div>
  );
}

export default LetsTalk;

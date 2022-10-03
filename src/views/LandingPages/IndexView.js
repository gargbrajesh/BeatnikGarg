import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Banner } from "./components";
import MetaTitle from "components/helper/MetaTitle";
import Spinner from "components/organisms/Spinner";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "91vh !important",
  },
}));

const IndexView = ({ themeMode }) => {
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
        title={`Home || Beatnik - For those who love art, live art `}
        metaKeyWord="Beatnik - For those who love art, live art "
        metaDescription="Beatnik - For those who love art, live art "
      />
      {loading ? (
      <>
          <Banner />
       
      </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
};

export default IndexView;

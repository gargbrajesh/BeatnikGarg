import React, { useState, useEffect } from "react";
import Artwork from "./Componant/ArtWork";
import About from "./Componant/About";
import Gallery from "./Componant/Gallary";
import Tab from "./Componant/Tab";
import Bio from "./Componant/Bio";
import MetaTitle from "components/helper/MetaTitle";
import Awards from "./Componant/Awards";
import { makeStyles } from "@material-ui/core";
import Training from "./Componant/Training/Training";
import PortFolioBanner from "./Componant/PortFolioBanner";
import PortFolioEditButton from "./Componant/PortFolioEditButton";
import Spinner from "components/organisms/Spinner";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
}));
function UserPortFolioView() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`User Portfolio | Beatnik - For those who love art, live art `}
        metaKeyWord="Beatnik - For those who love art, live art "
        metaDescription="Beatnik - For those who love art, live art "
      />
      {loading ? (
        <>
          <PortFolioBanner />
          <About />
          <Tab />
          <Artwork />
          <Training />
          <Awards />
          <Gallery />
          <Bio />
          <PortFolioEditButton />
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
}

export default UserPortFolioView;

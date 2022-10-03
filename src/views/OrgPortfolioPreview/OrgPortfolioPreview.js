import React, { useState, useEffect } from "react";
import AwardsWork from './Componant/Awards';
import Artwork from './Componant/ArtWork';
import AboutMe from './Componant/About';
import Gallary from './Componant/Gallary';
import Tab from './Componant/Tab';
import Bio from './Componant/Bio';
import PortFolioBanner from './Componant/PortFolioBanner';
import MetaTitle from 'components/helper/MetaTitle';
import { makeStyles } from '@material-ui/core';
import PortFolioEditButton from './Componant/PortFolioEditButton';
import Spinner from "components/organisms/Spinner";

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },

}));
const OrgPortfolioPreview  = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  },[]);
  return (
    <div className={classes.root}>
    <MetaTitle
      title={`User Portfolio | Beatnik - For those who love art, live art `}
      metaKeyWord="Beatnik - For those who love art, live art "
      metaDescription="Beatnik - For those who love art, live art "
    />
    {loading ? (<>
    <PortFolioBanner />
      <AboutMe />
      <Tab />
      <Artwork />
      <AwardsWork />
      <Gallary />
      <Bio />
     <PortFolioEditButton />
     </>) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  )
}

export default OrgPortfolioPreview

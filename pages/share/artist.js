import React from "react";
import NoSsr from "@material-ui/core/NoSsr";
import Main from "layouts/BlackHeader";
import WithLayout from "WithLayout";
import ShareArtistPortFolio from "views/UserPortFolioView/Componant/ShareArtistPortFolio";



const Component = () => {
  return (
    <NoSsr>
      <ShareArtistPortFolio />
    </NoSsr>
  );
};

const ShareArtist = () => {
  return <WithLayout component={Component} layout={Main} />;
};

export default ShareArtist;

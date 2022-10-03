import React from "react";
import InnerHeader from "layouts/BlackHeader";
import WithLayout from "WithLayout";
import UpdateArtistOtherWork from "views/UpdateArtistOtherWork";

const ArtistUpdatePortFolio = () => {
  return <WithLayout component={UpdateArtistOtherWork} layout={InnerHeader} />;
};

export default ArtistUpdatePortFolio;
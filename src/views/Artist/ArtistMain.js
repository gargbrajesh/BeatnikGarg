import React from "react";
import MetaTitle from "components/helper/MetaTitle";
import ArtistForm from "./components/ArtistForm";

const Artist = () => {
  return (
    <div className="root">
      <MetaTitle
        title={`Artist Portfolio | Beatnik`}
        metaKeyWord="Artist Portfolio | Beatnik"
        metaDescription="Artist Portfolio | Beatnik"
      />
      <ArtistForm/>
    </div>
  );
};

export default Artist;

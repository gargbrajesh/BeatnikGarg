import React from "react";
import MetaTitle from "components/helper/MetaTitle";
import { ArtistFormTwo } from "./components";
function ArtistOtherWork() {
  return (
    <div>
      <MetaTitle
        title={`Artist Other Work | Beatnik`}
        metaKeyWord="Artist Other Work | Beatnik"
        metaDescription="Artist Other Work | Beatnik"
      />
      <ArtistFormTwo/>
    </div>
  );
}

export default ArtistOtherWork;

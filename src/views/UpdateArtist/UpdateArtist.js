import React from "react";
import MetaTitle from "components/helper/MetaTitle";
import { UpdateArtistForm } from "./components";
const UpdateArtist = (props) => {
  return (
    <div>
      <MetaTitle
        title={`Update Artist Portfolio | Beatnik`}
        metaKeyWord="Artist Portfolio | Beatnik"
        metaDescription="Artist Portfolio | Beatnik"
      />
      <UpdateArtistForm />
    </div>
  );
};

export default UpdateArtist;

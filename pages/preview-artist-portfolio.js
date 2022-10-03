import React from 'react'
import InnerHeader from 'layouts/BlackHeader';
import WithLayout from 'WithLayout';
import ArtistPortFolioPreview from "views/ArtistPortFolioPreview"

function OrgScreenTwo() {
  return (
    <WithLayout
    component={ArtistPortFolioPreview}
    layout={InnerHeader}
/>


  )
}

export default OrgScreenTwo;
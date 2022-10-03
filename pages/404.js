/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import NotFoundCover from 'views/NotFoundCover';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const FourOFourPage = () => {
  return (
    <WithLayout
    component={NotFoundCover}
    layout={Main}
/>)
};

export default FourOFourPage;
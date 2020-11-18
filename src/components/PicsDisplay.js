import React, {useState} from 'react';
import FileUploader from './FileUploader';
import Gallery from './Gallery';
import Header from './Header';


const PicsDisplay = () => {


  // Render our component
  return (
  <div>
    <Header />

    <div className="picsPage__box">
      <FileUploader />
    </div>

    <Gallery />
  </div>
  )
}

export default PicsDisplay;

import React from 'react'
import FileUploader from './FileUploader'
import FolderList from './FolderList'
import Gallery from './Gallery'


class PicsDisplay extends React.Component {
  render () {
    return (
      <div className="picsPage__container">
        <div className="picsPage__pic-box"><img src={ require('../siteImages/orcandpal.jpg')} alt="orcs"/></div>

        <div className="picsPage__hl-box">
          <h1 className="picsPage__headline">
            Hello, Matteo.
            <br></br>
            <br></br>
            <br></br>
            Here, you can manage the pictures and memes in your moistBot arsenal.
            <br></br>
            <br></br>
            <br></br>
            <h3>
            Upload files in jpg or png format.
            <br></br>
            You can rename the pics after upload if necessary.
            <br></br>
            The command for each pic is the name of the pic, prefaced by two dashes. Commands are case sensitive. (--exampleCommand)
            <br></br>
            You can add folders to better organize pics. The folder name will be part of the command, so keep the name short (--folderName/exampleCommand).
            This is where click to copy really shows its promise.
            Click on any pic to copy the command onto your clipboard and save yourself some typing. :)
            <br></br>
            </h3>
          </h1>
        </div>

        <div className="picsPage__box">
          <FileUploader />
        </div>

        <FolderList />
        <Gallery />
      </div>
    )
  }
}

export default PicsDisplay;

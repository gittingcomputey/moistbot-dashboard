import React from 'react';
import FileUploader from './FileUploader';
// import FolderList from './FolderList';
import Gallery from './Gallery';


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
            Here, you can manage the pictures and memes in your moistBot arsenal.
            <br></br>
            <br></br>
            <ul>
              <li>Files can be in jpg or png format.</li>
                <br></br>
              <li>Commands to the bot are made with a two dash prefix.
                <br></br>
                <span className="lighter">--exampleCommand </span></li>
                <br></br>
              <li>Commands are case sensitive. <br></br>
                <span className="lighter">--exampleCommand </span> and <span className="lighter"> --examplecommand </span> count as two different commands.</li>
                <br></br>
              <li>The command for each pic/meme is the name of the file.</li>
                <br></br>
              <li>You can add folders to better organize pics.
                <br></br>
                The folder name will become part of the command.
                <br></br>
                <span className="lighter">--folderName/exampleCommand</span>
                  <br></br>
                  You are currently in the main gallery. Pics in here do not have a folder name.
                </li>
                <br></br>
              <li>
                To copy a command to the clipboard, click on the pic.</li>
                <br></br>
            </ul>
          </h1>
        </div>

        <div className="picsPage__box">
          <FileUploader />
        </div>

        <Gallery />
      </div>
    )
  }
}

export default PicsDisplay;

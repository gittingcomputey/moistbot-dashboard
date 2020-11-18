import React, {useState} from 'react';



// Grab the DATE and TIME. destructured into variables
const [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
const [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);




const Header = () => {
  //use our TIME variables to set the state of the current time.
  const [time, setTime] = useState({h:hour, m:minute, s:second});

  //Update current time
  setInterval(() => {
    const [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
    setTime({h:hour, m:minute, s:second} ); },
    30000);


  // Render our component
  return (
      <div className="Header__container">

        <div className="Header__header--box">
          <div className="Header__datebox">
            {/* Display DATE. No state right now. Will come back and make function that changes it at midnight. */}
            <h6 className="Header__dateTime">{month} / {date} / {year}</h6>
            {/* Display current TIME. Re-rendered once per second because of set interval function above. */}
            <h6 className="Header__dateTime">{time.h} : {time.m}</h6>
          </div>

          <div className="Header__pic-box"><img src={ require('../siteImages/orcandpal.jpg')} alt="orcs"/></div>

          <div className="Header__hl-box">
            <h1 className="Header__headline">
              Hello, Matteo.</h1>
              <br></br>

              <br></br>
              <br></br>
              <h5 className="Header__h5">Use this dashboard to upload memes, videos, and pictures to your bot's galleries.
                </h5><br></br>

              <ul>
                <li>Files can be jpg, png, svg, gif, mp4, and webx.</li>
                  <br></br>
                <li>
                  Whatever you name the file will become the command for displaying the file on Discord.
                </li>
                <br></br>
                <li>Commands to the bot are made with a two dash prefix.
                  <br></br>
                  <span className="lighter">--exampleCommand </span>
                  <br></br>
                  Commands are case sensitive. <br></br>
                  <span className="lighter">--exampleCommand </span> and <span className="lighter"> --examplecommand </span> are two different commands.</li>
                  <br></br>
                  <li>Use folders to organize pics.
                  The folder name will become part of the command.
                  <br></br>(two dashes, folder name, forward slash, file name).
                  <br></br>
                  <span className="lighter">--folderName/exampleCommand</span>
                    <br></br>
                    <br></br>
                    You are currently in the main gallery. <br></br> Pics uploaded to this gallery will not have a prefix in the command.
                  </li>
                  <br></br>
                <li>
                  Click on the thumbnail to copy that file's command to the clipboard.</li>
                  <br></br>
              </ul>
          </div>

        </div>
      </div>
    )

}

export default Header;

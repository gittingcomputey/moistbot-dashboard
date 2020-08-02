import React from 'react'


class PicsDisplay extends React.Component {
  render () {
    return (
      <div className="picsPage__container">
        <div className="picsPage__pic-box"><img src={ require('../images/orcandpal.jpg')} alt="orcs"/></div>

        <div className="picsPage__hl-box">
          <h1 className="picsPage__headline">
            Hello, Matteo.
            <br></br>
            <br></br>
            Here, you can manage the pictures and memes in your moistBot arsenal.
            <br></br>
            <br></br>
            <br></br>
            <h3>
            Upload files in jpg or png. The command for the pic will be the pic's name.
            <br></br>
            You can rename the pics after upload if necessary.
            <br></br>
            The name of the pic will always be the command.
            <br></br>
            You can add folders to organize pics. The name of the folder will be included in the command. This is where click to copy really shows its promise!
            Click on a pic to copy the command onto your clipboard and save on some typing. :)
            </h3>
          </h1>
        </div>
          
        <div className="picsPage__box">
          content
        </div>
      </div>
    )
  }
}

export default PicsDisplay;

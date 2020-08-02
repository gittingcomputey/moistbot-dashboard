import React from 'react'


class FileUploader extends React.Component {
  render () {
    return (
      <div className="uploader__container">
        <div className="uploader__box">
          <h4>You can create up to 20 folders</h4>
          <button className="uploader__button">New folder</button>
          <button className="uploader__button">Upload</button>

        </div>
      </div>
    )
  }
}

export default FileUploader;

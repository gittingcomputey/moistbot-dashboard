import React from 'react'

class FolderList extends React.Component {
  render () {
    return (
      <div className="list__container">
        <div>
          <div className="uploader__new-folder">
            <button className="uploader__button">New folder</button>
          </div>
        </div>
      <h4>Folders:</h4>
        <div className="list__box">
            {/* Here we will have a for each loop to create each button with name of folder. We will have to keep track of folder count  */}
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
          <button>Folder</button>
        </div>
      </div>
    )
  }
}

export default FolderList;

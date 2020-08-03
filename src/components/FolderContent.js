import React from 'react'
import Gallery from './Gallery'
import FolderList from './FolderList'

class FolderContent extends React.Component {
  render () {
    return (
      <div className="folders__container">
        <div className="folders__title-box"><h1>Folder Name</h1></div>
        <div className="folders__content-box">
          <FolderList />
          <Gallery />
        </div>
      </div>
    )
  }
}

export default FolderContent;

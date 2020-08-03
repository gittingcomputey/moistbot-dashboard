import React from 'react';
import PicCard from './PicCard';


class Gallery extends React.Component {
  render () {
    return (
      <div className="gallery__container">
        <div className="gallery__box">
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
        </div>
      </div>
    )
  }
}

export default Gallery;

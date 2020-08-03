import React from 'react';
import faker from 'faker';


class PicCard extends React.Component {
  render () {
    return (
      <div className="pic-card__container">
        <div className="pic-card__box">
          <h2>botCommand</h2>
          <div className="pic-card__pic-box">
            <img alt="pic" src={faker.image.avatar()}/>
          </div>
          <div className="pic-card__button-box">
            <button className="pic-card__rename">Rename</button>
            <button className="pic-card__delete">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PicCard;

import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ msg }) => {
  return (
    <div className="results">
      { msg }
    </div>
  )
}

Message.propTypes = {
  msg: PropTypes.string.isRequired
}

export default Message;

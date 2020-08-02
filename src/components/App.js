import React from 'react'
import PicsDisplay from './PicsDisplay'
import '../styles/styles.scss'

class App extends React.Component {
  render () {
    return (
        <div className="main"> <PicsDisplay /> </div>
    )
  }
}

export default App;

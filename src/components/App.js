import React from 'react';
import PicsDisplay from './PicsDisplay';
import FolderContent from './FolderContent';
import { BrowserRouter, Route } from 'react-router-dom';
// import History from '../history';
import '../styles/styles.scss';



class App extends React.Component {
  render () {
    return (
        <BrowserRouter>
          <div className="main">
            <Route path="/" exact component={PicsDisplay} />
            <Route path="/folders" exact component={FolderContent} />
          </div>
        </BrowserRouter>
    )
  }
}

export default App;

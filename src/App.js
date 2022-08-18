import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import IntakePanel from './components/intakePanel';
import IntroPanel from './components/introPanel';



class App extends Component {

  


  render() {
      return (
        <div className="App">
          <header className="App-header">
            <p>🔥✨👨🏼‍💻✨🔥</p>
            <IntroPanel/>
            <IntakePanel/>
            
          </header>
          <body>
            
          </body>
      </div>
          
      )
  }
}

export default App;

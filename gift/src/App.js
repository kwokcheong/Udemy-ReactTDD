import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifts: []
    };
  }

  render(){
    return(
      <div> 
        <h2>Gift Giver</h2>
      </div>
    )
  }
}

export default App;

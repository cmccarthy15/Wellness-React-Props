import React, { Component } from 'react';
import './App.css';
import {wellnessFactors} from './data'

import Wheel from './Wheel'
import GuidanceContainer from './GuidanceContainer'


class App extends Component {
  // constructor() {
  //   super()
    
    state = {
      data: wellnessFactors
    }
  


render() {

  return (
    <div className="App">
      <h1> Welcome to the Wellness Center</h1>
      <Wheel data={this.state.data} />
      <hr />
      <GuidanceContainer />
    </div>
  );


}

}


export default App;

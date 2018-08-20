import React, { Component } from 'react';
import {REACT_APP_YELP_KEY } from './config'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {suggestion: []}

}




fetchData = () => {
  console.log('this is our',REACT_APP_YELP_KEY)
  fetch("https://fast-beach-47884.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=food&sort_by=rating&limit=10&latitude=34.048203&longitude=-118.258949&radius=805", {
    method: "GET",
    dataType: "JSON",
    headers: {
      Authorization: `Bearer ${REACT_APP_YELP_KEY}`
    }
  })
  .then((results) => {
    return results.json()
  }) 
  .then((data) => {
    console.log(data)                
  })
  .catch((error) => {
    console.log(error, "catch the hoop")
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">N O R D S T R O M  R A C K | H A U T E L O O K</h1>
          
        </header>
        <p className="App-intro">
          <button onClick={() => this.fetchData}>
              WHAT'S FOR LUNCH
          </button>
        </p>
      </div>
    );
  }
}

export default App;

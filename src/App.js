import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSuggestions } from './actions/suggestions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    };

  }

  handlePrice(e) {
    console.log(e.target.value);
  }

  handleClick() {
    console.log('clicking!!!');
    this.props.dispatch(fetchSuggestions());
  }



  render() {
    console.log(this.props);
    if (!this.props.suggestions.businesses) {
      console.log('return when button is NOT clicked');
      return (
        <div className="App">
          <header className="App-header">
           
            <h1 className="App-title">N O R D S T R O M  R A C K | H A U T E L O O K</h1>
            
          </header>
          <p className="App-intro">
          <select value={this.state.value} onChange={this.handlePrice}>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
            <button onClick={() => this.handleClick()}>
                WHAT'S FOR LUNCH
            </button>
          </p>
        </div>
      );
    }
    if (this.props.suggestions.businesses) {
      console.log('return random when CLICKED');
      let randomSuggestion = this.props.suggestions.businesses[Math.floor(Math.random()*this.props.suggestions.businesses.length)];
      console.log(randomSuggestion);
      return (
        <div className="App">
          <header className="App-header">
           
            <h1 className="App-title">N O R D S T R O M  R A C K | H A U T E L O O K</h1>
            
          </header>
          <p className="App-intro">
          <select value={this.state.value}>
            <option selected value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
          </select>
            <button onClick={() => this.handleClick()}>
                WHAT'S FOR LUNCH
            </button>
          </p>
          <div>
            {randomSuggestion.name}
            <img className="food-image" src={randomSuggestion.image_url} alt="random-suggestion" />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  suggestions: state.suggestions
});

export default connect(mapStateToProps)(App);


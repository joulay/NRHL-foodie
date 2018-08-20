import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSuggestions } from './actions/suggestions';
import './App.css';

class App extends Component {
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
            <button onClick={() => this.handleClick()}>
                WHAT'S FOR LUNCH
            </button>
          </p>
          <div>
            {randomSuggestion.name}
            <img src={randomSuggestion.image_url} alt="random-suggestion" />
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


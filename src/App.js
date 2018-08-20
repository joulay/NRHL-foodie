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
}

const mapStateToProps = (state) => ({
  suggestions: state.suggestions
});

export default connect(mapStateToProps)(App);


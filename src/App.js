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
    console.log(e.target.value, 'target');
    this.setState({
      value: e.target.value
    })
  }

  handleClick() {
    console.log('clicking!!!');

    this.props.dispatch(fetchSuggestions(this.state.value));
  }



  render() {
    console.log(this.props);
    if (!this.props.suggestions.businesses) {
      console.log('return when button is NOT clicked');
      return (
        <div className="App">
          <header className="App-header">
           
            <h1 className="App-title">HACK NIGHT CHALLENGE</h1>
            
          </header>
          <div className="content">

            <div className="button">
              <button onClick={() => this.handleClick()}>
                  WHAT'S FOR LUNCH
              </button>
            </div>

            <div className="select">
              <select value={this.state.value} onChange={(e)=> {
                e.stopPropagation();
                this.handlePrice(e)}}>
                <option selected value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </select>
            </div>

          </div>
        </div>
      );
    }
    if (this.props.suggestions.businesses) {
      console.log('return random when CLICKED');
      let randomSuggestion = this.props.suggestions.businesses[Math.floor(Math.random()*this.props.suggestions.businesses.length)];
      console.log(randomSuggestion, 'heaaa');
      return (
        <div className="App">
          <header className="App-header">
           
            <h1 className="App-title">N O R D S T R O M  R A C K | H A U T E L O O K</h1>
            
          </header>
          <div className="content">
            <div className="button">
                <button onClick={() => this.handleClick()}>
                    WHAT'S FOR LUNCH
                </button>
              </div>

              <div className="select">
                <select value={this.state.value} onChange={(e)=> {
                  e.stopPropagation();
                  this.handlePrice(e)}}>
                  <option selected value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                </select>
              </div>
          </div>
          <div className="info">
            <div className="name">{randomSuggestion.name}</div>
            {randomSuggestion.location.address1}
          </div>  
          <div className="pic">
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


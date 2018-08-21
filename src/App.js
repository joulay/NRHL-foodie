import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSuggestions } from './actions/suggestions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1',
      click: false,
      displayName: '',
      dispayImageUrl: ''
    };
  }

  handlePrice(e) {
    this.setState({
      value: e.target.value,
      click: false,
    })
  }

  handleClick() {
    console.log('clicking!!!');
    // this.setState({
    //   click: true
    // });
    this.props.dispatch(fetchSuggestions(this.state.value));
    if (this.props.suggestions.businesses) {
      let randomSuggestion = this.props.suggestions.businesses[Math.floor(Math.random()*this.props.suggestions.businesses.length)];
      console.log('changing randomSuggestion even onChange', randomSuggestion.name); 
      this.setState({
        displayName: randomSuggestion.name,
        dispayImageUrl: randomSuggestion.image_url
      })
    }
  }

  render() {
    console.log(this.state);
    //console.log(this.props);
    if (!this.props.suggestions.businesses) {
      return (
        <div className="App">
          <header className="App-header">
           
            <h1 className="App-title">N O R D S T R O M  R A C K | H A U T E L O O K</h1>
            
          </header>
          <p className="App-intro">
          <select value={this.state.value} onChange={(e)=>this.handlePrice(e)}>
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
      return (
        <div className="App">
          <header className="App-header">
           
            <h1 className="App-title">N O R D S T R O M  R A C K | H A U T E L O O K</h1>
            
          </header>
          <p className="App-intro">
          <select value={this.state.value} onChange={(e)=> {
            e.preventDefault();
            this.handlePrice(e)}}>
            <option selected value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
            <button onClick={() => this.handleClick()}>
                WHAT'S FOR LUNCH
            </button>
          </p>
          <div>
            {this.state.displayName}
            <img className="food-image" src={this.state.dispayImageUrl} alt="random-suggestion" />
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


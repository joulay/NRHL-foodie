import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Input from './Input';
import { fetchSuggestions } from './actions/suggestions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1',
      input: 'food'
    };
  }

  handlePrice(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClick() {
    this.props.dispatch(fetchSuggestions(this.state.input, this.state.value));
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    // console.log(this.state);
    // console.log(this.props); 
    let name = this.props.suggestions.name;
    let image = this.props.suggestions.image_url;
    let price = this.props.suggestions.price;
    if (this.props.suggestions.length === 0) {
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

          {/* <Input /> */}
          <form>
              <label htmlFor="search-input">Category Search</label>
              <input 
              type="text" 
              name="searchInput"
              onChange={(e) => this.handleInput(e)}>
              </input>
          </form>
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
    if (this.props.suggestions.length !== 0) {

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

          {/* <Input /> */}
          <form>
              <label htmlFor="search-input">Category Search</label>
              <input 
              type="text" 
              name="searchInput"
              onChange={(e) => this.handleInput(e)}>
              </input>
          </form>
          <p className="App-intro">
          <select value={this.state.value} onChange={(e)=> this.handlePrice(e)}>
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
            {name} {price}
            <img className="food-image" src={image} alt="random-suggestion" />

          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  suggestions: state.suggestions,
  error: state.error
});

export default connect(mapStateToProps)(App);


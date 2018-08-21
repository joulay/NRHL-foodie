import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    let name = this.props.suggestions.name;
    let image = this.props.suggestions.image_url;
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
            <form>
                <input 
                type="text" 
                name="searchInput"
                placeholder="Category"
                onChange={(e) => this.handleInput(e)}>
                </input>
              </form>
              <select value={this.state.value} onChange={(e)=> {
                e.stopPropagation();
                this.handlePrice(e)}}>
                <option defaultValue="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </select>
            </div>
          </div>
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
                <form>
                  <input 
                  type="text" 
                  name="searchInput"
                  placeholder="Category"
                  onChange={(e) => this.handleInput(e)}>
                  </input>
                </form>
                <select value={this.state.value} onChange={(e)=> {
                  e.stopPropagation();
                  this.handlePrice(e)}}>
                  <option defaultValue="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                </select>
              </div>
          </div>
          <div className="info">
          {name}
          <img className="food-image" src={image} alt="random-suggestion" />
          </div>
            {/* <div className="info">
              <div className="name">{name}</div>
              {address}
            </div>  
            <div className="pic">
            <img className="food-image" src={image} alt="random-suggestion" />
          </div> */}
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


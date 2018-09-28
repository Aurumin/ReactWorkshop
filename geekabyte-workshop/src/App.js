import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabbar from './movie-island/Tabbar'

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Welcome to Movie Island</h1>
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <p className="App-intro">Click on the Following Tabs</p>
        <div>
          <span className="tab" data-type="now_showing" onClick={this.onTabChange} className={`tab ${isNowShowingSelected ? "selected" : ""}`}>Now Showing</span>
          <span className="tab" data-type="top_rated" onClick={this.onTabChange} className={`tab ${isTopRatedSelected ? "selected" : ""}`}>Top Rated</span>
        </div>

        <Tabbar></Tabbar>

      </div>
    );
  }
}

export default App;

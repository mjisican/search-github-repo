import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from './fragments/SearchBar'
import RepoList from './fragments/RepoList'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Search Github Repo</h2>
          </div>
          <SearchBar />
          <RepoList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

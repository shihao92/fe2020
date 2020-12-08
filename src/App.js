import React, { Component } from 'react'

import CustomButton from './components/Button'
import CustomSidemenu from './components/Sidemenu'

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    count: 0
  }

  componentWillMount = () => {
    // let test = this.state.count + 1
    // this.state.count = test
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      // callback / Promises / Async Await
      // alert( 'count is updated successfully.' )
    })
  }

  componentDidUpdate = ( prevProps, prevState ) => {
    console.log( prevState )
  }

  componentDidCatch = () => {

  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>{ this.state.count }</h4>
          <CustomSidemenu />
          <CustomButton
            type="success"
            onClick={() => {
              this.setState({ count: this.state.count + 1 })
            }}>
            Click Me!
          </CustomButton>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;

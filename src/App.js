import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import CustomRouter from './router'

import configureStore from './store/config';

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'

let store = configureStore()

class App extends Component {
  state = {
    count: 0,
    title: 'sidemenu'
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
      <Provider store={ store }>
        <BrowserRouter>
          <CustomRouter />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

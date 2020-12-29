import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// import CustomButton from './components/Button'
import CustomSidemenu from '../../components/Sidemenu'
import CustomHeader from '../../components/Header'

import Users from './Users'
import Events from './Events'

// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'

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
      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>{ this.state.count }</h4>
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
        </header> */}
        {/* <button 
          className="btn btn-success" 
          onClick={() => {
            this.setState({ title: 'hahahaha' })
          }}>Click me on container</button> */}
        <CustomHeader />
        <div className="row">
          <CustomSidemenu title={ this.state.title } />
          <div className="col-md-9" style={{ display: 'inline-block' }}>
            <Route exact path="/dashboard/users" component={ Users }></Route>
            <Route exact path="/dashboard/events" component={ Events }></Route>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

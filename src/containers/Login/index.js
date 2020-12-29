import React, { Component } from 'react'

class Login extends Component {
  render = () => {
    return (
      <div>
        <h4>This is login page.</h4>
        <button 
          className="btn btn-primary"
          onClick={() => {
            console.log( this.props, 'test' )
            this.props.history.push( '/dashboard/users', {
              context: 'coming from login'
            })
          }}>Login</button>
      </div>
    )
  }
}

export default Login
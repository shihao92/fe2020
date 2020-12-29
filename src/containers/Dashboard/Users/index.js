import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {

  componentDidMount = () => {
    console.log( this.props, 'route matching params' )
  }

  render = () => {
    return (
      <h4>My users</h4>
    )
  }
}

const mapStateToProps = state => ({ data: state })

export default connect( mapStateToProps )( Users )
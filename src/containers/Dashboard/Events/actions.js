import React, { Component } from 'react'
import Axios from 'axios'

const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      loading: false,
      events: {
        data: [],
        meta: {}
      }
    }

    getEvents = () => {
      this.setState({ loading: true })
      Axios.get( "https://cloud.aiscnet.org/api/v1/events" ).then( res => {
        this.setState({ loading: false }, () => {
          this.getEventsSuccess( res.data )
        })
      }).catch( error => {
        this.setState({ loading: false }, () => {
          this.getEventsError( error )
        })
      })
    }
    getEventsSuccess = payload => this.setState({ events: payload })
    getEventsError = error => alert( 'Failed to obtain events.' )

    render = () => {
      return (
        <WrappedComponent
          { ...this.props }
          onLoadEvents={ this.state.loading }
          events={ this.state.events }
          getEvents={ this.getEvents } />
      )
    }
  }
  return WithHOC
}

export default HOC
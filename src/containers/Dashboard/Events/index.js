import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import LoadingOverlay from '../../../components/LoadingOverlay'

import WithEvents from './actions'
import { storeProfileName } from '../../../actions/profile'

class Events extends Component {

  componentDidMount = () => {
    console.log( this.props, 'events props' )
    this.props.getEvents()
  }

  render = () => {
    console.log( this.props, 'events props' )
    return (
      <>
        <h4>My events</h4>
        {
          this.props.events.data.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Start date time</td>
                  <td>End date time</td>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.events.data.map( item => {
                    return (
                      <tr key={ `Events-${ item.id }` }>
                        <td>{ item.name }</td>
                        <td>{ item.start_date_time }</td>
                        <td>{ item.end_date_time }</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          ) : (
            <p>No data is found.</p>
          )
        }
        <button 
          className="btn btn-primary" 
          onClick={() => {
            this.props.storeProfileName( 'John Doe' )
          }}>Test trigger action</button>
        <button 
          className="btn btn-primary" 
          onClick={() => {
            this.props.history.push( '/dashboard/users' )
          }}>GO to users</button>
        { this.props.onLoadEvents && <LoadingOverlay /> }
      </>
    )
  }
}

const mapStateToProps = state => ({ data: state })

export default compose(
  connect( mapStateToProps, {
    storeProfileName
  }),
  WithEvents
)( Events )
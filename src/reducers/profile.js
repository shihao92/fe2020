import { STORE_PROFILE_NAME } from '../actions/type'

let initialState = {
  name: ''
}

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case STORE_PROFILE_NAME:
      return {
        ...state,
        name: action.payload
      }
    default: return state
  }
}
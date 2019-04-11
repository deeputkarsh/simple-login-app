import { ROUTE_CHANGE, LOAD_USER_DATA, LOG_OUT_USER } from './constants'

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    mobile: ''
  }
}

export const appState = (state = initialState, action = {}) => {
  const data = action.payload
  switch (action.type) {
    case ROUTE_CHANGE :
      const routeState = getRouteState(data)
      return { ...state, ...routeState }
    case LOAD_USER_DATA :
      return { ...state, user: { ...data } }
    case LOG_OUT_USER :
      return initialState
    default :
      return state
  }
}

const getRouteState = (route) => {
  switch (route) {
    case 'home' :
      return {
        isSignedIn: true,
        route
      }
    default :
      return {
        route
      }
  }
}

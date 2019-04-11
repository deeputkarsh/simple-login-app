import React, { Component } from 'react'
import Register from '../Register/Register'
import Signin from '../Signin/Signin'
import Home from '../Home/Home'
import { connect } from 'react-redux'
import { loadUser, onRouteChange } from '../../reduxHelpers/actions'

const mapStateToProps = state => ({
  route: state.route
})

class Router extends Component {
  getComponent (route) {
    switch (route) {
      case 'home' :
        return Home
      case 'register' :
        return Register
      case 'signin' :
      default :
        return Signin
    }
  }
  render () {
    const {
      route,
      loadUser,
      onRouteChange
    } = this.props
    const Comp = this.getComponent(route)
    return <Comp loadUser={loadUser} onRouteChange={onRouteChange} />
  }
}

export default connect(mapStateToProps, { onRouteChange, loadUser })(Router)

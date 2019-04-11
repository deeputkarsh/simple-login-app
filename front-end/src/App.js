import React, { Component } from 'react'
import './styles/App.scss'
import Navigation from './components/Navigation/Navigation'
import Router from './components/Routes/Router'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navigation />
        <Router />
      </div>
    )
  }
}

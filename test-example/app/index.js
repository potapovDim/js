import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './reducer/rootReducer'

import { setState } from './reducer/index'

import Tables from './src'

class Root extends Component {

  state = {
    renderTabses: false
  }

  componentWillMount() {
    this.requestInterval = setInterval(() => {
      fetch('http://localhost:8085/', {
        node: 'no-cors'
      }).then(resp => resp.json()).then((parsedData) => {
        store.dispatch(setState(parsedData))
      })
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.requestInterval)
  }

  render() {
    return (
      <Provider store={store}>
        <Tables />
      </Provider>
    )
  }
}

export default Root
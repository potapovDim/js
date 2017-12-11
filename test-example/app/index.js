import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './reducer/rootReducer'
import Tables from './src'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tables />
      </Provider>
    )
  }
}

export default Root
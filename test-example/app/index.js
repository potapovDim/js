import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './reducer/rootReducer'

import { setState } from './reducer/index'

import { Login } from './src/login'

import Tables from './src'

class Root extends Component {

  state = {
    renderTabses: false,
    user: null
  }

  componentWillMount() {
    // this.requestInterval = setInterval(() => {
    //   fetch('http://localhost:8085/', {
    //     node: 'no-cors'
    //   }).then(resp => resp.json()).then((parsedData) => {
    //     store.dispatch(setState(parsedData))
    //   })
    // }, 500)
  }


  login = (user) => {
    this.setState({ user })
  }



  componentWillUnmount() {

    // clearInterval(this.requestInterval)
  }

  render() {
    const { user } = this.state
    console.log(user)
    return (<div>
      {
        user ?
          <div>
            <div className="username">
              Ім'я користувача "{user.username}"
            </div>
            <Provider store={store}>
              < Tables />
            </Provider >
          </div> : <Login login={this.login} />
      }
    </div>
    )
  }
}

export default Root
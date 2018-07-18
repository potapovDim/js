import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link, withRouter
} from 'react-router-dom'

import { Provider, connect } from 'react-redux'



import store, { login, serverLogin, serverLogout } from './reducer/index'

const Home = withRouter(connect(({ loginReducer }) => loginReducer)(class extends React.Component {

  state = {
    name: ''
  }

  componentWillMount() {
    const { name } = this.props
  }

  enterName = ({ target: { value } }) => {
    this.setState({
      name: value
    })
  }

  login = () => {
    const { name } = this.state
    const { history, dispatch } = this.props
    if (!!name) {
      dispatch(serverLogin(name)).then((data) => {
        if (data) history.push('/about')
      })
    }
  }

  render() {
    console.log('render')
    return (
      <div>
        <input onChange={this.enterName} />
        <button onClick={this.login} >Login</button>
      </div>
    )
  }
}))

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = connect(({ loginReducer }) => loginReducer)((props) => {
  const { match, name, history, dispatch } = props
  if (!name) {
    history.push('/')
  }
  const logout = () => {
    dispatch(serverLogout()).then(() => {
      localStorage.removeItem('token')
      history.push('/')
    })
  }
  return (
    <div>
      <button onClick={logout}>Log out</button>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
        </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
        </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
        </Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route exact path={match.path} render={() => (
        <h3>Please select a topic.</h3>
      )} />
    </div>
  )
})

const BasicExample = () => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  </Provider >
)
export default BasicExample
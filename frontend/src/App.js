import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { mapStateToProps, mapDispatchToProps } from './mapToProps'
import { connect } from 'react-redux'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Home from './component/page/Home'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      token: undefined,
      user: undefined
    }
  }

  componentDidMount() {
    console.warn("componentDidMount")
  }

  render() {
    console.warn("render")
    return (
      <>
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

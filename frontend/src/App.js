import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostList from './component/PostList'
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/posts" component={PostList} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

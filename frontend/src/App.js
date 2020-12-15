import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostList from './component/PostList/PostList'
import { mapStateToProps, mapDispatchToProps } from './mapToProps'
import { connect } from 'react-redux'
import Login from './component/Login/Login'
import Register from './component/Register/Register'

class App extends React.Component {
  constructor() {
    super()
    this.state = { posts: [] }
  }


  render() {
    console.log("state", this.state.posts)
    return (
      // <BrowserRouter>
      //   <Switch>
      //     <Route path="/posts" component={PostList} />
      //   </Switch>
      // </BrowserRouter>
      // <PostList hello={this.props.posts}></PostList>
      <>
        <Login></Login>

        <Register></Register>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

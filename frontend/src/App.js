import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostList from './component/PostList'
import { mapStateToProps, mapDispatchToProps } from './mapToProps'
import { connect } from 'react-redux'
class App extends React.Component {
  constructor() {
    super()
    this.state = { posts: [] }
  }
  componentDidMount() {
    console.warn("ComponentDidMount")
    this.props.onReadPost()
    this.setState({ posts: this.props.posts })
  }

  shouldComponentUpdate(prevProps, preState) {
    console.log(prevProps.posts, preState)
    return true
  }
  render() {
    console.log("state", this.state.posts)
    return (
      // <BrowserRouter>
      //   <Switch>
      //     <Route path="/posts" component={PostList} />
      //   </Switch>
      // </BrowserRouter>
      <PostList hello={this.props.posts}></PostList>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

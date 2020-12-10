import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostList from './component/PostList'
import { mapStateToProps, mapDispatchToProps } from './mapToProps'
import { connect } from 'react-redux'
class App extends React.Component {
  componentDidMount() {
    console.warn("ComponentDidMount")
    this.props.onReadPost()
    this.setState({ posts: this.props.posts })
  }

  render() {
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

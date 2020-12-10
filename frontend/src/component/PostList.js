import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './PostList.css';
import 'antd/dist/antd.css';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps'
import { connect } from 'react-redux'
const { Header, Content, Footer } = Layout;

class PostList extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        console.warn("ComponentDidMount")
        this.props.onReadPost()
        this.setState({ posts: this.props.posts })
    }

    static getDerviedStateFromProps(props, state) {
        console.warn("getDerviedStateFromProps", props, state)
        return 0
    }

    render() {
        console.warn("render")
        let posts = this.props.posts
        let item = posts.map(data => {
            return <p key={data.id}>{data.name} </p>
        })
        return (
            <div>
                {item}
                Hello
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
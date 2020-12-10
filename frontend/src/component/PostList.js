import React, { Component } from 'react'
// import { Layout, Menu, Breadcrumb } from 'antd';
import './PostList.css';
import 'antd/dist/antd.css';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps'
import { connect } from 'react-redux'
// const { Header, Content, Footer } = Layout;

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [this.props.posts]
        }
    }


    static getDerviedStateFromProps(props, state) {
        console.warn("hook", props, state)
        return { posts: props }
    }

    render() {
        console.warn("render")
        console.log(this.state.posts)
        let posts = this.props.hello
        let item = posts.map(data => {
            return <p key={data.id}>{data.name} </p>
        })
        return (
            <div>
                {item}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
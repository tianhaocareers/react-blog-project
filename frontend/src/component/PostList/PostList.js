import React, { Component } from 'react'
import { mapStateToProps, mapDispatchToProps } from '../../mapToProps'
import { connect } from 'react-redux'

import './PostList.css';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [this.props.posts],
            updatePost: { author: "", title: "", content: "" }
        }
    }

    componentDidMount() {
        console.warn("ComponentDidMount")
        this.props.onReadPost()
        this.setState({ posts: this.props.posts })
    }

    render() {
        console.warn("render")
        let posts = this.props.posts
        let updateData = { author: "update author", title: "update title", content: "update content" }
        let addData = { author: "Third author", title: "Third title", content: "Third content" }
        let items = posts.map(data => {
            return (
                <div>
                    <p key={data._id}>{data.author}, {data.title}, {data.content}, {data._id} </p>
                    <button type="button" onClick={() => { this.props.onUpdatePost(data._id, updateData) }}>Update</button>
                    <button type="button" onClick={() => this.props.onRemovePost(data._id)}>Delete</button>
                </div>
            )
        })
        return (
            <>
                <form >
                    <label >Author: </label>
                    <input type='text' onChange={(e) => console.log(e.target.value)} />
                    <label >Title: </label>
                    <input type='text' onChange={(e) => console.log(e.target.value)} />
                    <label >Content: </label>
                    <input type='text' onChange={(e) => console.log(e.target.value)} />
                    <input type='submit' value='Submit' />
                    <button type="button" onClick={() => {
                        this.props.onAddPost(addData)
                        this.props.onReadPost()
                    }}>Add</button>
                </form>
                <div>
                    {items}
                </div>

            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
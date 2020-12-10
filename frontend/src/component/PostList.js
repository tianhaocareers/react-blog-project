import React, { Component } from 'react'
import axios from 'axios'

export default class PostList extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:4000/posts")
            this.setState({ posts: res.data })
            console.log(this.state)
        }
        fetchData()
    }

    render() {
        let posts = this.state.posts.map(data => <p key={data._id}>{data.title}</p>)
        return (
            <div>
                {posts}
            </div>
        )
    }
}

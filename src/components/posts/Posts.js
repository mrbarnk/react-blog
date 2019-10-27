import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layouts/Spinner'
import Post from '../posts/Post'
import {Link} from 'react-router-dom'
// import Pagination from './Pagination'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.Pagination = this.Pagination.bind(this);
    }
    state = {
        posts: []
    }
    Pagination() {
        // posts
        this.setState ({
            posts: []
        })
    }
    render() {
        
        return (
            <Consumer>
                {value => {
                    this.state = {
                        posts: value
                    }
                    const {posts} = this.state.posts;
                    if(posts === undefined || posts.length === 0) {
                        return (
                            <React.Fragment>
                                <Spinner />
                                
                            </React.Fragment>
                        )
                    } else {
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{ posts.heading }</h3>
                                <div className="row">
                                    {posts.slice(0, 6).map(item => (
                                        <Post key={item.id} post={item}/>
                                    ))}
                                </div>
                                {/* <Pagination /> */}
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}
export default Posts
import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
    const {post} = props

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <img height="200" src={post.featured_image} alt={post.title.rendered} className="card-img"/>
                    <h5><Link to={`post/${post.id}`}>{ post.title.rendered.length < 40 ? post.title.rendered + <p dangerouslySetInnerHTML={{__html:'<br/>'}}></p> : post.title.rendered.substr(0,40)+'...' }</Link></h5>
                    <p>{post.excerpt.rendered}</p>
                </div>
            </div>
        </div>
    )
}
export default Post;
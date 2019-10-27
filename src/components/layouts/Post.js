import React, {Component} from 'react'
import axios from 'axios'
import Spinner from './Spinner'
// const Context = React.createContext();

export class Post extends Component {
    state = {
        post: {}
    }
    // https://epower.ng/wp-json/wp/v2/posts/?filter[p]=4045
    componentDidMount() {
        axios.get('https://epower.ng/wp-json/wp/v2/posts/?filter[p]='+this.props.match.params.id)
        .then( res => {
            console.log(res.data);
            this.setState({post: res.data})
        } )
        .catch( err => console.log(err));
    }
    render() {
        const {post} = this.state;
                if(post === undefined || Object.keys(post).length === 0) {
                    return <Spinner />
                } else {
                    return (
                        <React.Fragment>
                            <img height="400" src={post[0].featured_image} alt={post[0].title.rendered} className="card-img"/><br />
                            <h1 className="text-center mb-4">{ post[0].title.rendered }</h1>
                            <p className="text-center mb-4">PUBLIISHED ON {post[0].date}</p>
                            <div className="row" dangerouslySetInnerHTML={{__html: post[0].content.rendered}}>
                            </div>
                        </React.Fragment>
                    )
                }
    }
}
export default Post
import React, { Component } from 'react'
import axios from 'axios'
export const Context = React.createContext();

export class Provider extends Component {
    state = {
        posts: [],
        heading: 'Top 10 tracks'
    }

    componentDidMount() {
        axios.get('https://epower.ng/wp-json/wp/v2/posts')
        .then( res => {
            console.log(res.data);
            this.setState({posts: res.data})
        } )
        .catch( err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
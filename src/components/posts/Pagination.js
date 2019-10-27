import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../../context'

export default function Pagination() {
    
    // const [state, setState] = useContext(Context)
    
    const nextPost = () => {
        // alert('s')
        // setState({posts: {}})
        // console.log()
    }

    return (
        <ul className="pagination pagination-lg mx-auto">
            <li disabled={true}><Link to="/" disabled={true}>PREV</Link></li>
            <li><Link to="#" onClick={nextPost}>NEXT</Link></li>
        </ul>
    )
}

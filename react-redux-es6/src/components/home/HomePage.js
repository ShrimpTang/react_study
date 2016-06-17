import React from 'react'
import {Link} from 'react-router'
export default class HomePage extends React.Component{
    render(){
        (<div className="jumbotron">
            <h1>Admin</h1>
            <p>Black White</p>
            <Link to="about" className="btn btn-primary btn-lg"></Link>
        </div>)
    }
}
import React from  'react'
import LoadingDots from './LoadingDots'
import {IndexLink,Link} from 'react-router'
const Header = (props)=> {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">index</IndexLink>
            {' | '}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {' | '}
            <Link to="/about" activeClassName="active">About</Link>
            {props.loading && <LoadingDots dots={20} interval={100}/>}
        </nav>
    )
}
export default Header;
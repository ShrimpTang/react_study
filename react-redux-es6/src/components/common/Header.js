import React from  'react'
import {IndexLink,Link} from 'react-router'
const Header = ()=> {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">index</IndexLink>
            {' | '}
            <Link to="/about" activeClassName="active">About</Link>
            {' | '}
            <Link to="/course" activeClassName="active">Course</Link>
        </nav>
    )
}
export default Header;
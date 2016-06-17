import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import App from './components/App'
import {Route,IndexRoute} from 'react-router'
import React from 'react'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
)
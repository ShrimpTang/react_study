import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import CoursesPage from './components/course/CoursesPage'
import ManageCoursePage from './components/course/ManageCoursePage'
import App from './components/App'
import {Route,IndexRoute} from 'react-router'
import React from 'react'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="course" component={CoursesPage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
    </Route>
)
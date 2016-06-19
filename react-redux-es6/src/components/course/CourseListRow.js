import React from 'react'
import {Link} from 'react-router'
export default class CourseListRow extends React.Component{
    render (){
        var course = this.props.course;
        return(
            <tr>
                <td>{course.id}</td>
                <td><Link to={'/course/'+course.id}>{course.title}</Link> </td>
                <td><a href={course.watchHref}>Watch</a></td>
                <td>{course.authorId}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
            </tr>
        )
    }
}
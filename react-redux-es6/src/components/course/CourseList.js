import React from 'react'
import CourseListRow  from './CourseListRow'

const CourseList =({courses})=>{
 return (
    <table>
        <thead>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>watchHref</th>
            <th>authorId</th>
            <th>length</th>
            <th>category</th>
        </tr>
        </thead>
        <tbody>
        {courses.map(c=>{
            return <CourseListRow key={c.id} course={c}/>
        })}
        </tbody>
    </table>
 )
}
export default CourseList
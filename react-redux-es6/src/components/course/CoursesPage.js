import React from  'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'

class CoursesPage extends React.Component{

    redirectToAddCoursePage(){
        browserHistory.push('/course')
    }
    render(){
        return (
            <div>
                <h1>Courses Page</h1>
                <input type="submit"
                        value="Add Course"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage.bind(this)}/>
                <CourseList courses={this.props.courses}></CourseList>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        courses:state.courses
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(courseActions,dispatch)
        //,
        //createCourse:course=>{
        //    dispatch(courseActions.createCourse(course));
        //}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
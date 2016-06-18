import React from  'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
class CoursesPage extends React.Component{

    render(){
        return (
            <div>
                <h1>Courses Page</h1>
                {this.props.courses.map((c,i)=>{
                    return <div key={i}>{c.title}</div>
                })}
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
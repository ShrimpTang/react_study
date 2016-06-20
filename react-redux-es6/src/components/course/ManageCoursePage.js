import React from  'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'
class ManageCoursePage extends React.Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            course:Object.assign({},this.props.course),
            errors:[]
        }
    }

    updateCourseState(event){
        const name = event.target.name;
        const course = this.state.course;
        course[name] = event.target.value;
        return this.setState({course:course})
    }

    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }

    render() {
        return (
            <div>
                <CourseForm
                    onChange={this.updateCourseState.bind(this)}
                    allAuthors={this.props.authors}
                    errors={this.state.errors}
                    course={this.state.course}
                    onSave={this.saveCourse.bind(this)}/>
            </div>
        )
    }

}

function mapStateToProps(state) {
    let course = {id: '', title: '', watchHref: '', authorId: '', f_length: '', category: ''}
    const authors4dropdown = state.authors.map(author=>{
        return {value:author.id,text:author.firstName+' '+author.lastName}
    })
    return {
        course: course,
        authors:authors4dropdown
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
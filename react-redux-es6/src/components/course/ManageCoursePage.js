import React,{PropTypes} from  'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'
class ManageCoursePage extends React.Component {

    constructor(props,context){
        super(props,context);
        debugger
        this.state = {
            course:Object.assign({},props.course),
            errors:[]
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.course.id!=nextProps.params.id){
            this.setState({course:Object.assign({},nextProps.course)});
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
        this.context.router.push('/courses');
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
ManageCoursePage.contextTypes = {
    router:PropTypes.object.isRequired
}

function mapStateToProps(state,ownProps) {
    var id = ownProps.params.id;
    var update_course = state.courses.find(c=> c.id===id);
    let course = {id: '', title: '', watchHref: '', authorId: '', f_length: '', category: ''}
    if(update_course){
        course = update_course;
    }
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
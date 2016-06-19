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

    render() {
        return (
            <div>
                <CourseForm
                    allAuthors={[]}
                    errors={this.state.errors}
                    course={this.state.course}/>
            </div>
        )
    }

}

function mapStateToProps(state) {
    let course = {id: '', title: '', watchHref: '', authorId: '', f_length: '', category: ''}
    return {
        course: course
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
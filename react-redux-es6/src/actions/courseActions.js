import * as types from './actionTypes'
import courseApi from '../api/mockCourseApi'
export  function loadCoursesSuccess(courses){
    return {
        type:types.LOAD_COURSES_SUCCESS,
        courses
    }
}
export function loadCourses(){
    return function (dispatch) {
        courseApi.getAllCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses))
        }).catch(error=>{
            throw  error;
        })
    }
}

export function updateCourseSuccess(course){
    return {type:types.UPDATE_COURSE_SUCCESS,course}
}

export function createCourseSuccess(course){
    return {type:types.CREATE_COURSE_SUCCESS, course}
}

export function saveCourse(course){
    return (dispatch,getState)=>{
        return courseApi.saveCourse(course)
        .then(new_course=>{
            debugger
            if(course.id){
                dispatch(updateCourseSuccess(new_course))
            }else{
                dispatch(createCourseSuccess(new_course))
            }
        })
    }
}
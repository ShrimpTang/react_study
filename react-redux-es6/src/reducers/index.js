import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from  './AuthorReducer'
const root = combineReducers(
    {
        courses,
        authors
    }
);

export default root;
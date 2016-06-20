import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from  './authorReducer'
const root = combineReducers(
    {
        courses,
        authors
    }
);

export default root;
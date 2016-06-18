import {combineReducers} from 'redux';
import courses from './courseReducer';

const root = combineReducers(
    {
        courses
    }
);

export default root;
import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function (state = initialState.mainLayout, action) {
    switch (action.type) {
        case types.APP_BAR_TITLE_CHANGE:
            return Object.assign({}, state, {title: action.title});
            break;
        default:
            return state;
    }
}
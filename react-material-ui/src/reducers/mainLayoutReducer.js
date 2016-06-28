import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function (state = initialState.mainLayout, action) {
    switch (action.type) {
        case types.APP_BAR_TITLE_CHANGE:
            return Object.assign({}, state, {title: action.title});
        case types.TOGGLE_DRAWER_OPEN:
            return Object.assign({}, state, {open: !state.open});
        default:
            return state;
    }
}
import * as types from './actionTypes'
export function changeTitle(title) {
    return {
        type: types.APP_BAR_TITLE_CHANGE,
        title
    }
}
export function toggleDrawerOpen() {
    return {
        type: types.TOGGLE_DRAWER_OPEN
    }
}
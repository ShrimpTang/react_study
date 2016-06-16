import {SELECT_SUBREDDIT,INVALIDATE_SUBREDDIT,REQUEST_POSTS,RECEIVE_POSTS} from './actions'
import {combineReducers} from 'redux'

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.type
        default:
            return state
            break;
    }
}

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
            break
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
            break
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
            break
        default:
            return state;
    }
}

function postBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
            break
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    postBySubreddit,
    selectedSubreddit
})

export default rootReducer
























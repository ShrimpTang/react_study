import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
/**
 * 要显示的 subreddit
 * @type {string}
 */
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

/**
 * 要刷新的 subreddit
 * @type {string}
 */
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export function invaldateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

/**
 * 获取指定的 subreddit
 * @type {string}
 */
export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

/**
 * 接受响应
 * @type {string}
 */
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts (subreddit,json){
    return{
        type:RECEIVE_POSTS,
        subreddit,
        posts:json.data.children.map(child => child.data),
        receivedAt : Date.now()
    }
}

function fetchPosts(subreddit){
    return function (dispatch) {
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
            .then(response => response.json)
            .then(json => dispatch(receivePosts(subreddit,json)))
    }
}

function shouldFetchPosts(state,subreddit){
    const posts = state.postBySubreddit[subreddit]
    if(!posts){
        return true
    }else if(posts.isFetching){
        return false
    }else{
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeed(subbredit){
    return function (dispatch, getState) {
        if(shouldFetchPosts(getState(),subbredit)){
            return dispatch(fetchPosts(subbredit))
        }else{
            return Promise.resolve()
        }
    }
}
import thunk  from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import {fetchPostsIfNeed,selectSubreddit} from './actions'
import rootReducer from './reducers'
const store = createStore(rootReducer,applyMiddleware(
    thunk
))
store.dispatch(fetchPostsIfNeed('reactjs'))
    .then(()=>{
        console.log(store.getState())
    })
import {VisibilityFilters,ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,TOGGLE_TODO} from './actions'
import {combineReducers} from 'redux'
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]

            break;
        case TOGGLE_TODO:
            return state.map((todo, index)=> {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })

            break;
        default:
            return state;
    }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
            break;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter
})
export default todoApp

//function todoApp(state = initialState, action) {
//    switch (action.type) {
//        case ADD_TODO:
//            return Object.assign({}, state, {
//                todos: [
//                    ...state.todos,
//                    {
//                        text: action.text,
//                        completed: false
//                    }
//                ]
//            });
//            break;
//        case TOGGLE_TODO:
//            return Object.assign({}, state, {
//                todos: state.todos.map((todo, index)=> {
//                    if (index === action.index) {
//                        return Object.assign({}, todo, {
//                            completed: !todo.completed
//                        })
//                    }
//                    return todo;
//                })
//            })
//            break;
//        case SET_VISIBILITY_FILTER:
//            return Object.assign({}, state, {
//                visibilityFilter: action.filter
//            });
//            break;
//        default:
//            return state;
//    }
//}
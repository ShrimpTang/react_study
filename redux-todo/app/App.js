import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import {addTodo,setVisibilityFilter,toggleTodo,VisibilityFilters} from './actions'
import {connect} from 'react-redux'
class App extends React.Component {
    render() {
        const { dispatch,visibleTodos,visibilityFilter} = this.props;
        return (
            <div>
                <AddTodo
                    onAddClick={text=>{
                        dispatch(addTodo(text))
                    }}/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index=>{
                        dispatch(toggleTodo(index))
                    }}
                />
                <Footer
                    onFilterChange={filter=>{
                        dispatch(setVisibilityFilter(filter))
                    }}
                    filter={visibilityFilter}
                />
            </div>
        )
    }
}

function selectTodos(todos,filter){
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
            break;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
            break;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
            break;
        default:
            return todos;
    }
}

function select(state){
    return {
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}

export default connect(select)(App)
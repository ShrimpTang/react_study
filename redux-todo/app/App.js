import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo
                    onAddClick={text=>{
                      console.log('add todo',text)
                    }}/>
                <TodoList
                    todos={
                        [
                            {
                                text:'啊数据库了',
                                completed:false
                            },
                            {
                                text:'heisidahao',
                                completed:true
                            }
                        ]
                    }
                    onTodoClick={index=>{
                        console.log('onTodoClick',index)
                    }}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
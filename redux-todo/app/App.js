import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
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
                <Footer
                    onFilterChange={f=>{
                        console.log('filter change',f)
                    }}
                    filter="SHOW_ALL"
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
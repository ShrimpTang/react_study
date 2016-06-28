import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MainLayout from './layout/MainLayout'
import {Router,Route,Link,IndexRoute,Redirect,browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import Home from './components/Home'
var store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={Home}></IndexRoute>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('app'));
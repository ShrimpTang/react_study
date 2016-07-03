import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MainLayout from './layout/MainLayout'
import {Router,Route,Link,IndexRoute,Redirect,hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import Home from './components/Home'
import PicaMan from './components/picaman/pickman'
import ComicList from './components/picaman/comicList';
import Comic from './components/picaman/comic'
var store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/picaman" component={PicaMan}/>
                <Route path="/picaman/list/:id/:page"  component={ComicList}/>
                <Route path="/picaman/comic/:id"  component={Comic}/>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('app'));
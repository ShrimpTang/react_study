import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import routes from './routes'
import {Router,browserHistory} from 'react-router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/styles.css'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
var store = configureStore();
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
)
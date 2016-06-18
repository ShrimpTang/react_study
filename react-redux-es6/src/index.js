import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import routes from './routes'
import {Router,browserHistory} from 'react-router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/styles.css'

render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')

)
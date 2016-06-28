import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MainLayout from './layout/MainLayout'

ReactDOM.render(<MainLayout/>,
    document.getElementById('app'));
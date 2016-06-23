import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

ReactDOM.render(
    <MuiThemeProvider>
        <RaisedButton label="Default"/>
    </MuiThemeProvider>,
    document.getElementById('app'));
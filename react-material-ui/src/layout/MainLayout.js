import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
class MainLayout extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                {
                    //<AppBar
                    //    title="Title"
                    //    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    ///>
                }
            </MuiThemeProvider>
        )
    }
}
export default MainLayout
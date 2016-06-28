import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import LeftDrawer from '../components/LeftDrawer'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/mainLayoutAction'
class MainLayout extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title={this.props.title}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.props.actions.toggleDrawerOpen}
                    />
                    <Drawer open={this.props.open}
                            docked={false}
                            onRequestChange={this.props.actions.toggleDrawerOpen}
                    >
                        <LeftDrawer/>
                    </Drawer>
                    {this.props.children}
                </div>

            </MuiThemeProvider>
        )
    }
}
function mapStateToProps(state) {
    return {
        title: state.mainLayout.title,
        open: state.mainLayout.open
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)

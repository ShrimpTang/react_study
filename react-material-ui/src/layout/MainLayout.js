import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import LeftDrawer from '../components/LeftDrawer/LeftDrawer'
import {connect} from 'react-redux'
class MainLayout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                    />
                    <Drawer open={this.state.open}
                            docked={false}
                            onRequestChange={(open) => this.setState({open})}
                    >
                        <LeftDrawer/>
                    </Drawer>
                    {this.props.children}
                </div>

            </MuiThemeProvider>
        )
    }
}
export default connect()(MainLayout)

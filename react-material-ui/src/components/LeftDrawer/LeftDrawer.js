import React,{PropTypes} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar'
import MenuItem from 'material-ui/MenuItem';
import Home from 'material-ui/svg-icons/action/home.js';
import GamePad from 'material-ui/svg-icons/hardware/gamepad.js'
import Collections from '../../../node_modules/material-ui/svg-icons/image/collections.js'
import './LeftDrawer.css'
import {Router,Route,Link,hashHistory,IndexRoute,Redirect} from 'react-router'


class LeftDrawer extends React.Component {
    render() {
        var {textColor,color} = this.context.muiTheme.appBar;
        var router = this.context.router;
        return (
            <MuiThemeProvider>
                <div>
                    <div className="left-drawer-heading-wrapper"
                         style={{backgroundColor:color}}>
                        <div className="left-drawer-heading-inner">
                            <Avatar
                                src="src/assets/image/avatar.jpg"
                                size={100}
                            />
                            <br/>
                            <span style={{color:textColor}}>蝦子</span>
                            <br/>
                            <span style={{color:textColor}}>moumoon711@gmail.com</span>
                        </div>
                    </div>
                    <Link to="/picaman">About - r</Link>
                    <div>
                        <MenuItem primaryText="Home" leftIcon={<Home color={color} />} onClick={()=>{router.push('/');this.props.toggle()}}/>
                        <MenuItem primaryText="d7vg" leftIcon={<GamePad color={color} />} />
                        <MenuItem primaryText="picaman" leftIcon={<Collections color={color} />} onClick={()=>{router.push('/picaman');this.props.toggle()}}/>
                    </div>
                </div>
            </MuiThemeProvider>

        )
    }
}

export default LeftDrawer;

LeftDrawer.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
};
import React,{PropTypes} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar'
import MenuItem from 'material-ui/MenuItem';
import Home from 'material-ui/svg-icons/action/home.js';
import './LeftDrawer.css'


class LeftDrawer extends React.Component {

    render() {
        console.log(this.context.muiTheme)
        var {textColor,color} = this.context.muiTheme.appBar;
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
                    <div>
                        <MenuItem primaryText="Home"  leftIcon={<Home color={color} />}/>
                    </div>
                </div>
            </MuiThemeProvider>

        )
    }
}

export default LeftDrawer;

LeftDrawer.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};
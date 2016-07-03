/**
 * Created by Shrimp on 16/7/3.
 */
import React,{PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
export default class PicaComicDialog extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        var windowHeight = window. innerHeight;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <span>
                <RaisedButton primary={true} style={this.props.style} label={this.props.label} onTouchTap={this.handleOpen}/>
                <Dialog
                    title="Dialog With Custom Width"
                    titleStyle={{display:'none'}}
                    actions={actions}
                    modal={true}
                    contentStyle={{transform:'initial',maxHeight:windowHeight,maxWidth:'none'}}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                >
                    <div   style={{height:windowHeight}}>
                        <img style={{display:'block',margin:'0 auto'}}  src="http://picacomic.com/assets/comics/knight_comics/lCI182ZsMSkpOe7mIWzFS2RbK/1684/1/2.jpg"/>
                    </div>
                </Dialog>
            </span>
        );
    }
}

PicaComicDialog.propTypes = {
    index:PropTypes.number.isRequired,
    comic:PropTypes.object.isRequired,
    label:PropTypes.string.isRequired

}
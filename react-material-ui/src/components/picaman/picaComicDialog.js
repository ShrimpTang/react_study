/**
 * Created by Shrimp on 16/7/3.
 */
import React,{PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import LazyLoad from 'react-lazyload';
export default class PicaComicDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        open: false,
        detail: [
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/1.jpg",
                "width": 1333,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/2.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/3.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/4.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/5.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/6.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/7.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/8.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/9.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/10.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/11.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/12.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/13.jpg",
                "width": 701,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/14.jpg",
                "width": 1269,
                "height": 1000
            },
            {
                "url": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/1/15.jpg",
                "width": 783,
                "height": 1000
            }
        ],
        index: 0
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open
        })
    }

    render() {
        var windowHeight = window.innerHeight;
        const actions = [
            <FlatButton
                label={"Cancel"+this.props.ep}
                primary={true}
                onTouchTap={this.handleClose}
            />,
            //<FlatButton
            //    label="上一页"
            //    primary={true}
            //    onTouchTap={this.before.bind(this)}
            ///>,
            //<FlatButton
            //    label="下一页"
            //    primary={true}
            //    onTouchTap={this.after.bind(this)}
            ///>
        ];
        var current = this.state.detail[this.state.index];
        return (
            <span>
                <Dialog
                    title="Dialog With Custom Width"
                    titleStyle={{display:'none'}}
                    actions={actions}
                    modal={true}
                    contentStyle={{transform:'initial',maxHeight:windowHeight,maxWidth:'none'}}
                    bodyStyle={styles.bodyStyle}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                >
                    <div style={{height:windowHeight,    position: 'relative',overflowY: 'scroll'}}>
                        {
                            //<a style={styles.leftMask} onClick={this.before.bind(this)}></a>
                            //<a style={styles.rightMask} onClick={this.after.bind(this)}></a>
                            //<img style={{display:'block',margin:'0 auto'}} src={current.url}/>
                        }

                        {
                            this.state.detail.map((p, i)=> {
                                return (
                                    <LazyLoad key={i} throttle={200}>
                                        <div>
                                            <img src={p.url} height={p.height} style={{display:'block',margin:'0 auto'}}/>
                                        </div>
                                    </LazyLoad>
                                )
                            })
                        }
                    </div>
                </Dialog>
            </span>
        );
    }

    before() {
        var index = this.state.index;
        if (index != 0) {
            this.setState({
                index: index - 1
            })
        }
    }

    after() {
        var {index,detail} = this.state;
        if (index != detail.length - 1) {
            this.setState({
                index: index + 1
            })
        }
    }
}


const styles = {
    leftMask: {
        width: '50%',
        height: '100%',
        position: 'absolute',
        zIndex: 12
    },
    rightMask: {
        width: '50%',
        height: '100%',
        right: 0,
        position: 'absolute',
        zIndex: 12
    },
    bodyStyle: {
        padding: '0px',
        boxSizing: 'border-box',
        overflowY: 'hidden'
    }

}

PicaComicDialog.propTypes = {
    ep: PropTypes.number.isRequired,
    comic: PropTypes.object.isRequired,

}
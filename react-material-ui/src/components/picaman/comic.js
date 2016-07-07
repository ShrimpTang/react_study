/**
 * Created by Shrimp on 16/7/3.
 */
import React from  'react';
import {hashHistory} from 'react-router';
import {getComicDetail,getEpisode} from '../../api/picaApi';
import {changeTitle} from '../../actions/mainLayoutAction'
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ComicDetail from './comicDetail';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PicaComicDialog from './picaComicDialog';
import LinearProgress from 'material-ui/LinearProgress';
import LazyLoad from 'react-lazyload';
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/mainLayoutAction'
import AppBar from 'material-ui/AppBar';
class Comic extends React.Component {
    constructor(props) {
        super(props)
        //  props.dispatch(changeTitle('Comic'));
        this.state = {
            comic: {
                "comic": {
                    //"updated_at": "2016-06-27T05:06:54.000Z",
                    //"id": 8884,
                    //"name": "[夢々] 松永家の某日 1 [黑条汉化]   2.3[戀髮漢化]",
                    //"author": "夢々",
                    //"finished": "0",
                    //"total_page": 56,
                    //"img_directory": "knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764",
                    //"views_count": 22554,
                    //"description": "打算买顶假发试一试",
                    //"display_name": "　",
                    //"cover_image": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/cover.jpg",
                    //"rank": 4,
                    //"comment_count": 5,
                    //"user_id": 290
                },
                "ep_count": 0
            },
            ep: 1,
            open: false,
            detail: []
            ,
        }
    }

    componentWillMount() {
        var {id} = this.props.params;
        if (id) {
            getComicDetail({id})
                .then(comic=> {
                    this.setState({comic});
                })
        }
    }

    render() {
        if (this.state.comic.comic) {
            const comic = this.state.comic.comic;
            return (
                <div>
                    <AppBar
                        title={comic.name}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.props.actions.toggleDrawerOpen}
                    />
                    <div style={styles.root}>
                        <Paper zDepth={3} style={{position:'relative'}}>
                            <ComicDetail comic={comic} mainHeight={500} mainBottomHeight={170} isBig={true}/>
                            <div style={{padding: 16,position: 'relative'}}>
                                <span style={styles.descTitle}>描述</span>
                                <span style={styles.desc}>{comic.description}</span>
                                <span style={styles.updateTime}>{new Date(comic.updated_at).toLocaleString()}</span>
                            </div>
                            {this.getEp(this.state.comic.ep_count)}
                            {
                                // <PicaComicDialog ep={this.state.ep} comic={comic} open={this.state.open}/>
                            }
                            <FloatingActionButton style={styles.floatButton}>
                                <ContentAdd />
                            </FloatingActionButton>
                            {
                                this.state.detail.map((p, i)=> {
                                    return (
                                        <LazyLoad key={this.uuid()} throttle={200}>
                                            <div>
                                                <img src={p.url} height={p.height}
                                                     style={{display:'block',margin:'0 auto',maxWidth:1280}}/>
                                            </div>
                                        </LazyLoad>
                                    )
                                })
                            }
                        </Paper>
                    </div>
                </div>

            )
        } else {
            return (<div>
                <AppBar
                    title="加载中"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.props.actions.toggleDrawerOpen}
                />
                <LinearProgress mode="indeterminate"/>
            </div>)
        }

    }


    uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }

    getEp(count) {
        const buttons = [];
        for (var i = 1; i <= count; i++) {
            // buttons.push(<PicaComicDialog style={{margin:14}} label={'第'+i+'话'} primary={true} key={i} index={i-1} comic={this.state.comic.comic}/>)
            buttons.push(<RaisedButton onClick={this.showDetail.bind(this,i)} style={{margin:14}}
                                       label={'第'+i+'话'} primary={true} key={i} index={i-1}/>)
        }
        return <div>{buttons}</div>;
    }

    showDetail(index) {
        var {id} = this.props.params;
        getEpisode({comicId: id, episode: index}).then(r=> {
            this.setState({
                detail: r
            })
        })
    }


}
function mapStateToProps(state) {
    return {
        open: state.mainLayout.open
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comic);

const styles = {
    root: {
        width: 1280,
        margin: '0 auto'
    },
    main: {
        height: 500,
        backgroundSize: 'cover',
        position: 'relative'

    }, mainBottom: {
        height: 170,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.541176)'
    },
    descTitle: {
        fontSize: 24,
        color: 'rgba(0, 0, 0, 0.870588)',
        display: 'block',
        lineHeight: '36px'
    },
    desc: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.541176)',
        display: 'block',
        lineHeight: '30px'
    },
    updateTime: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.3)',
        display: 'block'
    },
    floatButton: {
        position: 'absolute',
        right: 65,
        top: 468
    }
};




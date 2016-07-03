/**
 * Created by Shrimp on 16/7/3.
 */
import React from  'react';
import {hashHistory} from 'react-router';
import {getComicDetail} from '../../api/picaApi';
import {changeTitle} from '../../actions/mainLayoutAction'
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ComicDetail from './comicDetail';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
class Comic extends React.Component {
    constructor(props) {
        super(props)
        props.dispatch(changeTitle('Comic'));
        this.state = {
            comic: {
                "comic": {
                    "updated_at": "2016-06-27T05:06:54.000Z",
                    "id": 8884,
                    "name": "[夢々] 松永家の某日 1 [黑条汉化]   2.3[戀髮漢化]",
                    "author": "夢々",
                    "finished": "0",
                    "total_page": 56,
                    "img_directory": "knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764",
                    "views_count": 22554,
                    "description": "打算买顶假发试一试",
                    "display_name": "　",
                    "cover_image": "http://picacomic.com/assets/comics/knight_comics/TaUPSeM95CXXi4DOtPasPyg4X/1764/cover.jpg",
                    "rank": 4,
                    "comment_count": 5,
                    "user_id": 290
                },
                "ep_count": 20
            }
        }
    }

    componentDidMount() {
        //var {id} = this.props.params;
        //getComicDetail({id})
        //    .then(comic=> {
        //        this.setState({comic});
        //    })
    }

    render() {
        const comic = this.state.comic.comic;
        return (
            <div style={styles.root}>
                <Paper zDepth={3} style={{position:'relative'}}>
                    <ComicDetail comic={comic} mainHeight={500} mainBottomHeight={170} isBig={true}/>
                    <div style={{padding: 16,position: 'relative'}}>
                        <span style={styles.descTitle}>描述</span>
                        <span style={styles.desc}>{comic.description}</span>
                        <span style={styles.updateTime}>{new Date(comic.updated_at).toLocaleString()}</span>
                    </div>
                        {this.getEp(this.state.comic.ep_count)}
                    <FloatingActionButton style={styles.floatButton}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Paper>
            </div>
        )
    }

    getEp(count){
        const buttons = [];
        for(var i = 1;i<=count ;i++){
            buttons.push(<RaisedButton style={{margin:14}} label={'第'+i+'话'} primary={true}  key={i}/>)
        }
        return <div>{buttons}</div>;
    }



}
export default connect()(Comic);

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
    updateTime:{
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.3)',
        display: 'block'
    },
    floatButton:{
        position:'absolute',
        right:65,
        top:468
    }
};

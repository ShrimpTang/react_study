/**
 * Created by Shrimp on 16/7/3.
 */
import React from  'react';
import {hashHistory} from 'react-router';
import {getComicListByCatId} from '../../api/picaApi';
import {changeTitle} from '../../actions/mainLayoutAction'
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';
import ComicDetail from './comicDetail'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/mainLayoutAction';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
class ComicList extends React.Component {
    constructor(props) {
        super(props)
        //props.dispatch(changeTitle('ComicList'));
        this.state = {
            comicList: [],
            page: props.params.page,
            id: props.params.id

        }
    }

    componentWillMount() {
        var {id,page} = this.state;
        getComicListByCatId({id, page})
            .then(comicList=> {
                this.setState({comicList});
            })
    }

    render() {
        return (
            <div>
                <AppBar
                    title="哔咔列表"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.props.actions.toggleDrawerOpen}
                />
                <div style={styles.root}>
                    <GridList
                        cellHeight={300}
                        cols={4}
                        padding={20}
                        style={styles.gridList}
                    >
                        {
                            this.state.comicList.map(comic=> {
                                return <Paper zDepth={3} style={styles.paper} key={comic.id}
                                              onClick={this.goToComic.bind(this,comic.id)}>
                                    <GridTile>
                                        <ComicDetail comic={comic} mainHeight={300} mainBottomHeight={100}/>
                                    </GridTile>
                                </Paper>
                            })
                        }

                    </GridList>
                    <div style={styles.options}>
                        <RaisedButton label="上一页" style={styles.btn} onClick={this.perPage.bind(this)}/>
                        <RaisedButton label="下一页" style={styles.btn} onClick={this.nextPage.bind(this)}/>
                    </div>

                </div>
            </div>
        )
    }


    goToComic(id) {
        hashHistory.push('/picaman/comic/' + id);

    }

    perPage() {
        var page = parseInt(this.state.page) - 1
        this.getList(page);
    }

    nextPage() {
        var page = parseInt(this.state.page) + 1
        this.getList(page);

    }

    getList(page) {
        hashHistory.push(`/picaman/list/${this.state.id}/${page}`)
        this.setState({
            page: page
        });
        var {id} = this.state;
        getComicListByCatId({id, page})
            .then(comicList=> {
                this.setState({comicList});
                window.scrollTo(0, 0)
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
export default connect(mapStateToProps, mapDispatchToProps)(ComicList);

const styles = {
    root: {
        //display: 'flex',
        //flexWrap: 'wrap',
        //justifyContent: 'space-around',
        width: 1280,
        margin: '0 auto'
    },
    gridList: {
        width: 1280,
        overflowY: 'auto',
        marginBottom: 24,
    },
    paper: {
        cursor: 'pointer'
    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.4)'
    },
    bottomText: {
        flexGrow: 1, marginLeft: 16, marginRight: 0, color: 'rgb(255, 255, 255)', overflow: 'hidden',

    },
    titleText: {
        fontSize: 12, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'normal', marginBottom: 10
    },
    options: {
        textAlign: 'right'
    },
    btn: {
        margin: 12
    }
};

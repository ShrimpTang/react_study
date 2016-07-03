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
class ComicList extends React.Component {
    constructor(props) {
        super(props)
        props.dispatch(changeTitle('ComicList'));
        this.state = {
            comicList: []
        }
    }

    componentDidMount() {
        var {id,page} = this.props.params;
        getComicListByCatId({id, page})
            .then(comicList=> {
                this.setState({comicList});
            })
    }

    render() {
        return (
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
            </div>
        )
    }


    goToComic(id) {
        hashHistory.push('/picaman/comic/' + id)
    }
}
export default connect()(ComicList);

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
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
    }
};

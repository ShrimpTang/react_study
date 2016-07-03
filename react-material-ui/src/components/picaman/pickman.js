/**
 * Created by Shrimp on 16/7/3.
 */
import React from 'react';
import {changeTitle} from '../../actions/mainLayoutAction'
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
class PicaMan extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(changeTitle('Picaman'));
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.getCategories().then(categories=> {
            this.setState({
                categories
            })
        })
    }

    getCategories() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        "id": 33,
                        "name": "嗶咔漢化",
                        "cover_image": "http://picacomic.com/assets/categories/cover/r7CXTVCgpSgTiVKK0vl4.jpg",
                        "all_comics": 30
                    },
                    {
                        "id": 8,
                        "name": "全彩",
                        "cover_image": "http://picacomic.com/assets/categories/cover/4Yb8BS6EnQGACl42xuvb.jpg",
                        "all_comics": 1043
                    },
                    {
                        "id": 4,
                        "name": "長篇",
                        "cover_image": "http://picacomic.com/assets/categories/cover/eoF1M47PsSr0v8eQpgkc.jpg",
                        "all_comics": 2100
                    },
                    {
                        "id": 1,
                        "name": "同人",
                        "cover_image": "http://picacomic.com/assets/categories/cover/bav2TQUF8C4hDQY1mWuE.jpg",
                        "all_comics": 4561
                    },
                    {
                        "id": 5,
                        "name": "短篇",
                        "cover_image": "http://picacomic.com/assets/categories/cover/P63AlnFyAEOj6umg6lAA.jpg",
                        "all_comics": 5617
                    },
                    {
                        "id": 30,
                        "name": "Cosplay",
                        "cover_image": "http://picacomic.com/assets/categories/cover/RHsZD43aOd2aZd7wzRKQ.jpg",
                        "all_comics": 169
                    },
                    {
                        "id": 29,
                        "name": "CG雜圖",
                        "cover_image": "http://picacomic.com/assets/categories/cover/FpncrBX0cDEQWcGn5N66.jpg",
                        "all_comics": 178
                    },
                    {
                        "id": 32,
                        "name": "英語 ENG",
                        "cover_image": "http://picacomic.com/assets/categories/cover/36SThqDqaM8OIt1ptujq.jpg",
                        "all_comics": 28
                    },
                    {
                        "id": 24,
                        "name": "生肉",
                        "cover_image": "http://picacomic.com/assets/categories/cover/42US1OKHMxwpGIWG24ie.jpg",
                        "all_comics": 613
                    },
                    {
                        "id": 22,
                        "name": "純愛",
                        "cover_image": "http://picacomic.com/assets/categories/cover/mqWgsGsoRCUYZjBSDmjc.jpg",
                        "all_comics": 1664
                    },
                    {
                        "id": 9,
                        "name": "百合花園",
                        "cover_image": "http://picacomic.com/assets/categories/cover/R6cURzUkzh9nopDYGJgJ.jpg",
                        "all_comics": 302
                    },
                    {
                        "id": 26,
                        "name": "耽美花園",
                        "cover_image": "http://picacomic.com/assets/categories/cover/urWhjn0y8UqZUyrPCb0K.jpg",
                        "all_comics": 642
                    },
                    {
                        "id": 28,
                        "name": "偽娘哲學",
                        "cover_image": "http://picacomic.com/assets/categories/cover/K3OeGCLx3ANjzcZzcE4D.jpg",
                        "all_comics": 441
                    },
                    {
                        "id": 10,
                        "name": "後宮閃光",
                        "cover_image": "http://picacomic.com/assets/categories/cover/zzxcDTEPyzRVUUIA8HdX.jpg",
                        "all_comics": 674
                    },
                    {
                        "id": 11,
                        "name": "扶他樂園",
                        "cover_image": "http://picacomic.com/assets/categories/cover/aps1wMrJVKac0GoO2URh.jpg",
                        "all_comics": 366
                    },
                    {
                        "id": 18,
                        "name": "姐姐系",
                        "cover_image": "http://picacomic.com/assets/categories/cover/eyF05vBNCHb0lzWC1zL7.jpg",
                        "all_comics": 408
                    },
                    {
                        "id": 19,
                        "name": "妹妹系",
                        "cover_image": "http://picacomic.com/assets/categories/cover/jT8mqAzIlM5ruMyUdfLg.jpg",
                        "all_comics": 663
                    },
                    {
                        "id": 2,
                        "name": "SM",
                        "cover_image": "http://picacomic.com/assets/categories/cover/rWJlZVR8iNqRnLwwBxxq.jpg",
                        "all_comics": 354
                    },
                    {
                        "id": 7,
                        "name": "性轉換",
                        "cover_image": "http://picacomic.com/assets/categories/cover/MvMTjXjsVLFcUXEn8USw.jpg",
                        "all_comics": 114
                    },
                    {
                        "id": 23,
                        "name": "足の恋",
                        "cover_image": "http://picacomic.com/assets/categories/cover/PM61RaqqNBZe8qkl1HVt.jpg",
                        "all_comics": 210
                    },
                    {
                        "id": 12,
                        "name": "重口地帶",
                        "cover_image": "http://picacomic.com/assets/categories/cover/rjhB6GQSqcVChOugCCr8.jpg",
                        "all_comics": 694
                    },
                    {
                        "id": 3,
                        "name": "人妻",
                        "cover_image": "http://picacomic.com/assets/categories/cover/wLYjKBChTxPAobCokGnQ.jpg",
                        "all_comics": 448
                    },
                    {
                        "id": 16,
                        "name": "NTR",
                        "cover_image": "http://picacomic.com/assets/categories/cover/i7SwxqmP8aLnhKrjsUTY.jpg",
                        "all_comics": 543
                    },
                    {
                        "id": 17,
                        "name": "強暴",
                        "cover_image": "http://picacomic.com/assets/categories/cover/Nr1ZEY3axeVSDdYn44jC.jpg",
                        "all_comics": 834
                    },
                    {
                        "id": 14,
                        "name": "非人類",
                        "cover_image": "http://picacomic.com/assets/categories/cover/VltwfkC2YAWsvSXLvvMx.jpg",
                        "all_comics": 565
                    },
                    {
                        "id": 6,
                        "name": "艦隊收藏",
                        "cover_image": "http://picacomic.com/assets/categories/cover/fBUw4fJgJxZSD6aPzSjN.jpg",
                        "all_comics": 511
                    },
                    {
                        "id": 15,
                        "name": "Love Live",
                        "cover_image": "http://picacomic.com/assets/categories/cover/Xffe6Hv0ynAzl2YPbsiX.jpg",
                        "all_comics": 129
                    },
                    {
                        "id": 20,
                        "name": "SAO 刀劍神域",
                        "cover_image": "http://picacomic.com/assets/categories/cover/Mg4nM3UJWadoCif3Swu2.jpg",
                        "all_comics": 115
                    },
                    {
                        "id": 25,
                        "name": "Fate",
                        "cover_image": "http://picacomic.com/assets/categories/cover/quYj1Rqe8kQZlq6AYKRP.jpg",
                        "all_comics": 42
                    },
                    {
                        "id": 21,
                        "name": "東方",
                        "cover_image": "http://picacomic.com/assets/categories/cover/RiNSHWSS7tkas3ChX4Sv.jpg",
                        "all_comics": 590
                    },
                    {
                        "id": 27,
                        "name": "禁書目錄",
                        "cover_image": "http://picacomic.com/assets/categories/cover/XwYywfLkDOFCJcJvkJ0v.jpg",
                        "all_comics": 209
                    },
                    {
                        "id": 31,
                        "name": "遊戲試區",
                        "cover_image": "http://picacomic.com/assets/categories/cover/ZXP1NjWNNTBACqGqZi64.jpg",
                        "all_comics": 54
                    }
                ]);
            }, 200);
        })
    }

    render() {
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={300}
                    cols={5}
                    padding={20}
                    style={styles.gridList}
                >
                    {this.state.categories.map((category) => (
                        <Paper zDepth={3} key={category.id} style={styles.paper} onClick={this.goToComicList.bind(this,category.id)}>
                            <GridTile
                                title={category.name}
                            >
                                <img src={category.cover_image} style={{height:300}}/>
                            </GridTile>
                        </Paper>
                    ))}
                </GridList>
            </div>
        )
    }

    goToComicList(id){
        hashHistory.push(`/picaman/list/${id}/1`);
    }

}

export default connect()(PicaMan)

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
    }
};
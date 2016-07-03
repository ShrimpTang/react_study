/**
 * Created by Shrimp on 16/7/3.
 */
import React,{PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Star from 'material-ui/svg-icons/toggle/star.js';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
export default class ComicDetail extends React.Component {
    render() {
        const {comic,mainHeight,mainBottomHeight,isBig} = this.props;
        var css = isBig?{
            nameHeight:80,
            authorHeight:40,
            nameSize : 25,
            otherSize :16,
        }:
        {
            nameHeight:50,
            authorHeight:20,
            nameSize : 16,
            otherSize :12,
        }
        return (
            <Paper zDepth={3}>
                <div style={{...styles.main,height:mainHeight,backgroundImage:`url("${comic.cover_image}")`}}>
                    <div style={{...styles.mainBottom,height:mainBottomHeight}}>
                        <div style={{...styles.bottomText,height:css.nameHeight,marginTop:5}}>
                             <span style={{fontSize:css.nameSize}}>{comic.name}({comic.total_page}P)
                                 {
                                     comic.finished == '1' ? <span>完</span> : ''
                                 }
                            </span>
                        </div>
                        <div style={{...styles.bottomText,height:css.authorHeight}}>
                            <span style={{fontSize:css.otherSize}}>
                             by&nbsp;<b>{comic.author}</b>
                            </span>
                        </div>

                        {
                            comic.views_count?<div style={styles.bottomText}><span  style={{fontSize:css.otherSize}}>绅士指数&nbsp;{comic.views_count}</span></div>:''
                        }
                        {
                            this.getStar(comic.rank)
                        }
                    </div>
                </div>
            </Paper>
        )
    }

    getStar(num) {
        var doms = [];
        for (var i = 1; i <= num; i++) {
            doms.push(<Star key={i} color="#FFEE58"/>);
        }
        for (var i = 1; i <= 5 - num; i++) {
            doms.push(<StarBorder key={i+5} color="FFEE58"/>)
        }
        return (
            <div style={styles.bottomText}>
                {
                    doms
                }
            </div>
        )
    }
}

ComicDetail.propTypes = {
    comic: PropTypes.object.isRequired,
    mainHeight: PropTypes.number.isRequired,
    mainBottomHeight: PropTypes.number.isRequired
}

const styles = {
    main: {
        backgroundSize: 'cover',
        position: 'relative'

    }, mainBottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.541176)'
    },
    bottomText: {
        flexGrow: 1, marginLeft: 16, marginRight: 0, color: 'rgb(255, 255, 255)', overflow: 'hidden'

    }
};
var StarsFrame = React.createClass({
    render:function(){
       
        var stars = [];
        for(var i = 0;i <this.props.numberOfStars ; i++){ 
            stars.push(<span className="glyphicon glyphicon-star"></span>);
        }
        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
            )
    }
});

var ButtonFrame = React.createClass({
    render:function(){
        var disabled,button;
        switch(this.props.correct){
            case true:
                button = (
                    <button  onClick={this.props.accpetAnswer}  className="btn btn-success btn-lg">
                        <span className="glyphicon glyphicon-ok"></span>  
                    </button>
                    )
                break;
            case false:
                 button = (
                        <button className="btn btn-danger btn-lg">
                            <span className="glyphicon glyphicon-remove"></span>
                        </button>
                        )
                break;
            default :
                disabled = this.props.selectedNumbers.length === 0;
                button = (
                        <button onClick={this.props.checkAnswer} className="btn btn-primary btn-lg" disabled={disabled}>=</button>
                    )
                break;
            
            
        }
        return ( <div id="button-frame">
                    {button} 
                    <br/>  <br/>
                    <button disabled={this.props.redraws===0} onClick={this.props.redraw} className="btn btn-warning btn-xs">
                        <span className="glyphicon glyphicon-refresh">&nbsp;{this.props.redraws}</span>
                    </button>
                </div>);
    } 
});

var AnswerFrame = React.createClass({
    render:function(){
      var me = this;
      var selectNumbers = this.props.selectedNumbers.map(function(s){
        return (<span onClick={me.props.unselectNumber.bind(null,s)}>{s}</span>)
      });
        return (
            <div id="answer-frame">
                <div className="well">
                  {selectNumbers}
                </div>
            </div>
            ) 
    }
});
 
var NumbersFrame = React.createClass({ 
    selectNumber:function(clickNumber){
      if(this.props.selectedNumbers.indexOf(clickNumber)<0 && this.props.usedNumbers.indexOf(clickNumber)<0){
        this.props.selectNumber(clickNumber);
      }
    },
    render:function(){
        var numbers = [];
        for(var i =1;i<=9;i++){
             var className = 'number number-selected-'+(this.props.selectedNumbers.indexOf(i)>=0);
                 className += ' used-'+ (this.props.usedNumbers.indexOf(i)>=0);
            numbers.push(  <div onClick={this.selectNumber.bind(null,i)} className={className}>{i}</div>);
        }
        return (
            <div id="numbers-frame">
                <div className="well">
                     {numbers}
                </div>
            </div>
            ) 
    }
});

var DoneFrame = React.createClass({
    render:function(){
        return (
            <div id="done-frame">
                <div className="well text-center">
                    <h2>{this.props.doneStatus}</h2>
                    <button className="btn btn-primary btn-xs" onClick={this.props.restart}>restart</button>
                </div>
            </div>
            )
    }
})

var Game = React.createClass({
    getRandomNumber:function(){
      return   Math.floor(Math.random()*9)+1;
    },
    getInitialState:function(){
      return {
          selectedNumbers:[],
          usedNumbers:[],
          numberOfStars:this.getRandomNumber(),
          correct:null,
          redraws:5,
          doneStatus:null
      }
    },
    selectNumber:function(clickedNumber){
      this.setState({selectedNumbers:this.state.selectedNumbers.concat(clickedNumber),correct:null});
    },
    unselectNumber:function(clickedNumber){
      var selectedNumbers = this.state.selectedNumbers,
          index  = this.state.selectedNumbers.indexOf(clickedNumber); 
          selectedNumbers.splice(index,1)
      this.setState({selectedNumbers:selectedNumbers,correct:null});
    },
    sumOfSelectedNumbers:function(){
        return this.state.selectedNumbers.reduce(function(x,y){
            return x+y;
        },0)
    },
    checkAnswer:function(){
        this.setState({correct:(this.state.numberOfStars === this.sumOfSelectedNumbers())})
    }, 
    accpetAnswer:function(){
        var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
        this.setState({
            usedNumbers:usedNumbers,
            selectedNumbers:[],
            numberOfStars:this.getRandomNumber(),
            correct:null
        },function(){
                this.updateDoneStatus()
            })
    },
    redraw:function(){
        if(this.state.redraws>0){
            this.setState({
                selectedNumbers:[],
                numberOfStars:this.getRandomNumber(),
                correct:null,
                redraws:this.state.redraws-1
            },function(){
                this.updateDoneStatus()
            })
        }

    },
     possibleCombinationSum:function(arr, n) {
      if (arr.indexOf(n) >= 0) { return true; }
      if (arr[0] > n) { return false; }
      if (arr[arr.length - 1] > n) { 
        arr.pop();
        return possibleCombinationSum(arr, n);
      }
      var listSize = arr.length, combinationsCount = (1 << listSize)
      for (var i = 1; i < combinationsCount ; i++ ) {
        var combinationSum = 0;
        for (var j=0 ; j < listSize ; j++) {
          if (i & (1 << j)) { combinationSum += arr[j]; }
        }
        if (n === combinationSum) { return true; } 
      }
      return false;
    },
    prossibleSolutions :function(){
        var numberOfStars = this.state.numberOfStars,
            possible = [],
            usedNumbers = this.state.usedNumbers;
        
        for(var i=1;i<=9;i++){
            if(usedNumbers.indexOf(i)<0){
                possible.push(i)
            }
        }
        return this.possibleCombinationSum(possible,numberOfStars)
    },
    updateDoneStatus:function(){
      if(this.state.usedNumbers.length==9){
          this.setState({doneStatus:'Nice Node!'});
          return;
      }  
      if(this.state.redraws==0 && !this.prossibleSolutions()){
          this.setState({doneStatus:'Game Over!'});
      }
    },
   
    restart:function(){
      this.replaceState(this.getInitialState());  
    },
    render:function(){
        var numberOfStars = this.state.numberOfStars,
            selectedNumbers = this.state.selectedNumbers,
            correct = this.state.correct,
            usedNumbers = this.state.usedNumbers,
            bottomFrame;
            
            if(this.state.doneStatus){
                bottomFrame =   <DoneFrame restart={this.restart} doneStatus={this.state.doneStatus}/>;
            }else{
                bottomFrame =  <NumbersFrame selectNumber={this.selectNumber} selectedNumbers={selectedNumbers} usedNumbers={usedNumbers}/>;
            }
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr/>
                <div className="clearfix">
                    <StarsFrame numberOfStars={numberOfStars}/>
                    <ButtonFrame selectedNumbers={selectedNumbers} 
                                checkAnswer = {this.checkAnswer} 
                                correct={correct} 
                                accpetAnswer={this.accpetAnswer}
                                redraw={this.redraw}
                                redraws={this.state.redraws}/>
                                
                    <AnswerFrame unselectNumber={this.unselectNumber} selectedNumbers={selectedNumbers}/>
                </div>
                {bottomFrame}
            </div>

            )
    }
})

ReactDOM.render(
  <Game/>,
  document.getElementById('container')
);

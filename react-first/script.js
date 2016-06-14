var Button = React.createClass({
    handlerClick:function(){
        this.props.localHandlerClick(this.props.increment)
    },
    render:function(){
        return (<button onClick={this.handlerClick}>+{this.props.increment}</button>)
    }
});

var Result = React.createClass({
    render:function(){
        return (<div >{this.props.localCounter}</div>)
    }
});

var Main = React.createClass({
    getInitialState:function(){
        return {counter:0}
    },
    handlerClick:function(increment){

        this.setState({counter:this.state.counter+increment})
    },
    render:function(){
        return (
            <div>
                <Button localHandlerClick={this.handlerClick} increment={1} />
                <Button localHandlerClick={this.handlerClick} increment={5} />
                <Button localHandlerClick={this.handlerClick} increment={20} />
                <Button localHandlerClick={this.handlerClick} increment={50} />
                <Button localHandlerClick={this.handlerClick} increment={100} />
                <Result localCounter={this.state.counter}/>
            </div>)
    }
});



ReactDOM.render(<Main/>,document.getElementById('root'))
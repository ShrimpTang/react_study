var Card = React.createClass({
  getInitialState:function(){
    return {};
  },
  componentDidMount:function(){
    $.get('https://api.github.com/users/'+ this.props.login,data =>{
       this.setState(data)
    })
  },
 render:function(){
   return (
     <div>
        <img src={this.state.avatar_url} width="80"/>
        <h3>{this.state.name}</h3>
        <hr/>
     </div>
     )
 } 
})

var Input = React.createClass({
  add:function(e){
    e.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.login);
    this.props.addCard(input.value)
  },
  render:function(){
    return (
      <form onSubmit={this.add}>
        <input type="text" ref="login"/>
        <button>add</button>
      </form>
      )
  }
})


var Main = React.createClass({
  getInitialState:function(){
    return {logins:[]}
  },
  addCard:function(login){
    this.setState({logins:this.state.logins.concat(login)})
  },
  render:function(){
    var cards = this.state.logins.map(l =>{return (<Card login={l}/>)})
    return (
      <div>
        <Input addCard={this.addCard}/>
        {cards}
      </div>
      )
  }
});

ReactDOM.render(<Main/>,document.getElementById('root'))
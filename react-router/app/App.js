import React from 'react'
import {Router,Route,Link,hashHistory,IndexRoute,Redirect} from 'react-router'

const Home = (props) => <div><h1>Home{props.location.query.message || '!'}</h1><Links/>{props.children}</div>

class Content extends React.Component{
    componentWillMount(){
            this.context.router.setRouteLeaveHook(
                this.props.route,
                this.routerWillLeave
            )
    }
    routerWillLeave(next){
        console.log(next)
    }

    render(){
        return <div><h1>{this.props.params.content}{this.props.body}</h1></div>
    }
}
Content.contextTypes = {router:React.PropTypes.object.isRequired}

const About = (props) => <div><h1>About</h1>{props.children}</div>

//const Content = (props) => <div><h1>{props.params.content}{props.body}</h1></div>

const Body = ()=> <div>Body</div>

const Other = ()=> <div>Other</div>

const Links = ()=> (<nav>
                        <Link to={{pathname:'/',query:{message:' Message!'}}} activeStyle={{color:'green'}}>Home</Link>
                        <Link to="/about" activeStyle={{color:'red'}}>About</Link>
                        <Link to="/about/content" activeStyle={{color:'pink'}}>Content</Link>
                        <Link to="/about/QQQ" activeStyle={{color:'pink'}}>QQQ</Link>
                        <Link to="/about/QQQ/body" activeStyle={{color:'pink'}}>Body</Link>
                        <Link to="/about-r">About - r</Link>
                    </nav>)


class App extends React.Component {
    render() {
       return <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <Route path="about" component={About}>
                    <Route path="(:content)" component={Content}>
                        <Route path="body" components={{body:Body}}></Route>
                    </Route>
                </Route>
                <Redirect from="/about-r" to="about"></Redirect>
            </Route>
        </Router>
    }
}

//const Home = (props) => <div><h1>Home</h1><Links/>{props.children}</div>
//
//const About = (props) => <div><h1>About</h1></div>
//
//const Content = () => <div><h1>Content</h1></div>
//
//const Links = ()=> (<nav>
//    <Link to="/">Home</Link>
//    <Link to="/about">About</Link>
//    <Link to="/content">Content</Link>
//</nav>)
//
//
//class App extends React.Component {
//    render() {
//        return <Router history={hashHistory}>
//            <Route path="/" component={Home}>
//                <IndexRoute  component={About}>
//
//                </IndexRoute>
//                <Route path="content" component={Content}></Route>
//            </Route>
//        </Router>
//    }
//}

export  default App
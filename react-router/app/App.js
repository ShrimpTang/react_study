import React from 'react'
import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router'

const Home = (props) => <div><h1>Home</h1><Links/>{props.children}</div>

//class Home extends React.Component{
//    render(){
//        return <div><h1>Home</h1><Links/> {this.props.children} </div>
//    }
//}

const About = (props) => <div><h1>About</h1>{props.children}</div>

const Content = () => <div><h1>Content</h1></div>

const Links = ()=> (<nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/about/content">Content</Link>
                    </nav>)


class App extends React.Component {
    render() {
       return <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <Route path="about" component={About}>
                    <Route path="content" component={Content}></Route>
                </Route>
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
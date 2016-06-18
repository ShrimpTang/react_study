import React,{PropTypes} from 'react'
export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>Heard here```</p>
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}
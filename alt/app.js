import React from 'react';
import ReactDOM from 'react-dom';
import LocationStore from './stores/LocationStore'
import LocationActions from './actions/LocationActions'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = LocationStore.getState()
    }

    componentDidMount() {
        LocationStore.listen(this.onChange.bind(this));
        LocationActions.fetchLocations()
    }

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange.bind(this))
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if(this.state.locations.length == 0){
            return (<div>NULL</div>)
        }
        return (
            <ul>
                {
                    this.state.locations.map((l,i)=> {
                        return (
                            <li key={l.id}>{l.name}</li>
                        )
                    })
                }
            </ul>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))
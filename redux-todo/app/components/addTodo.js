import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={this.handleClick.bind(this)}>
                    Add
                </button>
            </div>
        )
    }

    handleClick() {
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}
AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {

        return {
            background: '#f4f4f4',
            pading: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'Line-through' : 'none'
        }
    }
    // markComplete(e) {
    //     console.log(this.props);
    // }
    // markComplete = (e) => {
    //     console.log(this.props);
    // }

    render() {
        const { id, title } = this.props.todo;
        return (
            // <div style={{ backgroundColor: '#f4f4f4' }}>
            /* <div style={itemStyle}> */
            <div style={this.getStyle()}>
                <p>
                    {/* <input type="checkbox" onChange={this.markComplete.bind(this)} /> */}
                    {/* <input type="checkbox" onChange={this.markComplete} /> */}
                    <input type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div >
        )
    }
}

//PropTypes 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem


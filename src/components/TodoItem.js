 import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props;
        
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                <span onClick={handleEdit} className="editicon mx-2 text-success">🖊</span>
                <span onClick={handleDelete} className="deleteicon mx-2 text-success">❌</span> 
                </div>
            </li>
        )
    }
}

import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props
        
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">to do list</h3>
                { items.map( element => {
                    return  (  
                    <TodoItem 
                        key={element.id} 
                        title={element.title} 
                        handleDelete={ () => handleDelete(element.id) } 
                        handleEdit={ () => handleEdit(element.id) } />
                        //invoking each element, so use arrow function                 
                    )
                })}
                <button onClick={clearList} type="button" className="btn btn-danger btn-block text-capitalize mt-5">clear list</button>
            </ul>
        )
    }
}

import React, { Component } from 'react';
import './TodoInput.css';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props
        
        return (
            <div className="card card-body my-3">
                <form onSubmit={ handleSubmit }>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                📙
                            </div>
                        </div>
                        <input name="item" value={ item } onChange={ handleChange } type="text" className="form-control text-capitalize" placeholder="add to do item"/>
                    </div>
                    <button type="submit" className= {editItem ? "btn btn-block btn-success mt-3" :"btn btn-block btn-primary mt-3"}>
                        {editItem ? "edit item" : "add item"}</button>
                </form>
            </div>
        )
    }
}


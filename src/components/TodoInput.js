import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit } = this.props

        return (
            <div className="card card-body my-3">
                <form onSubmit={ handleSubmit }>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                ❤
                            </div>
                        </div>
                        <input value={ item } onChange={ handleChange } type="text" className="form-control text-capitalize" placeholder="add to do item"/>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3">add item</button>
                </form>
            </div>
        )
    }
}

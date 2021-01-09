import React, { Component } from 'react';
//import TodoInput from './components/TodoInput';
//import TodoList from './components/TodoList';
//import TodoItem from './components/TodoItem';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid'

class App extends Component {
  constructor() {
    super();
    this.state ={
      items:[],
      id:uuid(),
      item: '',
      editItem:false
    }
  }


  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    }
    console.log(newItem)
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items:updatedItems,
      item:'',
      id: uuid(),
      editItem: false
    })
  }
  
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo Input</h3>
            {/*<TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>*/}
            <div className="card card-body my-3">
                <form onSubmit={ this.handleSubmit }>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                ❤
                            </div>
                        </div>
                        <input value={ this.state.item } onChange={ this.handleChange } type="text" className="form-control text-capitalize" placeholder="add to do item"/>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3">add item</button>
                </form>
            </div>
            {/*<TodoList items={this.state.items} />*/}
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">to do list</h3>
                {this.state.items.map( item => {
                    return(                       
                        <li key={item.id} className="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <h6>{item.title}</h6>
                        <div className="todo-icon">
                        <span className="mx-2 text-success">✔</span>
                        <span className="mx-2 text-success">❌</span> 
                        </div>
                        </li>)
                })}
                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">clear list</button>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

{/*<TodoItem key={this.state.item.id} title={this.state.item.title} />*/}

export default App;
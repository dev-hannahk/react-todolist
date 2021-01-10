import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

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
    console.log("handleChange function >>> Working!")
    this.setState({
      [e.target.name]: e.target.value
    })
  }
 
  handleSubmit = (e) => {
    console.log("handleSubmit function >>> Working!")
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    }
    console.log("newItem >>>", newItem)
    const updatedItems = [...this.state.items, newItem]
    console.log("updatedItems >>>", updatedItems)
    this.setState({
      items:updatedItems,
      item:'',
      id: uuid(),
      editItem: false
    })
  }
  
  clearList = () => {
    console.log("clearList function >>> Working!")
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    console.log("handleDelete function >>> Working!")
    const filteredItems = this.state.items.filter( item => item.id !== id)
    console.log("filteredItems >>>", filteredItems)
    this.setState({
      items: filteredItems
    })
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>        
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
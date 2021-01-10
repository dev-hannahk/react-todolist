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
    //console.log("handleChange function >>> Working!")
    this.setState({
      [e.target.name]: e.target.value
    })
  }
 
  handleSubmit = (e) => {
    //console.log("handleSubmit function >>> Working!")
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    }
    //console.log("newItem >>>", newItem)
    const updatedItems = [...this.state.items, newItem]
    //console.log("updatedItems >>>", updatedItems)
    this.setState({
      items:updatedItems,
      item:'',
      id: uuid(),
      editItem: false
    })
  }
  
  clearList = () => {
    //console.log("clearList function >>> Working!")
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    //console.log("handleDelete function >>> Working!")
    const filteredItems = this.state.items.filter( filteredElement => filteredElement.id !== id) 
    //filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
    //console.log("filteredItems >>>", filteredItems)
    this.setState({
      items: filteredItems
    })
  }

  handleEdit = (id) => {
    //console.log("handleEdit function >>> Working!")
    const filteredItems = this.state.items.filter( filteredElement => filteredElement.id !== id)
    const selectedItem = this.state.items.find( selectedElement => selectedElement.id === id)
    //console.log("selectedItem >>>", selectedItem)
    this.setState({
      items: filteredItems,
      item : selectedItem.title,
      editItem : true,
      id: id
    })
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />        
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
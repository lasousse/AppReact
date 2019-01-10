import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Matrice from './components/coin-table'
import data from './data/coins.json'
  class App extends React.Component{

    constructor(props){
      super(props)
      this.state ={
        data: data
      }
    }
  
  render() {
  return (
    <div 
    className="page-container"
    >
<Matrice data={this.state.data} />
</div>
  )
  }
}
export default App
import React, { Component } from 'react'
import './App.css'
import Homepage from './component/Homepage'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> this is heading</h1>
        <Homepage />
      </div>

      // React.createElement(
      //   'div',
      //   { className: 'App' },
      //   React.createElement('h1', null, 'this is heading')
      // )
    )
  }
}

export default App

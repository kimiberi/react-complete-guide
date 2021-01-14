import React, { Component } from 'react'
import './App.css'
import Homepage from './component/Homepage'

// Class Stateless Component
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> this is heading</h1>
        {/* <Homepage name='Max' />
        <hr style={{ width: 400 }} /> */}
        <Homepage name='Doe'>Their hobby: programming</Homepage>
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

import React, { Component, useState } from 'react'

const Name = (props) => {
  const [nameState, setNameState] = useState({ name: 'John', age: 25 })

  // React Hooks: Functional Stateful Component
  const handleChangeName = () => {
    setNameState({ name: 'Maxie' })
  }

  console.log(nameState)

  return (
    <div>
      <button onClick={handleChangeName}>change name</button>
      <span> {nameState.name} </span>
      <button onClick={props.click}>add</button>
      <span> {props.count}</span>
    </div>
  )
}

class Age extends Component {
  constructor(props) {
    super(props)

    this.state = {
      age: 16,
    }
  }

  handleChangeAge = () => {
    this.setState({ age: this.props.currentAge })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleChangeAge}>change age</button>
        <span> {this.state.age}</span>
      </div>
    )
  }
}

// Class Stateful Component
class Homepage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Manu',
      count: 0,
      food: 'berry',
    }
  }

  handleCount = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  handleChangeFood = (newFood) => {
    const { name } = this.state
    this.setState({ food: newFood })
  }

  render() {
    const { name, count, food } = this.state
    const { children } = this.props

    return (
      <div>
        <p>
          Welcome {name} & {this.props.name}!
        </p>
        <p>{children}</p>

        <button onClick={this.handleCount}>click here </button>
        <span>Count: {count} </span>

        <hr style={{ width: 400 }} />
        <Name click={this.handleCount} count={count} />

        <hr style={{ width: 400 }} />
        <Age currentAge={25} />

        <hr style={{ width: 400 }} />
        {/* TWO WAYS OF PASS DATA USING METHOD */}
        <button onClick={this.handleChangeFood.bind(this, 'choco')}>
          change food
        </button>
        <span> {food} </span>

        <button onClick={() => this.handleChangeFood('milk')}>
          change food
        </button>
        <span> {food}</span>
      </div>
    )
  }
}

export default Homepage

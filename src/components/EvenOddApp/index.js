import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const {count} = this.state
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    let text
    if (count % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }
    return (
      <div className="bg-container">
        <h1 className="main-heading">Count {count}</h1>
        <p className="even-odd">Count is {text}</p>
        <button className="button" type="button" onClick={this.increment}>
          Increment
        </button>
        <p className="number">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp

import { Component } from 'react'
import Goku from './components/Goku'
import Vegeta from './components/Vegeta'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      vegeta: 100,
      goku: 100
    }
  }

  reduceLife = (param, param2) => {
    const characterToUpdate = param === 'Goku' ? 'vegeta' : 'goku';
    this.setState(prevState => ({
      [characterToUpdate]: prevState[characterToUpdate] - param2
    }))
  }

  render() {
    return (
      <div className='container text-center'>
        <h1>Goku Vs Vegeta</h1>
        <hr />
        <div className='row'>
          <Vegeta name="Vegeta" life={this.state.vegeta} reduceHandler={this.reduceLife} />
          <Goku name="Goku" life={this.state.goku} reduceHandler={this.reduceLife} />
        </div>
      </div>
    )
  }
}

export default App

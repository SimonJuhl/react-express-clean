import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)

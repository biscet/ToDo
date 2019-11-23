import React, { Component } from "react"
import { hot } from "react-hot-loader"

import "./Static/Styles/app.scss"

import ToDo from "./Pages/Todo/todo.jsx"

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <ToDo />
      </div>
    )
  }
}

export default hot(module)(App)

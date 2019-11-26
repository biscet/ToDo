import React, { Component } from "react"
import { connect } from "react-redux"
import {
  addTask,
  removeTask,
  completeTask,
  reverseTask
} from "../../Actions/action-creator.js"
import "./todo.scss"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import _ from "lodash"

import { createHashHistory } from "history"
export const history = createHashHistory()

import ToDoInput from "../../Components/Todo/todo-input.jsx"
import ToDoList from "../../Components/Todo/todo-list.jsx"
import ToDoFooter from "../../Components/Todo/todo-footer.jsx"

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskText: ""
    }
  }

  componentDidMount() {
    history.push("/1")
  }

  onAddTask = () => {
    const { taskText } = this.state
    const { addTask } = this.props
    addTask(Math.random(), taskText, false)
    this.setState({
      taskText: ""
    })
    history.push("/1")
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      taskText: value
    })
  }

  render() {
    const { taskText } = this.state
    const { tasks, removeTask, completeTask, reverseTask } = this.props

    return (
      <>
        <ToDoInput
          onAddTask={this.onAddTask}
          onChange={this.handleChange}
          value={taskText}
        />
        <Router>
          <div className="todo-wrapper">
            {tasks && tasks.length !== 0 && (
              <Switch>
                <Route
                  path="/:id"
                  render={({ match }) => {
                    return (
                      match && (
                        <ToDoList
                          match={match}
                          completeTask={completeTask}
                          tasks={tasks.slice(
                            (match.params.id - 1) * 10,
                            (match.params.id - 1) * 10 + 10
                          )}
                          removeTask={removeTask}
                        />
                      )
                    )
                  }}
                />
              </Switch>
            )}
          </div>
        </Router>
        <ToDoFooter
          tasksLength={tasks.length}
          tasksCount={tasks.length}
          reverseTask={reverseTask}
        />
      </>
    )
  }
}

export default connect(
  state => ({
    tasks: state.tasks
  }),
  { addTask, removeTask, completeTask, reverseTask }
)(ToDo)

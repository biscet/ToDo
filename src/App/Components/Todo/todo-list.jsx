import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

import ToDoItem from "./todo-item.jsx"

const ToDoList = ({ tasks, removeTask, completeTask, match }) => (
  <ul>
    {_.map(tasks, task => (
      <ToDoItem
        completeTask={completeTask}
        removeTask={removeTask}
        task={task}
        key={task.id}
      />
    ))}
  </ul>
)

ToDoList.propTypes = {
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func
}

export default ToDoList

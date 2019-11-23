import React from "react"
import PropTypes from "prop-types"

const ToDoItem = ({ task, removeTask, completeTask }) => (
  <li className="todo-item">
    <i
      onClick={() => completeTask(task.id)}
      className={
        task.isCompleted ? "fas fa-check-circle" : "far fa-check-circle"
      }
    />
    <span className={task.isCompleted ? "text__complete" : "text"}>
      {task.text}
    </span>
    <i onClick={() => removeTask(task.id)} className="fas fa-times" />
  </li>
)

ToDoItem.propTypes = {
  task: PropTypes.object,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func
}

export default ToDoItem

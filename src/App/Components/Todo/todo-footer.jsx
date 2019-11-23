import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import { NavLink } from "react-router-dom"

const ToDoFooter = ({ tasksLength, tasksCount, reverseTask }) => {
  let tasksPages = [],
    i = 1
  while (i <= Math.ceil(tasksLength / 10)) {
    tasksPages.push(i)
    i++
  }

  return (
    <div className="todo-footer">
      <h1 className="tasks-count">
        {tasksCount}
        {tasksCount !== 1 ? " tasks" : " task"}
      </h1>
      <nav className="tasks-page">
        {tasksPages &&
          _.map(tasksPages, (item, i) => (
            <NavLink to={`/${i + 1}`} key={i} className={"pages-link"}>
              {i + 1}
            </NavLink>
          ))}
      </nav>
      <button className="tasks-reverse" onClick={reverseTask}>
        Reverse tasks
      </button>
    </div>
  )
}

ToDoFooter.propTypes = {
  tasksLength: PropTypes.number,
  tasksCount: PropTypes.number,
  reverseTask: PropTypes.func
}

export default ToDoFooter

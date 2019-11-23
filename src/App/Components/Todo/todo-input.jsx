import React from "react"
import PropTypes from "prop-types"

const ToDoInput = ({ value, onChange, onAddTask }) => (
  <div className="todo-input">
    <input
      className="field"
      onChange={onChange}
      value={value}
      placeholder="Enter task"
    />
    <button
      className="add-button"
      onClick={value.length > 0 ? onAddTask : null}
    >
      <i className="fa fa-thumbs-up" />
    </button>
  </div>
)

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onAddTask: PropTypes.func,
  value: PropTypes.string
}

export default ToDoInput

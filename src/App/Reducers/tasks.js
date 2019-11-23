import _ from "lodash"
import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  REVERSE_TASK
} from "../constants.js"
import { save, load } from "redux-localstorage-simple"

let TASKS = load()

!TASKS || !TASKS.tasks || !TASKS.tasks.length
  ? (TASKS = {
      tasks: []
    })
  : null

const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        {
          id,
          text,
          isCompleted
        },
        ...state
      ]
    case REMOVE_TASK:
      return _.filter([...state], task => {
        return task.id !== id
      })
    case COMPLETE_TASK:
      return _.map([...state], task => {
        task.id === id ? (task.isCompleted = !task.isCompleted) : null
        return task
      })
    case REVERSE_TASK:
      return _.reverse([...state])
    default:
      return state
  }
}

export default tasks

import { createStore, applyMiddleware } from "redux"
import { save, load } from "redux-localstorage-simple"

import rootReducer from "./Reducers/root-reducer.js"

// const configureStore = () =>
//   createStore(rootReducer)

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(save()))

const store = configureStore({})

export default store

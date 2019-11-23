import React from "react"
import ReactDOM from "react-dom"
import { Route, HashRouter } from "react-router-dom"
import { Provider } from "react-redux"

import app from "./App/app.js"
import store from "./App/store.js"

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={app} />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
)

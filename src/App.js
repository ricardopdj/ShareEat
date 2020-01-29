import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "./App.css"
import Header from "./components/Header"
import Places from "./pages/Places"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/">
            <Places />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

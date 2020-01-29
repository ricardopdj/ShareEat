import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "./App.css"
import Header from "./components/Header"
import Places from "./pages/Places"
import PlaceDetail from "./pages/PlaceDetail"
import DishForm from "./pages/DishForm"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/dish/add">
            <DishForm />
          </Route>
          <Route path="/restaurant">
            <PlaceDetail />
          </Route>
          <Route path="/">
            <Places />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

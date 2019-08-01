import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"

import Navbar from './components/navbar.component'
import ExercisesList from './components/exercises-list.component'
import EditExercises from './components/edit-exercises.component'
import CreateExercise from './components/create-exercise.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={EditExercises} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>    
  );
}

export default App;

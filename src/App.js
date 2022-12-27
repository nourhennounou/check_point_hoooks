import "./App.css";
import Cards from "./component/cards/cards.js"
import {movies} from "./data"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <Cards c={movies} />
    </div>
  )
}


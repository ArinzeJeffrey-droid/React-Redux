import React from "react"

import {useSelector, useDispatch} from "react-redux"
import { Increment} from "./actions"


const App = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return(
    <div className="App">
      <h1>Redux</h1>
      <h3>counter - {counter}</h3>
      <button onClick={() => dispatch(Increment())}>Click</button>
    </div>
  )
}

export default App
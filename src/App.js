import React, { useReducer } from "react"

import "./styles/styles-global.css"
import { StateContext, stateInitial } from "./contexts/useStateContext"
import useReducerState from "./contexts/useReducerState"
import Layout from "./components/layouts/Layout"
import HomeScreen from "./screens/HomeScreen"

function App() {
  const [state, dispatch] = useReducer(useReducerState, stateInitial);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Layout>
        <HomeScreen />
      </Layout>
    </StateContext.Provider>
  );
}

export default App;

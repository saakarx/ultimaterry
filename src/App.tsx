import { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './routes/Home'
import Search from './routes/Search'
import Modal from './components/Modal'
import Dropdown from './components/Dropdown'
import StateContext from './context/StateContext'
import reducer, { initialState } from './reducer/reducer'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const providerState = {
    state,
    dispatch
  }

  return (
    <StateContext.Provider value={providerState}>
      <BrowserRouter>
        <Dropdown />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>

        {state.isModalOpen && <Modal />}
      </BrowserRouter>
    </StateContext.Provider>
  )
}

export default App

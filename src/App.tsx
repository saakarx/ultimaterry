import { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Modal from './components/Modal'
import reducer, { initialState } from './reducer/reducer'
import Home from './routes/Home'
import Search from './routes/Search'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      {state.isModalOpen && <Modal />}
    </BrowserRouter>
  )
}

export default App

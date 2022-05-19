import { useReducer } from 'react'
import { createPortal } from 'react-dom'
import reducer, { initialState } from '../reducer/reducer'
import Image from './Image'

const ModalContent = () => {
  const [_, dispatch] = useReducer(reducer, initialState)
  const imgSrc =
    'https://images.unsplash.com/photo-1651980662072-4c18b13228d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'

  const handleModalClose = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <div className="absolute z-10 top-0 left-0 w-full min-h-screen bg-slate-900 bg-opacity-50 backdrop-blur flex items-center justify-center">
      <button
        type="button"
        onClick={handleModalClose}
        className="text-gray-900 text-5xl flex items-center justify-center rounded-sm absolute top-3 right-3 w-11 h-11 bg-c-white z-30">
        &times;
      </button>
      <div className="p-4 bg-slate-300 rounded-sm">
        <Image src={imgSrc} altText="Image" className="rounded-sm" />
      </div>
    </div>
  )
}

const Modal = () => {
  const modalContainer = document.getElementById(
    'modal-container'
  ) as HTMLElement
  return createPortal(<ModalContent />, modalContainer)
}

export default Modal

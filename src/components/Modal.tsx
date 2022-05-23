import { createPortal } from 'react-dom'
import { useStateContext } from '../context/StateContext'

import Image from './Image'
import { ReactComponent as CloseIcon } from '../assets/close.svg'
import { ReactComponent as LeftArrowIcon } from '../assets/left-arrow.svg'
import { ReactComponent as RightArrowIcon } from '../assets/right-arrow.svg'

const ModalContent = () => {
  const { state, dispatch } = useStateContext()
  const handleModalClose = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  const handleModalPrevImg = () => {
    dispatch({ type: 'MODAL_PREV_IMG' })
  }
  const handleModalNextImg = () => {
    dispatch({ type: 'MODAL_NEXT_IMG' })
  }

  return (
    <div className="fixed z-30 top-0 left-0 w-full h-screen bg-slate-900 bg-opacity-50 backdrop-blur p-6 flex gap-4 justify-center items-center">
      <button
        type="button"
        onClick={handleModalClose}
        className="text-gray-900 text-5xl flex items-center justify-center rounded-2xl w-11 h-11 bg-c-white z-30 absolute top-6 right-6">
        <CloseIcon className="stroke-c-black w-6 h-6" />
      </button>

      <div className="p-4 bg-c-white rounded-3xl flex h-full shadow-card">
        <Image
          src={state.modal.src}
          altText="Image"
          className="rounded-2xl h-full object-center object-cover"
        />
      </div>

      <button
        className="text-gray-900 text-5xl flex items-center justify-center rounded-2xl bg-c-white z-30 px-4 py-3 absolute top-1/2 -translate-y-1/2 left-6"
        onClick={handleModalPrevImg}
        type="button">
        <LeftArrowIcon className="stroke-current w-6 h-6" />
      </button>

      <button
        className="text-gray-900 text-5xl flex items-center justify-center rounded-2xl bg-c-white z-30 px-4 py-3 absolute top-1/2 -translate-y-1/2 right-6"
        onClick={handleModalNextImg}
        type="button">
        <RightArrowIcon className="stroke-current w-6 h-6" />
      </button>
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

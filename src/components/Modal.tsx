import { createPortal } from 'react-dom'

const Modal = () => {
  const modalContainer = document.getElementById(
    'modal-container'
  ) as HTMLElement

  return createPortal(<div>Modal Element</div>, modalContainer)
}

export default Modal

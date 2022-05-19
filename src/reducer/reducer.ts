type StateType = {
  isModalOpen: boolean
  modal_img: string
}

type ActionType =
  | { type: 'OPEN_MODAL_IMAGE'; payload: string }
  | { type: 'CLOSE_MODAL' }

export const initialState = { isModalOpen: false, modal_img: '' }

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'OPEN_MODAL_IMAGE':
      return { ...state, modal_img: action.payload }

    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false, modal_img: '' }
    default:
      return state
  }
}

export default reducer

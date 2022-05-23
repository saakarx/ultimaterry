import { ActionType, StateType } from '../types.type'

export const initialState: StateType = {
  images: [],
  isModalOpen: false,
  modal: {
    src: '',
    index: -1
  }
}

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'ADD_PHOTOS':
      return { ...state, images: [...action.payload] }

    case 'ADD_NEW_PHOTOS':
      return { ...state, images: [...state.images, ...action.payload] }

    case 'REMOVE_PHOTOS':
      return { ...state, images: [] }

    case 'OPEN_MODAL_IMAGE':
      return {
        ...state,
        isModalOpen: true,
        modal: { src: action.payload.src, index: action.payload.index }
      }

    case 'MODAL_PREV_IMG':
      if (state.modal.index === 0) return state
      return {
        ...state,
        modal: {
          src: state.images[state.modal.index - 1].urls.regular,
          index: state.modal.index - 1
        }
      }

    case 'MODAL_NEXT_IMG':
      if (state.modal.index + 1 >= state.images.length) return state
      return {
        ...state,
        modal: {
          src: state.images[state.modal.index + 1].urls.regular,
          index: state.modal.index + 1
        }
      }

    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false, modal: { src: '', index: -1 } }

    default:
      return state
  }
}

export default reducer

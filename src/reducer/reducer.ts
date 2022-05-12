type StateType = { modal_img: string }

type ActionType = { type: 'UPDATE_MODAL_IMAGE'; payload: string }

export const initialState = { modal_img: '' }

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'UPDATE_MODAL_IMAGE':
      return { modal_img: action.payload }
    default:
      return state
  }
}

export default reducer

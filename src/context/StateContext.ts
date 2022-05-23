import React, { createContext, useContext } from 'react'

import { ActionType, StateType } from '../types.type'

type StateContextType = {
  state: StateType
  dispatch: React.Dispatch<ActionType>
}

const StateContext = createContext<StateContextType>({} as StateContextType)

export const useStateContext = () => {
  return useContext(StateContext)
}

export default StateContext

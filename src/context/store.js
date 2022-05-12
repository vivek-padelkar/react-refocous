import { createContext, useReducer } from 'react'
import { backGoundChangeReducer } from './reducers'

const INITAIL_STATE = {
  backgroundColor: '#d95550',
}

export const MyContext = createContext(INITAIL_STATE)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(backGoundChangeReducer, INITAIL_STATE)
  return (
    <MyContext.Provider
      value={{ backgroundColor: state.backgroundColor, dispatch }}
    >
      {children}
    </MyContext.Provider>
  )
}

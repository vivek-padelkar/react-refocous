import { createContext } from 'react'

const defaultState = {
  backgroundColor: '#fff',
}

export const MyContext = createContext(defaultState)

export const ContextProvider = ({children})
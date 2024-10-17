import {createContext, useState} from 'react'

export const Context = createContext({})

export default function Provider({ children }) {
  const [count, incrementer] = useState(0)

  const value = {
    count,
    incrementer
  }

  return (
    <Context value={value}>{children}</Context>
  )
}

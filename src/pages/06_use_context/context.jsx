import {createContext, useState} from 'react'

export const Context = createContext({theme: 'dark'})

export default function Provider(props) {
  const [theme, setTheme] = useState('light')
  const [counter, setCounter] = useState(0)

  const value = {
    theme,
    setTheme,
    counter,
    setCounter
  }

  return (
    <Context value={value}>
      {props.children}
    </Context>
  )
}
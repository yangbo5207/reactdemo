import {useState, Suspense, useRef} from 'react'
import Flex from 'components/Flex';
import Input from './Input'
import Select from './Select'

export default function Filter({onChange}) {

  function __inputChange(e) {
    onChange && onChange({search: e.target.value})
  }

  function __selected(value) {
    onChange && onChange({number: value})
  }

  return (
    <Flex between>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Select value='4' onChange={__selected} />
    </Flex>
  )
}

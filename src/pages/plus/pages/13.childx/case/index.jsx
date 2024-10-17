import {useState, Suspense, useRef} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'
import Flex from "components/Flex";

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))

  function __inputChange(e) {
    promise.cancel()
    parameter.current.search = e.target.value
    update(fetchListController(parameter.current))
  }

  function __selected(value) {
    parameter.current.number = value
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Flex between>
        <Input onChange={__inputChange} placeholder='Enter something' />
        <Select value='4' onChange={__selected} />
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}


// 这里的 value，只影响初始化的值
function Select({value, onChange}) {
  const [current, setCurrent] = useState(value)

  function __selected(e) {
    const v = e.target.value
    // 控制内部状态更改
    setCurrent(v)

    // 将选中的值传递给外部
    onChange && onChange(v)
  }

  return (
    <Flex>
      <label htmlFor='cars' className='mr-8'>每一页个数</label>
      <select id='cars' className='border rounded px-3 py-1' value={current} onChange={__selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </Flex>
  )
}

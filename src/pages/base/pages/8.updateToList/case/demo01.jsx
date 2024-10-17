import {use, useState, Suspense, useEffect} from 'react'
import Userinfo from './Userinfo.jsx'
import Skeleton from './Skeleton.jsx'
import Button from './Button.jsx'
import {getMessage} from './api.js'

export default function Demo01() {
  const [list, updateList] = useState([])

  useEffect(() => {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }, []);

  function __handler() {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>新增数据</Button>
      </div>
      <List list={list} />
    </>
  )
}

function List(props) {
  const list = props.list
  return (
    <>
      {list.map((item, index) => {
        if (item.type === 'loading') {
          return <Skeleton key={`hello ${index}`} />
        }
        return <Userinfo index={index} username={item.id} message={item.value} key={`h${index}`} />
      })}
    </>
  )
}

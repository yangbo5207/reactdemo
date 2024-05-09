import { useEffect } from 'react'
import { useState } from 'react'
import {use, Suspense} from 'react'

const api = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

const _api2 = new Promise((resolve) => {
  resolve({ value: '_api2' })
})

const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: '_api3' })
  })
}

const _api4 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ value: '_api4' })
    }, 1000)
  })
}

export default function Index() {
  const __api = api()
  return (
    <div>
      <div id='tips'>初始化时，自动获取一条数据内容</div>
      <Suspense fallback={<div>loading...</div>}>
        <Item api={__api} />
      </Suspense>
    </div>
  )
}

const Item = (props) => {
  const joke = use(props.api)
  // const joke = use(_api3())
  return (
    <div>
      <div>{joke.value}</div>
    </div>
  )
}

function useFetch() {
  const [joke, setJoke] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api().then(res => {
      console.log(res)
      setLoading(false)
      setJoke(res)
    })
  }, [])

  return {joke, loading}
}

function Index2() {
  const {joke, loading} =  useFetch()

  if (loading) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <div>{joke.value}</div>
  )
}
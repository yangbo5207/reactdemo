import {prevListApi, nextListApi} from './api'

// 缓存请求结果
let prevCache = []
let nextCache = []

function clear() {
  prevCache = []
  nextCache = []
}

export const fetchListInit = () => {
  const prev = prevListApi()
  const next = nextListApi()
  const promise = Promise.all([prev, next]).then(res => {
    prevCache = res[0].results
    nextCache = res[1].results
    return [...prevCache, ...nextCache]
  })

  promise.cancel = () => {
    prev.cancel()
    next.cancel()
  }

  promise.clear = clear

  return promise
}

export const fetchPrevAPI = () => {
  let p = new Promise((resolve) => {
    prevListApi().then(res => {
      prevCache = res.results
      resolve([...prevCache, ...nextCache])
    })
  })
  p.cancel = () => {}
  p.clear = clear
  return p
}

export const fetchNextAPI = () => {
  let p = new Promise((resolve) => {
    nextListApi().then(res => {
      nextCache = res.results
      resolve([...prevCache, ...nextCache])
    })
  })

  p.cancel = () => {}
  p.clear = clear
  return p
}

export const fetchList = (params) => {
  if (params === 'prev') {
    return fetchPrevAPI()
  }
  if (params === 'next') {
    return fetchNextAPI()
  }
  return fetchListInit()
}

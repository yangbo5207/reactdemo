import {prevListApi, nextListApi} from './api'

export const fetchList = () => {
  const prev = prevListApi()
  const next = nextListApi()
  const promise = Promise.all([prev, next]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
  promise.cancel = () => {
    prev.cancel()
    next.cancel()
  }
  return promise
}

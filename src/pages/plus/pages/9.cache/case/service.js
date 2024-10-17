import {prevListApi} from './api'

export const fetchList = (search) => {
  const cacheArr = localStorage.getItem(search)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi()

  let p1 = prev.then((res) => {
    localStorage.setItem(search, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}

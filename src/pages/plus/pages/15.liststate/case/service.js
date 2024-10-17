import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = `searchList:key:${search}-${number}`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}

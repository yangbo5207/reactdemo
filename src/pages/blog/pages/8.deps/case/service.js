import {prevListApi, nextListApi} from './api'

export const fetchList =  () => {
  const prev = prevListApi()

  const p = new Promise((resolve) => {
    prev.then(res => {
      nextListApi().then(res2 => {
        resolve(res.results.concat(res2.results))
      })
    })
  })

  p.cancel = prev.cancel

  return p
}

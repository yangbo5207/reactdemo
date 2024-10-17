import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {number} = parameter

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}

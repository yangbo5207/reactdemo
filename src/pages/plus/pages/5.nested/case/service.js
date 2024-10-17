import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}

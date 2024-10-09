import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo`)
//   return res.json()
// }

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

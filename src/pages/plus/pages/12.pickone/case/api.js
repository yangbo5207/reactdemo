import {get} from "./http";

export const fetchList = async (number) => {
  const res = await fetch(`https://randomuser.me/api/?results=${number}&inc=name,gender,email,nat,picture&noinfo`)
  return res.json()
}

export const bannerListApi = () => {
  return get('https://randomuser.me/api', {
    results: 3,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const userListApi = () => {
  return get('https://randomuser.me/api', {
    results: 5,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const fetchList = async (number) => {
  const res = await fetch(`https://randomuser.me/api/?results=${number}&inc=name,gender,email,nat,picture&noinfo`)
  return res.json()
}

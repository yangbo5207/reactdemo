const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}

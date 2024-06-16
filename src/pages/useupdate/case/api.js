export const getMessage = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

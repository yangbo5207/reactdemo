export const getMessage = async () => {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    return res.json()
  } catch (err) {
    return {value: '今天天气不错', id: 'xxx', errMsg: err.message}
  }
}

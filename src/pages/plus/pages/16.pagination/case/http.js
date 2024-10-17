export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return `${prev}${prev ? '&' : ''}${cur}=${params[cur]}`
  }, '')

  const promise = new Promise(resolve => {
    fetch(`${path}?${p}`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}

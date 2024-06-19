export const fetchList = async (number) => {
  const res = await fetch(`https://randomuser.me/api/?results=${number}&inc=name,gender,email,nat,picture&noinfo`)
  return res.json()
}

export const fetchListWithCancel = (number) => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(
      `https://randomuser.me/api/?results=${number}&inc=name,gender,email,nat,picture&noinfo`,
      {signal}
    ).then(res => {
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

export function reducer(promises, newMessage) {
  let optPromise = new Promise((resolve) => {
    resolve({text: newMessage, sending: true})
  })
  return [...promises, optPromise]
}
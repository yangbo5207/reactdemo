export async function deliverMessage(message) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(message)
      } else {
        reject(message)
      }
    }, 1000)
  });
  return message;
}

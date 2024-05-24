// target 是否包含在 str 中
function include(str, target) {
  const len = target.length
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target[count]) {
      count ++;
      if (count === len) {
        return true
      }
    } else {
      count = 0
    }
  }

  return count === len
}

include('xxx', 'xxx')

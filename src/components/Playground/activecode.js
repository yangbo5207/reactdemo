export const baseActiveCode = ['U', 'x', 'F', 's', 'c', 'G', 'V', 'k', 'X', '3', 'x', 'O', 'P', 'h', 'N', '3', '2', '2']

export const advActiveCode = ['p', 'x', 'F', 's', 'l', 'G', 'V', 'k', 'X', '3', 'x', 'O', 'P', 'h', 'N', '3', '2', '3']

function equal(array, entercode = '') {
  let r = true
  const _arr = entercode.split('')

  if (_arr.length === 0) {
    return false
  }

  _arr.forEach((item, i) => {
    if (item !== array[i]) {
      r = false
    }
  })

  return r
}

export function equalBase(entercode) {
  return equal(baseActiveCode, entercode)
}

export function equalAdv(entercode) {
  return equal(advActiveCode, entercode)
}

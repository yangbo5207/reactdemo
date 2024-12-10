import {equalBase, equalAdv} from './activecode.js'

export default function useAuth(isAuth, advance) {
  const key = advance ? 'active_code_adv' : 'active_code'
  const equal = advance ? equalAdv : equalBase
  const localCode = localStorage.getItem(key) || ''
  return isAuth ? equal(localCode) : true
}

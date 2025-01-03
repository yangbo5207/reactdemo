import {Link} from 'react-router-dom'
import { getAuthURL } from '../../utils/http'
import {getUserinfo} from '../service'

export default function Avatar() {
  const {isLogin, avatar_url, nickname, user_id} = getUserinfo()

  if (!isLogin) {
    return (
      <Link 
        className='flex items-center px-8 py-1 rounded bg-blue-500 text-white' 
        to={getAuthURL()}
      >
        <div>登录</div>
      </Link>
    )
  }

  const profileLink = `https://xinyuzone.cn/user/${user_id}`

  return (
    <Link to={profileLink} target='_blank' className='flex items-center'>
      <div className='w-6 h-6 ml-0 md:ml-4 border rounded-full overflow-hidden'>
        <img className='w-full h-full' src={avatar_url} alt='' />
      </div>
      <span className='ml-2'>{nickname}</span>
    </Link>
  )
}

// 监听来自 giscus 的登录信息
// useEffect(() => {
//   function handleMessage(event) {
//     if (event.origin !== 'https://giscus.app') return
//     setLoading(false)
//     let giscus = event.data.giscus
//     if (giscus.viewer) {
//       setUserInfo(giscus.viewer)
//     }
//   }
//   window.addEventListener('message', handleMessage, false)
// }, []);

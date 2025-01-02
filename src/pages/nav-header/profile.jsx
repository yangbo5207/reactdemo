import {Link} from 'react-router-dom'
import {ShieldCheck, ArrowRight} from 'lucide-react'
import { getAuthURL } from '../../utils/http'
import {getUserinfo} from '../service'

export default function Avatar() {
  const {isLogin, avatar_url, nickname, user_id} = getUserinfo()

  if (!isLogin) {
    return (
      <Link 
        className='flex items-center px-3 py-1 rounded bg-blue-500 text-white ml-4' 
        to={getAuthURL()}
      >
        <div className='text-sm mr-1'>登录</div>
        <ArrowRight size={14} />
      </Link>
    )
  }

  const profileLink = `https://xinyuzone.cn/user/${user_id}`

  return (
    <Link to={profileLink} target='_blank' className='flex items-center'>
      <div className='w-8 h-8 ml-4 border rounded-full overflow-hidden'>
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

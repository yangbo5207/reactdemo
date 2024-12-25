import {useState, useEffect} from 'react'
import Loading from './loading'

export default function Avatar() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== 'https://giscus.app') return
      setLoading(false)
      let giscus = event.data.giscus
      if (giscus.viewer) {
        setUserInfo(giscus.viewer)
      }
    }
    window.addEventListener('message', handleMessage, false)
  }, []);

  function login() {
    const iframe = document.querySelector('giscus-widget').shadowRoot.querySelector('iframe')
    const a = iframe.contentWindow.document
    console.log(a)
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className='w-10 h-10 ml-4 border rounded-full overflow-hidden'>
      <img className='w-full h-full' src={userInfo.avatarUrl} alt='' />
    </div>
  )
}

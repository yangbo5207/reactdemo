import {useState} from 'react'

export default function Skin() {
  // theme-swiss theme-neon
  const [skin, setSkin] = useState('')

  const cls = `relative ${skin} bg-skin-fill overflow-hidden rounded`

  return (
    <div className='my-8 border border-gray-150 rounded px-8 pb-8'>
      <div className='flex justify-center'>
        <div onClick={() => setSkin('')} className='my-6 mx-2 h-6 w-6 rounded bg-indigo-500 cursor-pointer'></div>
        <div onClick={() => setSkin('theme-swiss')} className='my-6 mx-2 h-6 w-6 rounded bg-red-600 cursor-pointer'></div>
        <div onClick={() => setSkin('theme-neon')} className='my-6 mx-2 h-6 w-6 rounded bg-green-400 cursor-pointer'></div>
      </div>

      <div className={cls}>
        <img className='absolute inset-0 h-full w-full object-cover opacity-30' src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        <div className='absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90 transition'></div>
        <div className='relative max-w-2xl mx-auto text-center py-16 px-8'>
          <h2 className='font-extrabold text-skin-base text-4xl transition'>
            <span>广告位招租</span>
          </h2>
          <p className='mt-4 text-md text-left text-skin-muted transition'>

          </p>

          <p className='mt-4 text-md text-left text-skin-muted transition'>
            推荐
          </p>
          <p className='mt-4 text-md text-left text-skin-muted transition'>
            单一模式、依赖注入、依赖倒置、开闭原则、策略模式、并发模式，一网打尽。
          </p>
          <p className='mt-4 text-md text-left text-skin-muted transition'>
            更加详细的介绍
          </p>
          <div className='mt-10 max-w-sm mx-auto sm:max-w-one sm:flex sm:justify-center'>
            <div className='space-y-0 mx-auto inline-grid grid-cols-2 gap-5'>
              <a className='transition text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-lg px-8' href="#">联系方式</a>
              <a className='transition text-skin-base bg-skin-button-muted hover:bg-opacity-70 flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-lg shadow-sm px-8' href="#">了解更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

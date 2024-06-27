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
            <span>极客时间、掘金买课优惠</span>
          </h2>
          <p className='mt-4 text-md text-left text-skin-muted transition'>
            官方的课程返现全部归还，需要从网站 coursesub.top 或者公众号「课程减减」通过邀请链接进行下单，购买后添加客服微信发送课程名确认后即可收到红包。
          </p>

          <p className='mt-4 text-md text-left text-skin-muted transition'>
            同时可叠加极客时间的优惠券或者学生半价优惠，618 极客时间全场 6 折优惠最后几天，可以按需囤课。
          </p>

          <div className='mt-10 max-w-sm mx-auto sm:max-w-one sm:flex sm:justify-center'>
            <div className='space-y-0 mx-auto inline-grid grid-cols-2 gap-5'>
              <a target='_blank' className='transition text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-lg px-8' href="https://coursesub.top/?key=react">去选课</a>
              <a target='_blank' className='transition text-skin-base bg-skin-button-muted hover:bg-opacity-70 flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-lg shadow-sm px-8' href="https://mp.weixin.qq.com/s?__biz=MzUyMjkwNTgwOA==&mid=2247485923&idx=1&sn=0710d33fd1e1287e10f88bd4139e0a0e&chksm=f9c5f85cceb2714a585567f21751ae703f8ba80519a7a089746079a05c4f916c962fe81332d1#rd">详细规则</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

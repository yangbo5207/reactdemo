import {useState} from 'react'
import Button from 'components/Button'
import {Pizza, Drum, Grape} from 'lucide-react'
import {motion} from 'motion/react'
import {variants} from '../index'

export default function Skin() {
  // theme-swiss theme-neon
  const [skin, setSkin] = useState('')

  const cls = `relative ${skin} bg-skin-fill overflow-hidden rounded`

  return (
    <motion.div className='my-8 border border-gray-150 rounded px-8 pb-8'{...variants(0.3)}>
      <div className='text-center py-4 space-x-4'>
        <Button primary={skin === ''} onClick={() => setSkin('')} className='inline-flex space-x-2 items-center'>
          <Pizza size={18} />
          <span>Default</span>
        </Button>
        <Button primary={skin === 'theme-swiss'} onClick={() => setSkin('theme-swiss')} className='inline-flex space-x-2 items-center'>
          <Drum size={18} />
          <span>Swiss</span>
        </Button>
        <Button primary={skin === 'theme-neon'} onClick={() => setSkin('theme-neon')} className='inline-flex space-x-2 items-center'>
          <Grape size={18} />
          <span>Neon</span>
        </Button>
      </div>

      <div className={cls}>
        <img className='absolute inset-0 h-full w-full object-cover opacity-30' src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        <div className='absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90 transition'></div>
        <div className='relative max-w-2xl mx-auto text-center py-16 px-8'>
          <h2 className='font-extrabold text-skin-base text-2xl transition'>
            <span>极客时间、掘金买课优惠</span>
          </h2>
          <p className='mt-4 text-md text-left text-skin-muted transition leading-8'>
            官方的课程返现全部归还，需要从网站 coursesub.top 或者公众号「课程减减」通过邀请链接进行下单，购买后添加客服微信发送课程名确认后即可收到红包，可正常使用极客时间的优惠券或者学生半价优惠。
          </p>

          <div className='mt-10 max-w-sm mx-auto sm:max-w-one sm:flex sm:justify-center'>
            <div className='space-y-0 mx-auto inline-grid grid-cols-2 gap-5'>
              <a target='_blank' className='transition text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-lg px-8' href="https://coursesub.top/?key=react">去选课</a>
              <a target='_blank' className='transition text-skin-base bg-skin-button-muted hover:bg-opacity-70 flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-lg shadow-sm px-8' href="https://mp.weixin.qq.com/s?__biz=MzUyMjkwNTgwOA==&mid=2247485923&idx=1&sn=0710d33fd1e1287e10f88bd4139e0a0e&chksm=f9c5f85cceb2714a585567f21751ae703f8ba80519a7a089746079a05c4f916c962fe81332d1#rd">详细规则</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

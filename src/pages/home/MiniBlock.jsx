import clsx from 'clsx'

export default function MiniBlock(props) {
  const {title, desc, href, className} = props
  const base = 'block border rounded-xl p-4 bg-slate-50 border-slate-300 hover:shadow cursor-pointer'
  const cls = clsx(base, className)
  return (
    <a href={href} target='_blank' className={cls}>
      <div className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="size-6 text-blue-500">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
        </svg>
        <div className='font-bold ml-2'>{title}</div>
      </div>
      <div className='mt-3 text-slate-600 leading-8'>{desc}</div>
      <div className='block text-end mt-4 text-blue-500' href={href} target='_blank'>点击了解详情</div>
    </a>
  )
}

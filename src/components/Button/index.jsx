import {twMerge} from 'tailwind-merge'
import classnames from 'classnames'
import clsx from 'clsx'
import {cva} from 'class-variance-authority'

export default function Button(props) {
  const {className, primary, danger, sm, lg, success, ...other} = props
  const base = 'rounded-xl border border-transparent font-medium cursor-pointer transition'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'
  const _p = primary ? 'bg-blue-500 text-white hover:bg-blue-600' : ''
  const _d = danger ? 'bg-red-500 text-white hover:bg-red-600' : ''
  const _s = success ? 'bg-green-500 text-white hover:bg-green-600' : ''

  // size
  const md = 'text-sm py-2 px-4'
  const _sm = sm ? 'text-xs py-1.5 px-3' : ''
  const _lg = lg ? 'text-lg py-2 px-6' : ''

  // const cls = base + normal + md + _p + _d + _s + _sm + _lg

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }))

  const cvacss = cva(
    'rounded-md border border-transparent font-medium cursor-pointer transition', {
      variants: {
        type: {
          normal: 'bg-gray-100 hover:bg-gray-200',
          primary: 'bg-blue-500 text-white hover:bg-blue-600',
          danger: 'bg-red-500 text-white hover:bg-red-600'
        },
        danger: {
          true: 'bg-red-500 text-white hover:bg-red-600',
          false: 'bg-red-500 text-white hover:bg-red-600'
        }
      },
      defaultVariants: {
        type: 'normal',
        danger: false
      }
    }
  )
  // console.log(cvacss({danger: true}))

  // const cls = twMerge(base, props.className, normal, _p, _d, md, _sm, _lg)

  return (
    <button className={cls} {...other}>{props.children}</button>
  )
}


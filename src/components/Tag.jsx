import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

export default function Tag(props) {
  const {label, type, primary, warning, danger, newer, hard, className} = props

  const base = 'text-sm text-gray-500 border px-3 rounded-full'

  const clx = clsx(base, {
    ['bg-blue-100 text-blue-500 border-blue-500']: !!primary,
    ['bg-green-100 text-green-500 border-green-500']: !!newer,
    ['bg-red-100 text-red-500 border-red-500']: !!danger,
    ['bg-orange-100-100 text-orange-500 border-orange-500']: !!danger,
    ['bg-fuchsia-100 text-fuchsia-500 border-fuchsia-500']: !!hard,
  }, className)

  return (
    <label className={twMerge(clx)}>
      {label}
    </label>
  )
}

import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

// 默认方向为 Row
export default function Flex(props) {
  const {children, start, end, around, between, className, center, col, ...other} = props

  const base = 'flex items-center flex-row'

  const cls = clsx(base, {
    ['flex-col']: col,
    ['justify-start']: start,
    ['justify-end']: end,
    ['justify-around']: around,
    ['justify-between']: between,
    ['justify-center']: center,
  }, className)

  return (
    <TailwindDiv className={twMerge(cls)} {...other}>{children}</TailwindDiv>
  )
}

function TailwindDiv(props) {
  const {className, children, ...other} = props

  let bgclass = ''
  let borderclass = 'border'
  let roundclass = 'rounded'

  Object.keys(other).forEach(key => {
    if (key.indexOf('bg-') === 0) {
      bgclass += `${key} `
    }

    if (key.indexOf('border-') === 0) {
      borderclass += ` ${key} `
    }

    if (key.indexOf('rounded-') === 0) {
      roundclass += ` ${key} `
    }
  })

  const cls = clsx(bgclass, borderclass, roundclass, className)

  return (
    <div className={twMerge(cls)} {...other}>{children}</div>
  )
}

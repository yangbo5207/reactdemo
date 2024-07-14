import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

/**
 * end: 是否从尾部开始比较
 */
function ActiveLink(props) {
  const {children, className = '', end = true, activeName, to, onClick, ...prop} = props
  const resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end })

  const __cls = twMerge(clsx(className, 'transition cursor-pointer', {
    [activeName]: !!match
  }))

  function __handler(e) {
    if (!!match) e.preventDefault()
    onClick && onClick(e)
  }

  return (
    <Link
      className={__cls}
      to={to}
      {...prop}
      onClick={__handler}
    >
      {children}
    </Link>
  )
}

export default ActiveLink

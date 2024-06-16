import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

function ActiveLink({ children, className = '', activeName, to, activeStyle, onClick, ...prop }) {
  const resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  const __cls = twMerge(clsx(className, 'transition cursor-pointer', {
    [activeName]: !!match
  }))

  const __sty = match ? activeStyle : {}

  function __handler(e) {
    if (!!match) e.preventDefault()
    onClick && onClick()
  }

  return (
    <Link
      className={__cls}
      style={__sty}
      to={to}
      {...prop}
      onClick={__handler}
    >
      {children}
    </Link>
  )
}

export default ActiveLink

import {Link, useMatch, useResolvedPath} from 'react-router-dom'

function ActiveLink({ children, className = '', activeName, to, activeStyle, ...prop }) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  const name = `${className} transition`
  const __cls = match ? `${name} ${activeName}` : name
  const __sty = match ? activeStyle : {}

  return (
    <Link 
      className={__cls}
      style={__sty}
      to={to}
      {...prop}
    >
      {children}
    </Link>
  )
}

export default ActiveLink

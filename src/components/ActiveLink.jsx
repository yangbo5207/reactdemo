import {Link, useMatch, useResolvedPath} from 'react-router-dom'

function ActiveLink({ children, className = '', activeName, to, activeStyle, ...prop }) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  const __cls = match ? `${activeName} ${className}` : className

  return (
    <Link 
      className={__cls}
      to={to}
      {...prop}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
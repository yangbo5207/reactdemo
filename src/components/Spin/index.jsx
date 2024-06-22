import {useState, useEffect} from 'react'
import clsx from 'clsx'
import './index.css'

export default function Index(props) {
  const {loading, type = 'icon'} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    if (loading) {
      setShow(true)
      setDisplay(true)
    } else {
      setShow(false)
    }
  }, [loading]);

  const base = 'spin flex items-center justify-center top-0 bg-white bg-opacity-50'
  const cls = clsx(base, {
    in: show,
    out: !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  return (
    <div className='relative'>
      {props.children}
      {display ? (
        <div className={cls} onAnimationEnd={__animationendHandler}>
          {type === 'icon' && (
            <svg className='animate-spin' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"></path>
            </svg>
          )}
        </div>
      ) : null}
    </div>
  )
}

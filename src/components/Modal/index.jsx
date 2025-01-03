import { useState, useImperativeHandle} from "react";
import {createPortal} from 'react-dom'
import clsx from 'clsx'
import './index.css'

export default function Modal(props) {
  const {onClose, children, ref} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => {
      setShow(true);
      document.body.style.overflow = 'hidden'
      setDisplay(true)
    },
    close: () => {
      document.body.style.overflow = 'visible'
      setShow(false)
    }
  }))

  const cls = clsx('modal', {
    'animation-in': show,
    'animation-out': !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  function __closeHandler() {
    setShow(false)
    document.body.style.overflow = 'visible'
    onClose && onClose()
  }

  if (!display) { return null }


  return createPortal(
    <div
      onAnimationEnd={__animationendHandler}
      className={cls}
      onClick={__closeHandler}
    >{children}</div>, document.body
  )
}

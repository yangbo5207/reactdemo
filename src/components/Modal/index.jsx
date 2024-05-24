import s from './index.module.css'
import {useLayoutEffect, useState, useImperativeHandle} from "react";
import {createPortal} from 'react-dom'
import classnames from 'classnames'

export default function Modal(props) {
  const {onClose, children, ref} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  const cls = classnames(s.modal, {
    [s.in]: show,
    [s.out]: !show
  })

  function animationendHandler() {
    if (!show) {
      setDisplay(false)
    }
  }

  useImperativeHandle(ref, () => {
    return {
      show: () => {
        setShow(true)
        setDisplay(true)
      },
      close: () => {
        setShow(false)
      }
    }
  })

  // useLayoutEffect(() => {
  //   show && setDisplay(true)
  // }, [show])

  if (!display) { return null }

  return (
    <>
    {
      createPortal(
        <div
          className={cls}
          onAnimationEnd={animationendHandler}
          onClick={onClose}
        >
          {children}
        </div>,
        document.body
      )
    }
    </>
  )
}

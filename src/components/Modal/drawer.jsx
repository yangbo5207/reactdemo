import React, { useState, useImperativeHandle, useRef, MouseEvent } from 'react'
import Modal from './index'
import clsx from 'clsx'
import './index.css'

export default function Drawer(props) {
  const { onClose, children, ref, width, direction = 'left', ...other } = props
  const modal = useRef(null)
  const [show, setShow] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => {
      modal.current && modal.current.show()
      setShow(true)
    },
    close: () => {
      modal.current && modal.current.close()
      setShow(false)
    }
  }), [])

  const cls = clsx('drawer', {
    'animation-in': show,
    'animation-out': !show
  })

  function __closeHandler() {
    setShow(false)
    onClose && onClose()
  }

  function __click(e) {
    e.stopPropagation()
  }

  let styles = {}

  if (direction === 'right') {
    styles = {
      right: 0,
      '--drawer-wdith': width,
      '--drawer-x': width
    }
  }

  if (direction === 'left') {
    styles = {
      left: 0,
      '--drawer-wdith': width,
      '--drawer-x': `-${width}`
    }
  }

  return (
    <Modal onClose={__closeHandler} ref={modal} {...other}>
      <div className={cls} onClick={__click} style={styles}>{children}</div>
    </Modal>
  )
}


import { useEffect, useRef, useState, useImperativeHandle } from 'react';
import Modal from '../Modal'
import Button from "components/Button";
import clsx from 'clsx'
import './index.css'

let mousePosition

const getClickPosition = (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }
  setTimeout(() => {
    mousePosition = null
  }, 100)
}

document.documentElement.addEventListener('click', getClickPosition, true)

function setTransformOrigin(node, value) {
  var style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
    style[prefix + 'TransformOrigin'] = value;
  });
  style['transformOrigin'] = value;
}

function offset(el) {
  const rect = el.getBoundingClientRect()
  const pos = {
    left: rect.left,
    top: rect.top
  }
  const doc = el.ownerDocument
  const w = doc.defaultView
  pos.left += getScroll(w)
  pos.top += getScroll(w, 1)
  return pos
}

// 1st use window.pageXOffset and window.pageYOffset
// 2nd use window.document.documentElement.scrollLeft/scrollTop
// 3rd use window.document.body.scrollLeft/scrollTop
function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}

export default function Dialog(props) {
  const {title, onClose, children, onSure, onCancel, ref} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)
  const wrapperRef = useRef(null)
  const modal = useRef(null)

  useImperativeHandle(ref, () => ({
    show: () => {
      modal.current.show()
      document.body.style.overflow = 'hidden'
      setShow(true)
      setDisplay(true)
    },
    close
  }))

  function close() {
    setShow(false)
    modal.current.close()
    document.body.style.overflow = 'visible'
  }

  function closeHandler() {
    close()
    onClose && onClose()
  }

  function clickHander(e) {
    e.stopPropagation()
  }

  function sureClickHander(e) {
    e.stopPropagation()
    onSure && onSure()
  }

  function animationendHandler() {
    if (!show) {
      setDisplay(false)
    }
  }

  const cls = clsx('dialog-wrapper', {
    in: show,
    out: !show
  })

  useEffect(() => {
    const node = wrapperRef.current
    if (display && node) {
      const elOffset = offset(node)

      if (mousePosition)
        setTransformOrigin(node, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px')
    }
  }, [display])

  return (
    <Modal ref={modal} onClose={closeHandler}>
      {display ? (
        <div ref={wrapperRef} className={cls} onClick={clickHander} onAnimationEnd={animationendHandler}>
          <header className="flex justify-between items-center mb-2">
            <div className="font-bold text-lg leading-6">
              {title}
            </div>
            <div onClick={closeHandler} className='p-2 rounded-md cursor-pointer transition hover:bg-gray-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            </div>
          </header>
          <section className="leading-6">
            {children}
          </section>
          <footer className="text-end mt-4">
            <Button primary onClick={sureClickHander}>确认</Button>
          </footer>
        </div>
      ) : null}
    </Modal>
  )
}

import { useRef } from 'react'
import Modal from '../../components/Modal'

function Index() {
  const modal = useRef(null)
  const input = useRef(null)

  function __clickHandler() {
    modal.current.show()
    input.current.focus()
  }

  return (
    <div>
      <div id='tips'>ref 修改之后的使用方式</div>
      <button onClick={__clickHandler}>显示蒙层</button>
      <Modal
        ref={modal}
        onClose={() => modal.current.close()}
      />

      <MyInput ref={input} />
    </div>
  )
}

export default Index


function MyInput(props) {
  return (
    <label>
      {props.label}
      <input ref={props.ref} />
    </label>
  );
}

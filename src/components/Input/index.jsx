import {useState} from 'react'
import './index.css'

export default function Input(props) {
  const {type = 'text', className, required, label, help = '此项规则不匹配', pattern, ...other} = props
  const [msg, updateMsg] = useState(false)
  const [valueMissing, setRequired] = useState(false)

  const [inputed, setInputed] = useState(false)

  function __input(e) {
    if (!inputed) {
      setInputed(true)
    }
    const element = e.target
    updateMsg(element.validity.patternMismatch)
    setRequired(element.validity.valueMissing)
  }

  let error_message = ''

  if (msg) {
    error_message = help
  }
  if (valueMissing) {
    error_message = '此项为必选项'
  }

  const input = inputed ?
    <input type={type} required={required} pattern={pattern} {...other} onInput={__input}/> :
    <input type={type} {...other} onInput={__input}/>

  return (
    <div className='flex items-center my-10'>
      {label && <label className="w-20 text-right font-bold">{label}：</label>}
      <div className='input flex-1'>
        {input}
        <div className='msg_required absolute text-sm text-red-500 mt-1 indent-4'>
          {error_message}
        </div>
      </div>
    </div>
  )
}

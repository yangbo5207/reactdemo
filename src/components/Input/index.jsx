import {useState} from 'react'
import clsx from 'clsx'
import './index.css'

export default function Input(props) {
  const {type = 'text', className, required, label, help = '此项规则不匹配', pattern, ...other} = props

  const pclsx = clsx('flex items-center my-10', className)

  return (
    <div className={pclsx}>
      {label && <label className="w-20 text-right font-bold">{label}：</label>}
      <div className='input flex-1'>
        <input type={type} required={required} pattern={pattern} {...other} /> 
      </div>
    </div>
  )
}

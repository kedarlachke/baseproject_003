import React from 'react'
import './input.css'

interface Iinput {
  wd?: string
  errormsg?: string
  label: string
  name: string
  value: string
}

export function Input(props: Iinput) {
  const { wd, errormsg, label, name, value } = props
  let classname = 'input-field'
  if (errormsg !== null) {
    if (errormsg !== undefined && errormsg.length > 0) {
      classname = 'error-input-field'
    }
  }
  return (
    <div className={`col-${wd}`}>
      <div className={classname}>
        <input
          type="text"
          name={name}
          autoComplete="off"
          required
          placeholder=" "
          value={value}
        />
        <label className="label-name">
          <span className="content-name">{label}</span>
        </label>
      </div>
      <div className="field-error">{errormsg}</div>
    </div>
  )
}

export const M_Input = React.memo(Input)

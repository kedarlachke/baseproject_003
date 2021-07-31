import React from 'react'
import './select.css'
export function Select(props: any) {
  const { wd, label, options, name, errormsg } = props
  let selectclassname = 'input-field'
  return (
    <div className={`col-${wd}`}>
      <div className={selectclassname}>
        <select required name={name}>
          <option />
          {options.map((item: string, i: string) => (
            <option label={item} value={item} key={i} />
          ))}
        </select>
        <label className="label-name">
          <span className="content-name">{label}</span>
        </label>
      </div>
      <div className="field-error">{errormsg}</div>
    </div>
  )
}

export const M_Select = React.memo(Select)

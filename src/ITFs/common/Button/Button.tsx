import React from 'react'
import './button.css'
export function Button(props: any) {
  let { className, wd, label, name } = props
  wd = wd ? wd : '12'
  return (
    <>
      <div className={`col-${wd}`}>
        <div className="item">
          <button className={className} name={name}>
            {label}
          </button>
        </div>
      </div>
    </>
  )
}

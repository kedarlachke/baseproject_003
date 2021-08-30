import React from 'react'
import {setValue,getValue,getErrorValue,getErrorValueN,setCalValue,
    getDtFormat,
    getTimeFormat,
    getDateYYYYMMDD,
    getDateYYYYMMDDHHMI,
   getFromToDate

} from '../../validationlib';

interface abc{
  modifydoc:any;
  currdoc:any;
  section:any;
  iconClass:string;
  cal?:boolean;
  placeholder?:string;
  name:string;
  onChange:any;
}
export function LeftIconRoundInput_backup(props:abc) {
const {modifydoc,currdoc,section,iconClass,cal,placeholder,name} = props

    return (
        <div className="round-input-field">
        <i className={iconClass}></i>
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={getValue(currdoc,section)}
      onChange={(event)=>{setCalValue(currdoc,section,event.target.value,modifydoc,cal)  } }
      onBlur={event => modifydoc(setValue(currdoc,'touched.'+section,true))}
      autoComplete="false"
        />
      </div>
    )
}

interface IRoundInput{
  modifydoc:any;
  iconClass:string;
  placeholder?:string;
  name:string;
  value:any;
}
export function LeftIconRoundInput(props:IRoundInput) {
  console.log('in round input')
  const {modifydoc,iconClass,placeholder,name,value} = props
  
      return (
          <div className="round-input-field">
          <i className={iconClass}></i>
          <input
            type="text"
            placeholder={placeholder}
            name={name}
            value={value}
        onChange={(event)=>{modifydoc(event)} }
        autoComplete="false"
          />
        </div>
      )
  }

export  const M_LeftIconRoundInput=React.memo(LeftIconRoundInput)

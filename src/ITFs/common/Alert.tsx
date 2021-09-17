import React, { useEffect, useState } from 'react'
import './alert.css'
function Alert({type}:any) {
    const [displayAlert, setDisplayAlert] = useState(false);
    useEffect(() => {
        setDisplayAlert(true)
        return () => {
            
        }
    }, [type])
    return (
        <div className={displayAlert?`alert ${type} show`:`alert ${type} hide`}>
            <span className={type === 'success'? "fas fa-check-circle":"fas fa-exclamation-circle"}></span>
            <span className="msg">Warning: This is a warning alert</span>
            <span className="close-btn" onClick={()=>setDisplayAlert(false)}>
                <span className="fas fa-times"></span>
            </span>
        </div>
    )
}

export default Alert

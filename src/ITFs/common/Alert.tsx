import React, { useEffect, useState } from 'react'
import './alert.css'
function Alert(props:any) {
    const [displayAlert, setDisplayAlert] = useState(false);
    useEffect(() => {
        setDisplayAlert(true)
        return () => {
            
        }
    }, [props.type])
    return (
        <div className={displayAlert?"alert warning show":"alert success hide"}>
            <span className="fas fa-exclamation-circle"></span>
            <span className="msg">Warning: This is a warning alert</span>
            <span className="close-btn" onClick={()=>setDisplayAlert(false)}>
                <span className="fas fa-times"></span>
            </span>
        </div>
    )
}

export default Alert

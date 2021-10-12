import React from 'react'
import './loader.css'

export const Loader = (props:any) => {
    return (
        <div className="loader-container">
            <div className="center">
                <div className="ring"></div>
                <span>Loading...</span>
            </div>
        </div>
    )
}



export default React.memo(Loader)

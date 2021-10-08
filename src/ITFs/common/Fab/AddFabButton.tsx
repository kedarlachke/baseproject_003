import React from 'react'
import './AddFabButton.css'
function AddFabButton({action}) {
  return <button className="add-fab-button" onClick={()=>{action("",true)}}>+</button>
}

export default AddFabButton

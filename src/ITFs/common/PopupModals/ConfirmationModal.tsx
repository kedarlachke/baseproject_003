import React from 'react'
import './modal.css'
function Modal(props: any) {
    return (
        <>
        <input type="checkbox" id="click" />
                <label htmlFor="click" className="click-me">Click Me</label>
        <div className="modal-container">
            <div className="center">
                
                <div className="content">
                    <div className="header">
                        <h2>Modal Popup</h2>
                        <label htmlFor="click" className="fas fa-times"></label>
                    </div>
                    <label htmlFor="click" className="fas fa-check"></label>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, mollitia.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque aliquid amet sed neque hic excepturi commodi temporibus vitae quisquam mollitia, voluptates ducimus obcaecati soluta. Molestiae harum fugit eligendi debitis.</p>
                    <div className="line"></div>
                    {/* <label htmlFor="click" className="close-btn">close</label> */}
                    <div className="modal-buttons-section" >
                    <div className="modal-button " >
                        <span>Cancel</span>
                    </div>
                    <div className="modal-button confirm"><span>Confirm</span></div>
                    </div>


                </div>
            </div>
        </div>
        </>
    )
}

export default React.memo(Modal)

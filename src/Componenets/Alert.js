import React from 'react'

function Alert(props) {
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} 
     role="alert">
        {/* A simple success alert—check it out! */}
       <h5  style={{color: props.mode==='dark'?'green':'dark'}}>
       <strong>{props.alert.type}</strong> : {props.alert.msg}
       </h5>
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert"
        aria-label="Close">  Close</button> */}
       </div>
    
  )
}

export default Alert


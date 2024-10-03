import React, { useState } from "react"; 
import { Alert, Button } from "react-bootstrap"; 
  
function AlertMessage({show, handleClose, message, color}) {
    const mystyle = {  
        position : "fixed",
        maxHeight : '4em',
        top : "0",
        width : "100%",
        zIndex : "1056",
    };
    return ( 
        <div> 
            {show && ( 
                <Alert 
                    style={mystyle}
                    variant={color}
                    onClose={handleClose}
                    className="alert-dismissible fade show"
                    dismissible

                    role="alert"
                    > 
                      
                    <Alert.Heading>{message}</Alert.Heading> 
                    {/* <p>Error message goes here.</p>  */}
                </Alert>
            )} 
        </div> 
    ); 
}

export default AlertMessage
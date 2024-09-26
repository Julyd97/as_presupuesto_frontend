import React, { useState } from "react"; 
import { Alert, Button } from "react-bootstrap"; 
  
function AlertMessage({show}) {
    const mystyle = {  
        position : "fixed",
        top : "0",
        width : "100%",
        zIndex : "1056",
    };
    return ( 
        <div> 
            {show && ( 
                <Alert 
                    style={mystyle}
                    variant="danger"
                    onClose={() => setShow(false)} 
                    dismissible
                    fade> 
                      
                    <Alert.Heading>Error</Alert.Heading> 
                    <p>Error message goes here.</p> 
                </Alert> 
            )} 
        </div> 
    ); 
}

export default AlertMessage
import React, { useState } from "react"; 
import { Alert, Button } from "react-bootstrap"; 
  
function AlertMessage({show}) {
    return ( 
        <div> 
            {show && ( 
                <Alert 
                    variant="danger"
                    onClose={() => setShow(false)} 
                    dismissible
                    fade> 
                      
                    <Alert.Heading style={{}}>Error</Alert.Heading> 
                    <p>Error message goes here.</p> 
                </Alert> 
            )} 
        </div> 
    ); 
}

export default AlertMessage
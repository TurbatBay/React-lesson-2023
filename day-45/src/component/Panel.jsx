import React from "react"
import { useState } from "react";

export default function Panel ({children, title, onShow, isActive}) {
    
    
    return(
        <div>
            <h3>{title}</h3>
            
            {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
            
        </div>
    )
}
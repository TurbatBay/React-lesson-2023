import React from "react";
import { useState } from "react";


function Main () {
    const [counter, setCounter] = useState(0);
    const [inputText, setInputText] = useState(0);
    const handleClick = () => {
      
        
        console.log("Clicked")
        
       
        setCounter(counter + 1)
        console.log(counter)
    }
    

    const handleInput = function(event) {
        console.log("handleInput clicked")   
        setInputText(event.target.value)     
    }
    return(
        <div>
            <p>helloReacrt</p>
            <button onClick={handleClick}>button1</button>
            <br />
            <br />
            <p>{inputText}</p>
            <input value={inputText} onChange={(e) => {handleInput(e)}}></input>
        </div>
       
    )
}
export default Main



//text bichih bolgond ter ugiig log dr grgah ystoi
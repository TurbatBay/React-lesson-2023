import userList from "../data/data.js"
import { useState } from "react";
import memoData from "../data/memoData.js";

export default function User() {

   
    const [index, setIndex] = useState(0);
    const [memo, setMemo] = useState();
    let user = userList[index];

    // const handleClick = () => {() => {setIndex(index+1)}}
    return (
        <div>
            <h2>Day-40 State</h2>
            <button onClick={() => {
                setIndex(index + 1);
                setMemo(userList[index + 1].name)
                
                }}
                >Next</button>
            <p>{user.name}</p>


            <input type="text" value={memo}>
                
            </input>
        </div>
    );
}
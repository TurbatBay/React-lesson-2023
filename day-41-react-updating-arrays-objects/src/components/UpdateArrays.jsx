import React from "react";

export default function UpdateArrays(){
    let a = [2, 3, 4, 5];
    a.push(6)
    a.unshift(1)
    a.pop(a)
    a.shift(a)
    a.splice(1, 1)
    const b = a.slice(1, 2)
    console.log(a);
    console.log(b);
    console.log(a.reverse())
    let c = [1, 2, 3, 11, 12, 23, 100];
    console.log(c.sort())
    c.sort((a,b) => a - b)
    console.log(c)    


    let f = [1,2]
    let g = [4, 5]
    const h = f.concat(g)
    console.log(h)
    g = [...f]
    console.log(g)

    console.log(c.filter(el => el > 5))


    return(
        <div>
            <p>Arrays</p>
        </div>
    )
}
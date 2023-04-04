import { useState } from "react"

export default function UpdatingObjects () {

    // const user = {
    //     age: 18, 
    //     name: "Dorj"
    // }
    // user.age = 20;
    // console.log(user)


    const [user, setUser] = useState({age: 18,  name: "Dorj"})
    const check = () => {
        const newUser = {...user}
        user.age += 20;
        setUser(newUser)
    }
    return (
        <div>
            Updating objects
            <button onClick={check}>
                User age is {user.age}
            </button>
        </div>
    )
}
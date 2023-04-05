import React from "react";
import { useRouter } from "next/router";

//be
export async function getServerSideProps(req: any) {
    const {user} = req.params

    console.log(user)
    return {
        props: {
            user,
        }
    }
}

//fe
export default function Greeting(props: any): JSX.Element {
    const {query} = useRouter()
    console.log(query)
    return (
        <div>Hello {props.user}
        <h2>He is {query.age}</h2>
        </div>
    )
}
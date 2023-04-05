import React from "react";


//be
export async function getServerSideProps(req: any) {
    const {date, slug} = req.params
    
    return {
        props: {
            date,
            slug
        }
    }
}

//fe
export default function Greeting(props: any): JSX.Element {
    return (
        <>
        <div>Hello {props.slug}</div>
        <div>Hello {props.date}</div>
        </>
    )
}
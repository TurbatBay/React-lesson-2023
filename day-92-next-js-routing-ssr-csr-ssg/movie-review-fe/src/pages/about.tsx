import React from "react";


export default function About(props: any):JSX.Element {
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <h1>Theater bane{props.theater}</h1>
        </div>
    );
    }
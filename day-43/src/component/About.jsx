import { Outlet } from "react-router-dom";
import Khangai from "./about/khangai";
import Usukhuu from "./about/usukhuu";

export default function About (){
    return (
        <div>
            <p>Its about page</p>
            <a href='./about/khangai'>khangai</a>
            <a href='./about/usukhuu'>usukhuu</a>
            <Outlet />
        </div>
    )
}
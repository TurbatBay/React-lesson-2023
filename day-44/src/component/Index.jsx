import { Link } from "react-router-dom"
export default function Index() {

    const aboutPageData = {
        from: "Index",
        message: "Welcome to About Page",
        timestamp: Date.now()
    }

    const homePageData = {
        from: "Index",
        message: "Welcome to Home Page",
        timestamp: Date.now()
    }
    return (
        <>
            <h1>Dynamic Route-day-44</h1>
            <nav>
                <Link className="link" to={"/about"} state={aboutPageData}>About page</Link>
                <Link className="link" to={"/accordian"} >Accordian page</Link>
                <Link className="link" to={"/home"} state={homePageData}>Home page</Link>
                <Link className="link" to={"/movies"} state={homePageData}>Movies Page</Link>
            </nav>
        </>
    )
}
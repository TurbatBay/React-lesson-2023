import { useLocation, useParams } from "react-router-dom"
import movieData from "../data/movies";

export default function Movie() {
    const { id } = useParams()
    const location = useLocation();
    console.log(location.state)
    const movie = movieData.filter((data) => data.id == id)
    return (
        <div>
            <h1>Movie detailed page {id}</h1>
            {movie &&
                movie.map((m, idx) => {
                    return (

                        <div key={idx}>
                            <p>{m.name}</p>
                            <p>{m.id}</p>
                            <p>{m.ISBN}</p>
                        </div>
                    )


                })}
        </div>
    )
}
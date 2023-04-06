import { Router } from "express";
import { getMovies, getMoviesById, searchMovies } from "../controllers/movies.controller";

const moviesRouter = Router()

moviesRouter.get('/list', getMovies)

moviesRouter.get('/byId/:id', getMoviesById)

moviesRouter.get('/search', searchMovies)
export default moviesRouter

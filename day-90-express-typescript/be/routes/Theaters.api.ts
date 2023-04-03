import {Router} from "express"
import { getTheaters, getTheatersById , searchTheaters} from "../controllers/theater.controller"
const theaterRouter = Router()

theaterRouter.get('/list', getTheaters)

theaterRouter.get('/byId/:id', getTheatersById)

theaterRouter.get('/search', searchTheaters)
export default theaterRouter

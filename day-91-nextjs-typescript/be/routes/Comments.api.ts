import {Router} from "express"
import { getComments, getCommentsById, getCommentsByMovieId } from "../controllers/comment.controller"

const commentRouter = Router()

commentRouter.get('/list', getComments)

commentRouter.get('/byId/:id', getCommentsById)

commentRouter.get('/search', getCommentsByMovieId)
export default commentRouter

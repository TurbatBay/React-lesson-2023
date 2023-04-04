import CommentModel from "../models/comments.model";
import {Request, Response} from "express";
export const getComments = async (req: Request, res: Response) => {
    try {
        const comments = await CommentModel.find({});
        res.status(200).json(comments);
    } catch (error) {
        res.status(404).json({ data: [] });
    }
}

export const getCommentsById = async (req: Request, res: Response) => {
    try {
        const comment = await CommentModel.find({ _id: Number(req.params.id)});
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ data: [] });
    }
}
export const getCommentsByMovieId = async (req: Request, res: Response) => {
    try {
        const comment = await CommentModel.find({ movie_id: Number(req.params.id)});
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ data: [] });
    }
}

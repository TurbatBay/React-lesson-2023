import mongoose, { Schema, Date } from "mongoose"

interface IComment {
    _id: number,
    name: {
        type: string,
        required: true
    }
    email: {
        type: string,
        required: true

    }
    movie_id: number,
    text: {
        type: string,
        required: true
    }
    date: {
        type: Date,
        required: true
    }
}
const CommentSchema: Schema = new Schema({})
const CommentModel = mongoose.model<IComment>("Comment", CommentSchema)

export default CommentModel
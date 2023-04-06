
import express, { Express, Request, Response } from "express"
import mongoose from "mongoose"
import theaterRouter from "./routes/Theaters.api"
import commentRouter from "./routes/Comments.api"
import moviesRouter from "./routes/Movies.api"
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 8282
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://MongoTuru:helloworld@turumongo.pfftwk3.mongodb.net/sample_mflix"


const app: Express = express()

app.use(express.json())
app.use(cors())
app.get('/', (request: Request, response: Response) => {
    response.send(`<h1>Day - 90 Express Typescript</h1>`)
})
app.use("/theaters", theaterRouter)
app.use('/comments', commentRouter)
app.use('/movies', moviesRouter)

app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log('Database connected succesfully'))
        .catch((error) => console.error(error))
    console.log(`Express Application is running on http://localhost:${PORT}`)
})

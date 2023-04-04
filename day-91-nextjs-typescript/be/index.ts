
import express, { Express, Request, Response } from "express"
import mongoose from "mongoose"
import theaterRouter from "./routes/Theaters.api"
import commentRouter from "./routes/Comments.api"
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://MongoTuru:helloworld@turumongo.pfftwk3.mongodb.net/sample_mflix"

// let name: string = 'John'
// let phoneNumber: number = 99119911
// let isMarried: boolean = false
let sheeps: Array<string> = ["1", "2", "3"]
// let sheep: string[] = ["sheep1", "sheep2", "sheep3"]
// let sheepObject: { name: string; age: number } = {
//     name: "sheep1",
//     age: 1,
// }
// sheepObject.name = "sheep2 "

const app: Express = express()

app.use(express.json())
app.use(cors())
app.get('/', (request: Request, response: Response) => {
    response.send(`<h1>Day - 90 Express Typescript</h1>`)
})
app.use("/theaters", theaterRouter)
app.use('/comments', commentRouter)

app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log('Database connected succesfully'))
        .catch((error) => console.error(error))
    console.log(`Express Application is running on http://localhost:${PORT}`)
})

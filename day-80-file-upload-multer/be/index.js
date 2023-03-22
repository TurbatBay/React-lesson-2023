// This line imports the Express library, which is used to create the server
const express = require('express')

// This line imports the CORS library, which is used to enable cross-origin requests
const cors = require('cors')

// This line imports the Multer library, which is used to handle file uploads
const multer = require('multer')

// This line sets the port that the server will listen on
const PORT = 8080

// This line creates a new instance of the Express server
const app = express()

// This section sets up Multer to handle file storage and naming
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage: storage })

// This line sets up a route to serve files from the /uploads directory
app.use('/uploads', express.static('uploads'))

// This line enables CORS for all routes
app.use(cors())

// This line enables parsing of JSON request bodies
app.use(express.json())

// This route responds with a simple HTML message
app.get('/', (request, response) => {
  response.send('<h1> Day - 80 File Upload </h1>')
})

// This route handles file uploads
app.post('/fileUpload', upload.single('image'), (request, response, next) => {
  response.json({
    data: [],
  })
})
// This line starts the server listening on the specified port
app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`)
})

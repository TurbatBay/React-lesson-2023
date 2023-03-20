console.log('Day - 80 File Upload')

const express = require('express')
const cors = require('cors')

const multer = require('multer')

const PORT = 8080
const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage: storage })

app.use('/uploads', express.static('uploads'))

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1> Day - 80 File Upload </h1>')
})

app.post('/fileUpload', upload.single('image'), (request, response, next) => {
  response.json({
    data: [],
  })
})

app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`)
})

console.log('Day - 80 File Upload')

const express = require('express')
const cors = require('cors')
const fs = require('fs')
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

// filenames = fs.readdirSync('./uploads')

// console.log('\nCurrent directory filenames:')
// filenames.forEach((file) => {
//   console.log(`localhost:8080/uploads/${file}`)
// })

// fileObjs = fs.readdirSync('./uploads', { withFileTypes: true })

// console.log('\nCurrent directory files:')
// fileObjs.forEach((file) => {
//   console.log(file)
// })

app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1> Day - 80 File Upload </h1>')
})

app.post('/fileUpload', upload.single('image'), (request, response, next) => {
  const imgs = []
  fs.readdirSync('./uploads/').forEach((file) => [console.log(file)])
  console.log(file)
  const fileUrl = `localhost:8080/uploads/${file}`
  imgs.push(fileUrl)

  response.json({
    data: imgs,
  })
})

app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`)
})

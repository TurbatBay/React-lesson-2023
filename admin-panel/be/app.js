console.log('it is my app.js')
// import necessary module
import { updateUser, deleteUser, getUser } from './services/users-service'
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const multer = require('multer')

///configuration of modules
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.get('/users', async (request, response) => {
  const result = await getUser()
  response.status(200).send(result)
})
//update
app.put('/user', async (request, response) => {
  const body = request.body
  console.log(body)
  const result = await updateUser(body.user_role_id)
  console.log(result)
  response.status(200).send({})
})
//delete
app.delete('/user', async (request, response) => {
  const body = request.body
  console.log(body)

  const result = await deleteUser(body.user_role_id)
  response.status(200).send(result)
})

//BE
app.post('/new', (request, response) => {
  fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
    const newUser = {
      id: Date.now(),
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      phoneNumber: request.body.phoneNumber,
      email: request.body.email,
      password: request.body.password,
      checkbox: request.body.checkbox,
      radio: request.body.radio,
      imgURL: request.body.imgURL,
    }

    if (readError) {
      response.json({
        status: 'file does not exist',
        data: [],
      })
    }
    const dataObject = JSON.parse(readData)

    dataObject.push(newUser)

    fs.writeFile(
      './data/users.json',
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: `Error during file write`,
            data: [],
          })
        }
        response.json({
          status: 'success',
          data: dataObject,
        })
      }
    )
  })
})

app.get('/new', (request, response) => {
  fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
    // utf-8 n ymr formataar avhig zana
    if (readError) {
      response.json({
        status: 'file does not exist',
        data: [],
      })
    }
    const objectData = JSON.parse(readData)
    response.json({
      status: 'success',
      data: objectData,
    })
  })
})

app.delete('/new', (request, response) => {
  const body = request.body
  fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
    if (readError) {
      response.json({
        status: 'file reader error',
        data: [],
      })
    }

    const readObject = JSON.parse(readData)
    const filteredObject = readObject.filter((o) => o.id !== body.userId)
    fs.writeFile(
      './data/users.json',
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: 'write file error',
            data: [],
          })
        }
        response.json({
          status: 'success',
          data: filteredObject,
        })
      }
    )
  })
})

app.put('/new', (request, response) => {
  fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
    if (readError) {
      response.json({
        status: 'file read error',
        data: [],
      })
    }
    const savedData = JSON.parse(readData)

    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        ;(d.firstname = request.body.firstname),
          (d.lastname = request.body.lastname),
          (d.phoneNumber = request.body.phoneNumber),
          (d.email = request.body.email),
          (d.password = request.body.password),
          (d.checkbox = request.body.checkbox),
          (d.radio = request.body.radio),
          (d.imgURL = request.body.imgURL)
      }
      return d
    })

    fs.writeFile(
      './data/users.json',
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: 'file write error',
            data: [],
          })
        }
        response.json({
          status: 'success',
          data: changedData,
        })
      }
    )
  })
})

app.post('/newProducts', (request, response) => {
  const newUser = {
    id: Date.now(),
    imgURL: request.body.imgURL,
    title: request.body.title,
    subtitle: request.body.subtitle,
    price: request.body.price,
    discount: request.body.discount,
    description1: request.body.description1,
    description2: request.body.description2,
    code: request.body.code,
    hashtag: request.body.hashtag,
    technology: request.body.technology,
    rating: request.body.rating,
  }
  fs.readFile('./data/products.json', 'utf-8', (readError, readData) => {
    if (readError) {
      response.json({
        status: 'file does not exist',
        data: [],
      })
    }
    const dataObject = JSON.parse(readData)
    dataObject.push(newUser)
    fs.writeFile(
      './data/products.json',
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: `Error during file write`,
            data: [],
          })
        }
        response.json({
          status: 'success',
          data: dataObject,
        })
      }
    )
  })
})

app.get('/newProducts', (request, response) => {
  fs.readFile('./data/products.json', 'utf-8', (readError, readData) => {
    // utf-8 n ymr formataar avhig zana
    if (readError) {
      response.json({
        status: 'file does not exist',
        data: [],
      })
    }
    const objectData = JSON.parse(readData)
    console.log(objectData)
    response.json({
      status: 'success',
      data: objectData,
    })
  })
})

app.delete('/newProducts', (request, response) => {
  const body = request.body
  fs.readFile('./data/products.json', 'utf-8', (readError, readData) => {
    if (readError) {
      response.json({
        status: 'file reader error',
        data: [],
      })
    }

    const readObject = JSON.parse(readData)
    const filteredObject = readObject.filter((o) => o.id !== body.userId)
    fs.writeFile(
      './data/products.json',
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: 'write file error',
            data: [],
          })
        }
        response.json({
          status: 'success',
          data: filteredObject,
        })
      }
    )
  })
})

app.put('/newProducts', (request, response) => {
  fs.readFile('./data/products.json', 'utf-8', (readError, readData) => {
    if (readError) {
      response.json({
        status: 'file read error',
        data: [],
      })
    }
    const savedData = JSON.parse(readData)

    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        ;(d.imgURL = request.body.imgURL),
          (d.title = request.body.title),
          (d.subtitle = request.body.subtitle),
          (d.price = request.body.price),
          (d.discount = request.body.discount),
          (d.description1 = request.body.description1),
          (d.description2 = request.body.description2),
          (d.code = request.body.code)
        d.hashtag = request.body.hashtag
        d.technology = request.body.technology
        d.rating = request.body.rating
      }
      return d
    })

    fs.writeFile(
      './data/products.json',
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: 'file write error',
            data: [],
          })
        }
        response.json({
          status: 'success',
          data: changedData,
        })
      }
    )
  })
})

const upload = multer()
app.post('/upload', upload.single('file'), function (request, response) {
  response.json({
    status: 'success',
    data: [],
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

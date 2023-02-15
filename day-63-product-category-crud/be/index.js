console.log('Day-63 Category CRUD')

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const PORT = 8080

const app = express()
app.use(cors())
app.use(express.json())

// API category save
app
  .route('/category')
  .post((request, response) => {
    const body = request.body

    console.log(body)
    const categoryData = fs.readFileSync('./data/categories.json', {
      encoding: 'utf-8',
      flag: 'r',
    })

    const categoryDataObj = JSON.parse(categoryData)

    const newCategory = {
      id: Date.now().toString(),
      name: body.catName,
    }

    categoryDataObj.push(newCategory)

    const writeCategoryData = fs.writeFileSync(
      './data/categories.json',
      JSON.stringify(categoryDataObj)
    )
    if (writeCategoryData) {
      response.json({
        status: 'Write file error',
        data: [],
      })
    } else {
      response.json({
        status: 'success',
        data: [],
      })
    }
  })
  .get((request, response) => {
    const readCategoryData = fs.readFileSync('./data/categories.json', {
      encoding: 'utf-8',
      flag: 'r',
    })

    response.json({
      status: 'success',
      data: [],
    })
  })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

import React from 'react'

const FileUpload = () => {
  const URL = 'http://localhost:8080/fileUpload'
  async function handleFileUpload(e) {
    e.preventDefault()
    // const file = e.target.image.files[0]
    console.log(e.target.image.files[0])
    const data = new FormData() //form dah datag damjuuldag js code
    const files = e.target.image.files
    data.append('image', files[0])

    const options = {
      method: 'POST',
      body: data,
    }

    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    console.log(FETCHED_JSON)
  }

  return (
    <form
      method='post'
      encType='multipart/form-data'
      onSubmit={handleFileUpload}
    >
      <label>
        <input type='file' name='image' />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default FileUpload

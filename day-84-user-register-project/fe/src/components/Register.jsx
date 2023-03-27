import React, { useEffect, useState } from 'react'

const Register = () => {
  const ROLE_URL = 'http://localhost:8080/admin/role/list'
  const REGISTER_URL = 'http://localhost:8080/admin/register'

  const initialFormData = Object.freeze({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    userrole: 0,
    address: '',
  })
  const [roles, setRoles] = useState([])
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    fetchRoles()
  }, [formData])

  const fetchRoles = async () => {
    const FETCHED_DATA = await fetch(ROLE_URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setRoles(FETCHED_JSON.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }
    const FETCHED_DATA = await fetch(REGISTER_URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
    console.log(formData)
  }
  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor='firstname'>
          First Name:{' '}
          <input type='text' name='firstname' onChange={handleChange} />
        </label>
        <label htmlFor='lastname'>
          Last Name:{' '}
          <input type='text' name='lastname' onChange={handleChange} />
        </label>
        <label htmlFor='email'>
          Email:
          <input type='email' name='email' onChange={handleChange} />
        </label>
        <label htmlFor='password'>
          Password:
          <input type='password' name='password' onChange={handleChange} />
        </label>
        <label htmlFor='phone'>
          Phone Number:
          <input type='number' name='phone' onChange={handleChange} />
        </label>
        <label htmlFor=''>
          Roles:
          <select name='userrole' onChange={handleChange}>
            {roles &&
              roles.map((role) => (
                <option id={role._id} value={role._id}>
                  {role.name}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor='address'>
          Address:
          <input type='text' name='address' onChange={handleChange} />
        </label>

        {/* <label htmlFor='userrole'>
          User Role: <input type='text' name='userrole' />
        </label> */}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Register

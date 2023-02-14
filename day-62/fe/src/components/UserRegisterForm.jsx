import React from 'react'
import TextField from '@mui/material/TextField'
import { Grid, Button, InputLabel, Select, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const UserRegisterForm = () => {
  const navigate = useNavigate()
  const URL = 'http://localhost:8080/register'
  const ROLE_URL = 'http://localhost:8080/users/roles'

  const [roles, setRoles] = useState([])
  const [currentRole, setCurrentRole] = useState(0)
  useEffect(() => {
    fetchRoles()
  }, [])

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setRoles(FETCHED_JSON.data)
    console.log('testing roles ' + roles)
  }
  function handleSelectChange(e) {
    console.log('current')
    setCurrentRole(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target.firstname.value)
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
      role: currentRole,
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    console.log(FETCHED_JSON)
    if (FETCHED_JSON) {
      navigate('/users')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id='firstname'
              name='firstname'
              variant='filled'
              size='small'
              label='First Name'
              //   value={}
              //   onChange={}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='lastname'
              name='lastname'
              variant='filled'
              size='small'
              label='Last Name'
              //   value={}
              //   onChange={}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='email'
              name='email'
              variant='filled'
              size='small'
              label='Email'
              //   value={}
              //   onChange={}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='password'
              name='password'
              variant='filled'
              size='small'
              label='Password'
              //   value={}
              //   onChange={}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='confirmpassword'
              name='confirmpassword'
              variant='filled'
              size='small'
              label='Confirm Password'
              //   value={}
              //   onChange={}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='address'
              name='address'
              variant='filled'
              size='small'
              label='Address'
              //   value={}
              //   onChange={}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>User Roles</InputLabel>
            <Select
              id='role-selector'
              value={currentRole}
              label='Roles'
              onChange={handleSelectChange}
            >
              {roles &&
                roles.map((role, index) => {
                  return (
                    <MenuItem key={index} value={role.id}>
                      {role.name}
                    </MenuItem>
                  )
                })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button variant='outline' type='submit'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default UserRegisterForm

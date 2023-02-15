import React from 'react'
import TextField from '@mui/material/TextField'
import { Grid, Button, InputLabel, Select, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
const LoginForm = () => {
  const URL = 'http://localhost:8080/login'

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.email.value)
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
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

    if (FETCHED_JSON.status === 'success') {
      toast.success('Approved!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
      navigate('/users')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
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
            <Button variant='outline' type='submit'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default LoginForm

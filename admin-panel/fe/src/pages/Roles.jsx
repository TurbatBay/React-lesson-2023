import TextField from '@mui/material/TextField'
import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/joy/Stack'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Home from './Home'
import BreadCrumbs from '../components/BreadCrumbs'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Roles({
  isUpdate,
  editUser,
  setIsUpdate,
  currentUser,
  setCurrentUser,
}) {
  const URL = 'http://localhost:8080/roles'

  async function handleSubmit(e) {
    toast.success('User added', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

    e.preventDefault()
    if (!isUpdate) {
      console.log(currentUser)
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      }
      const FETCHED_DATA = await fetch(URL, options) // hervee options bhq bol default oor get method yvuuldag
      const FETCHED_JSON = await FETCHED_DATA.json()
      console.log(FETCHED_JSON)
    } else {
      const putData = {
        id: currentUser.id,
        username: currentUser.username,
      }
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(putData),
      }
      const FETCHED_DATA = await fetch(URL, options) // hervee options bhq bol default oor get method yvuuldag
      const FETCHED_JSON = await FETCHED_DATA.json()
      console.log(FETCHED_JSON.data)

      setIsUpdate(false)
    }
  }

  function handleRoleName(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    })
  }
  function handleRadioAdmin(e) {
    if (e.target.checked) {
      setCurrentUser({
        ...currentUser,
        radio: e.target.value,
      })
    }
  }
  function handleRadioUser(e) {
    if (e.target.checked) {
      setCurrentUser({
        ...currentUser,
        radio: e.target.value,
      })
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Home />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <form onSubmit={handleSubmit}>
          <BreadCrumbs sx={{ flexGrow: 1, p: 30 }} />
          <Stack spacing={2} sx={{}}>
            <Typography variant='h5' sx={{ color: '#9e9e9e' }}>
              User Role
            </Typography>
            <TextField
              value={currentUser.username}
              name='rolename'
              onChange={handleRoleName}
              label='User Name'
            />

            <div>
              <Typography sx={{ color: '#9e9e9e' }}>Role</Typography>
              <RadioGroup row>
                <FormControlLabel
                  onChange={handleRadioAdmin}
                  value='Admin'
                  control={<Radio />}
                  label='Admin'
                />
                <FormControlLabel
                  onChange={handleRadioUser}
                  value='User'
                  control={<Radio />}
                  label='User'
                />
              </RadioGroup>
            </div>

            <Stack direction='row' spacing={2}>
              {isUpdate ? (
                <Button variant='contained' type='submit'>
                  UPDATE
                </Button>
              ) : (
                <Button variant='contained' type='submit'>
                  SAVE
                </Button>
              )}

              <Button variant='outlined'>RESET</Button>
              <Button variant='outlined'>CANCEL</Button>
            </Stack>
          </Stack>
        </form>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </Box>
    </Box>
  )
}

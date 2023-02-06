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
export default function NewUser({
  isUpdate,
  editUser,
  setIsUpdate,
  currentUser,
  setCurrentUser,
}) {
  const URL = 'http://localhost:8080/new'

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
        firstname: currentUser.firstname,
        lastname: currentUser.lastname,
        phoneNumber: currentUser.phoneNumber,
        email: currentUser.email,
        password: currentUser.password,
        checkbox: currentUser.checkbox,
        radio: currentUser.radio,
        imgURL: currentUser.imgURL,
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

  function handleFirstName(e) {
    setCurrentUser({
      ...currentUser,
      firstname: e.target.value,
    })
  }

  function handleLastName(e) {
    setCurrentUser({
      ...currentUser,
      lastname: e.target.value,
    })
  }
  function handlePhoneNumber(e) {
    setCurrentUser({
      ...currentUser,
      phoneNumber: e.target.value,
    })
  }
  function handleEmail(e) {
    setCurrentUser({
      ...currentUser,
      email: e.target.value,
    })
  }
  function handlePassword(e) {
    setCurrentUser({
      ...currentUser,
      password: e.target.value,
    })
  }
  function handleCheckbox(e) {
    setCurrentUser({
      ...currentUser,
      checkbox: e.target.checked,
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
  function handleUpload(e) {
    setCurrentUser({
      ...currentUser,
      imgURL: e.target.value,
    })
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
              Add Users
            </Typography>
            <TextField
              value={currentUser.firstname}
              name='firstname'
              onChange={handleFirstName}
              label='First Name'
            />
            <TextField
              value={currentUser.lastname}
              name='lastname'
              label='Last Name'
              onChange={handleLastName}
            />
            <TextField
              label='Phone Number'
              value={currentUser.phoneNumber}
              name='phoneNumber'
              onChange={handlePhoneNumber}
            />
            <TextField
              label='Email'
              value={currentUser.email}
              name='email'
              onChange={handleEmail}
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

            <Typography sx={{ color: '#9e9e9e' }}>Profile image</Typography>
            <Stack direction='row' alignItems='center' spacing={2}>
              <Button variant='contained' component='label'>
                Upload
                <input
                  hidden
                  accept='image/*'
                  multiple
                  type='file'
                  onChange={handleUpload}
                />
              </Button>
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='label'
              >
                <input hidden accept='image/*' type='file' />
                <PhotoCamera />
              </IconButton>
            </Stack>
            <TextField
              value={currentUser.password}
              name='password'
              label='Password'
              onChange={handlePassword}
            />
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

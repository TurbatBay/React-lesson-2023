import { Routes, Route } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import UserRegisterForm from './components/UserRegisterForm'
import Users from './components/Users'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  return (
    <div className='App'>
      <h1>Day-62 User Login CRUD</h1>
      <h5>User Register Form</h5>

      <Routes>
        <Route path='/register' element={<UserRegisterForm />} />
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
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
    </div>
  )
}

export default App

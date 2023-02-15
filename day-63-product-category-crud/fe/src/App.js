import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoryForm from './components/CategoryForm'
import Categories from './components/Categories'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/category/add' element={<CategoryForm />} />
        <Route path='/category/list' element={<Categories />} />
        <Route path='/category/edit/:id' element={<null />} />
        <Route path='/category/delete/:id' element={<null />} />
      </Routes>
    </div>
  )
}

export default App

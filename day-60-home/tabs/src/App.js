import Products from './globals/Products'
import Users from './globals/Users'
import React from 'react'
import { Admin, Resource } from 'react-admin'

function App() {
  return (
    <div className='App'>
      <Admin>
        <Resource name='posts' />
      </Admin>
    </div>
  )
}

export default App

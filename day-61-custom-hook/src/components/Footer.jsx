import React from 'react'

const Footer = () => {
  function handleSelectChange(e) {
    e.preventDefault()
    SVGTextPathElement(e.target.value)
  }
  return (
    <div className='footer-container'>
      <p>Footer</p>
      <select name='theme' onChange={handleSelectChange} defaultValue='theme'>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='yellow'>Yellow</option>
        <option value='blue'>Blue</option>
      </select>
    </div>
  )
}

export default Footer

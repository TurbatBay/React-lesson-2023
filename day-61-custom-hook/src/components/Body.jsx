import React from 'react'
import { useState, useEffect } from 'react'
import { useFetch } from '../context/UseFetch'
import { useTheme } from '../context/useTheme'
const Body = () => {
  const URL = 'https://dog.ceo/api/breeds/image/random'
  const { theme, setTheme } = useTheme()
  const { response, error } = useFetch(URL, {})
  console.log(response)
  const [styleClass, setStyleClass] = useState()

  useEffect(() => {
    setStyleClass(`${theme} middle-container`)
  }, [theme])

  return (
    <div className={styleClass}>
      <p>Body</p>
      {response.message && (
        <img src={response.message} alt='Dog' width='550px' />
      )}
    </div>
  )
}

export default Body

// import { createContext, Provider, useEffect, useState } from 'react'

// const RestaurantContext = createContext(null)

// const RestaurantContextProvider = ({ children }) => {
//   const ALL_RESTAURANT_URL = 'http://localhost:8080/restaurant/restaurants'

//   const [restaurants, setRestaurants] = useState([])
//   async function fetchRestaurants(url) {
//     const FETCHED_DATA = await fetch(ALL_RESTAURANT_URL)
//     const FETCHED_JSON = await FETCHED_DATA.json()
//     setRestaurants(FETCHED_JSON.data)
//   }
//   useEffect(() => {
//     fetchRestaurants.apply(ALL_RESTAURANT_URL)
//   }, [restaurants])
//   return (
//     <RestaurantContext.Provider value={null}>
//       {children}
//     </RestaurantContext.Provider>
//   )
// }

// export { RestaurantContext, RestaurantContextProvider }

import { createContext, Provider, useEffect, useState } from 'react'

const RestaurantContext = createContext(null)

const RestaurantContextProvider = ({ children }) => {
  const ALL_RESTAURANT_URL = 'http://localhost:8080/restaurant/restaurants'

  const [restaurants, setRestaurants] = useState([])

  async function fetchRestaurants(url) {
    const FETCHED_DATA = await fetch(url)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setRestaurants(FETCHED_JSON.data)
  }

  useEffect(() => {
    fetchRestaurants(ALL_RESTAURANT_URL)
  }, [])

  return (
    <RestaurantContext.Provider value={restaurants}>
      {children}
    </RestaurantContext.Provider>
  )
}

export { RestaurantContext, RestaurantContextProvider }

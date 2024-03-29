import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useContext } from 'react'
import { RestaurantContext } from '../context/restaurants.context'

export default function Map() {
  const restaurants = useContext(RestaurantContext)

  return (
    <div>
      <h1>My map</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={[
              restaurant.address.coord[1],
              restaurant.address.coord[0],
            ]}
          >
            <Popup>{restaurant.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

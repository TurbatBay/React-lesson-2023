import React, { useEffect } from 'react'
import { useState } from 'react'
const URL = 'http://localhost:8080/users'
const Users = () => {
  const [users, setUsers] = useState([])

  async function fetchUsers() {
    const FETCHED_DATA = await fetch(URL)
    const FETCHED_JSON = await FETCHED_DATA.json()

    console.log(FETCHED_JSON)
    setUsers(FETCHED_JSON.data)
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.role.name}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Users

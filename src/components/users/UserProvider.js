import React from "react"
import { useState } from "react"

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(r => r.json())
        .then(setUsers)
    }

    const getUserById = id => {
        return fetch(`http://localhost:8088/users/${id}`)
        .then(r => r.json())
        .then(setUsers)
    }

    return (
        <UserContext.Provider value={
            {
                users, getUsers, getUserById
            }
        }>
            {props.children}
        </UserContext.Provider>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import { User } from "./User"

export const UserList = props => {
    const {users, getUsers} = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="user__list">
            {
                users.map(user => {
                    return <User user={user} />
                })
            }
        </div>
    )
}
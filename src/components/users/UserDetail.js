import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import { HumanDate} from "../utils/HumanDate"

export const UserDetail = props => {
    const { getUserById } = useContext(UserContext)
    const [user, setUser] = useState({})

    useEffect(() => {
        getUserById(parseInt(props.match.params.userId))
        .then(u => setUser(u))
    }, [])

    return (
        <div className="user__details">
            <h1 className="user__name">
                {user.first_name} {user.last_name}
            </h1>
            <div className="user__username">{user.username}</div>
            <div className="user__email">{user.email}</div>
            <div className="user__date"><HumanDate date={(Date(user.created_on))} /></div>
            {user.account_type&&<div className="user__accountType">{user.account_type.label}</div>}

        </div>
    )
}


import React from "react"
import { Link } from "react-router-dom"

export const User = ({user}) => (
    <div className="user">
        <Link to={{pathname: `/users/${user.id}`}}>{user.first_name} {user.last_name} </Link>
        <div className="user__username">{user.username}</div>
        <div className="user__accountType">{user.account_type.label}</div>
    </div>
)


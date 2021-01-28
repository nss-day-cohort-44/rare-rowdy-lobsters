import React from "react"
import { Link } from "react-router-dom"

export const Post = ({post}) => (
    <div className="postCard">
        <Link to={{pathname: `/posts/${post.id}`}}>Title: {post.title}</Link>
        <p>Author: {post.user_id}</p>
        <p>Category: {post.category_id}</p>
    </div>
)
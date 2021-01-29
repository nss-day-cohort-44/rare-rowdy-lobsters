import React, { useState } from "react"
import { Link } from "react-router-dom"
import { TagPost } from "../tags/TagPost"

export const Post = ({post}) => {

    return (
    <>
    <div className="postCard">
        <Link to={{pathname: `/posts/${post.id}`}}>Title: {post.title}</Link>
        <p>Author: {post.user_id}</p>
        <p>Category: {post.category_id}</p>
    </div>
    </>
    )
}
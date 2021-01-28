import React, { useState } from "react"
import { Link } from "react-router-dom"
import { TagPost } from "../tags/TagPost"

export const Post = ({post}) => {

    const [tagPost, setTagPost] = useState(0)

    return (
    <>
    <div className="postCard">
        <Link to={{pathname: `/posts/${post.id}`}}>Title: {post.title}</Link>
        <p>Author: {post.user_id}</p>
        <p>Category: {post.category_id}</p>
        <button onClick={() => {
            setTagPost(post.id)
        }}>Add Tag</button>
        {tagPost > 0 &&
        <TagPost post={post}/>
        }
    </div>
    </>
    )
}
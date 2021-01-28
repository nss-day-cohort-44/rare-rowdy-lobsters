import React, { useContext, useEffect } from "react"
import { Post } from "./Post"
import { PostContext } from "./PostProvider"

export const PostList = (props) => {
    const {posts, getPosts} = useContext(PostContext)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
        {
            posts.map(post => {
                
                if (parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))) {
                    console.table(posts)
                    return <Post post={post} />
                }
                // else
                // return <h1>Boo!</h1>
            })
        }
        </>
    )
}
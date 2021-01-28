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
                if (props.location.pathname === "/posts" ) {
                    return <Post post={post} />
                }
                
                else if (parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))) {
                    return <Post post={post} />
                }
                // else
                // return <h1>Boo!</h1>
            })
        }
        </>
    )
}
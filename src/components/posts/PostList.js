import React, { useContext, useEffect } from "react"
import { PostProvider } from "./PostProvider"

export const PostList = (props) => {
    const {posts, getPosts} = useContext(PostProvider)

    useEffect(() => {
        getPosts()
    }, [])

    
}
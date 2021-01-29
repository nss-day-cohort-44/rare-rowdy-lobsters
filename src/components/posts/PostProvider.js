import React from "react"
import { useState } from "react"

export const PostContext = React.createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
        .then(r => r.json())
        .then(setPosts)
    }

    const getPostById = id => {
        return fetch(`http://localhost:8088/posts/${id}`)
            .then(res => res.json())
    }

    const deletePost = id => {
        return fetch(`http://localhost:8088/posts/${id}`, {
            method: "DELETE"
        })
        .then(getPosts)
    }

    const addPost = newPost => {
        return fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
            .then(newPost)
    }

    return (
        <PostContext.Provider value={{posts, setPosts, getPosts, addPost, deletePost, getPostById}}>
            {props.children}
        </PostContext.Provider>
    )
}
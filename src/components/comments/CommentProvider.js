import React from "react"
import { useState } from "react"

export const CommentContext = React.createContext()

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])

    const getComments = () => {
        return fetch("http://localhost:8088/comments")
        .then(r => r.json())
        .then(setComments)
    }

    const addComment = comment => {
        return fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(getComments)
    }
    
    const deleteComment = id => {
        return fetch(`http://localhost:8088/comments/${id}`, {
            method: "DELETE"
        })
        .then(getComments)
    }

    return (
        <CommentContext.Provider value={{comments, setComments, getComments, addComment, deleteComment}}>
            {props.children}
        </CommentContext.Provider>
    )
}
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

    const getCommentById = id => {
        return fetch(`http://localhost:8088/comments/${id}`)
            .then(res => res.json())
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

    const updateComment = newComment => {
        return fetch(`http://localhost:8088/comments/${newComment.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
        .then(getComments)
    }

    return (
        <CommentContext.Provider value={{comments, setComments, getComments, addComment, getCommentById, updateComment, deleteComment}}>
            {props.children}
        </CommentContext.Provider>
    )
}
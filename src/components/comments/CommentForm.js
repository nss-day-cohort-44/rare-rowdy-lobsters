import React, { useContext, useEffect, useRef, useState } from "react"
import { CommentContext } from "./CommentProvider"

export const CommentForm = props => {
    const { comments, getComments, addComment, getCommentById, updateComment } = useContext(CommentContext)
    const [comment, setComment] = useState({ content: "" })

    const editMode = props.match.params.hasOwnProperty("commentId")  // true or false

    const handleControlledInputChange = (event) => {

        const newComment = Object.assign({}, comment)

        newComment[event.target.name] = event.target.value
        setComment(newComment)
    }

    const getCommentInEditMode = () => {
        if (editMode) {
            const selectedComment = props.location.state.chosenComment || {}
            setComment(selectedComment)
        }
    }

    useEffect(() => {
        getCommentInEditMode()
    }, [comments])
    useEffect(() => {
        getComments()
    }, [])

    const CreateComment = () => {
        const author_id = parseInt(localStorage.getItem("rare_user_id"))

        if (editMode) {
            updateComment({
                id: comment.id,
                post_id: comment.post_id,
                author_id: comment.author_id,
                content: comment.content,
                created_on: comment.created_on
            })
            .then(() => props.history.goBack())
        } else {
            addComment({
                post_id: parseInt(props.location.state.chosenPost.id),
                author_id: parseInt(localStorage.getItem("rare_user_id")),
                content: comment.content,
                created_on: Date.now()
            })
            .then(() => props.history.goBack())
        }
    }

    return (
        <form className="commentForm">
            <h1>Add comment</h1>
            <fieldset>
                <div className="form-group">
                    <textarea defaultValue={comment.content} name="content" onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <div className="btn-div">
                <button type="submit"
                    onClick={event => {
                        event.preventDefault()
                        CreateComment()
                    }}>{editMode ? "Save edit" : "Add comment"}</button>
            </div>
            <div className="btn-div">
                <button type="submit"
                    onClick={event => {
                        event.preventDefault()
                        props.history.goBack()
                    }}>Cancel</button>
            </div>
        </form>
    )
}
import React, { useContext, useEffect, useRef } from "react"
import { CommentContext } from "./CommentProvider"

export const CommentForm = props => {
    const {comments, getComments, addComment} = useContext(CommentContext)
    const comment = useRef("")
    useEffect(() => {
        getComments()
    }, [])

    const CreateComment = () => {
        addComment({
            post_id: parseInt(props.location.state.chosenPost.id),
            author_id: parseInt(localStorage.getItem("rare_user_id")),
            content: comment.current.value,
            created_on: Date.now()
        })
    }

    return (
        <form className="commentForm">
            <h1>Add comment</h1>
            <fieldset>
                <div className="form-group">
                    <textarea  ref={comment} />
                </div>
            </fieldset>
            <div className="btn-div">
                <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    CreateComment()
                    props.history.goBack()
                }}>Add comment</button>
            </div>
        </form>
    )
}
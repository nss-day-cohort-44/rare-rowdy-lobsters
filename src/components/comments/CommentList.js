import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect, useState } from "react"
import { Comment } from "./Comment"
import { CommentContext } from "./CommentProvider"

export const CommentList = props => {
    const {comments, getComments, deleteComment} = useContext(CommentContext)
    const [commentDeleted, setCommentDeleted] = useState()
    const chosenPost = props.location.state.chosenPost


    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className="commentList">
            <h1>Hi</h1>
            {
                comments.map(comment => {
                    if (parseInt(comment.post_id) === parseInt(chosenPost.id))
                    return (
                    <>
                    <Comment comment={comment} post={chosenPost} />
                    <FontAwesomeIcon icon={faTrashAlt} onClick={() => {
                        deleteComment(comment.id)
                        .then(() => setCommentDeleted(comment.id))
                    }}/>
                    </>
                    )
                })
            }
            <button onClick={() => props.history.goBack()}>View post</button>
        </div>
    )
}
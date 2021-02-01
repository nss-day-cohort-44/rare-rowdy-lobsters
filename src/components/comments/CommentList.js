import React, { useContext, useEffect } from "react"
import { Comment } from "./Comment"
import { CommentContext } from "./CommentProvider"

export const CommentList = props => {
    const {comments, getComments} = useContext(CommentContext)
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
                    return <Comment comment={comment} post={chosenPost} />
                })
            }
            <button onClick={() => props.history.goBack()}>View post</button>
        </div>
    )
}
import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentProvider"

export const CommentList = props => {
    const {comments, getComments} = useContext(CommentContext)
    const chosenPost = props.location.state.chosenPost

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className="commentList">
            {
                comments.map(comment => {
                    return <Comment comment={comment} post={chosenPost} />
                })
            }
        </div>
    )
}
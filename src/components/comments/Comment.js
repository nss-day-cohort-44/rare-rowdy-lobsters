import React from "react"
import { HumanDate } from "../utils/HumanDate"

export const Comment = ({comment, post, props}) => (
    <div className="comment">
        <p>{comment.content}</p>
        <p>Author: {comment.author_id}</p>
        <HumanDate date= {(Date(comment.created_on))} />
    </div>
)
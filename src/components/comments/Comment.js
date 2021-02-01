import React from "react"
import { Link } from "react-router-dom"
import { HumanDate } from "../utils/HumanDate"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export const Comment = ({comment, post, props}) => (
    <div className="comment">
        <p>{comment.content}</p>
        <p>Author: {comment.author_id}</p>
        <HumanDate date= {(Date(comment.created_on))} />
        {parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))
                    ? <Link to={{pathname: `/addComment/${comment.id}`, state: {chosenComment: comment}}}><FontAwesomeIcon icon={faEdit}  /> </Link>
                    : ""}
    </div>
)
import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentProvider"

export const CommentList = props => {
    const {comments, getComments} = useContext(CommentContext)

    useEffect(() => {
        getComments()
    }, [])
}
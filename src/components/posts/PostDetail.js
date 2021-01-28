import React, {useContext, useEffect, useState} from "react"
import { PostContext } from "./PostProvider"

export const PostDetail = props => {
    const { getPostById, deletePost } = useContext(PostContext)
}
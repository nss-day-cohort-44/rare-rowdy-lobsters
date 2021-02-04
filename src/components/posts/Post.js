import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { TagPost } from "../tags/TagPost"
import { PostContext } from "./PostProvider"
import "./Post.css"



export const Post = ({ post }) => {
    const userType = parseInt(localStorage.getItem("userType"))
    const { updatePost } = useContext(PostContext)


    function ShowApprovalButton() {
        if (post.approved === 0 && userType === 1) {
            return (
                <button onClick={() => ApprovePost()}>
                    approve?
                </button>
            )
        }
        else {
            return (
                <></>
            )
        }
    }

    function ApprovePost() {
        const newPost = {
            id: post.id,
            user_id: post.user_id,
            category_id: post.category_id,
            title: post.title,
            publication_date: Date.now(),
            content: post.content,
            approved: 1
        }
            updatePost(newPost)
    }

    return (
        <>
            <div className="postCard">
                <Link to={{ pathname: `/posts/${post.id}`, state: { chosenPost: post } }}>Title: {post.title}</Link>
                <p>Author: {post.user.first_name} {post.user.last_name}</p>
                <p>Category: {post.category.label}</p>
                <ShowApprovalButton ></ShowApprovalButton>
            </div>
        </>
    )
}
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { TagPost } from "../tags/TagPost"

export const Post = ({post}) => {
    const userType=parseInt(localStorage.getItem("userType"))
    
    function ShowApprovalButton(){
        if (post.approved===0 && userType===1 ){
            console.log("this should hit twice")
            return(
            <button>
                approve?
            </button>
            )
        }
        else{
            return(
                <></>
            )
        }
        }

    
    
    return (
    <>
    <div className="postCard">
        <Link to={{pathname: `/posts/${post.id}`, state: {chosenPost: post}}}>Title: {post.title}</Link>
        <p>Author: {post.user.first_name} {post.user.last_name}</p>
        <p>Category: {post.category.label}</p>
        <ShowApprovalButton></ShowApprovalButton>
    </div>
    </>
    )
}
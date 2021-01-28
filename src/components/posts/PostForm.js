import React, { useContext, useState, useEffect } from "react"
import {PostContext} from "./PostProvider"

export const PostForm=(props)=>{

    const handleStateChange=()=>{
        console.log("you are changing this")
    }

    const constructNewPost=()=>{
        console.log("hi")
    }
    return(
        <>
            <p>New Post</p>
            <form className="postForm">
                <fieldset>
                    <label> Title</label>
                    <input type="text" onChange={handleStateChange}></input>
                </fieldset>
            </form>
            <button type="submit"
                onClick={event=>{
                    event.preventDefault()
                    constructNewPost()
                }}> submit

            </button>
        </>
    )
}
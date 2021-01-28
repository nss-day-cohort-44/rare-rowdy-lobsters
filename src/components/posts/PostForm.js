import React, { useContext, useState, useEffect } from "react"
import {PostContext} from "./PostProvider"
import {CategoryContext} from "../categories/CategoryProvider"

export const PostForm=(props)=>{
    const { categories, getCategories } = useContext(CategoryContext)
    
    const {addPosts}=useContext(PostContext)

    useEffect(() => {
		getCategories()
	}, [])

    const [newPost, setNewPost]=useState()
    const [title, setTitle]= useState()
    const [content, setContent]=useState()
    const [category, setCategory]=useState()

    const TitleStateChange=(event)=>{
        setTitle(event.target.value)
    }
    const ContentStateChange=(event)=>{
        setContent(event.target.value)
    }
    const CategoryStateChange=(event)=>{
        setCategory(event.target.value)
    }


    const constructNewPost=()=>{
        console.log(newPost)
    }

    

    return(
        <>
            <p>New Post</p>
            <form className="postForm">

                <fieldset>
                    <label> Title</label>
                    <input type="text" name="title" onChange={TitleStateChange}></input>
                </fieldset>

                <fieldset>
                    <label> Content</label>
                    <input type="text" name="content" onChange={ContentStateChange}></input>
                </fieldset>

                <fieldset>
                    <label> Category</label>
                    <select name="content" onChange={CategoryStateChange}>
                    <option value="0">Select Category</option>
                                {categories.map(e => (
                                    <option key={e.id} value={e.id}>
                                        {e.label}
                                    </option>
                                ))}
                    </select>
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
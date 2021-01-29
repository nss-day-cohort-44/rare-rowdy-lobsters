import React, { useContext, useState, useEffect } from "react"
import {PostContext} from "./PostProvider"
import {CategoryContext} from "../categories/CategoryProvider"

export const PostForm=(props)=>{
	const {categories, getCategories} = useContext(CategoryContext)
    const {addPost, editPost}=useContext(PostContext)
    const {post, setPost}=useState({})

    useEffect(() => {
		getCategories()
	}, [])
    // set the state for the items we need from the form
    const [title, setTitle]= useState()
    const [content, setContent]=useState()
    const [category, setCategory]=useState()

    const editMode = props.match.params.hasOwnProperty("id")  // true or false
    console.log(editMode)

    const TitleStateChange=(event)=>{
        setTitle(event.target.value)
    }
    const ContentStateChange=(event)=>{
        setContent(event.target.value)
    }
    const CategoryStateChange=(event)=>{
        setCategory(event.target.value)
    }

    const getPostInEditMode=()=>{
        if(editMode){
            const postId=parseInt(props.match.params.postId)
            const selectedPost=post.find(p=>p.id===postId)
            setPost(selectedPost)
        }
    }

    // making the new object on submit
    const constructNewPost=()=>{
        const user_id=parseInt(localStorage.getItem("rare_user_id"))
        const newPost={
            user_id:user_id,
            category_id: category,
            title: title,
            publication_date:Date.now(),
            content:content, 
        }
        addPost(newPost).then(props.history.push("/"))
    }

    return(
        <>
            <p>New Post</p>
            <form className="postForm">

                <fieldset>
                    <label> Title</label>
                    <input type="text" name="title"  onChange={TitleStateChange}></input>
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
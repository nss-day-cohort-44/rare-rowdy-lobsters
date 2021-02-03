import React, { useContext, useState, useEffect } from "react"
import {PostContext} from "./PostProvider"
import {CategoryContext} from "../categories/CategoryProvider"

export const PostForm=(props)=>{
	const {categories, getCategories} = useContext(CategoryContext)
    const {posts, getPosts, addPost, updatePost}=useContext(PostContext)
    const [post, setPost]=useState({})
    
    useEffect(() => {
        getCategories()
        .then(getPosts)
        
	}, [])
    // set the state for the items we need from the form
    const [title, setTitle]= useState()
    const [content, setContent]=useState()
    const [category, setCategory]=useState()

    const editMode = props.match.params.hasOwnProperty("postId")  // true or false

    const handleControlledInputChange = (event) => {
       
        const newPost = Object.assign({}, post)  
               
        newPost[event.target.name] = event.target.value  
        setPost(newPost)                                 
    }

    useEffect(()=>{
        getPostInEditMode()
    },[posts])

    const getPostInEditMode=()=>{
        if(editMode){
            const postId=parseInt(props.match.params.postId)
            const selectedPost=posts.find(p=>p.id===postId)
            setPost(selectedPost)
        }
    }

    // making the new object on submit
    const constructNewPost=()=>{
        const user_id=parseInt(localStorage.getItem("rare_user_id"))
        
        if (editMode){
            const newPost={
                id: post.id,
                user_id:user_id,
                category_id: post.category_id,
                title: post.title,
                publication_date:Date.now(),
                content:post.content, 
            }
            updatePost(newPost).then(props.history.push("/"))
        }
        else{
        const newPost={
            user_id:user_id,
            category_id: post.category_id,
            title: post.title,
            publication_date:Date.now(),
            content: post.content, 
        }
        addPost(newPost).then(props.history.push("/"))
        }
    }

    return(
        <>
            <p>New Post</p>
            <form className="postForm">

                <fieldset>
                    <label> Title</label>
                    {post&&<input type="text" name="title" defaultValue={post.title}  onChange={handleControlledInputChange}></input>}
                </fieldset>

                <fieldset>
                    <label> Content</label>
                    {post&&<input type="text" name="content" defaultValue={post.content} onChange={handleControlledInputChange}></input>}
                </fieldset>

                <fieldset>
                    <label> Category</label>
                    {post&&<select name="category_id" defaultValue={post.category_id} onChange={handleControlledInputChange}>
                    <option value="0">Select Category</option>
                                {categories.map(e => (
                                    <option key={e.id} value={e.id}>
                                        {e.label}
                                    </option>
                                ))}
                    </select>}
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
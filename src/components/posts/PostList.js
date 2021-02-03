import React, { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../categories/CategoryProvider"
import { Post } from "./Post"
import { PostContext } from "./PostProvider"
import { PostSearch } from "./PostSearch"

export const PostList = (props) => {
    const { posts, getPosts, searchTerms } = useContext(PostContext)
    const { categories, getCategories } = useContext(CategoryContext)
    const [filteredPosts, setFiltered] = useState([])

    const changePosts = event => {
        if (event.target.value !== "0") {

            const newPosts = []
            posts.forEach(post => {
                if (parseInt(post.category_id) === parseInt(event.target.value)) {
                    newPosts.push(post)
                }
                setFiltered(newPosts)
            })
        }
        else {
            setFiltered(posts)
        }
    }

    useEffect(() => {
        setFiltered(posts)
    }, [posts])
    useEffect(() => {
        getPosts().then(getCategories)
    }, [])

    useEffect(() => {
        const matchingPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(matchingPosts)
    }, [searchTerms])

    const reversedList = [...filteredPosts].reverse()
    return (
        <>
            <button onClick={() => props.history.push("/createPost")}>
                Add Post
            </button>
            <PostSearch />
            <select defaultValue="" onChange={changePosts}>
                <option value="0">Filter by category</option>
                {
                    categories.map(cat => {
                        return <option value={`${cat.id}`}>{cat.label}</option>
                    })
                }

            </select>
            {

                reversedList.map(post => {
                    if (props.location.pathname === "/posts") {
                        return <Post post={post} />
                    }

                    else if (parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))) {
                        return <Post post={post} />
                    }
                })
            }
        </>
    )
}

//second half of code showing nonfiltered results in reverse order 
//need to make this only work for all posts?
//first half of code showing filtered posts but wrong order and without logic for single posts
{/* <div>
            {
                filteredPosts.map(post => <Post key={post.id} post={post} />)
            }
        </div> */}
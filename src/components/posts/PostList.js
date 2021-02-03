import React, { useContext, useEffect, useState } from "react"
import { Post } from "./Post"
import { PostContext } from "./PostProvider"
import { PostSearch } from "./PostSearch"

export const PostList = (props) => {
    const {posts, getPosts, searchTerms} = useContext(PostContext)

    const [filteredPosts, setFiltered] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        const matchingPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(matchingPosts)
    }, [searchTerms])


    useEffect(() => {
        setFiltered(posts)
    }, [posts])

    const reversedList = [...filteredPosts].reverse()
    return (
        <>
        <button onClick={() => props.history.push("/createPost")}>
                Add Post
            </button>

            <PostSearch />
        
        


        {
            
            reversedList.map(post => {
                if (props.location.pathname === "/posts" ) {
                    return <Post post={post} />
                }
                
                else if (parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))) {
                    return <Post post={post} />
                }
                // else
                // return <h1>Boo!</h1>
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
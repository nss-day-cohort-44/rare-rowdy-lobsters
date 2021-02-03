import React, { useContext, useEffect } from "react"
import { Post } from "./Post"
import { PostContext } from "./PostProvider"

export const PostList = (props) => {
    const {posts, getPosts} = useContext(PostContext)

    useEffect(() => {
        getPosts()
    }, [])
    const userType=parseInt(localStorage.getItem("userType"))
    

    const reversedList = [...posts].reverse()
    return (
        <>
        <button onClick={() => props.history.push("/createPost")}>
                Add Post
            </button>
        {
            
            reversedList.map(post => {
                if (props.location.pathname === "/posts" ) {
                    if (userType===1){
                        return <Post post={post} />

                    }
                    else if(post.approved===1){
                        return <Post post={post} />
                    }
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
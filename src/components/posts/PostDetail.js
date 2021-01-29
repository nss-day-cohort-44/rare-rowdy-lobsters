import React, {useContext, useEffect, useState} from "react"
import { PostContext } from "./PostProvider"

export const PostDetail = props => {
    const { getPostById, deletePost } = useContext(PostContext)

    const [post, setPost] = useState({})

    useEffect(() => {
        getPostById(props.match.params.postId)
            .then(post => setPost(post))
    }, [])

    return (
        <>
            <section className="post">
                <h3 className="post__title">{post.title}</h3>
                <div className="post_date">{post.publication_date}</div>
                {post.image_url 
                    ? <img src={`${post.image_url}`}/>  
                    :""}
            </section>
        </>
    )
}


// p.id,
// 			p.user_id,
// 			p.category_id,
// 			p.title,
// 			p.publication_date,
// 			p.image_url,
// 			p.content,
// 			p.approved,
// 			u.first_name,
// 			u.last_name

// Post Details include:

// Title
// Header image (if exists)
// Content
// Publication date (MM/DD/YYYY)
// Author's Display Name
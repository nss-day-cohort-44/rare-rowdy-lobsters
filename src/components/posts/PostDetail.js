import React, {useContext, useEffect, useState} from "react"
import { PostContext } from "./PostProvider"

export const PostDetail = props => {
    const { getPostById, deletePost } = useContext(PostContext)

    const [post, setPost] = useState({})

    useEffect(() => {
        console.log(post);
        getPostById(props.match.params.postId)
            .then(post => setPost(post))
    }, [])

    return (
        <>
            <section className="post">
                <h3 className="post__title">{post.title}</h3>
                <div className="post__date">{post.publication_date}</div>
                <div className="post__image">
                {post.image_url 
                ? <img src={`${post.image_url}`}/>  
                :""}
                </div>
                <div className="post__content">{post.content}</div>
                {post.user
                ? <div className="post__author">Author: {post.user.first_name} {post.user.last_name}</div>
                : console.log('no')}
                {/* reaction count */}
                
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
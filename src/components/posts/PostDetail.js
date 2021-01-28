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
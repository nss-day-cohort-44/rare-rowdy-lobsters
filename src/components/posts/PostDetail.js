import React, {useContext, useEffect, useState} from "react"
import { PostContext } from "./PostProvider"
import { HumanDate } from "../utils/HumanDate"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCog, faTags, faTag } from '@fortawesome/free-solid-svg-icons'
import { TagPost } from "../tags/TagPost"

export const PostDetail = props => {
    const { getPostById, deletePost } = useContext(PostContext)

    const [post, setPost] = useState({})
    const [date, setDate] = useState({})
    const [tagPost, setTagPost] = useState()

    useEffect(() => {
        getPostById(props.match.params.postId)
            .then(post => setPost(post))
    }, [])



    return (
        <>
            <section className="post">
                <h3 className="post__title">{post.title}</h3>
                {post.user
                ? <div className="post__date"><HumanDate date={(Date(post.publication_date))} /></div>
                : ""}
                <div className="post__image">
                {post.image_url 
                ? <img src={`${post.image_url}`}/>  
                :""}
                </div>
                <div className="post__content">{post.content}</div>
                {post.user
                ? <div className="post__author">Author: {post.user.first_name} {post.user.last_name}</div>
                : ""}
                {/* reaction count */}
                <FontAwesomeIcon onClick={() => props.history.push(`/createPost/${post.id}`)} icon={faCog} />
                <FontAwesomeIcon icon={faTrashAlt} />
                <FontAwesomeIcon icon={faTags} onClick={() => {
                    tagPost ? setTagPost(false) : setTagPost(post.id)
                }}/>
                {tagPost && <TagPost post={post}/>
        }
            </section>
        </>
    )
}






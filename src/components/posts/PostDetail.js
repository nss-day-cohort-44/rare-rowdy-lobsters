import React, {useContext, useEffect, useState} from "react"
import { PostContext } from "./PostProvider"
import { HumanDate } from "../utils/HumanDate"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCog, faTags, faTag } from '@fortawesome/free-solid-svg-icons'
import { TagPost } from "../tags/TagPost"
import {Button, Modal} from 'react-bootstrap'

export const PostDetail = props => {
    const { getPostById, deletePost } = useContext(PostContext)

    const [post, setPost] = useState({})
    const [tagPost, setTagPost] = useState()

    useEffect(() => {
        getPostById(props.match.params.postId)
            .then(post => setPost(post))
    }, [])

    // modal
    function DeleteConfModal() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
        <>

            {parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))
                    ?<FontAwesomeIcon icon={faTrashAlt} onClick={handleShow} /> 
                    : ""}

            <Modal
                show={show}
                onHide={handleClose}
            >
            <Modal.Header closeButton>
                <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this post?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" 
                    onClick={()=>deletePost(post.id).then(props.history.push("/"))}>
                    Yes</Button>
            </Modal.Footer>
            </Modal>
        </>
        );
    }


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
                <FontAwesomeIcon icon={faCog} />
                
                <DeleteConfModal />

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



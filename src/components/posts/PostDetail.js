import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import { HumanDate } from "../utils/HumanDate"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCog, faComment, faTags } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { TagPost } from "../tags/TagPost"
import { Button, Modal } from 'react-bootstrap'
import { TagContext } from "../tags/TagProvider"
import 'bootstrap/dist/css/bootstrap.min.css';

export const PostDetail = props => {
    const { posts, getPosts, getPostById, deletePost } = useContext(PostContext)
    const { deletePostTag } = useContext(TagContext)

    const [post, setPost] = useState({})
    const [tagPost, setTagPost] = useState()

    useEffect(() => {
        getPostById(props.match.params.postId)
            .then(post => setPost(post))
    }, [])

    useEffect(() => {
        getPostById(props.match.params.postId)
            .then(post => setPost(post))
    }, [posts])

    // modal
    function DeleteConfModal() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>

                {parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))
                    ? <FontAwesomeIcon icon={faTrashAlt} onClick={handleShow} />
                    : ""}
                {parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))
                    ? <FontAwesomeIcon icon={faCog} onClick={() => props.history.push(`/createPost/${post.id}`)} />
                    : ""}

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
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
                            onClick={() => deletePost(post.id).then(props.history.push("/"))}>
                            Yes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    return (
        <>
            <section className="post">
                <div className="post__grid">
                    <div></div>
                    <h3 className="post__title">{post.title}</h3>
                    {post.user
                        ? <div className="post__date"><HumanDate date={(Date(post.publication_date))} /></div>
                        : ""}
                    <div className="post__image">
                        {post.image_url
                            ? <img src={`${post.image_url}`} />
                            : ""}
                    </div>
                    <div className="post__content">{post.content}</div>
                </div>
                <div className="post__details">
                    {post.user
                        ? <div className="post__author">Author: {post.user.first_name} {post.user.last_name}</div>
                        : ""}
                    {post.tags && post.tags.length > 0
                        ? <div className="post__tags">Tags:
                    {post.tags.map(t => {
                            return <span className="post__tags__tag">{t.label}
                                <FontAwesomeIcon icon={faTrashAlt} onClick={() => {
                                    deletePostTag(t.post_tag_id)
                                        .then(getPosts)
                                }} />
                            </span>
                        })} </div> : ""}

                    <DeleteConfModal />


                    {parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id")) ?

                        <FontAwesomeIcon icon={faTags} onClick={() => {
                            tagPost ? setTagPost(false) : setTagPost(post.id)
                        }} /> : ""}
                    <Link to={{ pathname: "/addComment", state: { chosenPost: props.location.state.chosenPost } }}>
                        <FontAwesomeIcon icon={faComment} />
                    </Link>
                    <Link to={{ pathname: "/post/comments", state: { chosenPost: post } }}>
                        <button>View Comments</button>
                    </Link>
                    {tagPost && <TagPost post={post} />

                    }
                </div>
            </section>
        </>
    )
}






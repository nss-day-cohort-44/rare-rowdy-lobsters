import React, { useContext, useEffect } from "react"
import { PostContext } from "../posts/PostProvider"
import { TagContext } from "./TagProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCog, faTags, faTag } from '@fortawesome/free-solid-svg-icons'

export const TagPost = ({ post }) => {

	const { tags, postTags, getTags, addPostTag, deletePostTag } = useContext(TagContext)
	const { getPosts } = useContext(PostContext)

	useEffect(() => {
		getTags();
	}, [])

	return (
		<>
			<div>
				{tags.map(t => {
					return <p>
						<span onClick={() => {
							addPostTag(t.id, post.id);
							getPosts();
						}}>{t.label}
						</span>
					</p>
				})}
			</div>
		</>
	)
}
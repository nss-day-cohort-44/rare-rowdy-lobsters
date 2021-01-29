import React, { useContext, useEffect } from "react"
import { PostContext } from "../posts/PostProvider"
import { TagContext } from "./TagProvider"

export const TagPost = ({post}) => {

	const {tags, getTags, addPostTag} = useContext(TagContext)
	const { getPosts } = useContext(PostContext)

	useEffect(() => {
		getTags();
	}, [])

	return (
		<>
			<div>
				{tags.map(t => {
					return <p><span onClick={() => {
						addPostTag(t.id, post.id);
						getPosts();
					}}>{t.label}</span></p>
				})}
			</div>
		</>
	)
}
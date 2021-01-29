import React, { useContext, useEffect } from "react"
import { TagContext } from "./TagProvider"

export const TagPost = ({post}) => {

	const {tags, getTags, addPostTag} = useContext(TagContext)

	useEffect(() => {
		getTags();
	}, [])

	return (
		<>
			<div>
				{tags.map(t => {
					return <p><span onClick={() => {
						addPostTag(t.id, post.id)
					}}>{t.label}</span></p>
				})}
			</div>
		</>
	)
}
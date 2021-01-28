import React, { useContext, useEffect } from "react"
import { TagContext } from "./TagProvider"

export const TagPost = ({post}) => {

	const {tags, getTags, getTagById} = useContext(TagContext)

	useEffect(() => {
		getTags();
	}, [])

	return (
		<>
			<div>
				{tags.map(t => {
					return <p><span onClick={() => {
						console.log(t.label, post.id)
					}}>{t.label}</span></p>
				})}
			</div>
		</>
	)
}
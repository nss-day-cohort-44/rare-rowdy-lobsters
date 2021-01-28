import React, { useContext, useEffect } from "react"
import { TagContext } from "./TagProvider"

export const TagList = props => {

	const {tags, getTags, getTagById} = useContext(TagContext)

	useEffect(() => {
		getTags();
	}, [])

	return (
		<>
			<div>
				{tags.map(t => <p>{t.label}</p>)}
			</div>
		</>
	)
}
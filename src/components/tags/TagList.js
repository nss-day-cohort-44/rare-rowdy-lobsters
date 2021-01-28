import React, { useContext, useEffect } from "react"
import { TagContext } from "./TagProvider"

export const TagList = props => {

	const {categories, getCategories, getTagById} = useContext(TagContext)

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
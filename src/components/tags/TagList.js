import React, { useContext, useEffect } from "react"
import { TagContext } from "./TagProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const TagList = props => {
	
	const {tags, getTags, getTagById, deleteTag} = useContext(TagContext)

	useEffect(() => {
		getTags();
	}, [])

	return (
		<>
			<div>
				{tags.map(t => <p>{t.label}
					<button onClick={() => {
					deleteTag(t.id)
				}}><FontAwesomeIcon icon={faTrashAlt} /></button>
				</p>)}
			</div>
		</>
	)
}
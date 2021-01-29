import React, { useRef, useContext, useEffect } from "react"
import { TagContext } from "./TagProvider"

export const TagForm = props => {

	const { tags, getTags, addTag } = useContext(TagContext)
	const label = useRef()

	useEffect(() => {
		getTags()
	}, [])

	const addNewTag = () => {
		if( !tags.find(t => t.label === label)) {
			addTag({
				label: label.current.value
			})
			.then(getTags)
		}
	}

	return (
		<>
			<form>
				<input type="text" ref={label} placeholder="Tag name"></input>
				<button type="submit" onClick={evt => {
					evt.preventDefault()
					addNewTag()
				}}>Add</button>
			</form>
		</>
	)
}
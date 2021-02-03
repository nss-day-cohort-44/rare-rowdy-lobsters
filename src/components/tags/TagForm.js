import React, { useRef, useContext, useEffect } from "react"
import { TagContext } from "./TagProvider"
import "./Tag.css"

export const TagForm = props => {

	const { tags, getTags, addTag, updateTag, getTagById } = useContext(TagContext)
	const label = useRef()

	useEffect(() => {
		getTags()
	}, [])

	const addNewTag = () => {
		if (!tags.find(t => t.label === label)) {
			addTag({
				label: label.current.value
			})
				.then(getTags)
		}
	}

	if (props.match.params.tagId) {
		const t = getTagById(props.match.params.tagId)
		if (t) {
			return (
				<>
					<form>
						<input type="text" ref={label} placeholder="New tag name" defaultValue={t.label}></input>
						<button type="submit" onClick={evt => {
							evt.preventDefault()
							updateTag({ 
								id: t.id,
								label: label.current.value
							})
							.then(getTags)
							.then(props.history.push("/tags"))
						}}>Save Edit</button>
					</form>
				</>
			)
		} else {
			return <></>
		}
	} else {
		return (
			<>
				<form className="tagForm"> 
					<input type="text" ref={label} placeholder="Tag name"></input>
					<button type="submit" onClick={evt => {
						evt.preventDefault()
						addNewTag()
					}}>Add</button>
				</form>
			</>
		)
	}
}
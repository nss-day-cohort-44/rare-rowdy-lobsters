import React, { useRef, useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"


export const CategoryForm = props => {

	const { categories, getCategories, addCategory } = useContext(CategoryContext)
	const label = useRef()

	useEffect(() => {
		getCategories()
	}, [])

	const addNewCategory = () => {
		if( !categories.find(c => c.label === label)) {
			addCategory({
				label: label.current.value
			})
			.then(getCategories)
		}
	}


	return (
		<>
			<form>
				<input type="text" ref={label} placeholder="Category name"></input>
				<button type="submit" onClick={evt => {
					evt.preventDefault()
					addNewCategory()
				}}>Add</button>
			</form>
		</>
	)
}
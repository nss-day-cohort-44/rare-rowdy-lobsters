import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"

export const CategoryList = props => {

	const {categories, getCategories, deleteCategory} = useContext(CategoryContext)

	useEffect(() => {
		getCategories();
	}, [])

	return (
		<>
			<div>
				{categories.map(c => <p>{c.label}<button onClick={() => {
					deleteCategory(c.id)
				}}>Delete Category</button></p>)}
			</div>
		</>
	)
}
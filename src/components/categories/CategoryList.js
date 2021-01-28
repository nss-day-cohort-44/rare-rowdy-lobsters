import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"

export const CategoryList = props => {

	const {categories, getCategories, getCategoryById} = useContext(CategoryContext)

	useEffect(() => {
		getCategories();
	}, [])

	return (
		<>
			<div>
				{categories.map(c => <p>{c.label}</p>)}
			</div>
		</>
	)
}
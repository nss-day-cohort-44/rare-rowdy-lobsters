import React, {useState} from "react";

export const CategoryContext = React.createContext();

export const CategoryProvider = props => {

	const [categories, setCategories] = useState([])

	const getCategories = () => {
		return fetch("http://localhost:8088/categories")
		.then(res => res.json())
		.then(setCategories);
	}

	const getCategoryById = id => categories.find(cat => cat.id === parseInt(id));

	const addCategory = category => {
		return fetch("http://localhost:8088/categories", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(category)
		})
		.then(getCategories)
	}

	const deleteCategory = id => {
		return fetch(`http://localhost:8088/categories/${id}`, {
			method: "DELETE"
		})
		.then(getCategories)
	}

	const updateCategory = (category) => {
		return fetch(`http://localhost:8088/categories/${category.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(category)
		})
		.then(getCategories)
	}

	return <CategoryContext.Provider value = {{
		categories, getCategories, getCategoryById, addCategory, deleteCategory, updateCategory
	}}>
		{props.children}
	</CategoryContext.Provider>
}
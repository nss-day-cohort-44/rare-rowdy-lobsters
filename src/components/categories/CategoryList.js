import React, { useContext, useEffect, useState } from "react"
import { CategoryContext } from "./CategoryProvider"
import {Button, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit} from '@fortawesome/free-solid-svg-icons'

export const CategoryList = props => {

	const {categories, getCategories, deleteCategory, updateCategory} = useContext(CategoryContext)

	useEffect(() => {
		getCategories();
	}, [])

	const [newCat, setNewCat] = useState({})

	const handleControlledInputChange = (event) => {
		const newCatObj = Object.assign({}, newCat)
		
		newCatObj[event.target.name] = event.target.value
		console.log(newCatObj);
		setNewCat(newCatObj)
	}

	function EditModal({category}) {
		const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
        <>
			<FontAwesomeIcon icon={faEdit} onClick={handleShow} />

            <Modal
                show={show}
				onHide={handleClose}
				keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>Edit Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Edit the category
				<input type="text" defaultValue={category.label} name="label" onChange={handleControlledInputChange}></input>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cancel
                </Button>
                <Button variant="primary"
                    onClick={()=>updateCategory(category.id).then(props.history.push("/categories"))}>
                    Save</Button>
            </Modal.Footer>
            </Modal>
        </>
        );
    }

	return (
		<>
			<div>
				{categories.map(c => <p>{c.label}<button onClick={() => {
					deleteCategory(c.id)
				}}>Delete Category</button>
				<EditModal category={c}/></p>)}
			</div>
		</>
	)
}